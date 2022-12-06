<template>
    <div>
        <nav>
            <div>
                <button>ORDER ONLINE</button>
            </div>
            <!-- voci menu -->
            <div class="menu">
                <img class="mustacheSvg" src="../assets/svg/svg-0.svg" alt="">
                <ul v-for="(elem,ind) in firstMenu" :key="ind + 'a'">
                    <li><a href="#">{{ elem.name }} </a></li>
                   <li class="dropdown" v-for="element,n in elem.dropdown " :key="n + 'b'"  >{{element}}</li>
                </ul>
                <img src="../assets/img/h5-logo-divided-header.png" alt="">
                <ul v-for="(elem,index) in secondMenu" :key="index + 'c'">
                    <li><a href="#">{{ elem.name }} </a></li>
                    <li class="dropdown" v-for="element,x in elem.dropdown " :key="x + 'd'" >{{element}}</li>
                </ul>
            </div>
            <!-- cart-search -->
            <div class="cartSearch">
                <img class="cartSvg" src="../assets/svg/svg-1.svg" alt="">
                <a href="">CART</a>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <a href="">SEARCH</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavbarComp',
    components: {

    },
    props: {
        headerMenu: Array
    },
    data() {
        return {
            prova: [],
            firstMenu: [],
            secondMenu: [],
            isHovering: false
        }
    },
    mounted() {
        this.divideMenu()
    },
    methods: {
        divideMenu() {

            this.firstMenu = this.headerMenu.slice(0, 3)
            //console.log(this.firstMenu)
            this.secondMenu = this.headerMenu.slice(3)
            //console.log(this.secondMenu)
            //console.log(this.isHovering)

        }
    }
}
</script>

<style lang="scss" scoped>



.flex{
    display: flex;
}

nav {
    //height: 30vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    .cartSearch {
        display: flex;
        a {
            word-spacing: 10px;
            letter-spacing: 5px;
            font-weight: bold;
            color: white;
            margin-left: 5px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        .cartSvg {
            filter: invert(100%);
        }
    }
    button {
        color: white;
        background-color: #d2401e;
        border: 0px;
        padding: 10px 20px;
        letter-spacing: 5px;
        font-size: 0.7rem;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
        cursor: pointer;
    }
    .menu {
        //height: 10vh;
        display: flex;
        align-items: center;
       // justify-content: center;
        ul {
            position: relative;
            //margin-top: 100px;
            padding: 0px 20px;
            //padding-top: 100px;
            li {
              
                color: rgb(0, 4, 255);
                //display: inline;

                a {
                    word-spacing: 10px;
                    letter-spacing: 5px;
                    font-weight: bold;
                    color: white;
                    text-decoration: none; //border-bottom:1px solid white;
                    text-align: center;
                }

            }

        }
         
       //HOVER

       .dropdown{
        position: absolute;
        z-index:2;
        //top: 0px;
        display: none;
        
       }
        
         ul:hover  .dropdown{
            display: block;
         }

        .mustacheSvg {
            filter: invert(100%);
            width: 25px;
        }
        img {
            width: 20%;
        }
    }
}
</style>