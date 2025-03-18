<template lang="pug"> .about
  ScrollPage(:title="title" ref="scrollbar")
    proposed-page(to="/select") Выбор квартир
    .container
      .about-content.about-content-1.mb-5.align-items-center
        div.content
          .long-title {{ $store.getters['about/block1'].title }}
          div(v-html="$store.getters['about/block1'].desc") {{ $store.getters['about/block1'].desc }}

        img.about-picture.about-picture-1(alt src="./../assets/images/about-picture-20.png")

      .about-content.about-content-2.mb-5.align-items-center

        img.about-picture-2.about-picture(alt src="./../assets/images/about-picture-21.png")
        div.content
          .long-title {{ $store.getters['about/block2'].title }}
          div(v-html="$store.getters['about/block2'].desc") {{ $store.getters['about/block2'].desc }}
          router-link.link(
            v-if="$store.getters['about/block2'].button.text"
            :to="$store.getters['about/block2'].button.link"
            exact
          )
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block2'].button.text }}
      .about-content.about-content-3.mb-5.align-items-center
        .content
          .long-title {{ $store.getters['about/block3'].title }}
          div(v-html="$store.getters['about/block3'].desc") {{ $store.getters['about/block3'].desc }}
          router-link.link(
            v-if="$store.getters['about/block3'].button.text"
            :to="$store.getters['about/block3'].button.link"
            exact
          )
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block3'].button.text }}
        img.about-picture-4.about-picture(alt src="./../assets/images/about-picture-22.png")

      .about-content.about-content-4.mb-5.align-items-center

        img.about-picture-8.about-picture(alt src="./../assets/images/about-picture-8.png")
        .content
          .long-title {{ $store.getters['about/block4'].title }}
          div(v-html="$store.getters['about/block4'].desc") {{ $store.getters['about/block4'].desc }}
          router-link.link(:to="$store.getters['about/block4'].button.link" exact)
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block4'].button.text }}
    .about-bg-full-1.mb-5
    .container
      .about-content.about-content-5.mb-5.align-items-center
        .content
          .long-title {{ $store.getters['about/block5'].title }}
          div(v-html="$store.getters['about/block5'].desc") {{ $store.getters['about/block5'].desc }}
          router-link.link(:to="$store.getters['about/block5'].button.link" exact)
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block5'].button.text }}

        img.about-picture-5.about-picture(alt src="./../assets/images/about-picture-24.png")
      .about-content.about-content-6.mb-5.align-items-center

        img.about-picture-10.about-picture(alt src="./../assets/images/about-picture-25.png")
        .content
          .long-title {{ $store.getters['about/block6'].title }}
          div(v-html="$store.getters['about/block6'].desc") {{ $store.getters['about/block7'].desc }}


      .about-content.about-content-7.mb-5.align-items-center
        .content
          .long-title {{ $store.getters['about/block7'].title }}
          div(v-html="$store.getters['about/block7'].desc") {{ $store.getters['about/block6'].desc }}
          router-link.link(:to="$store.getters['about/block7'].button.link" exact)
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block7'].button.text }}

        img.about-picture-5.about-picture(alt src="./../assets/images/about-picture-26.png")

      .about-content.about-content-8.mb-5.align-items-center

        img.about-picture-2.about-picture(alt src="./../assets/images/about-picture-27.png")
        div.content
          .long-title {{ $store.getters['about/block8'].title }}
          div(v-html="$store.getters['about/block8'].desc") {{ $store.getters['about/block2'].desc }}
          router-link.link(
            v-if="$store.getters['about/block9'].button.text"
            :to="$store.getters['about/block9'].button.link"
            exact
          )
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block9'].button.text }}
      .about-content.about-content-9.mb-5.align-items-center
        div.content
          .long-title {{ $store.getters['about/block10'].title }}
          div(v-html="$store.getters['about/block10'].desc") {{ $store.getters['about/block1'].desc }}
          router-link.link(
            v-if="$store.getters['about/block10'].button.text"
            :to="$store.getters['about/block10'].button.link"
            exact
          )
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block10'].button.text }}
        img.about-picture.about-picture-1(alt src="./../assets/images/about-picture-28.png")
      .about-content.about-content-10.mb-5.align-items-center

        img.about-picture-2.about-picture(alt src="./../assets/images/about-picture-29.png")
        div.content
          .long-title {{ $store.getters['about/block11'].title }}
          div(v-html="$store.getters['about/block11'].desc") {{ $store.getters['about/block2'].desc }}
          router-link.link(
            v-if="$store.getters['about/block11'].button.text"
            :to="$store.getters['about/block11'].button.link"
            exact
          )
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block11'].button.text }}
      .about-content.about-content-11.mb-5.align-items-center
        .content
          .long-title {{ $store.getters['about/block12'].title }}
          div(v-html="$store.getters['about/block12'].desc") {{ $store.getters['about/block6'].desc }}
          router-link.link(:to="$store.getters['about/block12'].button.link" exact)
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block12'].button.text }}

        img.about-picture-5.about-picture(alt src="./../assets/images/about-picture-30.png")

  ModalRightToLeft(title="Закрытая территория" ref="modalClosedTerritory")
    .modal-wrapper
      img(alt src="../assets/images/bg-modal-closed-territory-2.jpg")
      .modal-container: .row
        .col-md-6
          p Полностью замкнутая, изолированная от посторонних территория «Зорге.Премьер» оснащена камерами наблюдения, имеет собственный пункт охраны с мгновенным реагированием и обеспечивает беспрекословный порядок в комплексе.
          p Расположение детских, спортивных и прогулочных пространств во внутреннем дворе также позволит вам не беспокоиться о безопасности детей во время игр и прогулок.
        .col-md-5.offset-1: .row
          .col-md-6.text-center
            img.modal-icon(alt src="../assets/images/icon-camera.svg")
            .modal-icon-text Видео-<br>наблюдение
          .col-md-6.text-center
            img.modal-icon(alt src="../assets/images/icon-password.svg")
            .modal-icon-text Вход по чип-<br>карте
