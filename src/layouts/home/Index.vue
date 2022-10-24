<template>
  <v-app>
    <home-app-bar />

    <home-view />
    

    <home-footer/>
    

  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',
  

    components: {

      HomeAppBar: () => import('@/layouts/home/AppBar'),
    
      // HomeSettings: () => import('@/layouts/home/Settings'),
      
      HomeView: () => import('@/layouts/home/View'),
    
    },

    data: () => ({
      login_checker : false,


    })
  }
</script>
