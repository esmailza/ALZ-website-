<template>
  <v-dialog v-model="dialog" width="700" :retain-focus="false">
    <template v-slot:activator="{ on, attrs }">
      <a
        color="red lighten-2"
        v-bind="attrs"
        v-on="on"
        @click="$emit('click-link')"
      >


        <v-btn icon><v-icon size="20" class="ma-2 " to=""
              >mdi-help-circle</v-icon> </v-btn>
      </a>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Subject Characteristics Filter
      </v-card-title>

      <v-card-text>
        <div class="container">
          <p></p>
          <div class="section-container border-section-container">
            <div class="container">
              <div class="row">
                <div class="col-md-12 section-container-spacer">
                  <div class="text-center">
                    <p>Last updated May 11, 2022</p>
                    
                  </div>
                </div>
              </div>

              <b style="font-size: 24px" class="pb-8">
                Subject Characteristics 
              </b>
     
              
              <br />

          
              <p class="text-left pt-8">
                <b>
             
                    Subject Characteristics are defined as reports on age range, 
                    acceptable range of cognitive impairment, results on diagnostic 
                    tests, etc. Accurate reporting is needed for replication studies
                     that might be carried out in the future.

                         </b>
              </p>
              <ul>
                
               
                
                
              </ul>
              <br />

      
              
            </div>
          </div>

          <p></p>
        </div>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "SubCharInfo",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
