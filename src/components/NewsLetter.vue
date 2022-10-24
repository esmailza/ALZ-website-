<template>
  <form>
    <v-container>
      <div class=" row align-baseline">
        <div class="col-12">
          <v-text-field
            class="text-lg-h5"
            solo
            background-color="white"
            light
            v-model="name"
            :error-messages="nameErrors"
            :counter="15"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </div>
        <div class="col-12 py-0">
          <v-text-field
            solo
            background-color="white"
            light
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </div>

        <div class=" col-12 py-0">
          <v-row>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            >
              <div slot="label" class="text-lg-h6" style="letter-spacing: -0.015em;">
                Do you agree with our
                <privacy-policy @click-link="clickLink" />
                and
                <term-of-service @click-link="clickLink" />?</div></v-checkbox
            >
          </v-row>
        </div>

        <v-col class="d-flex justify-center fill-width pt-16">
          <v-btn x-large
      rounded class="primary text-lg-h5 " @click="submit"> Sign Up </v-btn>
        </v-col>
      </div>
      <v-row> </v-row>
    </v-container>
  </form>
</template>
<script>
import PrivacyPolicy from "./PrivacyPolicy.vue";
import TermOfService from "./TermOfService.vue";

const { validationMixin } = require("vuelidate");
const { required, maxLength, email } = require("vuelidate/lib/validators");

export default {
  components: { PrivacyPolicy, TermOfService },
  name: "NewsLetter",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(15) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    dialog: false,
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  computed: {
    /**
     * must agree to the terms/policy
     */
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },

    /**
     * Name is required and must be at most 10 character long
     */
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    /**
     * Email is required and must be a valid email
     */
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    /**
     * prevent the checkbox being selected if the user clicks on the privacy policy or terms of condition
     */
    clickLink() {
      this.checkbox = !this.checkbox;
    },
    submit() {
      if (!this.$v.$invalid) console.log("everything is good");
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
<style >
.theme--light.v-counter {
  color: white !important;
}
</style>