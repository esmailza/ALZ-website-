/**
 * This JavaScript file includes functions that are responsible to collect the data and do 
 * some clean up operations and mapping the key of some fields to the actual value. 
 * 
 * If you call fetchTrials, it will call all the needed functions and set all the
 * variables for you (e.g., headers, db, series, seriesGeo, ListOfDrugs )
 * 
 */




/*
there is no built-in way to remove duplicates in an array, so I built one :)
Ex: Array a = ['a', 'b', 'a']
a.unique() will return unique items in the array
*/
Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j]) a.splice(j--, 1);
        }
    }

    return a;
};

// var post_url = "http://alz.cs.unlv.edu/admin/api/trial/filter/";
export default {
    headers: Array, //column names for the table
    db: Object,   // An array of objects of the avaialable data
    series: [0, 0, 0], // represents # of Phases [Phase 1, Phase2, Phase 2]
    seriesGeo: [0, 0, 0, 0, 0, 0, 0], // represents # of geo locations, the order follows as 'Location'
    listOfDrugs: [],
    moaClasses: {
        'Symptomatic-Cognition': 'Symptomatic Cognitive Enhancers',
        'Symptomatic-Behavior': 'Symptomatic treatment for neuropsychiatric symptoms',
        'DMT Biological': 'DMT Biologics',
        'DMT Small Molecules': 'DMT small molecules',
    },
    moaCategory: {
        'a': 'anti-amyloid',
        'b': 'anti-tau',
        'c': 'neuroprotective',
        'd': 'metabolic',
        'e': 'neurotransmitter based',
        'f': 'anti-inflammatory',
        'g': 'regenerativ'
    },
    cadroMoaCategory: {
        'A': 'Amyloid',
        'B': 'Tau',
        'C': 'ApoE, Lipids and Lipoprotein Receptors',
        'D': 'Neurotransmitter Receptors',
        'E': 'Neurogenesis',
        'L': 'Growth Factors and Hormones',
        'F': 'Inflammation (including Infection/Immunity)',
        'J': 'Metabolism and Bioenergetics',
        'K': 'Vasculature',
        'M': 'Synaptic Plasticity/Neuroprotection',
        'H': 'Cell Death',
        'Q': 'Epigenetic Regulators'
    },
    location: {
        "1": "North America",
        "2": "South America/Mexico",
        "3": "Western Europe/Israel",
        "4": "Eastern Europe/Russia",
        "5": "Asia (not Japan)",
        "6": "Japan",
        "7": "South Africa/Australia/New Zealand",
    },
  
    /**
     * @function: fetchTrials - uses the mock back-end server (JSON server) to grab the data
     * @returns {JSON} - JSON format of phases & durg-names
     */
    async fetchTrials() {
        console.log('fetching')
        await this.clear()
        this.db = await (await fetch("https://my-json-server.typicode.com/Nima-Faraji/alzwb_json/2019_Pipeline_Status")).json();
        console.log('got data', this.db)
        await this.getTableInfo()
        await this.mapItems(this.db)
        await this.mapGeo(this.db)
        return this.mapPhases(this.db)
    },

    
    /**
     * @function: getTableInfo - this function will get the header name of the table and the drug names
     * @returns {Promise}
     */
    getTableInfo() {
        return new Promise((accept) => {
            //case where an item has does not have all the header fields
            this.db.forEach((element) => {
                this.headers = Object.keys(element).concat(this.headers).unique();
                for (var property in element) {
                    var newProperty = property.replace(/ +/g, "")
                    // console.log('newProperty', newProperty)
                    if (newProperty != property) {
                        element[newProperty] = element[property]
                        delete element[property]
                    }
                }
                
                // get the list of drugs
                this.listOfDrugs.push(
                    element["DrugName"].replace(/ *\([^)]*\) */g, "")
                ); // remove parentheses
            });

            var i = 0;
            this.headers.forEach((element) => {
                if (typeof element != "string") {
                    return element
                }
               
                //value should have no spaces
                let item = { text: element, value: element.replace(/ +/g, "") };
                if (i == this.headers.length)
                this.headers.push = item
                else
                this.headers[i++] = item;
            });
           
            accept("accept");
        });
    },
    /**
     * @function mapItems - maps the characters/key of MOA Class, MOA Category, CADRO MOA Category, and Geography to the appropriate value
     *                      Ex: 1 - > Symptomatic Cognitive Enhancers
     * @param {Object} myData
     */
    mapItems(myData) {
        return new Promise((accept) => {
            myData.forEach((item2, index) => {
                var arr = []

                // Phase1|Phase2 => Phase1,Phase2 works well for .includes()
                myData[index]['Phase'] = item2['Phase'].toString().replace(/([|])/g, ',')

                /* since the data is not complete, don't take the data that have unknown fields (e.g. 'undisclosed' or '?')*/
                if (!item2['MOAClass'].toString().includes('undisclosed') && !item2['MOAClass'].toString().includes('?')) {
                    var itemsToMapMoaClass = item2['MOAClass'].toString().replace(/[^1-4]/g, '').split("")
                }
                else {
                    itemsToMapMoaClass = []
                }
                if (!item2['MOACategory'].toString().includes('undisclosed') && !item2['MOACategory'].toString().includes('?')) {
                    var itemsToMapMoaCategory = item2['MOACategory'].toString().replace(/[^a-z]/g, '').split("")
                }
                else {
                    itemsToMapMoaCategory = []
                }
                if (!item2['CADROMOACategory'].toString().includes('NGB') && !item2['CADROMOACategory'].toString().includes('undisclosed') && !item2['CADROMOACategory'].toString().includes('?')) {
                    var itemsToMapCadro = item2['CADROMOACategory'].toString().replace(/[^A-Z]/g, '').split("")
                }
                else {
                    itemsToMapCadro = []
                }
                if (!item2['Geography'].toString().includes('undisclosed') && !item2['Geography'].toString().includes('?')) {
                    var itemsToMapGeo = item2['Geography'].toString().replace(/[^1-7]/g, '').split("")
                }
                else {
                    itemsToMapGeo = []
                }

                // mapping MOA Classes
                if (itemsToMapMoaClass.length) {
                    itemsToMapMoaClass.forEach(item => {
                        arr.push(this.moaClasses[item])
                    })
                    myData[index]['MOAClass'] = arr.toString()
                    arr = []
                }
                else {
                    myData[index]['MOAClass'] = "N/A"
                }

                // mapping MOA Category
                if (itemsToMapMoaCategory.length) {
                    itemsToMapMoaCategory.forEach(item => {
                        arr.push(this.moaCategory[item])
                    })
                    myData[index]['MOACategory'] = arr.toString()
                    arr = []
                }
                else {
                    myData[index]['MOACategory'] = "N/A"
                }

                // mapping CADRO MOA Category
                if (itemsToMapCadro.length) {
                    itemsToMapCadro.forEach(item => {
                        arr.push(this.cadroMoaCategory[item])
                    })
                    myData[index]['CADROMOACategory'] = arr.toString()
                    arr = []
                }
                else {
                    myData[index]['CADROMOACategory'] = "N/A"
                }

                // mapping 'Geography'
                if (itemsToMapGeo.length) {
                    itemsToMapGeo.forEach(item => {
                        arr.push(this.location[item])
                    })
                    myData[index]['Geography'] = arr.toString()
                    arr = []
                }
                else {
                    myData[index]['Geography'] = "N/A"
                }

            })
            accept("accept");
        })
    },

    /**
    * @function: mapPhases - gets the count of each phases
    * @returns {Promise}
    */
    mapPhases(data) {
        
        return new Promise(resolve => {
            data.map((row) => {
                var phase = row.Phase;
                if (phase.includes("Phase 3")) {
                    this.series[2]++;
                }
                if (phase.includes("Phase 2")) {
                    this.series[1]++;
                }
                if (phase.includes("Phase 1")) {
                    this.series[0]++;
                }
            });
            resolve();
        })
    },
    mapPhases2(data) {
        
        return new Promise(resolve => {
            data.map((row) => {
                var phase = row.phase;
                if (phase.includes("Phase 3")) {
                    this.series[2]++;
                }
                if (phase.includes("Phase 2")) {
                    this.series[1]++;
                }
                if (phase.includes("Phase 1")) {
                    this.series[0]++;
                }
            });
            resolve();
        })
    },
    /**
    * @function: mapGeo - gets the count of each geo location
    * @returns {Promise}
    */
    mapGeo(data) {
        return new Promise(resolve => {
            data.map((row) => {
                var geo = row.Geography;
                if (geo.includes("North America")) {
                    this.seriesGeo[0]++;
                }
                if (geo.includes("South America/Mexico")) {
                    this.seriesGeo[1]++;
                }
                if (geo.includes("Western Europe/Israel")) {
                    this.seriesGeo[2]++;
                }
                if (geo.includes("Eastern Europe/Russia")) {
                    this.seriesGeo[3]++;
                }
                if (geo.includes("Asia (not Japan)")) {
                    this.seriesGeo[4]++;
                }
                if (geo.includes("Japan") && !geo.includes("Asia (not Japan)")) {
                    this.seriesGeo[5]++;
                }
                if (geo.includes("South Africa/Australia/New Zealand")) {
                    this.seriesGeo[6]++;
                }
            });
            resolve();
        })
    },
    // url_returner(){

    //     return post_url;
    // },
    /**
    * @function: clear - simply reset the variables so we ensure data is always updated
    * 
    */
    clear() {
        return new Promise(resolve => {
        this.headers = []
        this.db = []
        this.series = [0, 0, 0] // represents # of Phases [Phase 1, Phase2, Phase 2]
        this.seriesGeo = [0, 0, 0, 0, 0, 0, 0] // represents # of geo locations
        this.listOfDrugs = []
        resolve()
        })
    },
}
