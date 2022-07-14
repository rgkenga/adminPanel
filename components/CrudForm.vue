<template>
  <formulate-form
    ref="form"
    :schema="formSchema"
    :model="formModel"
    :options="formOptions"
    @submit="validate"
  />
</template>

<script>
export default {
  name: 'CrudForm',
  props: {
    formSchema: {
      type: Array,
      default: () => []
    },
    formModel: {
      type: Array,
      default: () => []
    },
    formOptions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    validate () {
      this.$emit('on-submit', this.$refs.form.formModel)
    },
    onUpdate (val, field) {
      this.$emit(`on${field}Update`, val)
    }
  }
}
</script>
