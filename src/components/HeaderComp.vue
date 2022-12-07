<template>
  <div class="header">
    <!-- navbar -->
    <NavbarComp :headerMenu="headerMenu" />
    <!-- img-text-timing -->

    <div class="header-img">
      <div class="pizzaTag">
        <img
          :src="require(`../assets/img/${headerImages[dinamicIndex].tagPath}`)"
          alt=""
        />
      </div>
      <div class="pizzaSlice">
        <img
          :src="require(`../assets/img/${headerImages[dinamicIndex].pizzaPath}`)" alt=""/>
      </div>
    </div>
    <div class="fixedSvg">
      <img class="circle" src="../assets/svg/svg-10.svg" alt="" />
      <img class="cart" src="../assets/svg/svg-9.svg" alt="" />
    </div>
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";

export default {
  name: "HeaderComp",
  components: {
    NavbarComp,
  },
  props: {
    headerMenu: Array,
    headerImages: Array,
  },
  data() {
    return {
      dinamicIndex: 0,
    };
  },
  mounted() {
    this.attivaIntervallo();
  },
  methods: {
    scorriImmagineRight: function () {
      if (this.dinamicIndex < this.headerImages.length - 1) {
        this.dinamicIndex++;
      } else {
        this.dinamicIndex = 0;
      }
    },
    // scorriImmagineLeft: function () {

    //   if (this.dinamicIndex < this.headerImages.length ) {
    //     this.dinamicIndex--;
    //   }
    //   if(this.dinamicIndex <= -1){
    //     this.dinamicIndex = this.headerImages.length - 1;
    //   }
    // },

    attivaIntervallo: function () {
      setInterval(() => {
        this.scorriImmagineRight();
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/utility.scss";
.header {
  color: white;
  padding-top: 0px;
  background-image: url("https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h3-rev-bckgrnd-ing.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  .fixedSvg {
    position: fixed;
    z-index: 1;
    right: 0;
    display: flex;
    align-items: end;
    flex-direction: column;
    .circle {
      filter: invert(100%);
      fill: white;
      background-color: white;
    }
    .cart {
      background-color: white;
      box-shadow: 4px 3px 6px 0px black;
    }

    img {
      margin-top: 10px;
      padding: 10px;
      border: 1px solid white;
      width: 15%;
    }
  }
  .header-img {
    height: 50vh;
    display: flex;
    justify-content: space-around;
    position: relative;
    padding-top: 30px;
    .pizzaTag {
    object-fit: contain;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .pizzaSlice {
      display: flex;
      justify-content: center;
      position: absolute;
    }
    img {
      width: 70%;
    }
  }
}
</style>