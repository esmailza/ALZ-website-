<template>
  <div id="app">
    <v-container fluid grid-list-xl>
      <v-layout align-center wrap>
        <v-combobox
          v-model="selectedItems"
          :items="items"
          label="Pick item(s)"
          multiple
          filled
        >
          <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle">
              <v-list-item-action>
                <v-icon
                  :color="selectedItems.length > 0 ? 'indigo darken-4' : ''"
                  >{{ icon }}</v-icon
                >
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Select All</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
          </template>
        </v-combobox>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SelectFilter",
  props: {
    items: Array,
    selectedItem: Array,
  },
  data() {
    return {
      searchKey: "",
      myItems: this.items,
      selectedItems: this.selectedItem,
    };
  },
  watch: {
    selectedItems: function (newItems) {
      this.$nextTick(() => {
        this.$emit("onChange", newItems);
      });
    },
  },

  computed: {
    likesAllItems() {
      return this.selectedItems.length === this.myItems.length;
    },

    likesSomeItems() {
      return this.selectedItems.length > 0 && !this.likesAllItems;
    },
    icon() {
      if (this.likesAllItems) return "mdi-close-box";
      if (this.likesSomeItems) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllItems) {
          this.selectedItems = [];
        } else {
          this.selectedItems = this.myItems.slice();
        }
      });
    },
  },
};
</script>