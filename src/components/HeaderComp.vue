<template>
    <div class="header">
       <!-- navbar -->
        <nav>
            <div>
                <button>ORDER ONLINE</button>
            </div>
            <div class="menu">
                <div><a href=""  v-for="(elem,index) in firstMenu" :key="index" >{{ elem.name }} </a></div>
                <img src="../assets/img/h5-logo-divided-header.png" alt="">
                <div><a href="" v-for="(elem, index) in secondMenu" :key="index">{{elem.name}}</a></div>
            <!-- cart-search -->
            </div>
            <div>
                cart
                search
            </div>
        </nav>
        <!-- img-text-timing -->
        <div class="header-img">
            <img src="../assets/img/h3-rev-img-5.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeaderComp',
        components:{

        },
        props:{
        headerMenu:Array
        },
        data(){
            return{
            prova:[],
            firstMenu:[],
            secondMenu:[]
            }
        },
        mounted(){
        this.divideMenu()
        },
        methods:{
        divideMenu(){

           this.firstMenu = this.headerMenu.slice(0,3)
           //console.log(this.firstMenu)
           this.secondMenu =  this.headerMenu.slice(3)
           //console.log(this.secondMenu)

        }
        }
    }
</script>

<style lang="scss" scoped>

@import "../assets/style/utility.scss";



.header{

    color: white;
    padding-bottom:100px;
    background-image: url('../assets/img/sky-1475274047050-1d0c0975c63e.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    a{
        padding-right:10px;
        color:white;
        text-decoration: none;
    }

    nav{
       padding-top:40px; 
       display:flex;
       align-items: center;
       justify-content: space-around;
        width: 90%;
        margin:0 auto;
        
        button{
            padding:10px 20px;
            font-size: 0.9rem;
            cursor: pointer;
        }

        .menu{
            display: flex;
             align-items: center;
             justify-content: center;
            img{
                width: 20%;
            }
        }
    }

     .header-img {
      
     display:flex;
     justify-content: center;

     img{
        width: 55%;
     }
     }
}

</style>