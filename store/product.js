import crudStore from './generic'

export default {
  ...crudStore({
    url: 'product',
    name: 'products'
  })
}
