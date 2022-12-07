<template>
    <div class="section2">
  <div class="left" @click="scorriImmagineLeft()" >Left</div>
        <div class="section2-text">
            <div class="quote">
                <font-awesome-icon icon="fa-solid fa-quote-left" />
            </div>
            <!-- <div class="section2card"> 
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nemo veritatis quibusdam, minima eum placeat debitis sunt libero qui perferendis </h1>
                <div class="author">WASHINTON POST 2018</div>
            </div> -->
            <!-- <div v-for="elem,index in Section2Review" :key="index" class="section2card">  -->
            
            <div class="section2card">
              <Transition name="bounce" >
                  <h1>{{Section2Review[dinamicIndex].review}}</h1>
              </Transition>
              
                <div class="author">{{Section2Review[dinamicIndex].author}}</div>
                  

            </div>
           
           <div class="dotSlider" >
                <div v-for="element,index in Section2Review"
                 :key="index"
                 @click="dotSlider(index)" 
                 :class="(index == dinamicIndex) ? 'dotcolor' : '' "  class="dotSlider">
                 
                 <font-awesome-icon icon="fa-solid fa-circle" />
                  </div>
            </div>
        </div>
          <div class="right" @click="scorriImmagineRight()">Right</div>
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
     this.attivaIntervallo();
    },
    methods: {


     scorriImmagineRight: function () {

      if (this.dinamicIndex < this.Section2Review.length - 1) {
        this.dinamicIndex++;
      } else {
        this.dinamicIndex = 0;
      }
    },
     


    scorriImmagineLeft: function () {

      if (this.dinamicIndex < this.Section2Review.length ) {
        this.dinamicIndex--;
      }
      if(this.dinamicIndex <= -1){
        this.dinamicIndex = this.Section2Review.length - 1;
      }
    },

      dotSlider: function(index){
     this.dinamicIndex = index;
    },



       attivaIntervallo: function(){
     setInterval( () => { this.scorriImmagineLeft() },2000 );
    },

    



    }
}
</script>

<style lang="scss" scoped>





.section2 {

   

    .left,.right{
    padding:10px;
    background-color: white;
    font-family: 'Open Sans', sans-serif;
    }

    .right{
        
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }

    .left{
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    .right:hover, .left:hover{
    background-color: rgb(233, 232, 232);
    }


    //height: 60vh;
    padding-bottom: 30px;
    background-image: url('../assets/img/h3-testimonials-bckgrnd.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
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

    .dotSlider{
        display: flex;
        justify-content: center;
        padding: 0px 10px;
        font-size:0.7rem;
        color: lightgrey;
    }



    .dotcolor{
        color: #b8903c;
    }
}
</style>