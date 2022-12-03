<template>
    <div class="section7">
      <div class="sec7Text">
        <h6>CHOOSE YOUR FLAVOUR</h6>
        <h2>THE BEST PIZZA MENU IN TOWN</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate mollitia</p>
      </div>
      <div class="sec7Card">
        <img src="../assets/img/h3-product-img-1a-100x100.png" alt="">
        <div>Name</div>
        <div>Price</div>
      </div>
    </div>
</template>

<script>
     export default {
        name:'Section7Comp',
        components:{

        },
        props:{

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

<style lang="scss" scoped>

.section7{

    .sec7Text{
       text-align: center;
       font-family: 'Oswald', sans-serif;
       h6{
        color:#d7573c;
       }
    }
    .sec7Card{
        width: calc(100% / 6);
        display: flex;
        flex-direction: column;
        text-align: center;
        img{
            width: 100%;
        }
    }
}

</style>