<template>
<div class="pa-3 shadow p-3 mb-5 bg-white rounded">

    
<!-- <div class="row">
    
 <div class="text text-lg-h5 grey lighten-2 text-lg-center  pa-8 mb-8 rounded-lg  grey--text text--darken-3" height = "100px">
   <div class="font-weight-bold text-lg-h3"> 
     <v-icon size="40" class="ma-2 "
              >mdi-filter-outline</v-icon>      
         Apply Filters  <v-icon size="40" class="ma-2 "
              >mdi-filter-outline</v-icon>
           </div>
       
        </div>       
</div> -->


 <v-container>

     <v-row>
<!-- cardo category -->
   <v-col md="6" xs="12" lg="6" xl="6"  sm="12">
       <v-sheet outlined color="lightRed"  class="pa-2 rounded-lg">

    <v-card-title class="font-weight-bold">
      Cadro Target Categories
           <cadro-info @click-link="clickLink" />    
        </v-card-title>
    
          <v-select 
          
          v-model="selectedCadroMoaClasses"
          :items="CadroMoaClasses"
          attach
          class="px-5  my-select  font-weight-bold text-lg-h8 "
          chips
          offset-y     
          multiple
         
          ><template v-slot:selection="{ item, index }" v-if="height == 'xs'">
            <v-chip v-if="index === 0" >
              <span>{{ item }}</span>
            </v-chip>

            <span v-if="index === 1" class="grey--text text-caption">
              (+{{ selectedMoaClasses.length - 1 }} others)
            </span>
          </template></v-select
        >
       </v-sheet>



              <v-sheet outlined color="lightRed"  class="pa-2 rounded-lg mb-6 mt-6">
  
         
        <v-card-title class="font-weight-bold">
          Phases
    
          <phases-info @click-link="clickLink" />    
        </v-card-title>

        <v-select
          class="px-5 font-weight-bold text-lg-h8"
          v-model="selectedPhases"
          :items="phases"
          attach
          chips
          offset-y    
          multiple
        >
          <template v-slot:selection="{ item, index }" v-if="height == 'xs'">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>

            <!-- small selected items number -->
            <span v-if="index === 1" class="grey--text font-weight-bold text-lg-h8">
              (+{{ selectedPhases.length - 1 }} others)
            </span>
          </template>
        </v-select>
 
         </v-sheet>


          <v-sheet outlined color="lightRed"  class="pa-2 rounded-lg">
  
         
        <v-card-title class="font-weight-bold">
          Mechanisim of Action Classes
     
          <moa-info @click-link="clickLink" /> 
        </v-card-title>
     
            <v-select
            class="font-weight-bold text-lg-h8"
            v-model="selectedMoaClasses"
            :items="moaClasses"
            attach          
            chips           
            offset-y    
            multiple
           
            ><template v-slot:selection="{ item, index }" v-if="height == 'lg'">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>

              <span v-if="index === 1" class="grey--text font-weight-bold text-lg-h8">
                (+{{ selectedMoaClasses.length - 1 }} others)
              </span>
            </template></v-select
          >
 
       </v-sheet>

        <v-sheet outlined color="lightRed"  class="pa-2 rounded-lg my-8">

    <v-card-title class="font-weight-bold">
      Subject Characteristics
             <sub-char-info @click-link="clickLink" /> 
        </v-card-title>
       <!-- <div align="left" class=" font-weight-bold text-lg-h5 pl-2 ">Cadro Target Categories:</div> -->
               <v-select 
          
          v-model="selectedSubchar"
          :items="Subchar"
          attach
          class="px-5  my-select font-weight-bold text-lg-h8 "
          chips
          offset-y     
          multiple
         
          ><template v-slot:selection="{ item, index }" v-if="height == 'xs'">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>

            <span v-if="index === 1" class="grey--text font-weight-bold text-lg-h8">
              (+{{ selectedMoaClasses.length - 1 }} others)
            </span>
          </template></v-select
        >
       </v-sheet>
   </v-col>





