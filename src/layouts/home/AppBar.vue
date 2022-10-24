<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="120"
    >
      <router-link to="/">
        <base-img
          :src="require('@/assets/logo_new.png')"
          class="mr-3"
          contain
          max-width="145"
          width="100%"
        />
      </router-link>

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          hide-slider
          background-color="transparent"
        >
          <div  v-for="item in items" :key="item.title">
            <v-tab 
              v-if="item.title != 'Data'"
              :to="item.title === 'Home' ? '/Home' : item.to"
              :ripple="false"
            
              min-width="100"
              @change="change"
              text
              class="app-heading"
            
            >
              {{ item.title }}
            </v-tab>
            <v-btn 
              v-else-if="item.title === 'Data'"
              class="app-heading"
              elevation="0"
              height="100%"
            >
              <v-menu offset-y :ripple="false" min-width="100" text>
                <template v-slot:activator="{ on, attrs }" style="height: 100%">
                  <div
                    v-bind="attrs"
                    v-on="on"
                    id="explore-tab"
                    class="d-flex align-center app-heading"
                    style="height: 100%; padding: 0 16px"
                  >
                    {{ item.title }}
                    <v-icon right> mdi-menu-down </v-icon>
                  </div>
                </template>

                <v-list>
                  <v-tabs vertical>
                    <v-tab 
                      class="  px-9"
                      v-for="(item, index) in explore"
                      :key="`${index}-vertical`"
                      :to="item.to"
                      :ripple="false"
                      @change="exploreChange"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-tab>
                  </v-tabs>
                </v-list>
              </v-menu>
            </v-btn>
          </div>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar >
    <v-btn
     
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" fixed left temporary id="myDiv">
      <div v-for="item in items" :key="item.title">
        <div v-if="item.title === 'Explore'">
          <v-list-item link :to="item.to" id="explore-tab-mobile">
            <div class="d-flex " style="top: -12px">
              <v-menu :ripple="false" min-width="96" top text offset-x offset-y>
                <template v-slot:activator="{ on, attrs }" style="top: -15px">
                  <div v-bind="attrs" v-on="on" class="d-flex align-center">
                    <v-list-item-icon style="margin-left: 0px">
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title id="explore-tab-mobile-title">
                      {{ item.title }}
                    </v-list-item-title>
                    <v-icon right> mdi-menu-right </v-icon>
                  </div>
                </template>

                <v-list>
                  <v-tabs vertical>
                    <v-tab
                      @change="exploreChange"
                      class="px-9 app-heading"
                      v-for="(item, index) in explore"
                      :key="`mobile-${index}`"
                      :to="item.to"
                      :ripple="false"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-tab>
                  </v-tabs>
                </v-list>
              </v-menu>
            </div>
          </v-list-item>
        </div>
        <v-list-item v-else link :to="item.title === 'Home' ? '/Home' : item.to">
          <div class="d-flex" @click="change">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </div>
        </v-list-item>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  components: {},
  name: "HomeAppBar",

  data: () => ({
    fab: false,
    drawer: null,
    group: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", to: "Home" },
      { title: "Data", icon: "mdi-newspaper", to: "" },
      {
        title: "Publications",
        icon: "mdi-chart-areaspline",
        to: "Publications",
      },
      { title: "About Us", icon: "mdi-information", to: "About" },
    ],
    explore: [
      { title: "Trials", icon: "mdi-view-dashboard", to: "Explore-Trials" },
      // { title: "Drugs", icon: "mdi-newspaper", to: "Explore-Drugs" },
    
      
    ],
  }),
  methods: {
    /**
     * will simply show the scroll to top button when the user scrolls down
     */
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    /**
     * this function gets called once the user clicks on the scroll to top button,
     * which takes the user to the top of the page
     */
    toTop() {
      this.$vuetify.goTo(0);
    },
    /**
     * this function gets called when the user clicks on any of the "Explore" dropdown tabs,
     * which will make the Explore tab active.
     */
    exploreChange() {
      document.getElementById("explore-tab").style.color = "#b0181e";
      document.getElementById("explore-tab-mobile-title").style.color =
        "#b0181e";
      document.getElementById("explore-tab").style.backgroundColor = "#f6e4e5";
      document.getElementById("explore-tab-mobile").style.backgroundColor =
        "#f6e4e5";
    },
    /**
     * this function gets called when the user clicks on any of the AppBar tabs, except 
     * for the Explore tab, which will take off the active affect of the Explore tab
     */
    change() {
      document.getElementById("explore-tab-mobile-title").style.color = "";
      document.getElementById("explore-tab").style.color = "";
      document.getElementById("explore-tab-mobile").style.backgroundColor = "";
      document.getElementById("explore-tab").style.backgroundColor = "";
    },
  },
};
</script>

<style lang="sass">
#home-app-bar

  .v-tabs-slider
    max-width: 28px
    margin: 0 auto

    .v-tab
      &::before
        display: none
  .theme--light.v-btn
    color: #0000008a

  .v-btn__content
    height: 100%

  .v-btn:not(.v-btn--round).v-size--default
    padding: 0 0

  .v-tab--active.v-tab:not(:focus)::before
    opacity: 0.12

  
</style>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap');

.app-heading {
  height: 100%; 
  font-size: 25px; 
  text-transform: none;
font-family: 'Work Sans', sans-serif;

}

</style>

