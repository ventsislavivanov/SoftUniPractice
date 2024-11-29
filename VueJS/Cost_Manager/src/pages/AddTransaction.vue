<script>
const CATEGORIES_EXPENSE = {
  1: 'Food',
  2: 'Transport',
  3: 'Housing',
  4: 'Utilities',
  5: 'Healthcare',
  6: 'Insurance',
  7: 'Entertainment',
  8: 'Subscriptions',
  9: 'Clothing',
  10: 'Education',
  11: 'Gifts',
  12: 'Travel',
  13: 'Pets',
  14: 'PersonalCare',
  15: 'Debt',
  16: 'Savings',
  17: 'DiningOut',
  18: 'Hobbies',
  19: 'Electronics',
  20: 'Other'
}
const CATEGORIES_INCOME = {
  1: 'Salary',
  2: 'Sales',
  3: 'Investments',
  4: 'Rental income',
  5: 'Freelance',
  6: 'Dividends',
  7: 'Grants',
  8: 'Bonus',
  9: 'Gifts',
  10: 'Refunds'
}

import {useVuelidate} from '@vuelidate/core'
import {minValue, required} from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      transaction: {
        type: 'expense',
        date: null,
        category: 0,
        description: null,
        amount: null,
      },
    }
  },
  computed: {
    categoriesOptions() {
      if (this.transaction.type === 'expense') {
        return JSON.parse(localStorage.getItem('categoriesExpense'));
      } else if (this.transaction.type === 'income') {
        return JSON.parse(localStorage.getItem('categoriesIncome'));
      } else {
        return {};
      }
    },
  },
  methods: {
    mapObjectValuesToString(obj) {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key] = String(value); // Преобразува стойността в низ
        return acc;
      }, {});
    },
    onSubmit() {
      let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

      this.transaction.id = !transactions ? 1 : Object.keys(transactions).length + 1;
      transactions.push(this.transaction);

      localStorage.setItem('transactions', JSON.stringify(transactions));

      this.resetTransaction();

      alert('Added new transaction');
    },
    resetTransaction() {
      this.transaction.type = 'expense';
      this.transaction.date = null;
      this.transaction.category = 0;
      this.transaction.description = null;
      this.transaction.amount = null;
    }
  },
  validations() {
    return {
      transaction: {
        type: { required },
        date: { required },
        category: { required },
        description: { required },
        amount: {
          required,
          minValue: minValue(0.01)
        },
      }
    }
  },
  beforeCreate() {
    if (! localStorage.getItem('categoriesExpense'))  {
      localStorage.setItem('categoriesExpense', JSON.stringify(CATEGORIES_EXPENSE));
    }
    if (! localStorage.getItem('categoriesIncome')) {
      localStorage.setItem('categoriesIncome', JSON.stringify(CATEGORIES_INCOME));
    }
  }
}
</script>

<template>
  <article>
    <h1>Add Transaction</h1>

    <form @submit.prevent="onSubmit">
      <div class="row row-four-col">
        <fieldset>
            <p>Type</p>
          <label for="radio-expense">
            <input type="radio"
                   id="radio-expense"
                   v-model="v$.transaction.type.$model"
                   value="expense"
            >Expense
          </label>

          <label for="radio-income">
            <input type="radio"
                   id="radio-income"
                   v-model="v$.transaction.type.$model"
                   value="income"
            >Income
          </label>

          <div class="input-errors" v-for="error of v$.transaction.type.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </fieldset>

        <fieldset >
          <label for="date">Date</label>
          <input type="date" id="date" v-model="v$.transaction.date.$model">
        </fieldset>

        <fieldset>
          <label for="category">Category</label>

          <select id="category" v-model="v$.transaction.category.$model">
            <option value="0" disabled>Choose</option>
            <option v-for="(name, key) in categoriesOptions" :key="`category_` + transaction.type + '_' + key" :value="key">
              {{ name }}
            </option>
          </select>

          <div class="input-errors" v-for="error of v$.transaction.category.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </fieldset>

        <fieldset>
          <label for="amount">Amount</label>

          <input type="number" id="description" v-model="v$.transaction.amount.$model" />

          <div class="input-errors" v-for="error of v$.transaction.amount.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </fieldset>
      </div><!-- /.row .row-one-two-one -->

      <div class="row">
        <fieldset>
          <label for="description">Description</label>

          <textarea id="description" v-model="v$.transaction.description.$model"></textarea>

          <div class="input-errors" v-for="error of v$.transaction.description.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </fieldset>
      </div><!-- /.row -->

      <div class="row">
        <button type="submit" class="primary" :disabled="v$.$invalid">Add</button>
      </div><!-- /.row -->
    </form>
  </article>
</template>

<style scoped>
.row {
  padding: 0 1rem;
}
.row-four-col{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}
</style>