<!-- 
Phases  and MOA filter ----------------------------------------------------->
   <v-col  md="6" lg = "6" xl = "6" xs = "12" sm = "12">



<!-- Subject chachtristic filter -->
 
 <v-sheet outlined color="lightRed"  class="pt-4 pb-5 pl-4 pr-4 rounded-lg mb-6">


       <v-card-title class="font-weight-bold pb-4">
          Date
           <dates-info @click-link="clickLink" /> 
       </v-card-title>

   <v-layout row wrap>

     <v-flex sm12 md6>
      <v-dialog
            ref="dialog_start"
            v-model="modal_start"
            :return-value.sync="start_date"
            persistent
            width="290px"
          >
           <template v-slot:activator="{ on, attrs }">


          <v-combobox
          class="font-weight-bold text-lg-h8"
            v-model="start_date"  
            small-chips
            label="Select Start Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-combobox>
         
          
            </template>
            
            <v-date-picker
              light
              v-model="start_date"
              title = "From"
              scrollable
              event-color="red"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal_start = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog_start.save(start_date)"
              >
                OK
              </v-btn>
            </v-date-picker>
      </v-dialog>
      </v-flex>


  <v-flex sm12 md6>
      <v-dialog
            ref="dialog_end"
            v-model="modal_end"
            :return-value.sync="end_date"
            persistent
            width="290px"
          >
           <template v-slot:activator="{ on, attrs }">

             
          <v-combobox
          class="font-weight-bold text-lg-h8"
            v-model="end_date"  
            small-chips
            label="Select End Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-combobox>
 
          
            </template>
            
            <v-date-picker
              light

              v-model="end_date"
              title = "To"
              scrollable
              event-color="red"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal_end = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog_end.save(end_date)"
              >
                OK
              </v-btn>
            </v-date-picker>
      </v-dialog>
      </v-flex>


   </v-layout>
   
   
 </v-sheet>

    <!-- ---------------------------------------------------END OF SELECT DATE---------------------- -->
       <v-sheet outlined color="lightRed"  class="pa-2 rounded-lg">

    <v-card-title class="font-weight-bold">
      Geography
         <geo-info @click-link="clickLink" /> 
          
        </v-card-title>
       <!-- <div align="left" class=" font-weight-bold text-lg-h5 pl-2 ">Cadro Target Categories:</div> -->
               <v-select 
      
          v-model="selectedGeo"
          :items="Geo"
          attach
          class="px-5  font-weight-bold text-lg-h8 "
          chips
          offset-y     
          multiple
         
          ><template v-slot:selection="{ item, index }" v-if="height == 'xs'">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>

            <span v-if="index === 1" class="grey--text text-caption">
              (+{{ selectedMoaClasses.length - 1 }} others)
            </span>
          </template></v-select
        >
       </v-sheet>



       <!-- ----------------------------------status------------------------- -->
    <v-sheet outlined color="lightRed"  class="pa-2 rounded-lg my-6">

    <v-card-title class="font-weight-bold">
      Status
         <status-info @click-link="clickLink" /> 
          
        </v-card-title>
       <!-- <div align="left" class=" font-weight-bold text-lg-h5 pl-2 ">Cadro Target Categories:</div> -->
               <v-select 
          
          v-model="selectedStatus"
          :items="status"
          attach
          class="px-5 font-weight-bold text-lg-h8 "
          chips
          offset-y     
          multiple
         
          ><template v-slot:selection="{ item, index }" v-if="height == 'xs'">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>

            <span v-if="index === 1" class="grey--text font-weight-bold text-lg-h8">
              (+{{ selectedMoaClasses.length - 1 }} others)
            </span>
          </template></v-select
        >
       </v-sheet>



