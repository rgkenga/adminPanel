<template>
  <div class="row row-cols-1 g-0">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="col"
    >
      <slot :row="item">
        <div class="products-cart">
          <div class="wrapper-info-product">
            <img v-show="item.image" class="img-fluid" :src="item.image" alt="">
            <div class="info">
              <span class="title">{{ item.name }}</span>
              <div class="wrapper-price">
                <span class="price">{{ item.description }}</span>
              </div>
            </div>
          </div>
          <div class="wrapper-action">
            <button
              v-for="({ classButton, emit, actionKey, classIcon, label }, actionIndex) in actions"
              :key="`action-${actionIndex}`"
              :class="classButton"
              @click="$emit(emit, { id: item[actionKey] })"
            >
              <i
                :class="classIcon"
              />
              {{ label }}
            </button>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartProduct',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    }
  }
}
</script>
