<template >
  <div class="container-xxl">

<v-row class=" d-flex flex-row mt-16 " data-aos="fade-right">

  <v-col md="8"  lg= "8" xl="8" sm ="12" xs= "12" >

      
      <v-card class="mb-16 rounded-xl ">
        

         <!-- <v-row class="pa-8">
    <v-card-subtitle  >
     <span class="text-center text-lg-h3  secondary--text font-weight-bold"> Who We Are?</span>
    </v-card-subtitle>
     <v-divider> </v-divider>
  </v-row> -->


        <v-row>
        <v-card-subtitle
            class="text-center  text-sm-h3 text-md-h3 text-lg-h3 text-xs-h3  pt-16   secondary--text font-weight-bold">
         Who We Are?<br/>
           <v-divider class="pb-2 ml-1 mr-1"> </v-divider>
        </v-card-subtitle>
        </v-row> 
     
        

        <v-card-text
          class="text-center text-subtitle-1 text-md-h5 px-3 px-md-16 pb-16 grey--text text--darken-3 "
          style="line-height: 180%;"
        >
        
          <div>
           
           The ACTION AD team is an interdisciplinary research cluster at the University of Nevada,
            Las Vegas (UNLV), consisting of experts from the Department of Brain Health and the Department 
            of Computer Science. The team includes Dr. Jeffrey Cummings (Department of Brain Health; Director
             of the Chambers-Grundy Center for Transformative Neuroscience at UNLV), Jorge Fonseca (Department
              of Computer Science), and Kazem Taghva (Department of Computer Science). The team relies on research 
              and contributions from computer science graduate students including Mina Kambar, Pouyan Nahed, 
              Sam Black, and research coordinator, Elissa Coambs.
          </div>
        </v-card-text>

    </v-card>
  </v-col>
      <v-col lg="4" xl= "4" md ="4" sm= "12" xs="12"  class="d-flex align-items-center justify-content-center">
          <v-img
          height="300px"
          class="rounded-lg"
          :src="require('@/assets/about2.jpg')"
        ></v-img>
      </v-col>

    </v-row>




<!-- ---------------------------- -->
    <v-row class ="d-flex flex-row-reverse" data-aos="fade-left">
  <v-col md="8"  lg= "8" xl="8" sm ="12" xs= "12" >

      
      <v-card class="mb-16 rounded-xl">
   

      <v-row>
        <v-card-subtitle
            class="text-center  text-sm-h3 text-md-h3 text-lg-h3 text-xs-h3  pt-16 pl-2 pr-2 secondary--text font-weight-bold">
         What We Do?<br/>
          <v-divider class="pb-2 ml-1 mr-1"> </v-divider>
        </v-card-subtitle>
      </v-row>


        
        <v-card-text
          class="text-center text-subtitle-1 text-md-h5 px-3 px-md-16 pb-16 grey--text text--darken-3 "
          style="line-height: 180%;"
      
        >
        
          <div>
           
          The goal of the research cluster is to connect medical expertise with Artificial Intelligence (AI) and
           Data Analytics expertise to discover what would otherwise be hidden from a human looking at large amounts
            of raw data. Our goal is to make the data widely available and accessible to allow for more successful drug
             development strategies and advancements in pharmacological treatment/devices. Users can easily manipulate
              the datasets by selecting items in a categorized table that allows them to derive accurate analytical
               observations. This data-driven approach will accelerate trial processes and reduce failure rates in 
               drug discovery and development.
          </div>
        </v-card-text>

    </v-card>
  </v-col>
    </v-row>



<!-- --------------------------->
    <v-row class="d-flex flex-row" data-aos="fade-right">
    <v-col md="8"  lg= "8" xl="8" sm ="12" xs= "12" >

      
      <v-card class="mb-16 rounded-xl">
   
        
    <v-row>
        <v-card-subtitle
            class="text-center  text-sm-h3 text-md-h3 text-lg-h3 text-xs-h3  pt-16   secondary--text font-weight-bold">
       How We Are Funded<br/>
       <v-divider class="pb-2 ml-1 mr-1"> </v-divider>
          
        </v-card-subtitle>
    </v-row>



        <v-card-text
               class="text-center text-subtitle-1 text-md-h5 px-3 px-md-16 pb-16 grey--text text--darken-3 "
          style="line-height: 180%;"
        >
        
          <div>
           
       The team is supported by a 5-year grant titled "Alzheimer's Clinical Trial InnOvatioN (ACTION)" 
       from the National Institute of Health.  It has been awarded to Dr. Jeffrey Cummings to support 
       a research observatory devoted to Alzheimer's clinical trials and drug development.
          </div>
        </v-card-text>

    </v-card>
  </v-col>

  
      <v-col lg="4" xl= "4" md ="4" sm= "12" xs="12" class="d-flex align-items-center justify-content-center">
          <v-img
          height="300px"
          class="rounded-lg"
          :src="require('@/assets/aboutUSBack.jpg')"
        ></v-img>
    </v-col>
  
    </v-row>

      </div>
    
    
</template>
<script>


export default {
     name: "WhoWeAre",


  computed: {
  mobile() {
    return this.$vuetify.breakpoint.xs | this.$vuetify.breakpoint.sm
  },
}

 
}
</script>