<!-- Repurposed  and Apply filter buttons-->
    <v-row>
      <v-col md="4" lg = "4" xl = "4" xs = "12" sm = "12" >
            <div  class="col-sm-1">
             <v-checkbox
              label="Repurpose"
              @click="clickLink"
              color="red"
              value="red"
              hide-details
              class="my-checkbox mb-16"
            ></v-checkbox>
    </div>
      </v-col>

    <v-col md="8" lg = "8" xl = "8" xs = "12" sm = "12" class="d-flex flex-row-reverse align-end pl-2 " >
  <v-btn 
        class="   text-white primary "
     
        light
        min-width="168"
        target="_blank"
        x-large
        
          @click="requestData()" >
          Apply Filter
        </v-btn>
    </v-col>

    </v-row>


   </v-col>


<v-divider></v-divider>


  
     </v-row>
 
 </v-container>




<!-- <div class="row my-8 pt-8">
  <v-divider></v-divider>
</div> -->



<div class="container">
<v-row class="justify-center mb-8" >
<!-- <v-row class="justify-center mb-8"> -->
        <v-col md="6" lg = "6" xl = "6" xs = "12" sm = "12" class="pt-10 mt-6 mr-8 pl-2 justify-center">
          <v-card
            v-if="loadChart"
            :key="`${height}-${chartOptions.labels}`"
            flat
            class=" pa-4 mt-3"
           
            
          >
            <!-- Vue Apex Charts Docs: https://apexcharts.com/docs/vue-charts/ -->
            <VueApexCharts
             
              :height="`${height == 'xs' || height == 'md' ? 300 : 400}`"
              :options="chartOptions"
              :series="seriesPhase"
              @dataPointSelection="getSliceInfo"
            ></VueApexCharts>
          </v-card>
        </v-col>



  <v-col v-if="!mobile" md="5" lg = "5" xl = "5" xs = "12" sm = "12">
              <v-card
            v-if="loadChart"
            :key="`${height}-${chartOptions.labels}`"
            flat
            class="pa-0 pa-4"
            
          >
    
  <geo-map />
              </v-card>
  
  </v-col>
  </v-row>





  </div>

          
      <v-row class="justify-center">
        <v-col class="py-0">
          <v-container class="pa-0" id="location">
            <v-card flat height="450" v-if="loading">
              <v-progress-circular
                v-if="loading"
                style="top: 20vh"
                class="mt-10"
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-card>
          </v-container>
        </v-col>


        <v-col cols="12" v-if="loadTable">
          <v-card
            :key="`${tableData}-table`"
            flat
            class="pa-0 pa-md-5"
            v-if="loadTable"
          >
<!-- ------------------------------------>
        <!-- <v-row>
              <v-col>
        <v-switch
      v-model="phase_Column"
      :label="`phase`"
    ></v-switch>
    </v-col>
    </v-row> -->



  <!-- <v-row> 
  <v-col cols="12">
      <v-sheet outlined color="lightRed"  class="pa-2 rounded-lg mb-6">
    <div class="grey--text text--darken-4 text-lg-h5 text-md-h5 font-weight-bold "> Search a drug name in the below table</div>
     

 
       
     <input type="text" placeholder="Filter by Drug Name" style="  border: 1px solid red;
     padding: 20px;
    font-size: 20px;" v-model="filter" />
  </v-sheet>
  </v-col>
     </v-row> -->





        <div v-if="showtable">
       
          <v-card-title class="grey--text text--darken-4 justify-center font-weight-bold text-lg-h4">
            Trials bases on {{ phaseName }}
          </v-card-title>




        

        <div class="card " v-if="showtable">
        <!-- <h5 class="card-header d-flex justify-content-center pa-8"> Filtered Data from {{selectedPhase}} and {{selectedMoaClass}}</h5> -->

        <table class="table">
            <thead class="thead-light">
              <th class="pa-4"># </th>
              <th :v-if="phase_Column" class="pa-4"> Phase</th>
              <th class="pa-4">NCT # </th>
              <th class="pa-4">MOA Class</th>
              <th class="pa-4">Status</th>
              <th class="pa-4">geography</th>
              <th class="pa-2">Drug Name 
     <input type="text" placeholder="Search Drug Names" style=" border: 1px solid red;" v-model="filter" /> </th>
              <th class="pa-4">CADRO Target</th>
            </thead>
            <tbody>
              <tr v-for="(item, i) in filterDrugs" v-bind:key="i">
                <td>{{i+1}}</td>
                <td>{{item.phase}}</td>
                <td><a  target="_blank"
              :href="'//' + `clinicaltrials.gov/ct2/show/${item.nct_id}`">{{ item.nct_id }}</a></td>
                <td>{{item.moa_class}}</td>
                <td>{{item.status}}</td>
              
                <td>
                  <ul>
                    <li v-for= "(item3,j) in item.geography" v-bind:key="j">
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
          </v-card>
        </v-col>
      </v-row>


