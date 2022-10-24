  
<template>
  <v-container class="pt-8">
    <!-- Mobile view - filter menu -->
    <v-card class="hidden-lg-and-up mb-3" @click="drawer = !drawer">
      <v-card-title class="justify-end">
        <div class="pr-2 text-button">Filter Options</div>

        <v-icon>mdi-filter-variant </v-icon>
      </v-card-title>
    </v-card>
    <v-navigation-drawer
      width="320px"
      v-model="drawer"
      fixed
      left
      temporary
      id="myDiv"
    >
      <v-select
        v-model="selectedLocations"
        :items="dataLabel"
        attach
        chips
        offset-y
        label="Locations"
        class="pa-6"
        multiple
      >
        <template v-slot:selection="{ item, index }">
          <v-chip v-if="index === 0">
            <span>{{ item }}</span>
          </v-chip>

          <span v-if="index === 1" class="grey--text text-caption">
            (+{{ selectedLocations.length - 1 }} others)
          </span>
        </template>
      </v-select>
      <v-btn class="mx-2" @click="clear"> Clear </v-btn>
      <v-btn class="primary" :disabled="disabled" @click="submit">
        Apply
      </v-btn>
    </v-navigation-drawer>
    <!-- Desktop View  -->
    <v-card class="mb-2">
      <v-row class="align-center justify-center hidden-md-and-down pa-6">
        <v-col cols="4">
               <v-row class = "align-center justify-center hidden-md-and-down pa-2 pb-8 ">
                   <v-btn
            block
            color="primary"
            
            elevation="9"
            large
            x-large
            x-small
            > Filters</v-btn>
           </v-row>
          <v-select
            v-model="selectedLocations"
            :items="dataLabel"
            attach
            chips
            filled
            offset-y
            label="Locations"
            multiple
          >
            <template v-slot:selection="{ item, index }" v-if="height == 'lg'">
              <v-chip v-if="index === 0">
                <span>{{ item }}</span>
              </v-chip>

              <span v-if="index === 1" class="grey--text text-caption">
                (+{{ selectedLocations.length - 1 }} others)
              </span>
            </template>
          </v-select>
       

        <v-btn class="mx-2" @click="clear"> Clear </v-btn>
        <v-btn class="primary" :disabled="disabled" @click="submit">
          Apply
        </v-btn>
 </v-col>
      <!-- </v-row> -->


      <!-- <v-row class="justify-center pa-md-5 pa-0 fill-height"> -->
        <v-col cols="8" class="py-0">
          <v-card
            v-if="loadChart"
            :key="`${height}-${chartOptions.labels}`"
            flat
            class="pa-0 pa-4"
            color="#f1f1f1"
            style="border: 1px #bababa; border-style: solid"
          >
            <!-- Vue Apex Charts Docs: https://apexcharts.com/docs/vue-charts/ -->
            <VueApexCharts
              :type= "pie"
              :height="`${height == 'xs' || height == 'md' ? 300 : 400}`"
              :options="chartOptions"
              :series="seriesGeo"
              @dataPointSelection="getSliceInfo"
            ></VueApexCharts>
          </v-card>
        </v-col>
      </v-row>

      
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
            <div>
              <v-card-title class="justify-center">
                Trials bases on {{ locationName }}
              </v-card-title>
              <v-data-table
                :loading="false"
                loading-text="Loading... Please wait"
                :headers="header"
                :items="tableData"
                :items-per-page="5"
                class="elevation-0"
                ><template #item.NCT#="{ value }">
                  <a
                    target="_blank"
                    :href="'//' + `clinicaltrials.gov/ct2/show/${value}`"
                  >
                    {{ value }}
                  </a>
                </template>
              </v-data-table>
            </div>
          </v-card>
        </v-col>
      </v-row>
    <!-- <map-test /> -->





    </v-card>
  </v-container>
</template>
<script>
import jsonData from "../../../mixins/load-json-data";
import VueApexCharts from "vue-apexcharts";





