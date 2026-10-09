export default {
  namespaced: true,
  state: {
    address: 'Республика Башкортостан, <br> г.Уфа, ул. Зорге, 73/1',
    work_time: 'Пн.-Пт. 9:00 - 19:00 <br> Сб. 10:00 - 16:00',
    phone: '+7 (347) 266-87-05',
    email: 'sales@js-invest.ru',
    position: {lat: 54.772224, lng: 56.015887}
  },
  actions: {},
  mutations: {},
  getters: {
    address: ({address}) => address,
    phone: ({phone}) => phone,
    work_time: ({work_time}) => work_time,
    email: ({email}) => email,
    position: ({position}) => position
  }
}
