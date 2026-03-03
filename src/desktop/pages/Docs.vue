<template lang="pug"> .developer
  Logo
  .container
    //- h1 «Жилстройинвест»
    div(ref="content"): .h-100
        //- div(v-html="content")
        h1 Документы
        a.developer-link(href="/static/1.pdf" target="_blank")
          .developer-link__text Положение о конфликте интересов
        a.developer-link(href="/static/2.pdf" target="_blank")
          .developer-link__text Положение об антикоррупционной политике
        a.developer-link(href="/static/3.pdf" target="_blank")
          .developer-link__text Положение об обмене деловыми подарками и знаками делового гостеприимства
</template>
<script>
import Logo from '../components/Logo'
import {mapGetters} from 'vuex'
export default {
  components: {Logo},
  data: () => ({
    width: 0,
    indexActive: null
  }),
  computed: mapGetters({
    content: 'developer/content',
    link: 'developer/link',
    items: 'developer/items'
  }),
  mounted () {
    this.$store.commit('variables/footerBg', true)
    setTimeout(() => {
      addEventListener('resize', this.handleResize)
      this.handleResize()
      this.loaderHide()
    }, 100)
  },
  beforeDestroy () {
    this.$store.commit('variables/footerBg', false)
    removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.width = innerWidth - this.$refs.content.offsetLeft - this.$refs.content.clientWidth
    }
  }
}
</script>

<style scoped lang="stylus">
.developer
  size 100% 100vh
  padding-top 150px
  padding-bottom 92px
  background url('../assets/images/events-bg.png') no-repeat center/cover
.container
  height 100%
  display flex
  flex-direction column
h1
  z-index 1
  margin-bottom 0
  position relative
  padding-bottom 90px
  +below(1290px)
    padding-bottom 60px
.content
  color #fff
  font-size 16px
  overflow hidden
  size 325px 100%
  line-height 1.4
  padding-right 15px
  padding-bottom 30px
  z-index 11
.developer-link
  display flex
  margin-top 45px
  align-items center
  text-decoration none
  svg
    fill #F6AC6D
    size 63px 18px
    margin-right 20px
  &__text
    color #FFF
    line-height 1
    font-size 16px
    font-weight 600
    letter-spacing .22em
    text-transform uppercase
    font-family 'Heading Pro Wide'
    border-bottom 2px solid #F6AC6D
.right-content
  height 100%
  max-width 1270px
  display flex
  padding-bottom 68px
  absolute right 0 top 0
.developer-item
  width 100%
  overflow hidden
  user-select none
  position relative
  transition width .9s ease-in-out
  background no-repeat center/cover
  &:before
    size 100%
    content ''
    absolute left 0 top 0
    background-color rgba(31, 37, 47, .8)
    transition background-color .9s ease-in-out
  &--hide
    width 13%
  &--active:before
    background-color rgba(31, 37, 47, 0)
  &__name
    z-index 1
    color #fff
    line-height 1
    font-size 20px
    font-weight 600
    white-space nowrap
    letter-spacing .22em
    transform-origin 0 100%
    text-transform uppercase
    font-family 'Heading Pro Wide'
    absolute left 50px bottom 70px
    transform rotate(-90deg) translateY(100%)
    +below(1290px)
      left 30px
      bottom 50px
      font-size 18px
.container
  @media(min-width 1530px)
    padding 0 162px
</style>
