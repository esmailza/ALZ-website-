<template>

  <v-theme-provider :dark="dark" class="pa-8">
    
    <v-container >
      <v-row
        :justify="justify"
        no-gutters
      >
        <v-col
          v-if="icon"
          :class="`text-${align}`"
          cols="12"
          class="mb-4"
        >
          <base-icon :color="color">
            {{ icon }}
          </base-icon>
        </v-col>

        <v-col
          v-if="title || subtitle"
          :cols="callout ? 9 : 12"
        >
          <base-subtitle
            v-if="subtitle"
            :title="subtitle"
            space="1"
          />

          <base-title
            :title="title"
           
            space="1"
          />
    

         
          <base-body
            v-if="text || $slots.default"
            :text="text"
            class = "text-body-2"
            
            space="1"
          >
            <slot />
          </base-body>
          
        </v-col>

        <v-col
          v-if="callout"
          cols="2"
        >
          <div
            class="text-h2 grey--text text--lighten-4 font-weight-bold pr-8"
            v-text="callout"
          />
          
        </v-col>
        <v-col>
              <v-card-actions class="justify-center"> 
              <v-btn
                
                color= primary
                :href="href"
                @click="reveal = true"
                
              >
                Learn More
              </v-btn>
              </v-card-actions>

        </v-col>
      </v-row>
    </v-container>
   
  </v-theme-provider>
   
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseInfoCard',

    mixins: [Heading],

    props: {
      dark: Boolean,
      callout: String,
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      subtitle: String,
      text: String,
      title: String,
      href: String,
    },
  }
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.9)
  >.v-card-title
    color: #000
</style>