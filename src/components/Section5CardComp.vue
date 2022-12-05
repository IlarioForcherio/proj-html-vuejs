<template>
    <div class="sec5Card">
        
       <div class="card">
        <div class="content">
           <ul>
            <li><h2>{{Section5Team.name}}</h2></li>
            <li><h5>{{Section5Team.role}}</h5></li>
            <li  v-for="ele,ind in Section5Team.contacts" :key="ind" >{{ele}}</li>
           </ul>
        </div>
        <div class="img">
          <img :src="require(`../assets/img/${Section5Team.path}`) " alt=""> 
        </div>
       </div>
    </div>
</template>

<script>

     export default {
        name:'Section5CardComp',
        components:{
        
        },
        props:{
        Section5Team:Object
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
.flex{
    display: flex;
}

.sec5Card{
    width: calc(100% / 4);
  .card{
        border: 1px solid black;
        position: relative;
        .content{
        text-align: center;
        color: white;
        background-color: #d2401e;
        margin: 40px;
        padding: 50px 0px;
        h5{
            font-family: 'Open Sans', sans-serif;
        }

    }
    
        .img{
            position: absolute;
            
            top: 0px;

            img{
            width: 100%;
            
            }
            //display: none;
        }


        .img:hover {
        display: none;
        }

}  
}


</style>