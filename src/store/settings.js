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
      tg: ' https://t.me/gk_jsi',
      other: 'https://dzen.ru/js_invest',
      max: 'https://vk.com/jsinvest',
      vk: 'https://vk.com/jsinvest',
      rutube: 'https://rutube.ru/channel/16319833/'
    }
  },
  mutations: {},
  actions: {},
  getters: {
    phone: ({phone}) => phone,
    socs: ({socs}) => socs
  }
}
