<template lang="pug"> .apartment-concepts
  ScrollPage(ref="scrollbar" :backgroundImage="require('../assets/images/apartment-concepts.jpg')")
    .container
      .row.mb-5.align-items-center.apartment-concepts-content.apartment-concepts-content-1
        div.apartment-concepts-content__text
          .long-title(v-html="items[0].title")
          .text(v-html="items[0].content")
          //- router-link.link(:to="items[0].button.link" exact)
          //-   svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
          //-   .link__text {{ items[0].button.text }}
        div
         .apartment-concepts-picture-1.apartment-concepts-picture: .sizer
      .row.mb-5.align-items-center.apartment-concepts-content.apartment-concepts-content-2
        div: .apartment-concepts-picture-2.apartment-concepts-picture: .sizer
          .line-1
          .line-2
        .apartment-concepts-content__text
          .long-title(v-html="items[1].title")
          .text(v-html="items[1].content")
      .row.mb-5.align-items-center.apartment-concepts-content.apartment-concepts-content-3
        .apartment-concepts-content__text
          .long-title(v-html="items[2].title")
          .text(v-html="items[2].content")
        div: .apartment-concepts-picture-4.apartment-concepts-picture
          .sizer
          .line

    .apartment-concepts-bg-full-1.mb-5

</template>

<script>
import ScrollPage from '../components/ScrollPage'
import ModalRightToLeft from '../components/ModalRightToLeft'
import NextSection from '../components/NextSection'
import {mapGetters} from 'vuex'
export default {
  components: { ScrollPage, ModalRightToLeft, NextSection },
  computed: {
    ...mapGetters({items: 'concepts/items'}),
    scrollbar () {
      return this.$refs.scrollbar.$refs.scrollbar.scrollbar
    }
  },
  beforeDestroy () {
    this.$store.commit('variables/footerShow', true)
  },
  mounted () {
    this.$store.commit('variables/footerShow', false)
    this.loaderHide()
  },
  methods: {
    nextBlock () {
      this.scrollbar.setMomentum(
        this.scrollbar.offset.x,
        window.innerHeight - this.scrollbar.scrollTop
      )
    }
  }
}
</script>

<style scoped lang="stylus">
.apartment-concepts-content-1
  display grid
  grid-template-columns 1fr 1fr

.apartment-concepts-content.apartment-concepts-content-1 .apartment-concepts-content__text
  padding-left 162px
.apartment-concepts-content .apartment-concepts-content__text .text
  color #B9B9B9

.apartment-concepts-content-1 .apartment-concepts-content__text .text
  max-width 465px
.apartment-concepts-picture-1
  z-index 1
  size 783px
  position relative
  background url('./../assets/images/apartment-concepts-picture-12.png') no-repeat center/cover

.apartment-concepts-content-2
  display grid
  grid-template-columns 458px 1fr
  max-width 1270px
  margin 0 auto
.apartment-concepts-content-2 .apartment-concepts-content__text
  width 480px
  margin-left 192px
.apartment-concepts-picture-2
  size 458px
  position relative

  .line-1
    size 100%
    z-index 1
    absolute left 0 top 0
    background url('./../assets/images/apartment-concepts-picture-15.png') no-repeat center/cover
  .line-2
    size 488px
    content ''
    absolute right 50% top 100%
    background url('./../assets/images/about-picture-5.png') no-repeat center/cover
  &:before
    size 688px
    content ''
    absolute left 35% bottom 50%
    background url('./../assets/images/about-picture-5.png') no-repeat center/cover
  &:after
    content ''
    size 641px
    absolute left -460px bottom -230px
    background url('./../assets/images/about-picture-3.png') no-repeat center/cover

.apartment-concepts-content-3
  display grid
  grid-template-columns 1fr 620px
  max-width 1270px
  margin 0 auto

.apartment-concepts-content-3 .apartment-concepts-content__text
  width 494px


.apartment-concepts-picture-4
  size 620px

  position relative
  .line
    size 100%
    z-index 1
    content ''
    absolute left 0 top 0
    background url('./../assets/images/apartment-concepts-picture-16.png') no-repeat center/cover
  &:before
    content ''
    size 1108px
    absolute right 50% top 100%
    background url('./../assets/images/about-picture-7.png') no-repeat center/cover
  &:after
    content ''
    size 850px
    absolute top -105px left 380px
    background url('./../assets/images/about-picture-3.png') no-repeat center/cover
