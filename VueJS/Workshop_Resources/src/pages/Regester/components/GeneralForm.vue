<script>
import useVuelidate from "@vuelidate/core";
import FormFieldset from "./FormFieldset.vue";
import DoubleRow from "./DoubleRow.vue";
import {alphaNum, email, helpers, maxLength, minLength, numeric, required, sameAs} from "@vuelidate/validators";

const separateNames = helpers.regex(/^[A-Z][a-z]+ [A-Z][a-z]+$/);
const minimalAge = (minAge) => {
  return helpers.withParams(
    { value: minAge },
    (value) => {
      const age = new Date(new Date() - new Date(value).getFullYear() - 1970);
    }
  )
}

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
  data() {
    return {
      formData: {
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
      }
    }
  },
  methods: {
    async onSubmit() {
      const isValid = await this.v$.$validate();
    }
  },
  validations() {
    return {
      formData: {
        name: {
          required,
          separateNames: helpers.withMessage('Field must contain two names (letter only) separated by space. Both should start with a capital letter', separateNames),
        },
        password: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(16),
          alphaNum,
        },
        confirmPassword: {
          sameAsPassword: sameAs(this.password)
        },
        email: {
          required,
          email
        },
        phone: {
          required,
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10),
        },
        gender: { required },
        dateOfBirth: {
          required,
          minimalAge: helpers.withMessage(
            ({
              $params,
            }) => `You must be ${$params.minAge} + years old`,
            minimalAge(13),
          ),
        },
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <FormFieldset title="Name" :errors="v$.formData.name.$errors">
      <input type="text" placeholder="Jane Doe ..." v-model="formData.name" @blur="v$.formData.name.$touch"/>
    </FormFieldset>

    <DoubleRow>
      <FormFieldset title="Password" :errors="v$.formData.password.$errors">
        <input type="password" placeholder="Strong password ..." v-model="v$.formData.password.$model">
      </FormFieldset>

      <FormFieldset title="Confirm" :errors="v$.formData.confirmPassword.$errors">
        <input type="password" placeholder="Confirm password ..." v-model="v$.formData.confirmPassword.$model"/>
      </FormFieldset>
    </DoubleRow>

    <DoubleRow>
      <FormFieldset title="email" :errors="v$.formData.email.$errors">
        <input type="email" placeholder="janedoe@gmail.com ..." v-model="v$.formData.email.$model">
      </FormFieldset>

      <FormFieldset title="Phone Number" :errors="v$.formData.phone.$errors">
        <input type="text" placeholder="359 888 888 88 ..." v-model.number="v$.formData.phone.$model">
      </FormFieldset>
    </DoubleRow>

    <DoubleRow>
      <FormFieldset title="Gender" :errors="v$.formData.gender.$errors">
        <select v-model="v$.formData.gender.$model">
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </FormFieldset>

      <FormFieldset title="Date of Birth" :errors="v$.formData.dateOfBirth.$errors">
        <input type="date" v-model="v$.formData.dateOfBirth.$model">
      </FormFieldset>
    </DoubleRow>

    <button type="submit" class="primary">Next</button>
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