<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component></navbar-component>
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
             
              <card-product-component
              v-for="good in goods"
              :key="good.id"
                classItem="shop__item"
                :name="good.name"
                :price="good.price"
                :image="good.image"
              ></card-product-component>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import CardProductComponent from "@/components/CardProductComponent.vue";
import { v4 as uuidv4 } from 'uuid';


export default {
  components: { NavbarComponent, CardProductComponent },
    computed:{
    goods(){
      return this.$store.getters["getGoods"]
  }
  },
  // data() {
  //   return {
  //     goods: [
  //       {
  //         id: uuidv4(),
  //         image: "coffee-1.jpg",
  //         name: "Solimo Coffee Beans 2kg",
  //         price: 10.73,
  //       },
  //       {
  //         id: uuidv4(),
  //         image: "coffee-2.jpg",
  //         name: "Presto Coffee Beans 1kg",
  //         price: 15.99,
  //       },
  //       {
  //         id: uuidv4(),
  //         image: "coffee-3.jpg",
  //         name: "AROMISTICO Coffee 1kg",
  //         price: 6.99,
  //       },
  //       {
  //         id: uuidv4(),
  //         image: "coffee-1.jpg",
  //         name: "Solimo Coffee Beans 2kg",
  //         price: 10.73,
  //       },
  //       {
  //         id: uuidv4(),
  //         image: "coffee-2.jpg",
  //         name: "Presto Coffee Beans 1kg",
  //         price: 15.99,
  //       },
  //       {
  //         id: uuidv4(),
  //         image: "coffee-3.jpg",
  //         name: "AROMISTICO Coffee 1kg",
  //         price: 6.99,
  //       },
  //     ],
  //   };
  // },
};
</script>
