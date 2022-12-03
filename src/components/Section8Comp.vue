<template>
    <div class="section8">
        <div class="sec8Content">
            <div class="sec8Text">
                <h2>text</h2> 
            </div>
            <div class="sec8Img">
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section8Comp',
    components: {

    },
    props: {

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
.section8 {
    .sec8Content {
        display: flex;

         .sec8Text {
            background-image: url('../assets/img/sky-1475274047050-1d0c0975c63e.jpeg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            flex-basis: 50%;
            h2 {
                color: red;
                text-align: center;
            }
        }
        .sec8Img {
            height: 90vh;
            flex-basis: 50%;
            background-image: url('../assets/img/h3-img-5a.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            justify-content: center;
            img {
                padding: 50px;
                width: 80%;
            }
        }
       
    }
}
</style>