<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <HeaderComp />
    <MainComp />
    <FooterComp />
   
  </div>
</template>

<script>

import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

// import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
