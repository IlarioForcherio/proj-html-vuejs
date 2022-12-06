<template>
    <div class="sec5Card">
        
       <div class="card">
        <div class="content">
           <ul>
            <li class="teamName">{{Section5Team.name}}</li>
            <li class="teamRole"><h5>{{Section5Team.role}}</h5></li>
            <li class="teamContacts" v-for="ele,ind in Section5Team.contacts" :key="ind" ><font-awesome-icon :icon="ele" /></li>
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
        border: 1px solid rgb(12, 12, 12);
        position: relative;
        .content{
        text-align: center;
        color: white;
        background-color: #d2401e;
        margin: 40px;
        padding: 83px 0px;
        .teamName{
        font-size: 1.5rem;
        font-weight: bold;
        

        }

        li{
            line-height: 20px;
            padding: 0px 10px;
            display: inline;
        }
        h5{
            font-family: 'Open Sans', sans-serif;
        }

    }
    
        .img{
            position: absolute;
            top: 0px;
            img{
            width: 101%;
            
            }
            //display: none;
        }


        .img:hover {
        display: none;
        }

}  
}


</style>