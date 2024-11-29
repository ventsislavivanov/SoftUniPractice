<script>
export default {
  props: {
    transactions: Array,
    required: true
  },
  methods: {
    getTransactionCategory(type, categoryId) {
      const storageKey = type === 'expense' ? 'categoriesExpense' : 'categoriesIncome';
      const currentCategories = JSON.parse(localStorage.getItem(storageKey)) || {};

      return currentCategories[categoryId];
    }
  },

}
</script>

<template>
  <table class="striped">
    <thead>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Show description</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="transaction in transactions" :key="'list-transaction-' + transaction.id">
        <td>{{ transaction.date }}</td>
        <td>{{ transaction.type }}</td>
        <td>{{ getTransactionCategory(transaction.type, transaction.category) }}</td>
        <td>{{ transaction.amount }}</td>
        <td class="text-center">{{ transaction.description }}</td>
      </tr>
    </tbody>
  </table>
</template>