.apartment-concepts-picture-5
  size 522px
  margin-left -40px
  background url('./../assets/images/apartment-concepts-picture-5.png') no-repeat center/cover
.apartment-concepts-bg-full-1
  z-index 1
  size 100% 628px
  position relative
  background url('./../assets/images/apartment-concepts-bg-full-3.png') no-repeat center/cover
  &:before
    content ''
    size 215px
    margin -107px 0 0 -107px
    absolute left 0 top 100%
    background url('./../assets/images/about-picture-3.png') no-repeat center/cover
.apartment-concepts-picture-8
  size 522px
  margin-left 40px
  position relative
  &:after
    size 100%
    z-index 1
    content ''
    absolute left 0 top 0
    background url('./../assets/images/apartment-concepts-picture-8.png') no-repeat center/cover
  &:before
    content ''
    size 222px
    absolute right -25px top -25px
    background url('./../assets/images/about-picture-3.png') no-repeat center/cover
  .line-1
    size 730px
    absolute right 100% bottom 50%
    background url('./../assets/images/about-picture-9.png') no-repeat center/cover
  .line-2
    @extend .apartment-concepts-picture-4:before
.apartment-concepts-picture-10
  size 522px
  margin-left -40px
  position relative
  border-radius: 50%
  background url('./../assets/images/apartment-concepts-picture-10.jpg') no-repeat right/cover
  background-size: cover !important
  &:before
    @extend .apartment-concepts-picture-2 .line-2
    top auto
    right 100%
    bottom 50%
    transform rotate(90deg)
.apartment-concepts-picture-11
  size 522px
  margin-left 40px
  position relative
  &:before
    z-index 1
    size 100%
    content ''
    absolute left 0 top 0
    background url('./../assets/images/apartment-concepts-picture-11.png') no-repeat center/cover
  &:after
    @extend .apartment-concepts-picture-4:after
.apartment-concepts-bg-full-2
  z-index 1
  size 100% 628px
  position relative
  background url('./../assets/images/apartment-concepts-bg-full-2.jpg') no-repeat center/cover
.apartment-concepts-picture-12
  size 522px
  margin-left -40px
  position relative
  &:before
    size 100%
    z-index 1
    content ''
    absolute left 0 top 0
    background url('./../assets/images/apartment-concepts-picture-12.png') no-repeat center/cover
  &:after
    @extend .apartment-concepts-picture-4:after
    size 767px
    left auto
    top 54px
    right 144px
  .line-1
    @extend .apartment-concepts-picture-2 .line-2
    top 50%
    left 100%
    right auto
    transform rotate(-90deg)
.apartment-concepts-picture-13
  size 522px
  margin-left 40px
  position relative
  background url('./../assets/images/apartment-concepts-picture-13.png') no-repeat center/cover
  &:before
    @extend .apartment-concepts-picture-2 .line-2
    top auto
    left 100%
    right auto
    bottom 50%
.apartment-concepts-picture-14
  size 522px
  margin-left -40px
  position relative
  &:after
    @extend .apartment-concepts-picture-4:after
    left -57px
    size 244px
    top -34px
  &:before
    size 100%
    z-index 1
    content ''
    absolute left 0 top 0
    background url('./../assets/images/apartment-concepts-picture-14.png') no-repeat center/cover
  .line-1
    @extend .apartment-concepts-picture-8 .line-2
    top 50%
    left 100%
    right auto
    transform rotate(-90deg)
.apartment-concepts-picture-15
  size 522px
  margin-left -40px
  position relative
  &:before
    size 100%
    z-index 1
    content ''
    absolute left 0 top 0
    background url('./../assets/images/apartment-concepts-picture-15.png') no-repeat center/cover
  &:after
    @extend .apartment-concepts-picture-4:after
    size 693px
.apartment-concepts-picture
  +below(1345px)
    size 100%
    background-size contain
.sizer
  +below(1345px)
    padding-top 100%
</style>
