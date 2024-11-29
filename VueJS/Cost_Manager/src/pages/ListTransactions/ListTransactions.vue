<script>
import FiltersTransactions from "./components/FiltersTransactions.vue";
import TableTransactions from "./components/TableTransactions.vue";

export default {
  components: {
    FiltersTransactions,
    TableTransactions
  },
  data() {
    return {
      transactions: [],
      filters: {
        type: null,
        category: null,
        date: null,
      },
    }
  },
  computed: {
    filteredTransactions() {
      return this.transactions.filter((transaction) => {
        const matchesType = !this.filters.type || transaction.type === this.filters.type;
        const matchesCategory = !this.filters.category || transaction.category === this.filters.category;
        const matchesDate = !this.filters.date || transaction.date === this.filters.date;

        return matchesType && matchesCategory && matchesDate;
      });
    },
  },
  methods: {
    onFilters(obj) {
      return this.filters = obj;
    }
  },
  beforeMount() {
    this.transactions = JSON.parse(localStorage.getItem('transactions'));
  }
}
</script>

<template>
  <section>
    <h1>List Transactions</h1>

    <FiltersTransactions :transactions="transactions" @filters="onFilters" />

    <TableTransactions :transactions="filteredTransactions" />
  </section>
</template>
