<template>

 
      <!-- <div v-for="n in chartData.datasets[0].data[0].feature.properties" :key="n">{{n}}</div> -->
        <!-- <div v-for="n in chartData.datasets[0].data[1].feature.properties" :key="n">{{n}}</div> -->
    <choropleth-chart v-if = showMap  :chart-data="chartData" :options="options"/>
 

</template>

<script>
import ChoroplethChart from "./ChoroplethChart.vue";
import { topojson } from "chartjs-chart-geo";
import countriesTopoJson from "world-atlas/countries-50m.json";
import axios from 'axios';

const countries = topojson.feature(
  countriesTopoJson,
  countriesTopoJson.objects.countries
).features;
 
var mapChartdb = new Array();
const countryData =   (countries.map(d => ({ feature: d, value: 0 })));

export default {
  name: "geomap",
  components: {
    ChoroplethChart
  },


  data() {
     
    return {
     
      showMap: false,
      chartData: {
        labels: countries.map(d => d.properties.name),   
        datasets: [
          {
            label: "Countries",
     
            backgroundColor: context => {
              if (context.dataIndex == null) {
                return null;
              }
              const v = context.dataset.data[context.dataIndex];
            //   return `rgb(0,0, ${value.value * 20})`;
              if (v.value <=0 ) {
                return "grey";
              }
               if (v.value <=50 ) {
                return "orange";
              }
               if (v.value <=100 ) {
                return "yellow";
              }
              if (v.value <= 200) {
                return "red";
              }
              return "green";
            },
   
            data: countryData
          
        
          
          }
        ]
      },
      options: {
        showOutline: true,
        showGraticule: true,
        legend: {
          display: false,
        },

          geo: {
          colorScale: {
            display: true,
            interpolate: v => {
              // map a value from v 0 to 1 to my target colors;
              // 0 - 3 is green
              // 3- 7 is orange
              // 7- 10 is red
              if (v <= 0.0) {
                return "grey";
              }
              if (v <= 0.14285) {
                return "orange";
              }
                if (v <=0.2857 ) {
                return "yellow";
              }
                  if (v <= 0.5714) {
                return "red";
              }
              return "green";
            }
          }
        },
        scale: {
          projection: "equalEarth"
        }
      }
    };
    
  },

  
 async created() {

      const {data} = await axios.get("ADD URL HERE"); 
      mapChartdb = data;
      this.CountryUpdater()
  
},


  methods: {
    
  CountryUpdater() {  
  
  mapChartdb["Countries"]["United States of America"] = mapChartdb["Countries"]["United States"];
   countryData.forEach(element => {
      var countryName = element.feature.properties.name;
      // console.log(countryName)
       for (const key of Object.keys(mapChartdb["Countries"])){
          if (key.includes(countryName)){
            element.value = mapChartdb["Countries"][key];  
                
          }
  }   
     
    });
  
      this.showMap = true;
       return countryData;
 },



  }


};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
