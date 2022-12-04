<template>
    <div class="section3">
        <div class="sec3Content">
            <div class="sec3Img">
             <img src="../assets/img/h1-img-7n.png" alt="">   
            </div>
             <div class="sec3Text">
                <ul>
                    <li>
                        <div class="specials">SPECIALS*</div>
                        <p class="specialsDescription" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut.</p> 
                    </li>
                    <li v-for="elem,index in  Section3Specials" :key="index" class="comboCard">
                        <div class="comboPrice" >${{elem.price}}</div>
                        <div>
                           <div class="comboName">{{elem.name}}</div>
                           <p class="comboDescription">{{elem.description}}</p>
                        </div>
                    </li>
                </ul> 
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
        Section3Specials:Array
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
            display: flex;
            align-items: center;
            justify-content: center;
            .specials{
                font-weight: bold;
                font-size: 2rem;   
            }
            .specialsDescription{
                font-size: 1.2rem;
                color:rgba(134, 134, 134, 1) ;
            }
            .comboCard{
                display: flex;
                padding-top: 30px;
                .comboName{
                    letter-spacing: 3px;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .comboPrice{
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #ab4027;
                    padding-right: 20px;
                }
                .comboDescription{
                    color:rgba(134, 134, 134, 1) ;
                    
                }
               
            }   
        }

        
        
        
    }
}

</style>