import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import { ru } from '@braid/vue-formulate-i18n'

Vue.use(VueFormulate, {
  plugins: [ru],
  locale: 'ru'
})
