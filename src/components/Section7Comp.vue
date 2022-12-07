<template>
    <div class="section7">
        <div class="sec7Text">
            <h6>CHOOSE YOUR FLAVOUR</h6>
            <h2>THE BEST PIZZA MENU IN TOWN</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate mollitia</p>
        </div>
      
        <div  class="sec7Card">
            <div v-for='(elem,index) in Section7images' :key="index"  class="sec7Content">
              <div class="pizza">
                <img :src="require(`../assets/img/${elem.path}`) " alt="">
                <div  v-if="elem.discountBadge"  class="discount"> {{elem.discount}}%</div>
                <div  v-if="elem.sold"  class="sold">SOLD</div>
              </div>
                <div>{{elem.name}}</div>
                <div class="price">
                <div  :class="(elem.discountBadge == true | elem.sold == true ) ?  'priceGrey' : 'priceRed'">${{elem.from}} ${{elem.to}}</div>
                <div class="priceRed" v-if="elem.discountBadge" >${{discountPriceFrom(elem)}} ${{discountPriceTo(elem)}}</div>   
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'Section7Comp',
    components: {

    },
    props: {
        Section7images: Array
    },
    data() {
        return {
        dinamicIndex:0,
        }
    },
    mounted() {
    //this.discountPrice()

    //this.attivaIntervallo();
    },
    methods: {
    discountPriceFrom(pizza){
        let discountedPriceFrom =  parseInt(pizza.from) - (parseInt(pizza.from) * parseInt(pizza.discount) / 100 ) 
        return discountedPriceFrom 
       },

    discountPriceTo(pizza){
        let discountedPriceTo =  parseInt(pizza.to) - (parseInt(pizza.to) * parseInt(pizza.discount) / 100 ) 
        return discountedPriceTo 
        },



    //  scorriImmagineRight: function () {

    //     // this.dinamicIndex = Section7images[index]

    //   if (this.dinamicIndex < this.Section7images.length - 1) {
    //     this.dinamicIndex++;
    //   } else {
    //     this.dinamicIndex = 0;
    //   }
    // },
     

    //        attivaIntervallo: function(){
    //  setInterval( () => { this.scorriImmagineLeft() },2000 );
    // },



    }
}
</script>


<style lang="scss" scoped>

 //<img :src="require(`../assets/img/${elem.path}`) " alt="">


.section7 {
    .sec7Text {
      padding: 50px 0px;
        text-align: center;
        font-family: 'Oswald', sans-serif;
        h6 {
            color: #d7573c;
        }
    }
    .sec7Card {
       padding: 50px 0px;
        display: flex;
        text-align: center;

        .price{
         display: flex;
         justify-content: center;   
        .priceRed{
            color: red;
        }
        .priceGrey{
            color: grey;
            text-decoration: line-through;
        }   
        }

        .sec7Content{
           width: calc(100% / 6);
          img {
            width: 100%;
           }

           .pizza{

            position: relative;

           .discount,.sold{
            color: white;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height:60px;
            border-radius: 50%;

           }

           .discount{
           top: 10px;
           background-color:#fca324;
           }
           .sold{
            right: 0px;
            top: 10px;
            background-color:#d2401e;

           }
           }

        }
        
    }
}
</style>