</template>

<script>
import ScrollPage from './ScrollPage'
import ModalRightToLeft from './ModalRightToLeft'
import ProposedPage from '../components/ProposedPage'
export default {
  components: { ScrollPage, ModalRightToLeft, ProposedPage },
  data: () => ({
    title: 'О проекте'
  }),
  computed: {
    scrollbar () {
      return this.$refs.scrollbar.$refs.scrollbar.scrollbar
    }
  },
  mounted () {
    this.$store.commit('variables/phoneTextVisible', false)
    document.title = this.title + ' | ' + document.title
  },
  beforeDestroy () {
    this.$store.commit('variables/phoneTextVisible', true)
  }
}
</script>

<style scoped lang="stylus">
.proposed-page
  right 145px
  top calc(100vh - 105px)
  position absolute!important
  padding 14px 12px 12px!important
.about-content
  display grid
  grid-template-columns 1fr 1fr
.about-content-1

  padding-left 162px
  gap 29px
.about-content-1 .content
  width 620px
.about-content-1 .about-picture
  margin-right -162px
.about-content-2
  grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
  padding-left 162px
.about-content-2 .content
  width 480px

.about-content-3
  grid-template-columns minmax(494px,1fr) minmax(0,783px)
  gap 29px
  padding-left 162px
.about-content-3 .content
  width 494px

.about-content-4
  grid-template-columns minmax(0,783px) minmax(586px,1fr)
  margin-right 33px
.about-content-4 .content
  width 586px
  justify-self end


.about-content-5
  grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
  padding-left 162px
.about-content-5 .content
  width 480px

.about-content-6
  grid-template-columns minmax(0,783px) minmax(586px,1fr)
  margin-right 33px
.about-content-6 .content
  width 586px
  justify-self end


.about-content-7
  grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
  padding-left 162px
.about-content-7 .content
  width 480px


.about-content-8
  grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
  padding-left 162px
.about-content-8 .content
  width 480px

.about-content-9

  padding-left 162px
  gap 29px
.about-content-9 .content
  width 620px
.about-content-9 .about-picture
  margin-right -162px

.about-content-10
  grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
  padding-left 162px
.about-content-10 .content
  width 480px

.about-content-11
  grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
  padding-left 162px
.about-content-11 .content
  width 480px



.about-picture-1
  z-index 1
  size 100%
  max-width 783px
  object-fit contain


  position relative

