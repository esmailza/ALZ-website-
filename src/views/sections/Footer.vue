<template>
  <div>
    <v-footer id="home-footer" class="primary" dark min-height="72">
      <v-container>
        <v-row>
          <social-media />
          </v-row>
        <v-row class="align-center">
          <v-col
            class="py-4 white--text text-center text-lg-left"
            cols="12"
            lg="6"
          >
            <v-btn
              v-for="link in links"
              :key="link.urlname"
              color="white"
              text
              rounded
              class="my-2"
              :to="link.url"
            >
              {{ link.urlname }}
            </v-btn>
          </v-col>
          <v-col class="text-center text-lg-right white--text" cols="12" lg="6">
            <strong> ACTION | UNLV &copy; </strong>
            {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
       
      </v-container>
    </v-footer>
  </div>
</template>


<script>
import SocialMedia from './SocialMedia.vue';
export default {
  name: "HomeFooter",
  components: {SocialMedia},
  data: () => ({
    links: [
      { urlname: "About", url: "About" },
      { urlname: "Explore Drugs", url: "Explore-Drugs" },
      { urlname: "Explore Trials", url: "Explore-Trials" },
      { urlname: "Publications", url: "Publications" },
    ],
  }),
};
</script>

<style  lang="sass">

.v-card__title
  word-break: break-word !important

.white--text
  text-decoration: none

.theme--dark.v-expansion-panels .v-expansion-panel
  background-color: transparent !important

.v-application a
  text-decoration: none
  
</style>
