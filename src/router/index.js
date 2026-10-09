import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: pages.Home,
      meta: { title: '' }
    },
    {
      path: '/location',
      name: 'Расположение',
      component: pages.Location,
      meta: { title: 'Расположение', subtitle: 'ул. Рихарда Зорге, 73/1' }
    },
    {
      path: '/building',
      name: 'Ход строительства',
      component: pages.Building,
      meta: { title: 'Ход строительства' }
    },
    {
      path: '/videos',
      name: 'Видео о проекте',
      component: pages.Videos,
      meta: { title: 'Видео о проекте' }
    },
    {
      path: '/gallery',
      name: 'Галерея',
      component: pages.Gallery,
      meta: { title: 'Галерея' }
    },
    {
      path: '/gallery/:category',
      name: 'Категория галереи',
      component: pages.Gallery,
      meta: { title: 'Галерея' }
    },
    {
      path: '/filter',
      name: 'Подбор квартир',
      component: pages.Filter,
      meta: { title: 'Подбор квартир' }
    },
    {
      path: '/foragents',
      name: 'Подбор квартир',
      component: pages.ForAgent,
      meta: { title: 'Подбор квартир', isProtected: true, openprice: true }
    },
    {
      path: '/filter/:set',
      name: 'Квартиры 360',
      component: pages.Filter,
      meta: { title: 'Подбор квартир' }
    },
    {
      path: '/select',
      name: 'Выбор этажа',
      component: pages.Select,
      meta: { title: 'Выбор этажа' }
    },
    {
      path: '/select/:storeyId/:flatId',
      name: 'Просмотр квартиры',
      component: pages.Flat,
      meta: { title: 'Просмотр квартиры', static: true }
    },
    {
      path: '/select/:storeyId',
      name: 'Выбор квартиры',
      component: pages.Storey,
      meta: { title: 'Выбор квартиры', static: true }
    },
    {
      path: '/parking',
      name: 'parking',
      component: pages.Parking,
      meta: { title: '' }
    },
    {
      path: '/concepts',
      name: 'Концепции квартир',
      component: pages.ApartmentConcepts,
      meta: { title: 'Концепции квартир' }
    },
    {
      path: '/engineering',
      name: 'Инженерия',
      component: pages.Engineering,
      meta: { title: 'Инженерия' }
    },
    {
      path: '/events',
      name: 'Акции и события',
      component: pages.Events,
      meta: { title: 'Акции и события' }
    },
    {
      path: '/events/:id',
      name: 'Акция или событие',
      component: pages.Event,
      meta: { title: '' }
    },
    {
      path: '/contacts',
      name: 'Контакты',
      component: pages.Contacts,
      meta: { title: 'Контакты' }
    },
    {
      path: '/developer',
      name: 'О застройщике',
      component: pages.Developer,
      meta: { title: 'О застройщике' }
    },
    {
      path: '/docs',
      name: 'Документы',
      component: pages.Docs,
      meta: { title: 'О застройщике' }
    }
  ]
})

const siteName = document.title
Vue.prototype.siteName = siteName
let leader, title

let isBack = false
router.back = () => {
  isBack = true
  history.length > 2 ? router.go(-1) : router.push('/')
}
addEventListener('popstate', () => {
  isBack = true
})

function loaderShow() {
  return Vue.$loading.show({
    color: '#f6ac6d',
    backgroundColor: '#000000',
    opacity: 1
  });
}

// плавное появление и исчезновение прелоудера
router.beforeEach((to, from, next) => {
  if (to.path === from.path && to.path !== '/') {
    return next();
  }
  title = to.meta.title
  leader = loaderShow();
  to.params.isBack = isBack
  setTimeout(() => {
    next()
    isBack = false
  }, 200)
})

// После каждого перехода проверяем, нужно ли скрыть лоадер для защищенных страниц
router.afterEach((to) => {
  // Если это защищенная страница, лоадер скроется в ProtectedView
  if (to.meta.isProtected) {
    // Не скрываем лоадер сразу, даем время ProtectedView инициализироваться
    setTimeout(() => {
      const isAuthenticated = sessionStorage.getItem('agent_authenticated') === 'true'
      if (!isAuthenticated && Vue.prototype.loaderHide) {
        // Если пользователь не авторизован, скрываем лоадер через 300мс
        Vue.prototype.loaderHide()
      }
    }, 300)
  }
})

Vue.prototype.loaderShow = loaderShow

Vue.prototype.loaderHide = () => {
  document.title = title ? title + ' | ' + siteName : siteName
  const selector = document.querySelector('.vld-overlay')
  if (selector) {
    selector.classList.add('vld-overlay--hide')
    Vue.nextTick(() => {
      setTimeout(() => {
        if (leader && leader.hide) {
          leader.hide()
        }
        const overlay = document.querySelector('.vld-overlay')
        if (overlay) {
          overlay.remove()
        }
      }, 200)
    })
  }
}

export default router
