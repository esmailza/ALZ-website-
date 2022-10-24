<template>
  <form>
    <v-container>
      <v-row class="align-center justify-center">
        <v-col cols="12" lg="4">
          <v-text-field
            light
            clearable
            background-color="white"
            v-model="name"
            :error-messages="nameErrors"
            :counter="15"
            outlined
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="4">
          <v-text-field
            outlined
            background-color="white"
            light
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
        <!-- <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select> -->
      </v-row>
      <v-row class="align-center justify-center">
        <v-col cols="12" md="8">
          <v-textarea
            outlined
            name="input-7-4"
            label="Your Question"
            :error-messages="messageErrors"

            v-model="message"
            required
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="mt-0 align-center justify-center">
        <v-col cols="12" md="8">
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row class="mt-0 align-center justify-center">
        <v-col cols="12" md="8">
          <v-btn class="mr-4 primary" @click="submit"> submit </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>
<script>
// import Vue from 'vue'
// import vuelidate from 'vuelidate'

// Vue.use(window.vuelidate.default)
// const { required, minLength } = window.validators

// const { required, maxLength, email } = require('vuelidate/lib/validators')
// var validationMixin = window.vuelidate.validationMixin

const { validationMixin } = require("vuelidate");
const { required, maxLength, email } = require("vuelidate/lib/validators");
// Vue.component("NewsLetter", NewsLetter)
// Vue.use(vuelidate.default)

export default {
  name: "FAQForm",
  //   el: '#app',
  //   vuetify: new Vuetify(),
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(15) },
    email: { required, email },
    message: { required, maxLength: maxLength(150) },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    message: "",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Message must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },

    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.maxLength &&
        errors.push("Name must be at most 150 characters long");
      !this.$v.message.required && errors.push("Message is required.");
      return errors;
    },
  },

  methods: {
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