/* written by Mina, this page is the team page*/

<template>
  <div id="aboutus" >
    <!-- About our team -->
<div class="accent">
    
         <!-- <v-img
     
        :src="require('@/assets/aboutback1.jpg')"
        class="white--text"
        style="max-height: 800px; height: 100vh"
        gradient="45deg, rgb(0 0 0 / 19%), rgb(176 31 36 / 23%)"
      > -->
        
  <div class="row align-center  justify-center mt-8"
   
    >
      <div class="col-8 text-center "  
      >
      

        <v-img
         :src="require('@/assets/text.png')"
         style="max-height: 100px; height: 80vh; "   
        >
        </v-img>

      </div>
    </div>

        
      <!-- </v-img> -->


      

    <who-we-are />
    </div>


<!-- <v-divider></v-divider> -->

<div class="secondary">
    <div class="container">
<div class="row ma-16 pa-16 ">
  <div class="col-12">

      <v-row>
      <v-card-title class=" font-weight-bold text-center justify-center white--text  text-lg-h3 pb-16">         
     <span > ACTION'S Team</span>
        </v-card-title>

      </v-row>

  </div>

  </div>


      <!-- first row -->
      <div class="d-flex flex-wrap justify-center">
        <div v-for="(item, i) in items" :key="i" class="col-12 col-md-4 ">
          <reversible-cards v-bind="item" max-width="100%" max-height="400"> </reversible-cards>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// Extensions
import ReversibleCards from "@/views/sections/ReversibleCards.vue";

import WhoWeAre from '../sections/WhoWeAre.vue';


export default {
  Name: "supports",
  components: {
    ReversibleCards,
      WhoWeAre ,
      
    
  },

   
   computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "400" : "250";

      return  height;
    },
  },
  data() {
    return {
      items: [
        {
          description:
            "Research Professor, Department of Brain Health. Director, Chambers-Grundy Center for Transformative Neuroscience at UNLV",
          Name: "Dr. Jeffrey L. Cummings",
          filename: "CummingsPic.jpg",
        },
        {
          description:
            "Research Professor and Chair of Computer Science Department at UNLV",
          Name: "Dr. Kazem Taghva",
          filename: "taghva.jpg",
        },
        {
          description:
            "Assistant Professor Faculty-in-Residence of Computer Science Department at UNLV",
          Name: "Dr. Jorge Fonseca Cacho",
          filename: "Jorge.jpg",
        },
        {
          description:
            "Researcher Doctor of Pharmacy, Medical Science Liaison - Alzheimer’s Disease at Biogen",
          Name: "Dr. Garam Lee",
          filename: "gram.jpg",
        },
           {
          description: "Research Assistant at UNLV",
          Name: "Elissa Coambs",
          filename: "Elissa.jpg",
        },
   
        {
          description: "PhD student of Computer Science at UNLV",
          Name: "Pouyan Nahed",
          filename: "pouyan.jpg",
        },
        {
          description: "PhD student of Computer Science at UNLV",
          Name: "Mina E. Z. N. Kambar",
          filename: "mina.png",
        },
     
             {
          description: "PhD student of Computer Science at UNLV",
          Name: "Sam Black",
          filename: "sam.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.backgroundAboutUs{
  // background-image: url('../../assets/aboutUSBack.jpg');
  background-size: cover;
  height: 40%;
  width:100%;
  // box-shadow:inset 0 0 0 2000px rgba(255, 255, 255, 0.9);
  // gradient:to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)

}

</style>

