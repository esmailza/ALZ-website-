<template >

  <v-footer
    dark
    padless
  >

    <v-card
      class="flex"
      flat
      tile
    >
  
      <v-card-title  class="primary xl-rounded">


      
          <v-row class ="d-flex flex-row">

        <v-col sm="12" xs="12" md ="6" lg = "6" xl = "6" class="pl-6" >
        <strong class="subheading">Get connected with us on social networks!</strong>

       </v-col>
       
       <v-col sm="12" xs="12" md ="6" lg = "6" xl = "6" class="text-center text-lg-right ">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
     <v-btn v-if="!mobile" class="primary rounded-xl"    elevation="0" :href="icon.url" >
          <v-icon size="50px"  >
            {{ icon.icn }}
          </v-icon>
     </v-btn>

       <v-btn v-if="mobile" class="primary rounded-xl"    elevation="0" :href="icon.url">
           <v-icon  size="20px">
            {{ icon.icn}}
          </v-icon>
        </v-btn>

        </v-btn>
        </v-col>
       </v-row>
          
        
      </v-card-title>
  

  
    </v-card>

  </v-footer>


</template>

<script>
  export default {
    data: () => ({
      icons: [
        {
          icn:  'mdi-twitter',
          url: 'https://twitter.com/AlzTreatUNLV',

        },
        {
          icn: 'mdi-instagram',
          url: 'https://www.instagram.com/alztreatunlv/'

        },
      ],
    }),



  computed: {
  mobile() {
    return this.$vuetify.breakpoint.xs | this.$vuetify.breakpoint.sm
  },
}

  }
</script>
