<script>
import AddTransaction from "./pages/AddTransaction.vue";
import AppHeader from "./components/AppHeader.vue";
import AddCategory from "./pages/AddCategory.vue";
import ListTransactions from "./pages/ListTransactions/ListTransactions.vue";

export default {
  components: {
    AppHeader,
    ListTransactions,
    AddCategory,
    AddTransaction
  }
}
</script>

<template>
  <AppHeader/>
  <main class="container-main">
<!--    <AddCategory/>-->
<!--    <AddTransaction/>-->
    <ListTransactions/>
  </main>
</template>

<style scoped>
.container-main {
  max-width: 800px;
  margin: 0 auto;
}
</style>