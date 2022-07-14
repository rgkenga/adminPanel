<template>
  <nuxt-link
    :to="to"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'MenuLink',
  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
