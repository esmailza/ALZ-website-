<template>
  <v-dialog v-model="dialog" width="700" :retain-focus="false">
    <template v-slot:activator="{ on, attrs }">
      <a
        color="red lighten-2"
        v-bind="attrs"
        v-on="on"
        @click="$emit('click-link')"
      >
       Click here to get more information about the filters
      </a>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Filter Information
      </v-card-title>

      <v-card-text>
        <div class="container">
          <p></p>
          <div class="section-container border-section-container">
            <div class="container">
              <div class="row">
                <div class="col-md-12 section-container-spacer">
                  <div class="text-center">
                    <p>Last updated June 24, 2021</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
                      <a href="http://web.cs.unlv.edu" title="">
                        web.cs.unlv.edu
                      </a>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
                      collect.
                    </p>
                  </div>
                </div>
              </div>

              <b style="font-size: 24px">
                1. voluptate velit esse cillum dolore 
              </b>
              <p>
                <b> In Short:</b>
                <i>We collect information that you provide to us.</i>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
              </p>
              <ul>
                <li>
                  <b> deserunt mollit anim id est laborum.</b> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
                </li>
              </ul>
              <br />

              <b style="font-size: 24px">
                2.  voluptate velit esse cillum dolore 
              </b>
              <p>
                <b> voluptate velit esse cillum dolore </b>
                <i>
                  We process your information for purposes based on legitimate
                  business interests, the fulfillment of our contract with you,
                  compliance with our legal obligations, and/or your consent.
                </i>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
              </p>
              <ul>
                <li>
                  <b>  voluptate velit esse cillum dolore  </b>
                </li>
                <li>
                  <b> voluptate velit esse cillum dolore  </b> We may use your information to
                  request feedback and to contact you about your use of our app.
                </li>
                <li>
                  <b>  voluptate velit esse cillum dolore  </b> We may use your information
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
                </li>
                <li>
                  <b>  voluptate velit esse cillum dolore  </b> We may use your information
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
                </li>
                <li>
                  <b>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
                  </b>
                </li>
                <li>
                  <b>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum.
                  </b>
                </li>
              </ul>
              <br />

      
              
            </div>
          </div>

          <p></p>
        </div>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "FilterInfo",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
