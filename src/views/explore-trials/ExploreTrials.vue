<template>
 
    <div id="start">

  <section id="hero">
    <v-img
      :min-height="minHeight"
      class="black--text"
      gradient="45deg, rgb(0 0 0 / 19%), rgb(176 31 36 / 23%)"
    >

      <div class=" mx-8 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
        
          width="100%"
        >
      <v-row>
        <v-col md="8" lg = "8" xl = "8" xs = "12" sm = "12">
         <div
                    class="rounded-lg pa-2 pa-md-4"
                    style="background-color: #0000006f"
          >

          <base-heading
            size="text-h2"
            title="Learn More About the Dataset"
            weight="medium"
            class="pa-8"
           
          />

          <base-body  class=" text-lg-h5 white--text pa-8"  >
             The Alzheimer’s Disease and Related Disorders Clinical Trial
                    Observatory of the Chambers-Grundy Center for Transformative
                    Neuroscience at UNLV studies the characteristics of clinical
                    trials and the progress of treatments through the drug
                    development pipeline as represented on <a href="https://clinicaltrials.gov/">clinicaltrials.gov</a>.
                    Analyses are enhanced by Artificial Intelligence and Machine
                    Learning applications to the data.<br /><br /> 
               
                      The data of the Clinical Trial Observatory provide insight
                      regarding clinical trial design and outcomes. The role of
                      biomarkers, drug treatment targets, populations in trials
                      and other data pertinent to clinical trials are
                      downloaded, archived, interrogated, and published.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
          <v-card-actions class="pa-8">
                      <v-btn x-large  rounded  href= "https://en.wikipedia.org/wiki/ClinicalTrials.gov" class="primary pa-8"> Learn More </v-btn>
            </v-card-actions>

          </div>
         </div>
        </v-col>



        <v-col   md="4" lg = "4" xl = "4" xs = "12" sm = "12">
          <div
                class="px-3 py-12 pl-lg-8 pl-md-8 pt-xl-9 ml-8"
                style="padding-right: 59px;"
                
              >
                <div style="max-width: 57vh; float: right" class="pr-16 pl-16">
                  <v-img
                    position="right"
                    contain
                    max-width="245"
                  
                    
                    :src="require('@/assets/globe.png')"
                  />
                </div>
          </div>

        </v-col>

      </v-row>

        </v-responsive>
      </div>
    </v-img>
  </section>






<!-- Starting the body of the page ------>
      <v-card light color="rgb(0, 0, 0, 0)" flat class="mt-10">
        <v-card-title class="justify-center text-center"
          >Explore Alzheimer’s Disease Data </v-card-title
        >
        <base-section-heading> </base-section-heading>
      </v-card>






      <v-card
        light
        class="ma-2 mt-6 ma-md-13 text-center"
        flat
      
     
      >
        <v-card class=" mb-2" elevation="5" style="border-radius: 10px; "> 
          <v-tabs show-arrows v-model="tab"  grow    style="height:100px">
            <v-tab
              v-for="item in tabsList"
              :key="item"
              class=" text-lg-h5 textTrans "
             style="border-radius: 50px; "  
             
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </v-card>




        
        <v-tabs-items  v-model="tab" >
          <v-tab-item v-for="item in tabsList" :key="item">
            <v-card flat style="border-radius: 0px">
                           <template v-if="item == 'Drug Development'">
                    <zing-chart-mo-a />
              </template> 
                <template v-if="item == 'Clinical Research'">
              <clinical-research />
              </template>
            
            <!-- <template v-if="item == 'Search'"> 
              <zing-grid-aggregator />
  
              
              </template> -->

            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>

</template>

<script>
// import transactions from "../../data/transactions.js"
import clinicalResearch from "../sections/DataAnalysis/ClinicalResearch/ClinicalResearch.vue"
import ZingChartMoA from "../sections/DataAnalysis/DrugDevelopment/DrugDevelopment.vue"
// import ZingGridSearch from "../sections/DataAnalysis/ZingGrid/ZingGridSearch.vue"
// import DetailsGrid from "../sections/DataAnalysis/ZingGrid/DetailsGrid.vue"
// import LatestTransactionsChart from "../sections/DataAnalysis/ZingGrid/LatestTransactionsChart.vue"
// import ZingGridAggregator from "../sections/DataAnalysis/ZingGrid/ZingGridAggregator.vue"


export default {
  components: {
    // DetailsGrid,
    // ZingGridSearch,
    // ZingGridAggregator,
    clinicalResearch,
    ZingChartMoA,
    // LatestTransactionsChart
  },
  name: "ExploreDrugs",
  provide: {
    theme: { isDark: true },
  },
  data (){
  return{
   
    tab: null,
    tabsList: ["Clinical Research","Drug Development"],
    filters: [
      {
        value: ["Phase 1", "Phase 2", "Phase 3"],
        name: "Phase",
        selected: ["Phase 1"],
      },
      {
        value: [
          "anti-amyloid",
          "anti-tau",
          "neuroprotective ",
          "metabolic",
          "neurotransmitter based",
          "anti-inflammatory",
          "regenerative",
        ],
        name: "MOA Classes",
        selected: ["anti-amyloid"],
      },
      {
        value: ["US Only", "Non-US Only"],
        name: "Location",
        selected: ["US Only"],
      },
      {
        value: [
          "Amyloid",
          "Tau",
          "ApoE, Lipids and Lipoprotein Receptors",
          "Neurotransmitter Receptors",
          "Neurogenesis/Growth Factors/Hormones",
          "Inflammation (including Infection/Immunity)",
          "Metabolism/Bioenergetics/Vasculature",
          "Synaptic Plasticity/Neuroprotection/Cell Death",
          "Epigenetic Regulators",
        ],
        name: "CARDRO MOA Category",
        selected: ["Amyloid"],
      },
      {
 
      },
    ],
    db: Object,
    headers: Array,
    showTable: false,
    keepLoad: true,
    selectedDates: ["2019-05-23", "2021-06-21"],
    drawer: null,
    Prevention: ["Prevention", "Not Prevention"],
    selectedPrevention: ["Prevention"],
    Agents: ["Agent", "Trial", "Repurposed"],
    selectedAgents: ["Agent"],
  }
  },




  
  computed: {

     provide: {
      theme: { isDark: true },
    },

    computed: {

   mobile() {
    return this.$vuetify.breakpoint.xs | this.$vuetify.breakpoint.sm
  },
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
    /** legend for the location pie chart will be to the right of the chart if 
    the screen size is lg, otherwise it will be place at the top*/
    legendPosition() {
      if (
        this.$vuetify.breakpoint.name == "xl" ||
        this.$vuetify.breakpoint.name == "lg"
      ) {
        return "right";
      } else {
        return "top";
      }
    },
  },
};
</script>

<style scoped>
.fill-height {
  padding-top: 110px !important;

}
.textTrans{
    text-transform: none;
}

</style>

