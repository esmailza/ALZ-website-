<template>
  <v-data-table
    :headers="headers"
    :items="data"
    light
    :loading="load"
    :items-per-page="5"
    class="elevation-2"
  ></v-data-table>
</template>

<script>
export default {
  name: "Table",
  props: {
      load: {type: Boolean, default: true},
      myData: {type: Array},
      myHeaders: {type: Array},
  },
  created(){
    console.log('Table component got created')
    console.log(this.myData)
  },
  data() {
    return {
      data: this.myData,
      headers: this.myHeaders,
    };
  },
};
</script>