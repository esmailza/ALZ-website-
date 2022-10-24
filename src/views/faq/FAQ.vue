
<template>
  <div>
    <v-img
      :min-height="minHeight"
      class="white--text"
      gradient="45deg, rgb(0 0 0 / 19%), rgb(176 31 36 / 23%)"
    >
      <v-container
        class="px-3 py-15 pl-lg-8 pl-md-8 pt-xl-9"
        style="padding-right: 59px; margin-left: 0; height: 100%"
      >
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <div class="rounded-lg pa-4" style="background-color: #0000006e">
            <div class="text-h6 text-md-h3">
              <v-icon x-large color="white"> mdi-magnify </v-icon>
              Ask us anything
            </div>
          </div>
        </v-responsive>
      </v-container>
    </v-img>

    <v-container style="max-width: 150vh">
      <v-row class="justify-center align-center flex-column">
        <base-avatar-card
          class="mb-0"
          align="center"
          justify="center"
          color="primary"
          dark
          icon="mdi-pencil-box-outline"
          id="myCard"
        />

        <base-section-heading title="Frequently Asked Questions (FAQ)">
        </base-section-heading>
      </v-row>
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header class="text-h6" >Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>


        <v-row class="justify-center align-center flex-column mt-10">
        <base-avatar-card
          class="mb-0"
          align="center"
          justify="center"
          color="primary"
          dark
          icon="mdi-help"
          id="myCard"
        />

        <base-section-heading title="Submit Your Question">
        </base-section-heading>
      </v-row>
        <FAQForm/>




    </v-container>
  </div>
</template>
<script>
import FAQForm from '../../components/FAQForm.vue';
export default {
  components: { FAQForm },
  name: "FAQ",

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "60vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px - ${this.$vuetify.application.top}px) `;
    },
  },
};
</script>
<style scoped>
 #myCard{
   margin-bottom: 0 !important;
   padding-top: 3vh !important;
 }
</style>