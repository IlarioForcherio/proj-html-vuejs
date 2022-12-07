<template>
    <div class="footer">
        <div class="footerContent">
            <div class="footerText">
                <div>
                    <ul>
                        <li>
                            <h3>FIND OUR RESTAURANT</h3>
                        </li>
                        <li v-for="ele,ind in Restaurants" :key="ind">
                            <a class="restaurantAddress"  href="#">
                                <div>{{ele.street}}</div>
                                <div>{{ele.city}}</div>
                                <div>{{ele.zipcode}}</div>
                                <div>{{ele.pnumber}}</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h3>WORKING HOURS</h3></li>
                        <li v-for="elem,ind in OpeningDay" :key="ind">
                            <a href="#">
                              <div class="openingDay" >{{elem.day}}</div>
                              <div class="closed" v-if="elem.KitchenClosed" >Kitchen Closed</div>
                              <div class="openingClosing"  v-else>{{elem.opening}} - {{elem.closing}}</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                <h2>THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.</h2>
                <img src="../assets/img/footer-bottom-img.png" alt=""></div>
                
            </div>
            <div class="footerImg">
    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComp',
    components: {

    },
    props: {
        Restaurants: Array,
        OpeningDay: Array
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
.footer {
    color: white;
    .footerContent {
        display: flex;
        
        .footerText {
            display: flex;
            justify-content: space-around;
            background-image: url('https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-rev-bckgrnd-ing.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            flex-basis: 50%;
            .restaurantAddress{
                font-size: 0.9rem;
                font-family: 'Open Sans', sans-serif;
                font-weight: bold;
                color: #b2b2b2;
            }
            h2{
                inline-size: 140px;
                overflow-wrap: break-word;
                padding: 65px 0 ;
                padding-bottom: 150px;
                font-family: 'Oswald', sans-serif;
                color: white;
            }
            h3 {
                font-size: 1.8rem;
                inline-size: 150px;
                overflow-wrap: break-word;
                color:#b8903c;
            }
            ul {
                 padding: 50px 0px;
                li {
                    padding:5px 0;

                    a {
                        
                        color: white;
                        .openingDay{
                        color:rgba(184, 144, 60, 1) ;
                        }
                        .closed{
                            font-weight: bold;
                            font-family: 'Open Sans', sans-serif;
                            color: #AA381E;
                        }
                        .openingClosing{
                            font-weight: bold;
                            font-family: 'Open Sans', sans-serif;
                            color:  #b2b2b2;
                        }
                    }
                }
            }
           
        }
        .footerImg {
            
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