export default {
  namespaced: true,
  state: {
    phone: {
      text: '+7 (347) 266-87-05',
      href: '83472668705'
    },
    socs: {
      // facebook: 'https://www.facebook.com/gkjsinvest/',
      // instagram: 'https://www.instagram.com/gkjsi/',
      vkontakte: 'https://vk.com/jsinvest'
    }
  },
  mutations: {},
  actions: {},
  getters: {
    phone: ({phone}) => phone,
    socs: ({socs}) => socs
  }
}
