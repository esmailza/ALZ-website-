// STEP 1: to include the dependencies


<template id = "main-pie-chart">
  <!-- small up icon on the right hand side -->
  <div class="mx-3">
    <v-row class="align-center justify-center">
      <!-- <v-row class="align-center hidden-md-and-down" >-->
      <v-card class="hidden-lg-and-up mb-3" @click="drawer = !drawer">
        <v-card-title class="justify-end">
          <div class="pr-2 text-button">Filter Options</div>

          <v-icon>mdi-filter-variant </v-icon>
        </v-card-title>
      </v-card>
      <!-- Filters button -->

      <v-col cols="6" sm="4" lg="6">
     
             <v-card class="ma-10 rounded-xl">
   

        <v-card-subtitle
            class="text-center  text-sm-h3 primary mb-8 pa-8"
          style="color: white"
        >
      Alzheimer's drug development pipeline chart<br/>
          
        </v-card-subtitle>


        

        <v-card-text
          class="text center   grey--text text--darken-4 text-subtitle-1 text-md-h5 px-3 px-md-16 pb-16 "
          style="line-height: 180%; color: #757575"
        >
        
          <div>
           
       The inner ring shows phase 3 agents; the middle ring is comprised of phase 2 agents; the outer ring presents phase 1 compounds.
          The legend of the chart indicated different mechanisms of action for various agents. By clicking on each slice of the pie chart, 
          load the trial information below and explore the data. 
          </div>
        </v-card-text>

    </v-card>

      </v-col>

      <v-col cols="6" sm="6"  lg="6">
    
   

   <div class="pa-8">
    
     <zingchart v-if= "showChart" ref="chart" :data="chartData"  @click="PlotNodeFinder"  />


  </div>
         


        
      </v-col>
    </v-row>

    <!-- Table place -->



    <div
      class="
        text-justify-left
        mx-8
        mb-8
        grey--text
        text-subtitle-1 text-md-h6
        font-weight-regular
      "
    >
  
         
    </div>
   <!-- search bar      -->



<!-- table -->
      <div class="mx-10">
      <div class="card " v-if="showtable">
        <h5 class="card-header d-flex justify-content-center pa-8"> Filtered Data from {{selectedPhase}} and {{selctedMoa}}</h5>
      
        <table class="table">
            <thead class="thead-light">
              <th class="pa-4">#</th>
              <th class="pa-4"> Phase</th>
              <th class="pa-4">NCT # </th>
              <th class="pa-4">MOA Class</th>
              <th class="pa-4">Subject Characteristics</th>
                <th class="pa-2">Drug Name 
     <input type="text" placeholder="Search Drug Names" style=" border: 1px solid red;" v-model="filter" /> </th>
              <th class="pa-4">CADRO Target</th>
             
            </thead>
            <tbody>
              <tr v-for="(item, i) in filteredByPhaseandMoa" v-bind:key="i">
                <td>{{i+1}}</td>
                <td>{{item.phase}}</td>
                <td><a  target="_blank"
              :href="'//' + `clinicaltrials.gov/ct2/show/${item.nct_id}`">{{ item.nct_id }}</a></td>
                <td>{{item.moa_class}}</td>
                <td>
                  <ul>
                    <li v-for= "(item3,j) in item.subject_charac" v-bind:key="j">
                      {{item3.name}}
                    </li>
                  </ul>
                </td>
  
                <td >
                  <ul>
                     <li v-for= "(item2,j) in item.agent" v-bind:key="j" v-html="highlightMatches(item.agent[j].name)">
                      <!-- {{item2.name}} -->
                    </li>
                  </ul>
                </td>


                <td>
                   <ul>
                    <li v-for= "(item4,j) in item.cadro_moa_cat" v-bind:key="j">
                      {{item4.name}}
                    </li>
                  </ul>
                  
               </td>

              </tr>
            </tbody>
  


        </table>
      
      </div>
      </div>

  <div>{{this.chartData.plot.tooltip.selectedMoaClass}}</div>

  </div>
      
