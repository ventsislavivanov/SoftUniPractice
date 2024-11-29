<script>
export default {
  props: {
    transactions: {
      type: Array,
      required: true
    }
  },
  emits: ['filters'],
  data() {
    return {
      filters: {
        date: null,
        type: null,
        category: 0,
      }
    }
  },
  computed: {
    categoriesOptions() {
      let storageKey = null;
      if (this.filters.type === 'expense') {
        storageKey = 'categoriesExpense';
      } else if (this.filters.type === 'income') {
        storageKey = 'categoriesIncome'
      } else {
        return {};
      }

      return JSON.parse(localStorage.getItem(storageKey));
    },

  },
  methods: {
    clearFilters() {
      const resetFilters = {
        date: null,
        type: null,
        category: 0,
      }

      this.filters = resetFilters;
      this.$emit('filters', resetFilters)
    },
  }
}
</script>

<template>
  <form>
    <h5>Filers</h5>
    <div class="row">
      <fieldset>
        <p>Type</p>
        <label for="radio-expense">
          <input type="radio"
                 id="radio-expense"
                 v-model="filters.type"
                 value="expense"
                 @change="$emit('filters', filters)"
          >Expense
        </label>

        <label for="radio-income">
          <input type="radio"
                 id="radio-income"
                 v-model="filters.type"
                 value="income"
                 @change="$emit('filters', filters)"
          >Income
        </label>
      </fieldset>

      <fieldset>
        <label for="category">Category</label>

        <select id="category"
                v-model="filters.category"
                @change="$emit('filters', filters)"
        >
          <option value="0" disabled>Choose</option>
          <option v-for="(name, key) in categoriesOptions"
                  :key="`category_` + filters.type + '_' + key"
                  :value="key"
                  >
            {{ name }}
          </option>
        </select>
      </fieldset>

      <fieldset>
        <fieldset >
          <label for="date">Date</label>

          <input type="date"
                 id="date"
                 v-model="filters.date"
                 @input="$emit('filters', filters)"
          >
        </fieldset>
      </fieldset>
    </div>

    <div class="actions">
      <button type="button" class="contrast" @click="clearFilters">Clear</button>
    </div>
  </form>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.actions {
  text-align: right;
}
.actions > button {
  margin-left: 1rem;
}
</style>