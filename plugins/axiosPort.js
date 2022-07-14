import { setClient } from '@/services/requestServices'

export default (ctx) => {
  setClient(ctx.$axios)
}
