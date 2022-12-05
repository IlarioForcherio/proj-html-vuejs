<template>
    <div class="section2">
        <div class="section2-text">
            <!-- <div class="quote">
                <font-awesome-icon icon="fa-solid fa-quote-left" />
            </div> -->
         
            <div v-for="element,ind in Section2Review" :key="ind" class="section2card">
                <h1>{{element.review}}</h1>
                <div class="author">{{element.author}}</div>
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
    height: 60vh;
    background-image: url('../assets/img/h3-testimonials-bckgrnd.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .section2-text {
        display: flex;
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
    }
}
</style>