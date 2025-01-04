<script>
import {useFavoritesStore} from "../../../stores/useFavoritesStore.js";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {favoritesStore: useFavoritesStore()}
  },
  computed: {
    isFavorite() {
      return this.favoritesStore.isFavorite(this.product.id);
    }
  }
}
</script>

<template>
  <article>
    <img :src="product.images[0]" alt="{{ product.title }}">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p><b>Price</b>: {{ product.price }}$</p>
    <footer>
      <button type="button" class="secondary outline">
        Add to cart 🛒
      </button>

      <button type="button"
              class="contrast"
              :class="[isFavorite ? '' : 'outline']"
              @click="favoritesStore.toggleFavorite(product.id)"
      >
        Add favorite {{ isFavorite ? '💙' : '🤍' }}
      </button>
    </footer>
  </article>
</template>

<style scoped>

</style>