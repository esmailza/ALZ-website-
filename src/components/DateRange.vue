<template >

  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="myDates"
    transition="scale-transition"
    offset-y
    min-width="auto"
    
  >
    <template v-slot:activator="{ on, attrs }">
      <v-combobox
        v-model="myDates"
        multiple
        chips
        small-chips
        filled
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      
      
      ></v-combobox>
      <!-- $emit('onChange', myDates) -->
    </template>
    <v-date-picker range v-model="myDates" no-title scrollable  v-on:change="() => {$emit('onChange', myDates)}">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(myDates)"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: "DateRange",
  data(){
    return {
    myDates: this.dates,
    menu: false,
    }
  },

  props: {
    dates: Array,
  }
};
</script>
