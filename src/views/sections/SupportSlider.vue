<template>
<section class="light-blue lighten-5 section pb-16">
  <v-divider> </v-divider>

<v-container fluid>


    <v-layout row wrap justify-space-between class="d-flex align-items-center justify-content-center ">
        <v-flex xs12 md6 > 

              <v-card
    class=" rounded-xl"
    light
    data-aos="fade-up"
   
  >
  <v-row class="pa-8">
    <v-card-title  >
     <span class="text-lg-h3 text-center   secondary--text font-weight-bold"> Who is supporting ACTION?</span>
    </v-card-title>
  </v-row>


<v-row class="pb-8 pl-8 pr-2 pb-16 ">
    <v-card-text class="text-lg-h5 "
    v-for="(item, i) in support"
          :key="i"
    >  
    <v-icon
    color="#120460"
          light
          right>

          mdi-checkbox-marked-circle
        </v-icon>
    <a   class="text-lg-h5 pl-2  secondary--text "  :href="item.url" v-text="item.name"></a>

  
   

    </v-card-text>
</v-row>
  </v-card>     
  

       </v-flex>


 
         <v-flex  xs12 md6 class="my-16" >   
    <agile :nav-buttons="true" :autoplay-speed="4000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay>


<div v-for="(su, i) in support"
            :key="i"
            >

      <div class="slide">
      <v-img
  
      data-aos="fade-up"
  
      :src="require(`../../assets/${su.img}.png`)"
      class="white--text rounded-xl"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
     

          <v-row class="pa-8">
         <v-card-title  >
         <span class="text-lg-h3 text-center   white--text  font-weight-bold" >{{su.name}}</span>
        </v-card-title>
         </v-row>
<!--       
             <v-row class="pa-8">
          <base-heading    
          :title="su.name"
            weight="medium"
          />
            
             </v-row> -->



          <v-row class="pa-8">
         <v-card-title  >
         <span class="text-lg-h4   white--text " >For more information click the button below</span>
        </v-card-title>
         </v-row>
        <!-- <v-row class="pa-8">        
          <base-subheading
            title= "For more information click the button below"
          />
                
        </v-row> -->

        <v-row class="pa-8">
            
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap pb-8"
          >
            <v-btn class=" secondary font-weight-bold rounded-xl text-white"
             light
            min-width="168"
             target="_blank"
             x-large 
             :href= "su.url">
              Learn More
            </v-btn>

          </div>
            
        </v-row>
   
   
    </v-img>
            
    </div>
        </div>
         

    </agile>
         </v-flex>
    
        
        
    </v-layout>


</v-container>
</section>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
  name: "support-slider",
      components: {
        agile: VueAgile 
    },
     data: () => ({
    support: [
      {
        name: "Chambers-Grundy Center for Transformative Neuroscience",
        img: "chambers",
        url: "https://www.unlv.edu/brainhealth/chambers-grundy-center#:~:text=The%20Chambers%2DGrundy%20Center%20for,disease%20and%20other%20brain%20disorders.",
      },
      {
        name: "National Institutes of Health",
        img: "NIH1",
        url: "https://www.nih.gov/",
      },
      {
        name: "UNLV School Of Integrated Health Sciences",
        img: "UNLVSIHS",
        url: "https://www.unlv.edu/integratedhealth",
      },
      {
        name: "Howard R. Hughes School of Engineering",
        img: "engineering",
        url: "https://www.unlv.edu/engineering",
      },
      {
        name: "UNLV Department of Brain Health",
        img: "unlv-removebg-preview",
        url: "https://www.unlv.edu/brainhealth",
      },
      {
        name: "UNLV Department of Computer Science",
        img: "unlv-cs",
        url: "https://www.unlv.edu/cs",
      },
    ],
     currentSlide: 0
  }),
  
    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '70vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },

};
</script>
<style scoped>
a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}
</style>


