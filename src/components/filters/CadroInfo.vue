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
        CADRO Target Categories Filter Information
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
                 CADRO Target Categories 
              </b>
     
              
              <br />

          
              <p class="text-left pt-8">
                <b>
             
                 CADRO Target Categories are defined as Common Alzheimer’s 
                 and Related Dementias Research Ontology (CADRO) systematizes
                  the pathological underpinnings of AD that are the current drug
                   targets relevant to AD and provides a framework for classifying
                    treatment mechanisms. The following target classes for AD are
                     defined in CADRO: amyloid, tau, apolipoprotein E (ApoE)/lipids/lipoprotein
                      receptors, neurotransmitter receptors, neurogenesis, inflammation, 
                      oxidative stress, cell death, proteostasis/ proteinopathies,
                       metabolism/bioenergetics, vasculature, growth factors/hormones,
                        synaptic plasticity/neuroprotection, epigenetics, gut-brain axis,
                         circadian rhythm, environmental factors, others, and unknown.
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
  name: "CadroInfro",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
