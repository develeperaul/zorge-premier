export default {
  namespaced: true,
  state: {
    content: `
      <p>С 1997 года на «Жилстройинвест Девелопмент» строит на рынке жилые дома и коммерческую недвижимость, оставаясь надежным партнером для тысяч счастливых новоселов.</p>
      <p>В портфеле компании более 20 успешно реализованных проектов: жилые комплексы «Апельсин», «Парус», «Фестиваль», «Символ» и первый небоскреб Уфы IDEL TOWER. В 7 раз  удостоенная золотого знака «Надежный застройщик России», компания продолжает создавать новые грандиозные проекты, задавая высокие стандарты качества и дизайна.</p>

    `,
    link: {
      href: 'https://js-invest.ru/',
      text: 'js-invest.ru'
    },
    items: [
      {
        name: 'ЖК «Символ»',
        image: '/static/developer/developer-1.jpg',
        imageMobile: '/static/developer/developer-mobile-1.jpg'
      },
      {
        name: 'ЖК «Аристократ»',
        image: '/static/developer/developer-2.jpg',
        imageMobile: '/static/developer/developer-mobile-2.jpg'
      },
      {
        name: 'ЖК IDEL',
        image: '/static/developer/developer-3.jpg',
        imageMobile: '/static/developer/developer-mobile-3.jpg'
      },
      {
        name: 'ЖК «Ботаника»',
        image: '/static/developer/developer-4.jpg',
        imageMobile: '/static/developer/developer-mobile-4.jpg'
      }
    ]
  },
  actions: {},
  mutations: {},
  getters: {
    content: ({content}) => content,
    link: ({link}) => link,
    items: ({items}) => items
  }
}
