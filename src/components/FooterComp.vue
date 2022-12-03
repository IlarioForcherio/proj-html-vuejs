<template>
    <div class="footer">
        <div class="footerContent">
            <div class="footerText">
                <h2>text</h2> 
            </div>
            <div class="footerImg">
               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'FooterComp',
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
.footer {
    .footerContent {
        display: flex;

         .footerText {
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
        .footerImg {
            height: 90vh;
            flex-basis: 50%;
            background-image: url('../assets/img/footer-img-1.jpg');
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