<v-card flat>
</v-card>
</div>



</template>






<script>

import CadroInfo from '../../../../components/filters/CadroInfo.vue'
import PhasesInfo from '../../../../components/filters/PhasesInfo.vue'
import MoaInfo from '../../../../components/filters/MoAInfo.vue'
import SubCharInfo from '../../../../components/filters/SubCharInfo.vue'
import StatusInfo from '../../../../components/filters/StatusInfo.vue'
import GeoInfo from '../../../../components/filters/GeoInfo.vue'
import DatesInfo from '../../../../components/filters/DatesInfo.vue'

import VueApexCharts from "vue-apexcharts";

import axios from 'axios';
import GeoMap from './GeoMap/GeoMap.vue';




export default{
  components: {VueApexCharts,GeoMap, CadroInfo, PhasesInfo, MoaInfo, SubCharInfo, StatusInfo, GeoInfo, DatesInfo },

  data: () => ({

    
  filter: "",    
  form: {
    phase: [],
   status: [],
  //Location: [],
    moa_class: [],
   // moa_subcat: [],
    geography: [],
    subject_charac: [],
    repurposed: [false , true ],
    start_date: [],  
  
    cadro_moa_cat : [],
    
    },
    phase_Column: false,
    start_date: "",
    end_date: "",
    modal_start: false,
    modal_end: false,
  showtable: false,
  checkbox: false,
  height: "700",
  CadroMoaClasses: [
  "Stem Cell",
	"Other",
	"Unknown Target",
	"Multi-target",
	"Epigenetic Regulators",
	"Environmental Factors",
	"Circadian Rhythm",
	"Gut-brain Axis",
	"Synaptic Plasticity/neuroprotection",
	"Growth Factors And Hormones",
	"Vasculature",
	"Metabolism And Bioenergetics",
	"Proteostasis/proteinopathies",
	"Cell Death",
	"Oxidative Stress",
	"Inflammation (immunity)",
	"Neurogenesis",
	"Neurotransmitter Receptors",
	"Apoe, Lipids And Lipoprotein Receptors",
	"Tau",
	"Amyloid",
    ],
    selectedCadroMoaClasses: [],

    seriesPhase: [0, 0, 0, 0, 0],
    status: ["Active, not recruiting", "Completed", "Enrolling by invitation", "Not yet recruiting", "Recruiting", "Suspended", "Terminated", "Unknown status", "Withdrawn"],
    selectedStatus: [],
    phases: ["Phase 1", "Phase 2", "Phase 3","Phase 1 | Phase 2", "Phase 2 | Phase 3"],
    selectedPhases: [],
    moaClasses: ["No Filter","Symptomatic Cognition","DMT Biological","Symptomatic Behavior", "DMT Small Molecules"],
    selectedMoaClasses: [],
    selectedDates: [],
    selectedGeo :[],
     Geo:["South Africa/Australia/ New Zealand)", "Japan", "Asia (not Japan)", "Eastern Europe/Russia", "Western Europe/Israel",
	"South America/Mexico",
    "North America"],
    Subchar: [
    "MCI to Moderate Dementia",
	"Autosomal dominant AD mutation carriers",
	"Alzheimer Dementia (All Stages)",
	"preclinical-MCI due to AD",
	"MCI-mild AD dementia-moderate AD dementia-severe AD dementia",
	"MCI due to AD-mild Ad dementia",
	"mild—moderate-severe AD dementia",
	"severe AD dementia",
	"moderate-severe AD dementia",
	"mild AD dementia",
	"MCI",
	"Healthy Volunteers",
	"Severe AD",
	"Mild-Moderate AD Dementia",
	"Prodromal/ Prodromal-Mild",
	"Preclinical AD" 
    ],
    selectedSubchar :[], 







   
    
    tableData: Array,
    db:[],
    drawer: false,
    loading: false,
    loadTable: false,
    // header: ["nct_id", "phase", "title","cadro_moa_cat"],
    loadChart: false,
    
    dataLabel: [
     "Phase 1", "Phase 2", "Phase 3","Phase 1 | Phase 2", "Phase 2 | Phase 3"
    ],
    phaseName: String,

    chartOptions: {
      colors: [
        "#DB504A",
        "#775DD0",
        "#FEB019",
        "#FF4560",
        "#008ffb",
        "#44FFD2",
        "#88D18A",
      ],

      legend: { position: "top" },
      chart: {
        height: "auto",
        width: "100%",
        type: "pie",
      },
      labels: [
     "Phase 1", "Phase 2", "Phase 3","Phase 1 | Phase 2", "Phase 2 | Phase 3"
      ],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
          },
        },
      ],
    },


  }),

