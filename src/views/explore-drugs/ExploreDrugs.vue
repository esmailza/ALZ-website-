<template>
  <v-main class="grey lighten-5 pt-0 " >
    <div id="start" >
      <v-row>
      <div
        style="max-height: 700px; height: 90vh; overflow: hidden"
        class="rounded-lg elevation-6"
      >
        <v-img
          :min-height="minHeight"
          class="white--text"
          gradient="45deg, rgb(0 0 0 / 19%), rgb(176 31 36 / 23%)"
        >
            <v-row>
              <v-col>
                <v-container
                  class="px-3 py-12 pl-lg-8 pl-md-8 pt-xl-9"
                  style="padding-right: 59px; margin-left: 0"
                >
                  <v-responsive
                    class="d-flex"
                    height="100%"
                    max-width="1800"
                    width="130%"
                  >
                    <div
                      class="rounded-xl pa-4"
                      style="background-color: #0000006e"
                    >
                      <base-heading
                        class="text-h6 text-md-h4"
                        size="text-h2"
                        title="Learn More About Recent Drugs"
                        weight="medium"
                      />
                   
                             <div class="text-lg-h5" style="line-height:2.3rem;">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
                    Learning applications to the data.<br /><br /> </div>
                    <div class="hidden-lg-and-down text-lg-h5" style="line-height:2.3rem;">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.
                    </div>

                    <v-card-actions>
                      <v-btn x-large  rounded  href= "https://en.wikipedia.org/wiki/ClinicalTrials.gov" class="primary mt-16"> Learn More </v-btn>
                    </v-card-actions>
                     </div>

                  </v-responsive>
                </v-container>
              </v-col>
              <v-col class="hidden-md-and-down">
                <div style="max-width: 57vh; float: right" class="pr-15 py-5">
                  <v-icon size="240"> mdi-pill </v-icon>
                </div>
              </v-col>
            </v-row>
          </v-img>
        </div>
      </v-row>


    

      <v-card>
          <v-row class="justify-center align-center my-8 py-3" >
          <main-pie-chart />
          </v-row>   
      </v-card>
      
        




      <base-section id="features" class=" mx-auto ">
        <v-responsive class=" mx-auto" max-width="1350" >
          <v-container fluid id="phase" >
            <v-row   >
              <v-col
                v-for="card in cards"
                :key="card.title"
                cols="12"
                class="pa-2"
                md="12"
                
              >
                <base-info-card class = " grey lighten-4 text-align: left;"  align="center" v-bind="card"/>   



              </v-col>
            </v-row>
          </v-container>
        </v-responsive>
      </base-section>
 
      </div>

  
  
     

<div>



</div>

  </v-main>
</template>

<script>
import jsonData from "../../mixins/load-json-data";
import MainPieChart from './MainPieChart.vue';

export default {
  components: { MainPieChart },
  data() {
    return {
       cards: [
      {
        icon: "mdi-puzzle-outline",
        title: "Explanation",
        text: "The inner ring shows phase 3 agents; the middle ring is comprised of phase 2 agents; the outer ring presents phase 1 compounds; agents in green areas are biologics; agents in purple areas are disease-modifying small molecules; agents in orange areas are symptomatic agents addressing cognitive enhancement or behavioral and neuropsychiatric symptoms; the shape of the icon shows the population of the trial; the icon color shows the class of target for the agent",
        href: "https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/trc2.12179"
      }
       ],
      selectedDrug: "",
      headers: Array, //column names for the table
      db: Object,
      showTable: false,
      dataLoad: false,
      data: [],
      listOfDrugs: [],
    };
  },
  /**
   * this function will get called once the page has been created, it will
   * first collect the list of available drugs, the actual data (list of all tirals), headers (column names for the table),
   */
  async created() {
    try {
      jsonData.fetchTrials().then(() => {
        this.listOfDrugs = jsonData.listOfDrugs;
        this.db = jsonData.db;
        this.headers = jsonData.headers;
        this.showTable = true;
        /* simply reset the variables */
        jsonData.clear();
      });
    } catch (e) {
      console.log("Error fetchTrials", e);
    }
  },
  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px `;
    },
  },
  methods: {
    /**
     * Filters all the data using the selectedDrug name, there is a timeout
     *  to make the loading look more natural since we are working with a small set of the data.
     */
    onSubmit() {
      this.dataLoad = true;
      setTimeout(() => {
        this.data = this.db.filter((item) =>
          item["DrugName"].includes(this.selectedDrug)
        );
        this.dataLoad = false;
      }, 1000); //data is taking some time to load ;))
    },
  },
};
</script>