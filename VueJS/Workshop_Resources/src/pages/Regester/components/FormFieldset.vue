<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    errors: {
      type: Array,
      required: true
    },
    required: Boolean,
    disabled: Boolean
  }
}
</script>

<template>
  <fieldset :disabled>
    <label>
      <span>{{ title }} <i v-if="required">*</i></span>

      <slot></slot>

      <div class="errorContainer">
        <strong
            v-for="error of errors"
            :key="error.$uid"
            class="error"
        >
          {{ error.$message }}
        </strong>
      </div>
    </label>
  </fieldset>
</template>

<style scoped>
span {
  display: block;

  i {
    color: red;
  }
}

fieldset, label {
  margin: 0;
}

.errorContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: red;
}
</style>