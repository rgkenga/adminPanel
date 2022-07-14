<template>
  <div>
    <NuxtMenu
      :menu="menu"
    />
    <Nuxt />
  </div>
</template>

<script>
import menu from './setupMenu'
import NuxtMenu from '~/components/Menu.vue'

export default {
  name: 'DefaultLayout',
  data: () => ({
    menu
  }),
  components: {
    NuxtMenu
  }
}
</script>
