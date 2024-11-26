<script>

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Products from "./pages/Products/Products.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contacts from "./pages/Contacts.vue";
import Cart from "./pages/Cart.vue";

export default {
  components: {
    AppFooter,
    AppHeader,
    Products,
    Home,
    About,
    Contacts,
    Cart
  },
  data() {
    return {
      page: 'Products'
    }
  },
  methods: {
    changePage(newPage) {
      this.page = newPage;
    }
  }
};
</script>

<template>
  <AppHeader @change-page="changePage" />

  <main>
<!--    <Products></Products>-->
    <component :is="page" />
  </main>

  <AppFooter/>
</template>
