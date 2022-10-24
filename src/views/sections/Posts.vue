<template>
<div >
  <v-responsive class="mx-auto" max-width="1500">
    <!-- <v-card-title class="font-weight-bold text-center justify-center primary--text text-lg-h3"
      >Explore Data</v-card-title
    > -->
    <base-section-heading> </base-section-heading>
    <div class="container">

    <v-row class="justify-center my-16"  >
      <v-col
    
        v-for="(card, i) in cards " 
        :key="`${i}-${card.title}`"
        
        class="col-sm-4 d-flex justify-content-center"
        data-aos="fade-up"
      >
        <v-hover v-slot="{ hover }" open-delay="50">
          <v-card
             v-if="card.color != '#EAE2B7'"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            dark
            class="
              elevation-12
              d-flex
              flex-column
              col-6
              justify-center
              rounded-xl
             
            "
            height="100%"
            max-width="100%"
            style="flex: 1"
            flat
         
            :color="card.color"
          >
            <v-card-title
              class="text-center  grey--text text--darken-3 font-weight-bold text-lg-h4"
              style="
                flex-basis: auto;
               
                align-content: flex-start;
                justify-content: center;
                word-break: break-word;
              "
            >
              {{ card.title }}
            </v-card-title>
            <!-- list Text of the cards -->

            <v-row v-for="text in card.texts" :key="text" class="pl-4">
              <div class=" font-weight-black" style="color: #616161">
                <!-- <v-icon color="primary">mdi-checkbox-marked-circle</v-icon> -->
                {{ text }}
              </div>
            </v-row>

            <!-- Image of the card -->
          <v-row>

            
          <v-col cols="4" class="mt-auto pl-8 pb-8">
          
              <router-link
                :to="card.to"
                custom
                v-slot="{ href, navigate, isActive }"
              >

              <v-btn
      :loading="loading5"
      :disabled="loading8"
      color="#b0181e"
      class="white--text justify-center"
      fab
      :active="isActive" :href="href" @click="navigate"
    >
      <v-icon dark>
        mdi-arrow-right-bold
      </v-icon>
    </v-btn>
   
              </router-link>
      
          </v-col>
            <v-col cols="8" class="pb-0 mb-0">
             
              
              <v-img
                class=" pb-0 "
                contain
                height="400"
                max-width="350"
                :src="require(`../../assets/${card.img}.png`)"
                style="opacity: 0.9"
              ></v-img>
           </v-col>



          </v-row>
          </v-card>
        </v-hover>


      <!-- For the second card if the dispaly size is sm or xs which are mobile and tablet remove the margin y. This is what 
      v-if function mobile does -->
             <v-hover v-if="!mobile" v-slot="{ hover }" open-delay="50" >
          <v-card
             v-if="card.color == ('#EAE2B7')"

            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            dark
            class="
              elevation-20
              d-flex
              flex-column
              col-6
              rounded-xl
              my-8
             
            "
            height="100%"
            max-width="100%"
            style="flex: 1"
            flat
         
            :color="card.color"
          >
            <v-card-title
              class="text-center  grey--text text--darken-3 font-weight-bold text-lg-h4"
              style="
                flex-basis: auto;
                
               
                align-content: flex-start;
                justify-content: center;
                word-break: break-word;
              "
            >
              {{ card.title }}
            </v-card-title>
            <!-- list Text of the cards -->

            <v-row v-for="text in card.texts" :key="text" >
              <div class=" font-weight-black " style="color: #616161">
                <!-- <v-icon color="primary">mdi-checkbox-marked-circle</v-icon> -->
                {{ text }}
              </div>
            </v-row>

            <!-- Image of the card -->
            <v-row >
              <v-col cols="4" class=" justify-left mt-auto">
            <v-card-actions class="justify-left">
              <router-link
                :to="card.to"
                custom
                v-slot="{ href, navigate, isActive }"
              >
              <v-btn
      :loading="loading5"
      :disabled="loading8"
      color="#b0181e"
      class="ma-2 white--text justify-center"
      fab
      :active="isActive" :href="href" @click="navigate"
    >
      <v-icon dark>
        mdi-arrow-right-bold
      </v-icon>
    </v-btn>
  
              </router-link>
            </v-card-actions>
             </v-col>
           
                         
              <v-col cols="8">
              <v-img
                class="ma-md-9 justify-center mb-7"
                contain
                height="200"
                max-width="100%"
                :src="require(`../../assets/${card.img}.png`)"
                style="opacity: 0.9"
              ></v-img>
              </v-col>



 
              </v-row>
          </v-card>
        </v-hover>




        <!-- __________________ For the second card if the dispaly size is sm or xs which are mobile and tablet remove the margin y. This is what 
      v-if function mobile does-->
              <v-hover v-if="mobile" v-slot="{ hover }" open-delay="50" >
          <v-card
             v-if="card.color == ('#EAE2B7')"

            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            dark
            class="
              elevation-20
              d-flex
              flex-column
              col-6
              rounded-xl
          
             
            "
            height="100%"
            max-width="100%"
            style="flex: 1"
            flat
         
            :color="card.color"
          >
            <v-card-title
              class="text-center  grey--text text--darken-3 font-weight-bold text-lg-h4"
              style="
                flex-basis: auto;    
                align-content: flex-start;
                justify-content: center;
                word-break: break-word;
              "
            >
              {{ card.title }}
            </v-card-title>
            <!-- list Text of the cards -->

            <v-row v-for="text in card.texts" :key="text" >
              <div class=" font-weight-black " style="color: #616161">
                <!-- <v-icon color="primary">mdi-checkbox-marked-circle</v-icon> -->
                {{ text }}
              </div>
            </v-row>

            <!-- Image of the card -->
            <v-row >
              <v-col cols="4" class=" justify-left mt-auto">
            <v-card-actions class="justify-left">
              <router-link
                :to="card.to"
                custom
                v-slot="{ href, navigate, isActive }"
              >
              <v-btn
      :loading="loading5"
      :disabled="loading8"
      color="#b0181e"
      class="ma-2 white--text justify-center"
      fab
      :active="isActive" :href="href" @click="navigate"
    >
      <v-icon dark>
        mdi-arrow-right-bold
      </v-icon>
    </v-btn>
  
              </router-link>
            </v-card-actions>
             </v-col>
           
                         
              <v-col cols="8">
              <v-img
                class="ma-md-9 justify-center mb-7"
                contain
                height="200"
                max-width="100%"
                :src="require(`../../assets/${card.img}.png`)"
                style="opacity: 0.9"
              ></v-img>
              </v-col>



 
              </v-row>
          </v-card>
        </v-hover>
     
      </v-col>
    </v-row>
    </div>
  </v-responsive>
</div>
</template>

<script>
export default {
  name: "SectionPosts",

  data: () => ({
    cards: [
      {
        title: "Explore Alzhimer's Disease Trials",
        color: "#A8DADC",
        img: "old1",

        texts: [
          "",
          "",
       
        ],

        to: "/Explore-Trials",
        icon: "mdi-fountain-pen-tip",
      },
      {
        title: "Learn More About Science Advancement in Alzheimer's Disease",
        color: "#EAE2B7",
        img: "knowledge",
        texts: [
          "",
          "",
     
        ],
        to: "/Publications",
      },
      {
        title: "Explore Alzheimer’s Disease Drug Development",
        color: "#FECF72",
        img: "Drug",
        texts: ["", ""],
        to: "/Explore-Drugs",
      },
    ],
  }),


computed: {
  mobile() {
    return this.$vuetify.breakpoint.xs | this.$vuetify.breakpoint.sm
  },
}


};



</script>

<style scoped>
.v-card__title {
  word-break: break-word;
}

</style>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.9)
  >.v-card-title
    color: #000
  
</style>