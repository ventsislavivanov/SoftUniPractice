<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      categoriesExpense: null,
      categoriesIncome: null,
      category: {
        type: null,
        name: null
      },
      getCurrentCategoriesLength: null,
    }
  },
  methods: {
    onSubmit() {
      const storageKey = this.category.type === 'expense' ? 'categoriesExpense' : 'categoriesIncome';
      const currentCategories = JSON.parse(localStorage.getItem(storageKey)) || {};
      const nextIndex = Object.keys(currentCategories).length + 1;
      currentCategories[nextIndex] = this.category.name;

      localStorage.setItem(storageKey, JSON.stringify(currentCategories));

      this.category.type = null;
      this.category.name = null;

      alert('Added new category')
    }
  },
  mounted() {
    this.categoriesExpense = JSON.parse(localStorage.getItem('categoriesExpense'));
    this.categoriesIncome = JSON.parse(localStorage.getItem('categoriesIncome'));
  },
  validations: {
    category: {
      type: { required },
      name: { required }
    }
  },
}
</script>

<template>
  <h1>Add Category</h1>

  <form @submit.prevent="onSubmit">
    <fieldset>
      <p>Type</p>
      <label for="radio-expense">
        <input type="radio" id="radio-expense" v-model="v$.category.type.$model" value="expense"> Expense
      </label>

      <label for="radio-income">
        <input type="radio" id="radio-income" v-model="v$.category.type.$model" value="income"> Income
      </label>

      <div class="input-errors" v-for="error of v$.category.type.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </fieldset>

    <fieldset>
      <label for="name">Name</label>

      <input type="text" id="name" v-model="v$.category.name.$model">

      <div class="input-errors" v-for="error of v$.category.name.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </fieldset>

    <button type="submit" class="primary" :disabled="v$.$invalid">Add</button>
  </form>
</template>

<style scoped>

</style>