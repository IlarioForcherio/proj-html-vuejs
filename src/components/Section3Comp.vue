<template>
    <div class="section3">
        <div class="sec3Content">
            <div class="sec3Img">
             <img src="../assets/img/h1-img-7n.png" alt="">   
            </div>
             <div class="sec3Text">
                <h2>text</h2> 
            </div>
           
        </div>
    </div>
</template>

<script>
     export default {
        name:'Section3Comp',
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

.section3{
    
    .sec3Content{
        display: flex;
        
        .sec3Img{
            flex-basis: 50%;
            background-image: url('../assets/img/h1-img-4.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            justify-content: center;
            img{
            padding: 50px;
            width: 80%;
            }
        }

        .sec3Text{
            flex-basis: 50%;
            h2{
             text-align: center;   
            }
            
        }

        
        
        
    }
}

</style>