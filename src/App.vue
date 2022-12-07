<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <HeaderComp   :headerMenu='headerMenu' :headerImages="headerImages" />
    <Section1Comp :Section1images='Section1images' />
    <!-- <Section2Comp v-for="elem,ind in Section2Review " :key="ind"  :Section2Review="elem" /> -->
    <Section2Comp :Section2Review="Section2Review" />
    <Section3Comp :Section3Specials="Section3Specials" />
    <Section4Comp />
    <Section5Comp :Section5Team="Section5Team"/>
    <Section6Comp :Section6Logos="Section6Logos" />
    <Section7Comp :Section7images="Section7images" />
    <Section8Comp :Section8Events="Section8Events"/>
    <Section9Comp />
    <MainComp />
    <FooterComp  :Restaurants="Restaurants" :OpeningDay="OpeningDay" />

   
  </div>
</template>

<script>

import HeaderComp from   './components/HeaderComp.vue'
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
    
    //HEADER MENU
    
    headerMenu:[
      {
        name:'HOME',
        link:'/',
        dropdown:['1','2','3','4'],
        
      },
      {
       name:'PAGES',
       link:'/PAGES',
       dropdown:['1','2','3','4'],
       
      },
      {
        name:'MENU',
        link:'/MENU',
        dropdown:['1','2','3','4'],
         
      },
      {
        name:'EVENT',
        link:'/EVENT',
        dropdown:['1','2','3','4'],
         
      },
      {
       name:'BLOG',
       link:'/BLOG',
       dropdown:['1','2','3','4'],
         
      },
      {
        name:'LANDING',
        link:'/LANDING',
        dropdown:['1','2','3','4'],
         
      },
    ],


    //HEADER IMAGES

    headerImages:[
      {

        name:'Pizza-Crust',
        pizzaPath:'h3-rev-img-2.png',
        tagPath:'h3-rev-img-1.png',
        
      },

      {
        name:'Pizza-Taste',
        pizzaPath:'h3-rev-img-4.png',
        tagPath:'h3-rev-img-3.png'
      },

      {
        name:'Pizza-Urban',
        pizzaPath:'h3-rev-img-6.png',
        tagPath:'h3-rev-img-5.png',
      },

    ],
    
    // SECTION1 IMAGES

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
    ],

    //SECTION2 REVIEW

    Section2Review:[
      {
       review:'FORGET THE TRENDY PIZZA SHOP, THIS HIDDEN SPOT MAKE THE BEST NEW-YORK STYLE PIZZA SLICE IN NAPLES',
       author:'WASHINTON POST', 
      },
            {
       review:'THE ATTENTION TO EVEN THE SMALLEST DETAILS MAKES THIS PRODUCT ONE OF THE BEST ON MARKET',
       author:'NEW YORK TIMES', 
      },
      {
       review:"AS SOON AS YOU ENTER PEPPE'S, THE FEELING IS UNMISTAKABLE. YOU FEEL AT HOME IMMEDIATELY.'",
       author:'DAILY NEWS', 
      },
    ],


    //SECTION 3 SPECIALS

    Section3Specials:[
      {
        price:'10',
        name:'COMBO PICCOLO',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      },
            {
        price:'20',
        name:'COMBO MEZZO',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      },
            {
        price:'20',
        name:'COMBO GRANDE',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      }
    ],

    
    //SECTION 5 IMAGES

    Section5Team:[
      {
       name:'PETER ANDERSON',
       role:'Head Chef',
       path:'h1-team-1a.jpg',
       contacts:["fa-brands fa-instagram",'fa-brands fa-twitter','fa-brands fa-facebook'],
      },
       {
       name:'SHARON HAYES',
       role:'Executive Chef',
       path:'h1-team-2a.jpg',
       contacts:["fa-brands fa-instagram",'fa-brands fa-twitter','fa-brands fa-facebook'],
       
      },
       {
       name:'FRANK BAILEY',
       role:'Kitchen Porter',
       path:'h1-team-3a.jpg',
       contacts:["fa-brands fa-instagram",'fa-brands fa-twitter','fa-brands fa-facebook'],
        
      },
       {
       name:'CAROL SIMPSON',
       role:'Sous Chef',
       path:'h1-team-4a.jpg',
      contacts:["fa-brands fa-instagram",'fa-brands fa-twitter','fa-brands fa-facebook'],
       
      },
    ],

    //SECTION 6 LOGO'S

     Section6Logos:[
      {
       name:'BigCheese',
       path:'h1-clients-img-1.png', 
      },
       {
       name:'BludoosBar',
       path:'h1-clients-img-2.png', 
      },
       {
       name:'Gordon',
       path:'h1-clients-img-3.png',  
      },
       {
       name:'Cowboy',
       path:'h1-clients-img-4.png',  
      },
      {
       name:'Vegan',
       path:'h1-clients-img-5.png',  
      },
    ],

      //SECTION7 IMAGES

     Section7images:[
      {
       name:'BISMARK',
       path:'h3-product-img-1a.png',
       from:'30,00',
       to:'-0',
       discount:'14',
       discountedPrice:'',
       discountBadge:true,
       sold:false, 
      },
       {
       name:'FIORI DI ZUCCA',
       path:'h3-product-img-2a.png',
       from:'7,00',
       to:'-50,00',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:false,   
      },
       {
       name:'VALDOSTANA',
       path:'h3-product-img-3a.png',
       from:'-55,00',
       to:'0',
       
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:true,    
      },
       {
       name:'PIZZA TARTUFATA',
       path:'h3-product-img-4a.png',
       from:'45,00',
       to:'-0',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:false,    
      },
      {
       name:'FRANCESCANA',
       path:'h3-product-img-5a.png',
       from:'25,00',
       to:'-0',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:false,    
      },
       {
       name:'CAMPAGNOLA',
       path:'h3-product-img-6a.png',
       from:'50,00',
       to:'-95,00',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:false,    
      },
    ],

    //SECTION8 EVENTS-CARD

    Section8Events:[
      {
        day:'02',
        month:'NOV',
        title:'TRADITIONAL NEAPOLITAN PIES IN KYOTO PIAZZA MERCATO',
        geoTag:' 204 E. Pizzetta Tommaso'
      },
      {
        day:'03',
        month:'NOV',
        title:'SPACE OPENING THIS WEEKEND',
        geoTag:' 204 E. Pizzetta Tommaso'
      },
      {
        day:'05',
        month:'NOV',
        title:'SIENNA PRIVATE DINING ROOM WITH STÈPHANE BRUNN',
        geoTag:' 204 E. Pizzetta Tommaso'
      }
    ],

    //FOOTER RESTAURANT

    Restaurants:[
      {
        street:'1614 E. Bell Rd #104.',
        city:'Salerno',
        zipcode:'AZ 85022',
        pnumber:'(602) 867-1010',
      },
      {
        street:'204 E. Pizzetta Tommaso',
        city:'Sorrento',
        zipcode:'AZ 85022',
        pnumber:'(358) 867-1010',
      },
      {
        street:'Vale Puglia 54',
        city:'Torre Del Greco AZ',
        zipcode:'85022',
        pnumber:'(359) 867-1010',
      },
      {
        street:'Corso Itali AA',
        city:'Naples',
        zipcode:'AZ 85022',
        pnumber:'(989) 867-1010',
      },
    ],
      
      
    

    //FOOTER OPENING DAY

    OpeningDay:[
      {
        day:'MONDAY',
        opening:'',
        closing:'',
        KitchenClosed:true,

      },
       {
        day:'TUSEDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
       {
        day:'WEDNESDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
       {
        day:'THURSDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
       {
        day:'FRIDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
       {
        day:'SATURDAY',
        opening:'11.00',
        closing:'24.00',
        KitchenClosed:false,
        
      },
       {
        day:'SUNDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');


*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

li{
   list-style-type: none;
}



#app {
 
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
