<template lang="pug">
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

      router-link.logo(:class="{'logo--hidden': mobileTopLogoBgHide}" to="/" exact)
        img(src="./../../assets/svg/logo.svg")
      .d-flex.align-items-center
        router-link.select.icon-border(to="/select" exact): svg: use(xlink:href="/static/sprite.svg#key")
        .hamburger.icon-border(@click="openMenu"): svg: use(xlink:href="/static/sprite.svg#hamburger")
    ModalFull(ref="modalfull" )
</template>

<script>
import { mapGetters } from 'vuex'
import ModalFull from '@/components/ModalFull.vue'
export default {
  components: { ModalFull },
  computed: mapGetters({
    mobileMenuContext: 'menu/mobileMenuContext',
    mobileTopLogoBgHide: 'variables/mobileTopLogoBgHide'
  }),
  methods: {
    openMenu () {
      this.mobileMenuContext.open()
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
.hamburger, .select
  margin 0
  size 36px
  background none
  border-width 2px
  svg
    fill #fff
    max_size 18px
.select
  margin-right 8px
</style>