.about-picture-2
  size 100%
  max-width 458px
  object-fit cover
  position relative



  &:before
    size 688px
    content ''
    absolute left 100% bottom 50%
    background url('./../assets/images/about-picture-5.png') no-repeat center/cover
  &:after
    content ''
    size 387px
    absolute left -260px bottom -114px
    background url('./../assets/images/about-picture-3.png') no-repeat center/cover
.about-picture-4
  size 100%
  max-width 620px
  position relative
  &:before
    content ''
    size 1108px
    absolute right 50% top 100%
    background url('./../assets/images/about-picture-7.png') no-repeat center/cover
  &:after
    content ''
    size 659px
    absolute top 105px left 320px
    background url('./../assets/images/about-picture-3.png') no-repeat center/cover
.about-picture-5
  size 100%
  max-width 620px
.about-bg-full-1
  z-index 1
  size 100% 1080px
  position relative
  background url('./../assets/images/about-render-3.png') no-repeat center/cover
  &:before
    content ''
    size 215px
    margin -107px 0 0 -107px
    absolute left 0 top 100%
    background url('./../assets/images/about-picture-3.png') no-repeat center/cover
.about-picture-8
  size 100%
  max-width 783px

  &:after
    size 100%
    z-index 1
    content ''
    absolute left 0 top 0
    background url('./../assets/images/about-picture-8.png') no-repeat center/cover
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
    @extend .about-picture-4:before
.about-picture-10
  size 100%
  max-width 783px
  position relative


.about-picture-11
  size 522px
  margin-left 40px
  position relative
  &:before
    z-index 1
    size 100%
    content ''
    absolute left 0 top 0
    border-radius: 50%
    background url('./../assets/images/about-picture-11-1.png') no-repeat center/cover
  &:after
    @extend .about-picture-4:after
.about-bg-full-2
  z-index 1
  size 100% 628px
  position relative
  background url('/static/gallery/public-areas/render-1.jpg') no-repeat center bottom/cover
.about-picture-12
  size 522px
  margin-left -40px
  position relative
  &:before
    size 100%
    z-index 1
    content ''
    absolute left 0 top 0
    background url('./../assets/images/apartment-concepts-picture-1-1.png') no-repeat center/cover
  &:after
    @extend .about-picture-4:after
    size 767px
    left auto
    top 54px
    right 144px

.about-picture-16
  @extend .about-picture-12
  &:before
    @extend .about-picture-12:before
    background-image url('./../assets/images/about-picture-16.png')
  &:after
    top auto
    left auto
    right 250px
    bottom 300px
.about-picture-13
  size 522px
  margin-left 40px
  position relative
  background url('./../assets/images/about-picture-13.png') no-repeat center/cover

.about-picture-14
  size 522px
  margin-left -40px
  position relative
  &:after
    @extend .about-picture-4:after
    left -57px
    size 244px
    top -34px
  &:before
    size calc(100% - 20px)
    z-index 1
    content ''
    absolute left 0 top 0
    border-radius: 50%
    background url('./../assets/images/about-picture-14.jpg') no-repeat
    background-size: cover
    background-position-x: -120px
  .line-1
    @extend .about-picture-8 .line-2
    top 50%
    left 100%
    right auto
    transform rotate(-90deg)
.about-picture-15
  size 522px
  margin-left 40px
  position relative
  &:before
    size 100%
    z-index 1
    content ''
    absolute left 0 top 0
    background url('./../assets/images/about-picture-15.png') no-repeat center/cover
  &:after
    @extend .about-picture-4:after
    size 693px
.modal-wrapper
  margin 0 -25px
  padding-right 160px
  img
    max-width 100%
.modal-container
  color #fff
  margin 0 auto
  padding 40px 130px
  +below(1290px)
    padding 40px 110px
.modal-icon
  max-width 100%
  user-select none
  margin-bottom 20px
.modal-icon-text
  color #f6ac6d
  font-weight 700
  user-select none
  font-size rem(10px)
  line-height rem(13.5px)
  text-transform uppercase
  letter-spacing rem(2.2px)
  font-family 'Heading Pro Wide'
.about-picture
  +below(1345px)
    size 100%
    background-size contain
.sizer
  +below(1345px)
    padding-top 100%
</style>
