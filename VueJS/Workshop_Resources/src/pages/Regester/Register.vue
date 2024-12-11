<script>
import GeneralForm from "./components/GeneralForm.vue";

export default {
  components: {GeneralForm}

}
</script>

<template>
  <section>
    <article>
      <header>
        <h2>Step 1: General Information</h2>
      </header>
      <GeneralForm />
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