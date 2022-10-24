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
        Mechanism of Action Classes Filter
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
                Mechanism of Action Classes
              </b>
     
              
              <br />

          
              <p class="text-left pt-8">
                <b>
             
                We use the Common Alzheimer's and Related Dementias Research Ontology (CADRO)
                 to classify treatment targets and mechanisms of action. 
                For mechanism of action (MOA), we classified agents using the CADRO5 approach.
                 Some agents have more than one mechanism of action and, in these cases,
                  we noted both mechanisms and depended on the available literature to identify 
                  a dominant mechanism. We use the terminology of “symptomatic” treatments for
                   agents whose purpose was cognitive enhancement or control of neuropsychiatric 
                   symptoms without claiming to impact the biological causes of cell death in AD, 
                   and we used the terminology of “disease-modifying” for treatments that intended 
                   to change the biology of AD and produce neuroprotection (often through a variety 
                   of intermediate mechanisms such as effects on amyloid or tau). We divided disease-modifying therapies (DMTs)
                    into biologics and small molecules. Biologics are generally derived from living 
                    organisms and include antibodies, vaccines, antisense oligonucleotides (ASOs), 
                    and therapeutic proteins. “Small molecules” refers to drugs typically taken orally 
                    that are &lt; 500 daltons in size and can regulate a biological process. 

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
  name: "MoAInfo",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
