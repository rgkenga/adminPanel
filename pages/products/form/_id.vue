<template>
  <section class="page-products">
    <div class="container">
      <div class="wrapper-products">
        <FormulateForm
          v-model="model"
          :values="model"
          :schema="schema"
          @submit="onFormSubmit"
        >
          <code class="code code--block">{{ model }}</code>
        </FormulateForm>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { schema } from './fields'

export default {
  name: 'ProductForm',
  data: () => ({
    model: null,
    schema
  }),
  computed: {
    ...mapGetters({
      item: 'product/ITEM'
    }),
    isUpdating: ({
      $route: {
        params: { id }
      }
    }) => id !== undefined
  },
  async mounted () {
    if (this.isUpdating) {
      await this.fetchItem(this.$route.params.id)
      this.model = { ...this.item }
      return
    }
    this.setModel()
  },
  methods: {
    ...mapActions({
      createItem: 'product/CREATE',
      fetchItem: 'product/FETCH_ONE',
      updateItem: 'product/UPDATE'
    }),
    setModel () {
      this.model = {
        name: '',
        description: ''
      }
    },
    async onItemUpdate () {
      await this.updateItem({
        id: this.$route.params.id,
        payload: this.model
      })
      this.$router.back()
    },
    async onItemCreate () {
      await this.createItem(this.model)
      this.$router.back()
    },
    async onFormSubmit () {
      if (this.isUpdating) {
        await this.onItemUpdate()
        return
      }
      this.onItemCreate()
    }
  }
}
</script>
