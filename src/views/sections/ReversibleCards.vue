<template>
  <div data-aos="fade-up">
    <v-card
      class="
        card-outter
        spacing-playground
        pa-6
        ma-auto
        d-flex
        align-center
        flex-column
      "
      :width="450"
      :height="750"
    >
      <v-img
        :contain="false"
        :max-width="maxWidth"
        :max-height="maxHeight"
        :src="require(`@/assets/${filename}`)"
      ></v-img>

      <v-card-title
        class="d-flex text-center text-md-h5 text-subtitle-1"
        style="flex-basis: auto; min-height: 96px; color: #3c3c3c"
      >
        {{ Name }}
      </v-card-title>

      <v-card-text
        class="text-center text-lg-h5 text-subtitle-2"
        style="color: #757575; line-height = 180%"
      >
        {{ description }}
      </v-card-text>
    </v-card>
  </div>
</template>





<script>
export default {
  name: "ReversibleCards",
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 200;
        case "sm":
          return 200;
        case "md":
          return 344;
        case "lg":
          return 344;
        case "xl":
          return 344;
        default:
          return 200;
      }
    },
  },
  props: {
    description: { required: true, type: String },
    Name: { required: true, type: String },
    filename: { required: true, type: String },
    done: { default: false, type: Boolean },
    maxWidth: { type: String }, // v-img
    maxHeight: { type: String }, // v-img
    link: { type: String }, //link for the action button
  },

  data: () => ({
    show: false,
  }),
};
</script>


<style scoped>
/* For fixing the btns position */
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>