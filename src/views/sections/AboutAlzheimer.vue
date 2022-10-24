


<template>

              
    <v-container>
          <base-section-heading title="Publications" style="color: #b01f24">
      </base-section-heading>
      <v-row justify="center">

   
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
          
        >


        <base-avatar-card
          v-bind="feature"
           align="left"
           horizontal         >
      {{feature.paperintro}}
        <b><a :href="feature.url" target="_blank">Read-more</a></b>
          </base-avatar-card>
             
    
        </v-col>

   

      </v-row>   
      
  

      </v-row>
    </v-container>
 
</template>


<script>
export default {
  name: "SectionAboutAlzheimer",

  data: () => ({
    features: [
      {
        title: "Alzheimer's disease drug development pipeline: 2021",
        icon: "mdi-fountain-pen-tip",
        url :"https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/trc2.12179",
        paperintro:"   Alzheimer's disease (AD) is the sixth leading cause of death in the United States and the fifth leading cause among those over age 65 ... ",
        
      },
      {
        title: "Aducanumab produced a clinically meaningful benefit in association with amyloid lowering",
        icon: "mdi-fountain-pen-tip",
        url: "https://link.springer.com/article/10.1186/s13195-021-00838-",
        paperintro:"Aducanumab is a monoclonal antibody targeting amyloid beta protein (Aß), a defining feature of the biology of Alzheimer’s disease (AD)..."
      },
      {
        
     
        title: "A randomized, double-blind, phase 2b proof-of-concept clinical trial in early Alzheimer’s disease with lecanemab, an anti-Aβ protofibril antibody",
        icon: "mdi-fountain-pen-tip",
        url: "https://link.springer.com/article/10.1186/s13195-021-00813-8",
        paperintro:"Lecanemab (BAN2401), an IgG1 monoclonal antibody, preferentially targets soluble aggregated amyloid beta (Aβ), with activity across oligomers, protofibrils, and insoluble fibrils ...",
      },
      {
        title: "Alzheimer's disease drug development pipeline: 2020",
        icon: "mdi-fountain-pen-tip",
        url:"https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/trc2.12050",
        paperintro: "Alzheimer's disease (AD) is a growing public health concern affecting millions of patients worldwide and costing billions of dollars annually. We review the pipeline of drugs and biologics in clinical trials for the treatment of AD...",
      },

    ],
  }),
};
</script>

<style scoped>
.my-overlay >>> .v-overlay__content {
  width: 85%;
}
</style>