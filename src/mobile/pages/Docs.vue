<template lang="pug"> .developer(style="height:calc(100vh   - 247px)")
    .content( class="h-100")
      h1(class="docs-title") Документы
      a.link(href="/static/1.pdf" target="_blank")
        .developer-link__text Положение о конфликте интересов
      a.link(href="/static/2.pdf" target="_blank")
        .developer-link__text Положение об антикоррупционной политике
      a.link(href="/static/3.pdf" target="_blank")
        .developer-link__text Положение об обмене деловыми подарками и знаками делового гостеприимства
    //- .items
      .items-wrapper: .item(
        v-for="item in items"
        :style="{backgroundImage:`url(${item.image})`}"
      ): .item__name {{ item.name }}

</template>

<script>
import {mapGetters} from 'vuex'
import BackTo from '../components/BackTo'
import TitleCircle from '../components/TitleCircle'
export default {
  components: {TitleCircle, BackTo},
  computed: mapGetters({
    content: 'developer/content',
    link: 'developer/link',
    items: 'developer/items'
  }),
  mounted () {
    this.loaderHide()
  },
  methods: {
    jsOpen () {
      open(this.link.href, '_blank')
    }
  }
}
</script>

<style scoped lang="stylus">
.docs-title
  color #fff
.link
  color #fff
  font-size 12px
  padding 0 20px
  line-height 14px
.developer
  padding-bottom 20px
.title-circle
  line-height 1.4
  margin 15px 0!important
.content
  color #fff
  font-size 12px
  padding 0 20px
  line-height 14px
  & > *:last-child
    margin-bottom 0
.items
  margin-top 20px
.items-wrapper
  padding-bottom 20px
.item
  size 100% 170px
  position relative
  background no-repeat center/cover
  &__name
    size 100%
    color #FFF
    padding 20px
    line-height 1
    font-size 10px
    font-weight 600
    text-align right
    letter-spacing .1em
    absolute left 0 top 0
    text-transform uppercase
    font-family 'Heading Pro Wide'
    background-color rgba(31, 37, 47, .7)
</style>
