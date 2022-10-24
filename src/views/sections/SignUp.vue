<template>

<div >
<div  class=" backgroundSignUp" >
  <v-container>
  <v-layout row wrap data-aos="fade-up">

 <v-row>

   <v-col md ="6" lg = "6" xl = "6" xs ="12" sm = "12" class= "d-flex align-items-center justify-content-center" >

     <v-card class="mb-16 rounded-xl "> 

        <v-row>
        <v-card-subtitle
            class="text-center  text-sm-h3 text-md-h4 text-lg-h4 text-xs-h4  pt-16 pb-8 pl-8 pr-8  grey--text text--darken-4 font-weight-bold">
         Do you want to   get updates?<br/>
           <v-divider> </v-divider>
        </v-card-subtitle>

        
        </v-row> 
     
        
      <v-row>
        <v-card-text
          class="text-center text-subtitle-1 text-md-h5 px-3 px-md-16 pb-16 grey--text text--darken-3 "
          style="line-height: 180%;"
        >
        
          <div class="pa-4">
             Please enter your name and email address here to get a notification when a new report or 
   trial is added to the website. 
          </div>
        </v-card-text>
          
         
        
         
 </v-row>
 
    </v-card>
  

   </v-col>


 <v-col md ="6" lg = "6" xl = "6" xs ="12" sm = "12" class=" d-flex align-items-center justify-content-center"  >
  <v-row justify-space-between class="pt-16 pb-16 ma-4 align-items-center justify-content-center">
  <v-card
    flat
    light
    height="100%"
    class="rounded-xl pa-16 ml-8"
    color="rgb(240,240,240,0.9)"
  >
  <v-row>
    <v-card-title class=" grey--text text--darken-4 text-center d-flex font-weight-bold text-lg-h4 text-md-h5  " style="justify-content: center">
    <v-icon class=" grey--text text--darken-3 mr-lg-3 mb-3 mb-lg-0">mdi-bell</v-icon> SIGN UP</v-card-title
    >
</v-row>

<v-row>
    <div class="py-8">
    <news-letter />
    </div>
</v-row>


  </v-card>
  </v-row>
  
 
 </v-col>


 </v-row>


  </v-layout>
  </v-container>
 
</div>
 


</div>
</template>

<script>

import NewsLetter from "../../components/NewsLetter.vue";


export default {
  components: { NewsLetter},
  
};
</script>

<style lang="scss" scoped>
.backgroundSignUp{
  background-image: url('../../assets/light.jpg');
  background-size: cover;
  height: 40%;
  width:100%;
  box-shadow:inset 0 0 0 2000px rgba(130, 132, 134, 0.9);
  // gradient:to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)

}

</style>