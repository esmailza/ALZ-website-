<template>
<div class="teal lighten-5 pa-16">
  <div>
 <base-section-heading> </base-section-heading>
  <!-- <v-card
    flat
    light
    height="100%"
    class="py-16 rounded-xl "
    color="rgb(250,250,250,0.3)"
  > -->
    <v-container fluid>

  <v-row>
         
      <v-card-title class=" font-weight-bold text-center justify-center  secondary--text   text-lg-h3 pb-8 pt-16">         
     <span > ACTION'S Team</span>
        </v-card-title>
      
      </v-row>
 
  
  <v-row >
    <div  class="text-center text-lg-h4 text-md-h5 normal"  style="line-height: 1.47em;">
      UNLV center goal is to ‘transform’ Alzheimer’s treatment.
        For more information about the Chambers-Grundy Center for Transformative Neuroscience, 
      <a class="text-red" href="https://www.unlv.edu/brainhealth/chambers-grundy-center"> click here.</a>
    </div>
  </v-row>
    

  <v-row>
<who-we-are />
     </v-row>   


    </v-container>
        <!-- </v-card> -->
    </div>
</div>









     
    
  
</template>

<script>
import WhoWeAre from './WhoWeAre.vue'

  export default {
  components: { WhoWeAre },

    name: 'Donation',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>


<style>
.backgroundDonation{
  /* background-image: url('../../assets/donation.jpeg'); */
  background-size: cover;
  height: 40%;
  width:100%;
  /* box-shadow:inset 0 0 0 2000px rgba(50, 50, 50, 0.8); */
  position: relative;

}

</style>
