<script>
import useVuelidate from "@vuelidate/core";
import FormFieldset from "./FormFieldset.vue";
import DoubleRow from "./DoubleRow.vue";
import {minLength, numeric, required} from "@vuelidate/validators";

export default {
  components: {
    DoubleRow,
    FormFieldset
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  emits: ['previous', 'submit'],
  data() {
    return {
      formData: {
        address1: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
        payment: '',
        note: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      const isValid = await this.v$.$validate();
      console.log(isValid, this.formData);
      if (isValid) {
        this.$emit('submit', this.formData);
      }
    },
    initState(dataPropVal) {
      this.formData = {
        address1: dataPropVal.address1,
        address2: dataPropVal.address2,
        city: dataPropVal.city,
        zip: dataPropVal.zip,
        country: dataPropVal.country,
        payment: dataPropVal.payment,
        note:dataPropVal.note
      }
    }
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        const areSame = oldVal && (JSON.stringify(Object.entries(newVal).sort()) ===  Object.entries(oldVal).sort());

        if (areSame) {
          this.initState(newVal);
        }
      },
      deep: true,
      immediate: true
    }
  },
  validations() {
    return {
      formData: {
        address1: {
          required,
          minLength: minLength(5)
        },
        city: { required },
        zip: {
          required,
          numeric
        },
        country: { required },
        payment: { required },
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <FormFieldset title="Address line 1" :errors="v$.formData.address1.$errors">
      <input type="text" placeholder="Address line..." v-model="v$.formData.address1.$model" @blur="v$.formData.address1.$touch"/>
    </FormFieldset>

    <FormFieldset title="Address line 2" :errors="[]">
      <input type="text" placeholder="Address line ..." v-model="formData.address2"/>
    </FormFieldset>

    <DoubleRow>
      <FormFieldset title="City" :errors="v$.formData.city.$errors">
        <input type="text" placeholder="City ..." v-model="v$.formData.city.$model" @blur="v$.formData.city.$touch"/>
      </FormFieldset>

      <FormFieldset title="ZIP" :errors="v$.formData.zip.$errors">
        <input type="text" placeholder="Zip ..." v-model="v$.formData.address1.$model" @blur="v$.formData.zip.$touch"/>
      </FormFieldset>
    </DoubleRow>

    <DoubleRow>
      <FormFieldset title="Country" :errors="v$.formData.country.$errors">
        <input type="text" placeholder="Country ..." v-model="v$.formData.country.$model" @blur="v$.formData.country.$touch"/>
      </FormFieldset>

      <FormFieldset title="Payment" :errors="v$.formData.payment.$errors">
        <label for="credit-card">
          <input type="radio" id="credit-card" v-model="v$.formData.payment.$model" value="credit-card" >
          Credit Card
        </label>

        <label for="pay-pal">
          <input type="radio" id="pay-pal" v-model="v$.formData.payment.$model" value="pay-pal" >
          PayPal
        </label>

        <label for="bank-transfer">
          <input type="radio" id="bank-transfer" v-model="v$.formData.payment.$model" value="bank-transfer" >
          Bank Transfer
        </label>
      </FormFieldset>
    </DoubleRow>
    
    <FormFieldset title="Note" errors="[]">
      <textarea placeholder="Note ..." v-model="formData.note"></textarea>
    </FormFieldset>


    <DoubleRow>
      <button type="button" class="secondary" @click="$emit('previous', formData)">Previous</button>
      <button type="submit" class="primary">Submit</button>
    </DoubleRow>
  </form>
</template>

<style scoped>
form {
  display: grid;
  gap: 1rem
}

input, select {
  margin: 0;
}
</style>