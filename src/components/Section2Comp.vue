<template>
    <div class="section2">
        <div class="section2-text">
            <div class="quote">
                <font-awesome-icon icon="fa-solid fa-quote-left" />
            </div>
            <div class="section2card"> 
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nemo veritatis quibusdam, minima eum placeat debitis sunt libero qui perferendis </h1>
                <div class="author">WASHINTON POST 2018</div>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section2Comp',
    components: {

    },
    props: {
        // Section2Review: Object
        Section2Review:Array
    },
    data() {
        return {
        dinamicIndex:0,
        }
    },
    mounted() {

    },
    methods: {

        // sliderLeft(ind){
        //     console.log(ind)
        //     this.dinamicIndex = 2;
        //     //console.log(this.dinamicIndex)
        // }
      
      
    //   scorriImmagineDx: function () {
    //   if (this.dinamicIndex < this.Section2Review.length - 1) {
    //     this.dinamicIndex++;
    //   } else {
    //     this.dinamicIndex = 0;
    //   }
    // },

    }
}
</script>

<style lang="scss" scoped>
.section2 {
    //height: 60vh;
    padding-bottom: 30px;
    background-image: url('../assets/img/h3-testimonials-bckgrnd.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .section2-text {
        //display: flex;
        width: 60%;
        margin: 0 auto;
        .quote {
            text-align: center;
            font-size: 4rem;
        }
        h1,
        .author {
            
            text-align: center;
        }

        .author{
            font-size: 0.8rem;
            letter-spacing:3px ;
            padding: 10px 0px;
            font-family: 'Oswald', sans-serif;
            color:#D2401E ;
        }
    }
}
</style>