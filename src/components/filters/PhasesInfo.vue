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
        Phases Filter 
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
                 Phases
              </b>
     
              
              <br />

          
              <p class="text-left pt-8">
                <b>
             <p>
              There are three phases to complete in the clinical trial process before a sponsor can 
              submit their treatments* to the FDA for consideration to be sold on the market. Each 
              stage of a clinical trial has its own purpose in ensuring that a treatment is safe
              and effective for use by the public.
             </p>
             <p>
              The purpose of Phase 1 is to ensure that the treatment is safe in humans and to determine 
              how and where it distributes within the body. This testing normally takes place with a small
               group of healthy volunteers. The trial sponsor monitors for potential “serious adverse
                events”— that is, any toxic, undesirable, or unwanted effect that causes death or danger
                 to health, like a disability or permanent damage, or other serious medical conditions.
                  At the end of Phase 1, the results are collected, analyzed, and submitted to the FDA
                   for permission to proceed to Phase 2 Clinical Trials.
             </p>
              <p>
            The purpose of a Phase 2 Clinical Trial is to determine the right dosage and effectiveness
             in treating that particular disease. This testing normally takes place with a larger number
              of volunteers who have the disease. There are many different ways that a trial sponsor can
               conduct their trial, but the plan normally involves assigning participants to different
                treatment groups, where each group can receive different doses or delivery of the treatment.
                 Normally, there is a “control group” that receives either the current standard of care, if
                  another type of treatment is already available on the market for that disease, or a “placebo”
                   treatment, such as a sugar pill or harmless injection that does not contain the treatment.
                   </p>

                <p>
                A Phase 3 Clinical Trial involves a much larger group of volunteers and primarily focuses on
                 determining whether the treatment* would be safe and effective for a wide variety of people.
                  The plan normally involves assigning participants to treatment or control groups. There can
                   be more than one treatment group, especially if the treatment involves a combination of drugs
                    or different components. Again, there is a control group that receives either the current
                     standard of care regiment or a placebo treatment.
                     </p>

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
  name: "PhasesInfo",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
