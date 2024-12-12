<script>
import GeneralForm from "./components/GeneralForm.vue";
import AddressForm from "./components/AddressForm.vue";

const initUserInfo = () => ({
  name: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: '',
  gender: '',
  dateOfBirth: '',
  address1: '',
  address2: '',
  city: '',
  zip: '',
  country: '',
  payment: '',
  note: ''
})
export default {
  components: {
    AddressForm,
    GeneralForm
  },
  data() {
    return {
      userInformation: initUserInfo(),
      activeStep: 'general'
    }
  },
  methods: {
    onNextStep(generalData) {
      this.userInformation = {
        ...this.userInformation,
        ...generalData,
      };

      this.goNext();
    },
    goNext() {
      this.activeStep = 'address';
    },
    goPrevious(addressData) {
      this.activeStep = 'general';
    },
    onPrevious(addressData) {
      this.userInformation = {
        ...this.userInformation,
        ...addressData,
      };

      this.goPrevious();
    },
    onSubmit(addressData) {
      this.userInformation = {
        ...this.userInformation,
        ...addressData,
      };

      console.log('final submit', this.userInformation);
      this.resetForm();
    },
    resetForm() {
      this.userInformation = initUserInfo();
      this.activeStep = 'general';
    }
  }
}
</script>

<template>
  <section>
    <article>
      <header>
        <h1>{{ activeStep === 'general' ? 'Step 1: General Information' : 'Step 2: Address Information'}}</h1>
      </header>
<!--      <GeneralForm v-if="activeStep === 'general'" :data="userInformation" @next="onNextStep"/>-->
<!--      <AddressForm v-else :data="userInformation" @previous="onPrevious" @submit="onSubmit" />-->
      <AddressForm :data="userInformation" @previous="onPrevious" @submit="onSubmit" />
    </article>
  </section>
</template>

<style scoped>
section {
  padding: 1rem;
}
article {
  max-width: 800px;
  margin: 0 auto;
}
</style>