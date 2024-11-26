<script>
import {products} from "../../constants/products.js";


import Categories from "./components/Categories.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  components: {
    ProductCard,
    Categories
  },
  data() {
    return {
      products,
      activeCategory: ''
    }
  },
  computed: {
    visibleProducts() {
      return this.activeCategory === '' ? products : products.filter(prod => prod.category === this.activeCategory )
    }
  },
  methods: {
    onSelect(value) {
      this.activeCategory = this.activeCategory === value ? '' : value;
    }
  }
}
</script>

<template>
  <div>
    <Categories
        :active="activeCategory"
        @select="onSelect"
    />
  </div>
  <div class="products">
    <ProductCard
      v-for="product in visibleProducts"
      :id="product.id"
      :key="product.id + '-' + product.title"
      :product="product"
    />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
</style>