</template>


<script>

var post_url = "ADD URL HERE";
import zingchart from 'zingchart/es6';
import axios from 'axios';
// zingchart object for performance flags
zingchart.DEV.KEEPSOURCE = 0; // prevents lib from storing the original data package
zingchart.DEV.COPYDATA = 0; // prevents lib from creating a copy of the data package 
// ZC object for license key
zingchart.LICENSE = ['abcdefghijklmnopqrstuvwxy'];
var zingData = new Array();


export default {
  name: "ZingChartMoA",

 data() {
    return {
       filter: "",  
      form: {
      phase: ["1", "2", "3"],
      // status: ["A", "R", "N", "E"],
      // start_date: ["2014-02-15" , "2021-02-11"],
    },
    showChart: false,
    selectedPhase: '',
    selctedMoa: '',
    tableData:[],
    showtable: false,

      chartData: {    
"type": "nestedpie",
legend: {
    borderColor: 'gray',
    borderRadius: '5px',
    borderWidth: '1px',
    dragHandler: 'icon',
    header: {
      text: 'Mechanism of Action',
      fontColor: 'purple',
      fontFamily: 'Georgia',
      fontSize: '12px',
      fontWeight: 'normal',
    },
    icon: {
      lineColor: 'orange',
    },
    item: {
      fontColor: 'black',
      fontFamily: 'Georgia',
    },
    lineStyle: 'dashdot',
    marker: {
      type: 'circle',
    },
    minimize: true,
    toggleAction: 'remove',
  },
      scaleR: {
        aperture: 180
      },

plot: {
    tooltip: {
      text: '%data-year, %t: %v',
      padding: '10%',
      alpha: 0.7,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderRadius: '3px',
      borderWidth: '1px',
      fontColor: 'black',
      fontFamily: 'Georgia',
      fontSize: '12px',
      lineStyle: 'dashdot',
      textAlpha: 1,

   
    },

    valueBox: {
      text: '%data-year',
      fontColor: 'white',
      fontFamily: 'Georgia',
      fontSize: '12px',
      fontWeight: 'normal',
      rules: [
        {
          rule: '%p != 0',
          visible: false,
        },
      ],
    },
    alpha: 0.8,
    animation: {
      effect: 'ANIMATION_EXPAND_LEFT',
      onLegendToggle: false,
      method: 'ANIMATION_BACK_EASE_OUT',
      sequence: 'ANIMATION_BY_PLOT',
      speed: 700,
    },
    borderColor: 'white',
    borderWidth: '1px',
    dataYear: ['Phase 3', 'Phase 2', 'Phase 1'],
    shadow: false,
    sliceStart: '0%',
  },
  series: [
       {
      text: 'DMT Small Molecules',
      values: [0, 0, 0],
      backgroundColor: 'yellow blue',
    },
          {
      text: 'Symptomatic Cognition',
      values: [0, 0, 0],
      backgroundColor: 'orange red',
      tooltipText: 'Ages %t: %v',
    },
 
    {
      text: 'Stem Cell',
      values: [0, 0, 0],
      backgroundColor: 'yellow orange',
    },
 
    {
      text: 'DMT Biological',
      values: [0, 0, 0],
      backgroundColor: 'pink purple',
    },
       {
      text: 'Symptomatic Behavior',
      values: [0, 0, 0],
      backgroundColor: 'yellow green',
    },
 

  ],
    },
  
      
    }
  },

async created() {

      const {data} = await axios.post(post_url,this.form);     
      this.mapPhasesandMoa(data);
      zingData = data;
 
},

  computed: {
    
    filteredByPhaseandMoa: function () {
      return this.tableData.filter(row => {
      
      const searchTerm = this.filter.toLowerCase();
      let searchTargert = '';

      for (const key of Object.keys(row.agent)){
          searchTargert += row.agent[key].name.toString().toLowerCase() +' ';
      }
    
        return (     
          searchTargert.includes(searchTerm) 
        );
      }
      
      );
    },
    
  },



  methods: {



       highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    },

    
    PlotNodeFinder(result){
      
      var targetid = result.targetid;
      var graphid = result.graphid+"-plotset-";
      var s = targetid.replace(graphid, '');
      var nodeid = s.replace(/plot-[0-9]-/, '')
      var plotid = s.replace(/-node-[0-9]/, '')

      //setting selected phase
      if(nodeid == "node-0"){
        this.selectedPhase = "Phase 3"
      }
      else if(nodeid == "node-1"){
        this.selectedPhase = "Phase 2"
      }
       else if(nodeid == "node-2"){
        this.selectedPhase = "Phase 1"
      }

      //setting selected moa
      if(plotid == "plot-0"){
        this.selctedMoa = "DMT Small Molecules"
      }
      else if(plotid == "plot-1"){
        this.selctedMoa = "Symptomatic Cognition"
      }
      else if(plotid == "plot-2"){
        this.selctedMoa = "Stem Cell"
      }
      else if(plotid == "plot-3"){
        this.selctedMoa = "DMT Biological"
      }
      else if(plotid == "plot-4"){
        this.selctedMoa =  "Symptomatic Behavior"
      }
      console.log(this.selectedPhase);
      console.log(this.selctedMoa);
      this.updater(this.selectedPhase, this.selctedMoa);
 
    },

    // slice updaters

    updater: function (phase, moa) {

      this.showtable = true;
      // this.dataLoad = true;
      this.tableData = zingData.filter((item) => {     
        return(
          item.phase.match(phase) &&
          item.moa_class.match(moa)
        );
      });
      
      
 
    },

      
   mapPhasesandMoa(data) {          
            return new Promise(resolve => {
            data.map((row) => {
                var phase = row.phase;
                var moa = row.moa_class;
  
                if (moa.includes("DMT Small Molecules")) {
                  if (phase.includes("Phase 3")){
                    this.chartData.series[0].values[0]++;

                  }
                  else if (phase.includes("Phase 2")){
                    this.chartData.series[0].values[1]++;

                  }
                  else if (phase.includes("Phase 1")){
                    this.chartData.series[0].values[2]++;

                  }   
                }
                
                if (moa.includes("Symptomatic Cognition")) {
                  if (phase.includes("Phase 3")){
                    this.chartData.series[1].values[0]++;

                  }
                  else if (phase.includes("Phase 2")){
                    this.chartData.series[1].values[1]++;

                  }
                  else if (phase.includes("Phase 1")){
                    this.chartData.series[1].values[2]++;

                  }   
                }


                if (moa.includes("Stem Cell")) {
                  if (phase.includes("Phase 3")){
                    this.chartData.series[2].values[0]++;

                  }
                  else if (phase.includes("Phase 2")){
                    this.chartData.series[2].values[1]++;

                  }
                  else if (phase.includes("Phase 1")){
                    this.chartData.series[2].values[2]++;

                  }   
                }


                
                if (moa.includes("DMT Biological")) {
                  if (phase.includes("Phase 3")){
                    this.chartData.series[3].values[0]++;

                  }
                  else if (phase.includes("Phase 2")){
                    this.chartData.series[3].values[1]++;

                  }
                  else if (phase.includes("Phase 1")){
                    this.chartData.series[3].values[2]++;

                  }   
                }
                       
                if (moa.includes("Symptomatic Behavior")) {
                  if (phase.includes("Phase 3")){
                    this.chartData.series[4].values[0]++;

                  }
                  else if (phase.includes("Phase 2")){
                    this.chartData.series[4].values[1]++;

                  }
                  else if (phase.includes("Phase 1")){
                    this.chartData.series[4].values[2]++;

                  }   
                }
                 this.showChart = true;
    
   
            });
            resolve();
        })
    },




  },

  
};
</script>








