// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#b0181e',
        secondary: '#120460',
        accent: '#E0E3DD',
        lightBlue: '#A8DADC',
        orange: '#FECF72',
        lightRed: '#FFEBEE',
      },
      dark: {
        primary: '#fffff',
        secondary: '#B0181E',
        accent: '#B0181E',
      },
    },
  },
})