async created() {

  // this.formUpdater();
  const {data} = await axios.post("ADD URL HERE", this.form); 
  this.db = data;
  // console.log(this.db);
  this.mapPhases(data);
  // console.log(this.seriesPhase);
  this.loadChart = true;


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

   async  getSliceInfo(event, chartContext, config) {
     this.tableData=[],
     this.requestData(),
      
      document.getElementById("location").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
      if (this.chartOptions.labels[config.selectedDataPoints[0]]) {
        this.phaseName =
          this.chartOptions.labels[config.selectedDataPoints[0]];
        this.loading = true;
        this.loadTable = false;
  
        var phaseSlice= this.chartOptions.labels[config.selectedDataPoints[0]];
    
       this.tableData = this.db.filter((item) => {     
         if(phaseSlice == "Phase 1")    
        return(
          item.phase.match(phaseSlice) && !item.phase.match("Phase 1 | Phase 2")
        );
         else if(phaseSlice == "Phase 2")    
        return(
          item.phase.match(phaseSlice) && !item.phase.match("Phase 2 | Phase 3") && !item.phase.match("Phase 1 | Phase 2")
        );
          else if(phaseSlice == "Phase 3")    
        return(
          item.phase.match(phaseSlice) && !item.phase.match("Phase 2 | Phase 3")
        );
        else 
        return item.phase.match(phaseSlice)

        });
 
 
        setTimeout(() => {
          this.showtable = true;
          this.loadTable = true;
          this.loading = false;
        }, 1000);
      }
    },




    clickLink() {
      this.checkbox = !this.checkbox;
      console.log(this.checkbox)
    },

  
   mapPhases(data) {          
            return new Promise(resolve => {
            data.map((row) => {
                var phase = row.phase;
  
                if (phase.includes("Phase 1 | Phase 2")) {
                    this.seriesPhase[3]++;
                }
               else if (phase.includes("Phase 2 | Phase 3")) {
                    this.seriesPhase[4]++;
                }
               else if (phase.includes("Phase 1")) {
                    this.seriesPhase[0]++;
                }
              else if (phase.includes("Phase 2")) {
                    this.seriesPhase[1]++;
                }
              else if (phase.includes("Phase 3")) {
                    this.seriesPhase[2]++;
                }
            });
            resolve();
        })
    },

  formUpdater(){

    this.tableData =[],
    this.form.start_date =[],
    this.form.phase = [],
    this.form.moa_class =[],
    this.form.geography = [],
    this.form.subject_charac = [],
    this.form.cadro_moa_cat = [],
    this.form.status =[],
    // this.form.repurposed = [],
    this.seriesPhase= [0,0,0,0,0];
  
if(this.start_date.length > 0){
this.form.start_date.push(this.start_date);
this.form.start_date.push(this.end_date);
}
// console.log(this.form.start_date);

// if(this.checkbox)
//   Array.prototype.push.apply(this.form.repurposed, true);
//   else if(!this.checkbox)
//   Array.prototype.push.apply(this.form.repurposed, false);


for( var i = 0; i < this.selectedPhases.length; ++i){
if(this.selectedPhases[i] == "Phase 1 | Phase 2")
this.form.phase.push("12");

else if(this.selectedPhases[i] == "Phase 2 | Phase 3")
this.form.phase.push("23");

else if(this.selectedPhases[i] == "Phase 1")
this.form.phase.push("1");

else if(this.selectedPhases[i] == "Phase 2")
this.form.phase.push("2");

else if(this.selectedPhases[i] == "Phase 3")
this.form.phase.push("3");

}



//  This is for updating status
for(  i = 0; i < this.selectedStatus.length; ++i){

if(this.selectedStatus[i] == "Active, not recruiting")
this.form.status.push("A");

else if(this.selectedStatus[i] == "Completed")
this.form.status.push("C");

else if(this.selectedStatus[i] == "Enrolling by invitation")
this.form.status.push("E");

else if(this.selectedStatus[i] == "Not yet recruiting")
this.form.status.push("N");

else if(this.selectedStatus[i] == "Recruiting")
this.form.status.push("R");

else if(this.selectedStatus[i] == "Suspended")
this.form.status.push("S");

else if(this.selectedStatus[i] == "Terminated")
this.form.status.push("T");

else if(this.selectedStatus[i] == "Unknown status")
this.form.status.push("U");

else if(this.selectedStatus[i] == "Withdrawn")
this.form.status.push("W");

}


  Array.prototype.push.apply(this.form.cadro_moa_cat, this.selectedCadroMoaClasses);
 
  Array.prototype.push.apply(this.form.subject_charac, this.selectedSubchar);

for( i = 0; i < this.selectedMoaClasses.length; ++i){
if(this.selectedMoaClasses[i] == "Symptomatic Cognition")
this.form.moa_class.push("1");

else if(this.selectedMoaClasses[i] == "Symptomatic Behavior")
this.form.moa_class.push("2");

else if(this.selectedMoaClasses[i] == "DMT Small Molecules")
this.form.moa_class.push("3");

else if(this.selectedMoaClasses[i] == "DMT Biological")
this.form.moa_class.push("4");

else if(this.selectedMoaClasses[i] == "No Filter")
this.form.moa_class.push("0");


}


  if(this.selectedGeo.includes("All"))
  this.form.geography.push("0");
  else
   Array.prototype.push.apply(this.form.geography, this.selectedGeo);



  

  },

 async requestData(){
   this.showtable= false;
   
  this.loadChart = false;
  this.formUpdater();
  const {data} = await axios.post("ADD URL HERE", this.form); 
    this.db = data;
  // console.log(this.db);

  // console.log(data);
   this.mapPhases(data);
  // console.log(this.seriesPhase);
this.loadChart = true;

  },

 




  },

computed :{
   mobile() {
    return this.$vuetify.breakpoint.xs | this.$vuetify.breakpoint.sm
  },

    startDateRangeText() { 
    return this.start_date},
      endDateRangeText() { 
    return this.end_date},

    filteredByPhaseandMoa: function () {
      return this.data
    },

    filterDrugs() {
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
    }
    


       
},





}







</script>
<style scoped>
.text{

    text-transform: none;
}
::v-deep .my-checkbox .v-label {
 font-size: 21px;
}
::v-deep .my-select .v-label {
 font-size: 28px;
}
.notupper{ text-transform: none;}
</style>
