
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Home' },

    extends: View,

    mixins: [
      LoadSections([
        'looped-video',
        'mission',
        'posts',
        'support-slider',
        'donation',
        'sign-up', 
        // 'social-media',  
        'footer',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>

<style>
.theme--light.v-application {
    background: #fafafa;
   
}
</style>
