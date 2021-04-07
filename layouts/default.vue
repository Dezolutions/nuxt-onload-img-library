<template>
  <v-app>  
    
    <v-container fluid>
      <Navbar/>
      <nuxt />
    </v-container>    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>
