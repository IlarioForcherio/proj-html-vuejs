<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <HeaderComp :headerMenu='headerMenu' />
    <Section1Comp :Section1images='Section1images' />
    <Section2Comp />
    <Section3Comp />
    <Section4Comp />
    <Section5Comp />
    <Section6Comp />
    <Section7Comp />
    <Section8Comp />
    <Section9Comp />
    <MainComp />
    <FooterComp />

   
  </div>
</template>

<script>

import HeaderComp from './components/HeaderComp.vue'
import Section1Comp from './components/Section1Comp.vue'
import Section2Comp from './components/Section2Comp.vue'
import Section3Comp from './components/Section3Comp.vue'
import Section4Comp from './components/Section4Comp.vue'
import Section5Comp from './components/Section5Comp.vue'
import Section6Comp from './components/Section6Comp.vue'
import Section7Comp from './components/Section7Comp.vue'
import Section8Comp from './components/Section8Comp.vue'
import Section9Comp from './components/Section9Comp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

// import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderComp,
    Section1Comp,
    Section2Comp,
    Section3Comp,
    Section4Comp,
    Section5Comp,
    Section6Comp,
    Section7Comp,
    Section8Comp,
    Section9Comp,
    MainComp,
    FooterComp
  },
  data(){
    return{
    
    //Header Menu 
    
    headerMenu:[
      {
        name:'HOME',
        link:'/',
      },
      {
       name:'PAGES',
       link:'/PAGES', 
      },
      {
        name:'MENU',
        link:'/MENU', 
      },
      {
        name:'EVENT',
        link:'/EVENT', 
      },
      {
       name:'BLOG',
       link:'/BLOG',  
      },
      {
        name:'LANDING',
        link:'/LANDING', 
      },
    ],
    
    // Jumbo Images

    Section1images:[
      {
       name:'Flyng birds',
       path:'h3-img-1.jpg', 
      },
       {
       name:'Good Pizza',
       path:'h3-img-2.jpg', 
      },
       {
       name:'Elvis',
       path:'h3-img-3.jpg',  
      },
       {
       name:'Big Pizza',
       path:'h3-img-4.jpg',  
      },
    ]

    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');


*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
