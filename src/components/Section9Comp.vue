<template>
    <div class="whiteBg">
        <div class="section9">
            <div class="sec9Booking">
                <!-- select person -->
                <select v-model='person' name="person" id="person">
                        <!-- <option v-for="n in 10" :key="n" value="1-Guest">{{n}}-guest</option> -->
                        <option value="1-Guest">1guest</option>
                        <option value="2-Guest">2guest</option>
                        <option value="3-Guest">3guest</option>
                        <option value="4-Guest">4guest</option>
                        <option value="5-Guest">5guest</option>
                        <option value="6-Guest">6guest</option>
                        <option value="7-Guest">7guest</option>
                        <option value="8-Guest">8guest</option>
                        <option value="9-Guest">9guest</option>
                        <option value="10-Guest">10-guest</option>
                    </select>
                <!-- input date -->for
                <input v-model='date' type="date" id="booking-day" name="booking-day" value="" min="2022-01-01" max="2022-12-31">
                <!-- input time -->at
                <input v-model='hour' type="time" id="booking-hour" name="booking-hour" value="" min="09:00" max="18:00" required>
                <!--  -->
                <button @click='booking=true'>BOOKING TABLE</button>
                <button @click='booking=false'>CANCEL BOOKING</button>
            </div>
            <div class="booking" v-if="booking">  
                <h2>THANK YOU! </h2> 
                <p>{{`YOUR BOOKING IS -->${person}  FOR: ${date} AT: ${hour}`}}</p>
            </div>
        </div>
    
    </div>
</template>

<script>
export default {
    name: 'Section9Comp',
    components: {

    },
    props: {

    },
    data() {
        return {
            person: '',
            date: '',
            hour: '',
            booking: false,
        }
    },
    mounted() {

    },
    methods: {



    }
}
</script>

<style lang="scss" scoped>
.whiteBg {
    background-color: white;
}

.section9 {
    margin: 10px 0px;
    padding: 120px 100px;
    background-image: url('../assets/img/h3-background-img-3.jpg');
    height: 30vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .sec9Booking {
        display: flex;
        justify-content: space-around;
        align-items: center;
        button{
            font-size: 0.6rem;
            font-weight: bold;
            letter-spacing: 3px;
            padding:10px 20px;
            color: white;
            background-color: #377421;
            border: 0px;
        }
        select,input{
            width:100px;
            height: 25px;
            background-color: rgb(249, 159, 4);
            color: rgb(255, 255, 255);
            border: 0px;
            
        }

    }
    .booking{
        padding: 10px 0;
        text-align: center;
        p{
            font-size: 0.8rem;
            font-weight: bold;
            letter-spacing: 3px;
        }
        h2{
            color: rgb(249, 244, 244,);
            letter-spacing: 3px;
        }
    }
}
</style>