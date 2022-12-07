<template>
    <div class="header">
        <!-- navbar -->
        <NavbarComp :headerMenu="headerMenu" />
        <!-- img-text-timing -->
    
        <div class="header-img">
            <!-- <div>left</div> -->
            <div class="pizzaTag"><img :src="require(`../assets/img/${headerImages[dinamicIndex].tagPath}`) " alt=""></div>
            <div class="pizzaSlice"><img :src="require(`../assets/img/${headerImages[dinamicIndex].pizzaPath}`) " alt=""></div>
            <!-- <div @click="scorriImmagineRight()">right</div> -->
        </div>
       
    </div>
</template>

<script>
import NavbarComp from '../components/NavbarComp.vue'

export default {
    name: 'HeaderComp',
    components: {
        NavbarComp,
    },
    props: {
        headerMenu: Array,
        headerImages: Array
    },
    data() {
        return {

            dinamicIndex: 0,

        }
    },
    mounted() {
        this.attivaIntervallo();
    },
    methods: {




        scorriImmagineRight: function() {

            if (this.dinamicIndex < this.headerImages.length - 1) {
                this.dinamicIndex++;
            } else {
                this.dinamicIndex = 0;
            }
           
        },

        scorriImmagineLeft: function() {

            if (this.dinamicIndex < this.headerImages.length) {
                this.dinamicIndex--;
            }
            if (this.dinamicIndex <= -1) {
                this.dinamicIndex = this.headerImages.length - 1;
            }
        },


        attivaIntervallo: function() {
            setInterval(() => { this.scorriImmagineLeft() }, 2000);
        },

    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/utility.scss";
.header {
    color: white;
    padding-top: 0px;
    background-image: url('https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-rev-bckgrnd-ing.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    .header-img {
        display: flex;
        justify-content: space-around;
        position: relative;
        padding-top: 30px;
        .pizzaTag {
            display: flex;
            justify-content: center;
            img {
                width: 85%;
            }
        }
        .pizzaSlice {
            display: flex;
            justify-content: center;
            position: absolute;
        }
        img {
            width: 70%;
        }
    }
}
</style>