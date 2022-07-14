<template>
  <header>
    <div class="header"></div>
    <div class="menu">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="assets/images/logo.svg" alt="">
          </a>
          <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <MenuLink
                v-for="(item, key) in menu"
                :key="key"
                :to="item.to"
                >
                {{ item.name }}
              </MenuLink>
            </div>
          </div>
        </div>
      </nav>
      </div>
  </header>
</template>

<script>
import MenuLink from './MenuLink.vue'

export default {
  name: 'NuxtMenu',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MenuLink
  }
}
</script>
