<template>
    <div class="section1">
     
        <div  v-for='(elem,index) in Section1images' :key="index"  class="sec1img">
          <img :src="require(`../assets/img/${elem.path}`) " alt="">  
        </div>

  
    </div>
</template>

<script>
     export default {
        name:'Section1Comp',
        components:{

        },
        props:{
        Section1images:Array
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

.section1 {
    position: relative;
    display: flex;
    height: 30vh;
     
    .sec1img{
         width: calc(100% / 4); 
        display: flex;
        background-image: url('../assets/img/hover-img.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 200%;
      img{
        width: 100%;
      }     
    }
    .hover{
        
        img{
            position:absolute;
            bottom: 0px;
            width: 101%;
        }
    }



.sec1img img:hover{
    display: none;
}


    
}

</style>