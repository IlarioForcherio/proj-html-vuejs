<template>
    <div class="section8">
        <div class="sec8Content">
            <div class="sec8Text">
                <!-- card -->
                 <ul>
                    <li class="love" >MADE WITH LOVE</li>
                    <li class="cardTitle" > DELISH PIZZA DEALS </li>
                    <li v-for="element,index in Section8Events" :key='index' class="eventCard">
                        <div class="left" >
                            <div class="eventDay" >{{element.day}}</div>
                            <div class="eventTitle" >{{element.month}}</div>
                        </div>
                        <div>
                            <div class="eventTitle" >{{element.title}}</div>
                            <div class="eventGeoTag">{{element.geoTag}}</div>
                        </div>
                    </li>
                 </ul>
            </div>
            <div class="sec8Img"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section8Comp',
    components: {

    },
    props: {
    Section8Events:Array
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
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url('https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-rev-bckgrnd-ing.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            flex-basis: 50%;
            ul{
                .love{
                    font-weight: bold;
                    color: #ab4027;
                    font-size: 0.8rem;
                    letter-spacing: 3px;
                }
                .cardTitle{
                font-size: 2rem;
                font-weight: bold;
                }
                li{
                color: white;
                text-align: start;
 
                }
                .eventCard{
                display: flex;
                align-items: center;
                color: white;
                border-bottom: 3px dotted #b8903c;
                .left{
                    padding-right: 20px;
                }
                .eventDay{
                    color: #ab4027;
                    font-size: 3rem;
                    font-weight: bold;

                }
                .eventTitle{
                    font-size: 1.2rem;
                    font-weight: bold;
                }
                .eventGeoTag{
                    font-size: 0.9rem;
                    color:  #ab4027;
                }
                
                }
            }

            h2,H3 {
                color: white;
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