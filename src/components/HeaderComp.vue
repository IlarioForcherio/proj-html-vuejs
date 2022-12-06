<template>
    <div class="header">
        <!-- navbar -->
          <NavbarComp  :headerMenu="headerMenu"/>
        <!-- img-text-timing -->
        <div class="header-img">
            <div class="pizzaTag" ><img src="../assets/img/h3-rev-img-5.png" alt=""></div>
            <div class="pizzaSlice"><img src="../assets/img/h3-rev-img-4.png" alt=""></div>
        </div>
    </div>
</template>
<script>

import NavbarComp from   '../components/NavbarComp.vue'

export default {
    name: 'HeaderComp',
    components: {
     NavbarComp,
    },
    props: {
        headerMenu: Array
    },
    data() {
        return {

        }
    },
    mounted() {
       
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/utility.scss";




//  <div class="dropdown" :class="(isHovering) ? 'blue' : 'red'">menu</div>  
//  @mouseover="isHovering=true" @mouseout="isHovering=false"





.header {
    
    color: white;
    padding-bottom: 100px;
    background-image: url('../assets/img/sky-1475274047050-1d0c0975c63e.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


    .header-img {
        display: flex;
        justify-content: center;
        position: relative;

        .pizzaTag{
            display: flex;
            justify-content: center;

        }

        .pizzaSlice{
            display: flex;
            justify-content: center;
            position: absolute;
        }
        img {
            width: 80%;
        }
    }


}
</style>