export default {
  components: { VueApexCharts},
  created() {
    console.log("location created");
    jsonData.fetchTrials().then(() => {
      this.seriesGeo = jsonData.seriesGeo;
      this.dataSeries = jsonData.seriesGeo;
      this.db = jsonData.db;
      this.header = jsonData.headers;
      this.loadChart = true;
      /* simply reset the variables */
      jsonData.clear();
    });
  },
  methods: {
      /** 
       * visit https://apexcharts.com/docs/options/chart/events/ for more info */
    getSliceInfo(event, chartContext, config) {
      document.getElementById("location").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
      if (this.chartOptions.labels[config.selectedDataPoints[0]]) {
        this.locationName =
          this.chartOptions.labels[config.selectedDataPoints[0]];
        this.loading = true;
        this.loadTable = false;
        console.log(
          "clicked on",
          this.chartOptions.labels[config.selectedDataPoints[0]]
        );
        var geo = this.chartOptions.labels[config.selectedDataPoints[0]];
        // Since `Japan` is included in `Asia (not Japan)`, we want to make sure
        // they dont get mixed up
        this.data = this.db.filter((item) => {
          if (geo.includes("Japan") && !geo.includes("Asia (not Japan)"))
            return (
              item["Geography"].includes("Japan") &&
              !item["Geography"].includes("Asia (not Japan)")
            );
          else return item["Geography"].toString().includes(geo);
        });

        setTimeout(() => {
          this.tableData = this.data;
          this.loadTable = true;
          this.loading = false;
        }, 1000);
      }
    },
    clear() {
      this.selectedLocations = [];
      this.loadTable = false;
    },
    /**
     * Simply filter through the data that include at least one of the selected locations.
     * We also want to set the series and label prop for Apex charts to only show the selected locations.
     */
    submit() {
      // for when they click submit on the navigation-drawer
      if (
        (this.height == "sm" || this.height == "xs" || this.height == "md") &&
        this.drawer
      ) {
        this.drawer = !this.drawer;
      }
      this.loadTable = false;
      // Since `Japan` is included in `Asia (not Japan)`, we want to make sure
      // they dont get mixed up
      this.tableData = this.db.filter((item) => {
        if (
          this.selectedLocations.includes("Japan") &&
          !this.selectedLocations.includes("Asia (not Japan)")
        )
          return (
            item["Geography"].includes("Japan") &&
            !item["Geography"].includes("Asia (not Japan)")
          );
        else
          return this.selectedLocations.some((element) =>
            item["Geography"].includes(element)
          );
      });
      var checkedIndex = [];
      //get the corresponding index of all the selected locations
      this.selectedLocations.forEach((element) => {
        checkedIndex.push(this.dataLabel.indexOf(element));
      });
      // only filter the selected location series
      this.seriesGeo = this.dataSeries.filter((item, index) =>
        checkedIndex.includes(index)
      );
      // only filter the selected location labels
      this.chartOptions.labels = this.dataLabel.filter((item, index) =>
        checkedIndex.includes(index)
      );
    },
  },
  computed: {
    height() {
      return this.$vuetify.breakpoint.name;
    },
    disabled() {
      return !(this.selectedLocations.length > 0);
    },
  },
  data: () => ({
    selectedChart: "pie",
    seriesGeo: [],
    db: Array,
    tableData: Array,
    data: Array,
    drawer: false,
    loading: false,
    loadTable: false,
    header: Array,
    loadChart: false,
    dataSeries: Array,
    dataLabel: [
      "North America",
      "South America/Mexico",
      "Western Europe/Israel",
      "Eastern Europe/Russia",
      "Asia (not Japan)",
      "Japan",
      "South Africa/Australia/New Zealand",
    ],
    locationName: String,
    selectedLocations: [
      "North America",
      "South America/Mexico",
      "Western Europe/Israel",
      "Eastern Europe/Russia",
      "Asia (not Japan)",
      "Japan",
      "South Africa/Australia/New Zealand",
    ],
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
        "North America",
        "South America/Mexico",
        "Western Europe/Israel",
        "Eastern Europe/Russia",
        "Asia (not Japan)",
        "Japan",
        "South Africa/Australia/New Zealand",
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
};
</script>