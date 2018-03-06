import store from './../store'
import { loadMessages } from './../plugin/i18n'

export default async (to, from, next) => {
  await loadMessages(store.getters['lang/locale'])

  next()
}
