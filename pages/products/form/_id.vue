<template>
  <section class="page-products">
    <div class="container">
      <div class="wrapper-products">
        <FormulateForm
          #default="{ isLoading }"
          :values="model"
          v-model="model"
          @submit="onFormSubmit"
        >
          <FormulateInput
            type="text"
            name="name"
            label="Your name"
          />
          <FormulateInput
            type="text"
            name="description"
            label="Your description"
          />
          <FormulateInput
            type="group"
            name="variants"
            :repeatable="true"
          >
            <FormulateInput
              type="number"
              name="price"
              label="price"
            />
            <FormulateInput
              type="number"
              name="size"
              label="size"
            />
          </FormulateInput>
          <FormulateInput
            type="submit"
            :disabled="isLoading"
            :label="isLoading ? 'Loading...' : 'Submit this form'"
          />
          <code class="code code--block">{{ model }}</code>
        </FormulateForm>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductForm',
  data: () => ({
    model: {
      type: Array,
      default: () => []
    }
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
      console.log('mounted', this.model)
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
        discription: ''
      }
    },
    async onItemUpdate () {
      await this.updateItem({
        id: this.$route.params.id,
        payload: this.model
      })
      console.log('Происходит обновление товара', this.model)
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
