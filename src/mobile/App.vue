<template lang="pug"> #app(:class="{'no-padding': noPadding}")
  //- .width-height-view(v-if="whv") {{ whv }}
  Header
  .main: router-view
  .footer
    a.footer__jsi(href="https://js-invest.ru/" target="_blank")
      svg: use(xlink:href="/static/sprite.svg#logo-jsi")
    .footer__desc © 1994-#{new Date().getFullYear()} ООО ГК «Жилстройинвест» <br>
      | Материалы сайта не являются публичной офертой. <br>
      div(style="margin-bottom: 5px")
        a.footer__private-police(href='/static/pol.pdf' target="_blank") Политика конфиденциальности
      div
        a.footer__private-police(href='/static/sog.pdf' target="_blank") Согласие на обработку персонаольных данных
    .footer__bottom
      .footer__socs
        a.footer__soc(
          v-for="(href,key) in $store.getters['settings/socs']"
          :key="key"
          :href="href"
          target="_blank"
        ): svg: use(:xlink:href="`/static/sprite.svg#${key}`")
      a.yesidea(href="https://yes-idea.ru/" target="_blank")
        svg: use(xlink:href="/static/sprite.svg#yesidea")
  .bottom-right-panel
    button(
      v-if="!menuShow && !phoneHidden"
      type="button"
      @click="$refs.modal.open()"
      style="margin-bottom: 30px; display: block; background: transparent; outline: 0; border: 0; padding: 0; margin-left: auto"
    )
      img(src="@/assets/svg/callme.svg")
    a.phone.comagic_phone(
      v-if="!menuShow && !phoneHidden"
      :href="`tel://${phone.href}`"

      :class="{'phone--black-mode': phoneBlackMode}"
      @click="$VKGoal('contact')"
    )

      .icon-bg
        svg: use(xlink:href="/static/sprite.svg#phone")
  Menu
  .first-boot(v-if="firstBoot")
  Cookies(@openPol="openPrivatePolice")
  ModalCallback(ref="modal" theme="Заказать обратный звонок")
  transition(name="fade-025"): .hidden-menu(v-if="menuShow")
    .top-right-panel
      .icon-bg.icon-bg--close(@click="toggleMenu"): svg: use(xlink:href="/static/sprite.svg#close")
      a.phone.comagic_phone(
        :href="`tel://${phone.href}`"
        @mouseover="$store.commit('variables/phoneShow', true)"
        @mouseleave="$store.commit('variables/phoneShow', false)"
        @click="$VKGoal('contact')"
      )
        .phone__number {{ phone.text }}
        .icon-bg: svg: use(xlink:href="/static/sprite.svg#phone")
      button(
        type="button"
        @click="$refs.modal.open()"
        style="margin-top: 10px; display: block; background: transparent; outline: 0; border: 0; padding: 0; margin-left: auto"
      )
        img(src="@/assets/svg/callme.svg")
    .ellipses
      svg.ellipse.ellipse-1(xmlns="http://www.w3.org/2000/svg" width="1016" height="1016" viewBox="0 0 1016 1016")
        clipPath#yjkqa(xmlns="http://www.w3.org/2000/svg"): path(fill="#fff" d="M1016 508c0 280.561-227.439 508-508 508C227.439 1016 0 788.561 0 508 0 227.439 227.439 0 508 0c280.561 0 508 227.439 508 508z")
        path(fill="none" stroke-width="4" stroke-miterlimit="20" d="M1016 508c0 280.561-227.439 508-508 508C227.439 1016 0 788.561 0 508 0 227.439 227.439 0 508 0c280.561 0 508 227.439 508 508z" clip-path="url(#yjkqa)")
      svg.ellipse.ellipse-2(width="1108" height="766" viewBox="0 0 1108 766" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(d="M1107 0C1107 611.379 611.379 1107 0 1107" stroke="url(#paint0_linear)" stroke-opacity="0.3" stroke-width="2")
        defs: linearGradient#paint0_linear(x1="0" y1="-1107" x2="0" y2="1107" gradientUnits="userSpaceOnUse")
          stop(stop-color="#F6AC6D")
          stop(offset="1" stop-color="#764419")
      svg.ellipse.ellipse-3(xmlns="http://www.w3.org/2000/svg" width="522" height="522" viewBox="0 0 522 522")
        clipPath#udina: path(fill="#fff" d="M522 261c0 144.146-116.854 261-261 261C116.854 522 0 405.146 0 261 0 116.854 116.854 0 261 0c144.146 0 261 116.854 261 261z")
        path(fill="none" stroke-miterlimit="20" stroke-width="4" d="M522 261c0 144.146-116.854 261-261 261C116.854 522 0 405.146 0 261 0 116.854 116.854 0 261 0c144.146 0 261 116.854 261 261z" clip-path="url(#udina)")
      svg.ellipse.ellipse-4(xmlns="http://www.w3.org/2000/svg" width="659" height="659" viewBox="0 0 659 659")
        clipPath#ix7qa: path(fill="#fff" d="M659 329.5C659 511.478 511.478 659 329.5 659S0 511.478 0 329.5 147.522 0 329.5 0 659 147.522 659 329.5z")
        path(fill="none" stroke-miterlimit="20" stroke-width="4" d="M659 329.5C659 511.478 511.478 659 329.5 659S0 511.478 0 329.5 147.522 0 329.5 0 659 147.522 659 329.5z" clip-path="url(#ix7qa)")
    .container.h-100.menu: .hidden-menu__wrapper
      .first-menu: router-link(v-for="item in menu" :key="item.to" :to="item.to" exact) {{ item.title }}
      .second-menu: router-link(v-for="item in subMenu" :key="item.to" :to="item.to" exact) {{ item.title }}
</template>

<script>
import Menu from './components/Menu'
import Header from './components/Header'
// import ModalCallback from './components/ModalCallback.vue'
import ModalCallback from '@/components/ModalFull.vue'
import Cookies from '@/components/cookies'
import {mapGetters} from 'vuex'
import Vue from 'vue'
export default {
  data: () => ({
    noPadding: false,
    firstBoot: true,
    whv: ''
  }),
  components: { Menu, Header, ModalCallback,Cookies },
  computed: mapGetters({
    menu: 'menu/links',
    phone: 'settings/phone',
    subMenu: 'menu/subLinks',
    phoneShow: 'variables/phoneShow',
    phoneTextVisible: 'variables/phoneTextVisible',
    phoneHidden: 'variables/phoneHidden',
    phoneBlackMode: 'variables/phoneBlackMode',
    mobileTopLogoBgHide: 'variables/mobileTopLogoBgHide',
    mobileMenuContext: 'menu/mobileMenuContext',
    menuShow: 'variables/menuShow',
    privatePolice: 'agreePrivatePolice/privatePolice'
  }),
  mounted () {
    document.body.className = 'mobile-desktop'
    if (process.env.NODE_ENV === 'development') {
      this.whv = innerWidth + 'x' + innerHeight
      $(window).resize(() => {
        this.whv = innerWidth + 'x' + innerHeight
      })
    }
    const loaderHide = Vue.prototype.loaderHide
    Vue.prototype.loaderHide = () => {
      this.firstBoot = false
      this.mobileMenuContext.close()
      setTimeout(() => loaderHide(), 200)
    }
    $.fancybox.defaults.beforeShow = () => {
      this.mobileMenuContext.lock = true
    }
    $.fancybox.defaults.beforeClose = () => {
      this.mobileMenuContext.lock = false
    }
    $.fancybox.defaults.thumbs.autoStart = true
    $.fancybox.defaults.thumbs.axis = 'x'
  },
  methods: {
    openPrivatePolice () {
      $.fancybox.open(`<div class="container">${this.privatePolice}</div>`)
    }
  }
}
</script>

<style lang="stylus">
.fancybox-thumbs
  width auto
  left 0
  bottom 0
  top auto
  right  0
  height 95px
  box-sizing border-box
  padding 10px 10px 5px 10px
  background rgba(0, 0, 0, .3)
.fancybox-show-thumbs .fancybox-inner
  right 0
  bottom 95px
</style>
<style scoped lang="stylus">
.width-height-view
  color #000
  z-index 9999
  line-height 1
  background #fff
  fixed left 0 top 0
#app
  user-select none
  padding-top 90px
  &.no-padding
    padding-top 0
.footer
  z-index 1
  position relative
  padding 20px 20px 15px
  background-color #151b26
  &__private-police
    line-height 1
    margin-top 5px
    cursor pointer
    width fit-content
    font-size rem(12px)
    border-bottom 1px dashed
    color rgba(255, 255, 255, .7)
  &__jsi svg
    fill #fff
    size 204px 20px
    margin-bottom 10px
  &__desc
    color #b9b9b9
    font-size 11px
    line-height 1.2
    margin-bottom 12px
  &__bottom
    display flex
    align-items center
    justify-content space-between
  &__socs
    display flex
    align-items center
  &__soc
    margin-right 6px
    svg
      size 22px
      fill #b8babd
.yesidea
  svg
    fill #fff
    size 78px 24px
>>>
  .icon-border
    border-width 2px
  .second-title
    color #fff
    font-size 14px
    font-weight 400
    text-align center
    margin-bottom 15px
    line-height 20.58px
    text-transform uppercase
    font-family 'Heading Pro Wide'
  .event-button
    height 41px
    display flex
    margin 0 auto
    line-height 1
    color #1f252f
    cursor pointer
    font-weight 700
    padding 0 12px 0
    user-select none
    width fit-content
    align-items center
    border-radius 62px
    letter-spacing 1px
    font-size rem(10px)
    border 3px solid #f6ac6d
    text-transform uppercase
    background-color #f6ac6d
    font-family 'Heading Pro Wide'
    transition background-color .15s ease-in-out, color .15s ease-in-out
    &:hover
      color #fff
      text-decoration none
      background-color transparent
    svg
      fill #1F252F
      size 30px 9px
      margin-right 9px
      transition fill .15s ease-in-out
    &:hover svg
      fill #fff
  .smooth-scrollbar
    overflow visible!important
  .scrollbar-track-x
    top -35px
    height 1px
    bottom auto
  .scrollbar-thumb-x
    top -2px
    height 3px
</style>
