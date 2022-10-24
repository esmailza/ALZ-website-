<template>
  <v-container fluid grid-list-xl>
    <v-layout align-center wrap>
      
      <v-checkbox class="col-12 ma-0 pa-0"
      v-on:change="() => {$emit('onChange', selected)}"
        v-for="(item, i) in items"
        :key="i"
        v-model="selected"
        :label="item"
        :value="item"
      ></v-checkbox>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "CheckBox",
  data() {
    return {
      selected: this.selectedItem,
      myItems: this.items,
    };
  },
  props: {
    selectedItem: Array,
    items: Array,
  },
};
</script>
