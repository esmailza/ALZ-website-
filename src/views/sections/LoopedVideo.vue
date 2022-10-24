<template>
  <section id="hero" >

    <video-background
      :src="require('@/assets/player.mp4')"
      style="max-height: 800px; height: 80vh"
      overlay="linear-gradient(45deg, rgb(150 10 150 / 30%), rgb(0 0 255 / 40%))"
    >
    <v-row class="align-center fill-height justify-center ma-0" style="background-color: #000000be">
      <v-card
        flat
        class="align-center "
       color="rgb(255, 0, 0, 0.0)"
   
        
      >

 <div data-aos="fade-up"
     data-aos-duration="1000">   


<v-row >
        <dive  class="sub-base-heading pl-16 pt-8 text-lg-h2 text-sm-h3 text-md-h3 text-xs-h3"  >
       
          
         <!-- <span style="color:#b0181e;">A</span>lzheimer's <span style="color:#b0181e;">C</span>linical <span style="color:#b0181e;">T</span>rial <span style="color:#b0181e;">I</span>nn<span style="color:#b0181e;">O</span>vatio<span style="color:#b0181e;">N</span> </dive> -->
        <span  class="base-heading" >A</span>lzheimer's <span class="base-heading" >C</span>linical <span class="base-heading" >T</span>rial <span class="base-heading" >I</span>nn<span class="base-heading" >O</span>vatio<span class="base-heading"  >N</span> </dive>

</v-row>



<v-row>
    
        <div class="base-heading pl-16 mb-8 pt-8 text-lg-h3 text-sm-h4 text-md-h4" >
          (<span>ACTION</span>)</div>

</v-row>     

        <div class = "text-md-h5 pl-16 pb-8">
         <p class = "text-md-h5  pb-8">Explore Alzheimer's Disease Clinical Trials</p> 

  <btn 
  
      rounded
      color="primary"
      dark
      href= "/Explore-Trials"
      class="text-lg-h5"
    >
      Take Action
    </btn> 
    
</div>
 </div>



      </v-card>
    </v-row>
      <!-- <v-btn class="primary"> Learn More </v-btn> -->
    </video-background>
  </section>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";
import Btn from '../../components/base/Btn.vue';


export default {
  name: "SectionLoopedVideo",
  components: {
    VideoBackground,
    Btn,
  },

  provide: {
    theme: { isDark: true },
  },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px - ${this.$vuetify.application.top}px) `;
    },
  },
};
</script>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap');
.foo-hover {
  color: red;
}
.base-heading {
letter-spacing: -0.015em; font-weight: 900;
font-size: 1.3em;
font-family: 'Work Sans', sans-serif;
color: #ffffff;
/* text-shadow: 1px 1px 2px rgb(165, 36, 36);  */


}
.sub-base-heading {
 
letter-spacing: -0.015em; font-weight: 350;
font-family: 'Work Sans', sans-serif;

}
</style>

