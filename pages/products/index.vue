<template>
  <section class="page-products">
    <div class="container">
      <div class="wrapper-title">
        <span class="title">Товары</span>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Сводка</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Товары
            </li>
          </ol>
        </nav>
      </div>
      <div class="filters">
        <div class="add-item">
          <nuxt-link
            to="products/form"
          >
            <i class="bi bi-folder-plus me-2" />
            Добавить товар
          </nuxt-link>
        </div>
        <div class="filter-item">
          <div class="form-floating">
            <select class="form-select" aria-label="Default select example">
              <option selected>
                Все
              </option>
              <option value="1">
                Рубашки
              </option>
              <option value="2">
                Футболки
              </option>
              <option value="3">
                Обувь
              </option>
            </select>
            <label for="floatingInput">Категории</label>
          </div>
          <div class="form-floating">
            <select class="form-select" aria-label="Default select example">
              <option selected>
                По имени
              </option>
              <option value="1">
                По цене
              </option>
              <option value="2">
                По дате создания
              </option>
            </select>
            <label for="floatingInput">Сортировать</label>
          </div>
        </div>
      </div>
      <div class="wrapper-products">
        <CartProduct
          :actions="actions"
          :data="products"
          @onEdit="handleEdit"
          @onDelete="handleDelete"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { actions } from './setup'
import CartProduct from '~/components/CartProduct.vue'

export default {
  name: 'ProductsPage',
  components: {
    CartProduct
  },
  data: () => ({
    actions
  }),
  computed: {
    ...mapGetters({
      products: 'product/ITEMS'
    })
  },
  mounted () {
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'product/FETCH_ALL',
      deleteProduct: 'product/DELETE'
    }),
    async handleEdit ({ id }) {
      await this.$router.push(`/products/form/${id}`)
    },
    async handleDelete ({ id }) {
      await this.deleteProduct(id)
      this.fetchProducts()
    }
  }
}
</script>
