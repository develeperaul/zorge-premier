<template lang="pug">
  //- .header(:class="{'header--bg-hidden': mobileTopLogoBgHide} " )
  .header(:class="{'header--bg-hidden': mobileTopLogoBgHide} " )
    div.exclusive-openblock(v-if="$route.name === 'Главная'")
      div.exclusive-openblock__title Эксклюзив. Готовая Квартира с дизайнерским ремонтом
      div.exclusive-openblock__btn(@click="$refs.modalfull.open()")
        svg( viewBox="0 0 43 18" fill="none" xmlns="http://www.w3.org/2000/svg")
          line(x1="43" y1="9" y2="9" stroke="currentColor" stroke-width="2")
          path(d="M43 9C38.0294 9 34 4.97056 34 0" stroke="currentColor" stroke-width="2")
          path(d="M34 18C34 13.0294 38.0294 9 43 9" stroke="currentColor" stroke-width="2")

        span Подробнее
      .exclusive-openblock__circle.exclusive-openblock__circle-1
        img(src="/static/exclusive/circle2.svg")

      .exclusive-openblock__circle.exclusive-openblock__circle-2
        img(src="/static/exclusive/circle3.svg")
    .header__wrapper

      //- router-link.logo(:class="{'logo--hidden': mobileTopLogoBgHide}" to="/" exact)
      router-link.logo(to="/" exact)
        img(src="./../../assets/svg/logo.svg")
      .d-flex.align-items-center
        router-link.select.icon-border(to="/select" exact): svg: use(xlink:href="/static/sprite.svg#key")
        .hamburger.icon-border(@click="openMenu"): svg: use(xlink:href="/static/sprite.svg#hamburger")
        .play.icon-border(@click="open")
            svg(width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg")
              path(d="M10.0094 1.38477C5.37258 1.38477 1.60938 5.14797 1.60938 9.78477C1.60938 14.4216 5.37258 18.1848 10.0094 18.1848C14.6462 18.1848 18.4094 14.4216 18.4094 9.78477C18.4094 5.14797 14.6462 1.38477 10.0094 1.38477ZM8.32938 13.5648V6.00477L13.3694 9.78477L8.32938 13.5648Z" fill="white")

    ModalFull(ref="modalfull" )
    div.popup-modal(ref="popupModalVideo")
      svg(class="popup-modal__mobclose" @click="()=>{$refs.popupModalVideo.classList.remove('active');openVideo=false;}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg")
        circle(cx="25" cy="25" r="23.5" stroke="#F6AC6D" stroke-width="3")
        line(x1="17.0607" y1="16.9393" x2="34.0312" y2="33.9099" stroke="white" stroke-width="3")
        line(x1="16.9393" y1="33.9393" x2="33.9099" y2="16.9688" stroke="white" stroke-width="3")


      VideoCarousel(:items="items" v-if="openVideo")
</template>

<script>
import { mapGetters } from 'vuex'
import ModalFull from '@/components/ModalFull.vue'
import VideoCarousel from './VideoCarousel/VideoCarousel.vue'
export default {
  components: { ModalFull,VideoCarousel },
  data: () => ({
    openVideo: false,
    items: [
      { id: 1, title: 'ЗОРГЕ Премьер_Фр. балкон', src: '/static/video/franc.webm', poster: '/static/posters/franc.png', thumb: '/static/posters/franc.png' },
      { id: 2, title: 'Главный архитектор о проекте', src: '/static/video/safarov.webm', poster: '/static/posters/safarov.png', thumb: '/static/posters/safarov.png' },
      { id: 3, title: 'ЗОРГЕ Премьер_Обзор', src: '/static/video/hsi.webm', poster: '/static/posters/hsi.png', thumb: '/static/posters/hsi.png' }
    ],
    swiperOptions: {
      pagination: {
        el: '.slider-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev'
      }
    }
  }),
  computed: mapGetters({
    mobileMenuContext: 'menu/mobileMenuContext',
    mobileTopLogoBgHide: 'variables/mobileTopLogoBgHide'
  }),
  methods: {
    openMenu () {
      this.mobileMenuContext.open()
    },
    open() {
      this.openVideo=true;
      this.$refs.popupModalVideo.classList.add("active")
    }
  }
}
</script>

<style scoped lang="stylus">
.header
  width 100%
  z-index 1000
  fixed top 0 left 0
  &__wrapper
    transition background-color .15s ease-in-out
    background-color #1f252f
    justify-content space-between
    padding 20px
    align-items center
    display flex
    &--bg-hidden
      background-color rgba(31, 37, 47, 0)
.logo
  display flex
  size 183px 49px
  margin-right 15px
  align-items center
  transition opacity .15s ease-in-out
  &--hidden
    opacity 0
  img
    width 100%
.hamburger, .select, .play
  margin 0
  size 36px
  background none
  border-width 2px
  svg
    fill #fff
    max_size 18px
.select, .hamburger
  margin-right 8px

.popup-modal
  display: none
  background: #0000003D
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 1000

.popup-modal.active
  display:  grid
  place-content: center

.popup-modal__mobclose
  position: absolute
  right: 10px
  top: 10px
  width: 36px;height: 36px

</style>
<style scoped>
</style>
