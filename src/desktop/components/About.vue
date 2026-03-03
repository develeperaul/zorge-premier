<template lang="pug"> .about
  ScrollPage(:title="title" ref="scrollbar" isBtn @open="openPopup")
    proposed-page(to="/select") Выбор квартир
    .container
      .about-content.about-content-1.mb-5.align-items-center
        div.content
          .long-title {{ $store.getters['about/block1'].title }}
          div.text(v-html="$store.getters['about/block1'].desc") {{ $store.getters['about/block1'].desc }}
        .about-content-1--img
          img.about-picture.about-picture-1(alt src="./../assets/images/about-picture-20.png")

      .about-content.about-content-2.mb-5.align-items-center
        .about-content-2--img
          img.about-picture-2.about-picture(alt src="./../assets/images/about-picture-21.png")
        div.content
          .long-title {{ $store.getters['about/block2'].title }}
          div.text(v-html="$store.getters['about/block2'].desc") {{ $store.getters['about/block2'].desc }}
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
          div.text(v-html="$store.getters['about/block3'].desc") {{ $store.getters['about/block3'].desc }}
          router-link.link(
            v-if="$store.getters['about/block3'].button.text"
            :to="$store.getters['about/block3'].button.link"
            exact
          )
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block3'].button.text }}
        .about-content-3--img
          img.about-picture-4.about-picture(alt src="./../assets/images/about-picture-22.png")

      .about-content.about-content-4.mb-5.align-items-center
        div
          img.about-picture-8.about-picture(alt src="./../assets/images/about-picture-23.png")
        .content
          .long-title {{ $store.getters['about/block4'].title }}
          div.text(v-html="$store.getters['about/block4'].desc") {{ $store.getters['about/block4'].desc }}
          router-link.link(:to="$store.getters['about/block4'].button.link" exact)
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block4'].button.text }}
    .about-bg-full-1.mb-5
    .container
      .about-content.about-content-5.mb-5.align-items-center
        .content

          .long-title {{ $store.getters['about/block5'].title }}
          div.text(v-html="$store.getters['about/block5'].desc") {{ $store.getters['about/block5'].desc }}
          div.link(@click="$refs.modalClosedTerritory.open()" )
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block5'].button.text }}
        .about-content-4--img
          img.about-picture-5.about-picture(alt src="/static/about/roskoshndvor.png")
      .about-content.about-content-6.mb-5.align-items-center
        .about-content-5--img
          img.about-picture-10.about-picture(alt src="./../assets/images/about-picture-25.png")
        .content
          .long-title {{ $store.getters['about/block6'].title }}
          div.text(v-html="$store.getters['about/block6'].desc") {{ $store.getters['about/block7'].desc }}


      .about-content.about-content-7.mb-5.align-items-center
        .content
          .long-title {{ $store.getters['about/block7'].title }}
          div.text(v-html="$store.getters['about/block7'].desc") {{ $store.getters['about/block6'].desc }}

        .about-content-6--img
          img.about-picture-5.about-picture(alt src="./../assets/images/about-picture-26.png")

      .about-content.about-content-8.mb-5.align-items-center
        .about-content-7--img
          img.about-picture-2.about-picture(alt src="./../assets/images/about-picture-31.png")
        div.content
          .long-title {{ $store.getters['about/block8'].title }}
          div.text(v-html="$store.getters['about/block8'].desc") {{ $store.getters['about/block2'].desc }}
          //- router-link.link(
          //-   v-if="$store.getters['about/block9'].button.text"
          //-   :to="$store.getters['about/block9'].button.link"
          //-   exact
          //- )
          //-   svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
          //-   .link__text {{ $store.getters['about/block9'].button.text }}
      .about-content.about-content-9.mb-5.align-items-center
        div.content
          .long-title {{ $store.getters['about/block10'].title }}
          div.text(v-html="$store.getters['about/block10'].desc") {{ $store.getters['about/block1'].desc }}
          router-link.link(
            v-if="$store.getters['about/block10'].button.text"
            :to="$store.getters['about/block10'].button.link"
            exact
          )
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block10'].button.text }}
        img.about-picture.about-picture-1(alt src="./../assets/images/about-picture-28.png")
      .about-content.about-content-10.mb-5.align-items-center
        .about-content-8--img
          img.about-picture-2.about-picture(alt src="./../assets/images/about-picture-29.png")
        div.content
          .long-title {{ $store.getters['about/block11'].title }}
          div.text(v-html="$store.getters['about/block11'].desc") {{ $store.getters['about/block2'].desc }}
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
          div.text(v-html="$store.getters['about/block12'].desc") {{ $store.getters['about/block6'].desc }}
          router-link.link(:to="$store.getters['about/block12'].button.link" exact)
            svg.link__svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            .link__text {{ $store.getters['about/block12'].button.text }}
        .about-content-9--img
          img.about-picture-5.about-picture(alt src="./../assets/images/about-picture-30.png")
  div.popup-modal(ref="popupModalVideo")
      svg(class="popup-modal__descclose" @click="()=>{$refs.popupModalVideo.classList.remove('active');openVideo=false;}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg")
        circle(cx="25" cy="25" r="23.5" stroke="#F6AC6D" stroke-width="3")
        line(x1="17.0607" y1="16.9393" x2="34.0312" y2="33.9099" stroke="white" stroke-width="3")
        line(x1="16.9393" y1="33.9393" x2="33.9099" y2="16.9688" stroke="white" stroke-width="3")


      VideoCarousel(:items="items" v-if="openVideo")

  ModalOther(title="Роскошный двор" full ref="modalClosedTerritory")
    .modal-wrapper
      .overflow-h
        div.popup-content
          .popup-content__left
            div.popup-content--top
              p Только резиденты комплекса могут попасть <br>
                | в настоящую гостиную под открытым небом — внутренний двор «Зорге.Премьер». Здесь гармонично расположились места для активного <br>
                | и спокойного отдыха и территории для взрослых  <br>
                | и детей. 
              p Местом притяжения жителей комплекса станут <br>
                | две игровые для ребят разного возраста, батут, песочница, самая длинная гряда качелей, альпинарий, настоящий сад камней <br>
                | и эксклюзивные решения - сухой ручей <br>
                | и светомузыкальный фонтан. 

            div.popup-content__left--bottom
              div
                img.modal-icon(alt src="../assets/images/icon-camera.svg")
                .modal-icon-text Видео-<br>наблюдение
              div
                img.modal-icon(alt src="../assets/images/icon-password.svg")
                .modal-icon-text Вход по <br> чип-карте
          .popup-content__right.overflow-h
            swiper(:options="swiperOptions"  ref="mySwiper")
              swiper-slide(
              )
                img(alt src="../assets/images/yard/1.png")
              swiper-slide(
              )
                img(alt src="../assets/images/yard/2.png")
              swiper-slide(
              )
                img(alt src="../assets/images/yard/3.png")
              swiper-slide(
              )
                img(alt src="../assets/images/yard/4.png")

              .slider-button.slider-button--prev(slot="button-prev"): img(alt src="@/assets/svg/button-prev.svg")
              .slider-button.slider-button--next(slot="button-next"): img(alt src="@/assets/svg/button-prev.svg")

</template>

<script>
import ScrollPage from './ScrollPage'
import ModalOther from './ModalOther'
import ProposedPage from '../components/ProposedPage'
import VideoCarousel from '../components/VideoCarousel/VideoCarousel.vue'
export default {
  components: { ScrollPage, ModalOther, ProposedPage,VideoCarousel },
  data: () => ({
    openVideo:false,
    items: [
      { id: 1, title: 'ЗОРГЕ Премьер_Фр. балкон', src: '/static/video/franc.webm', poster: '/static/posters/franc.png', thumb: '/static/posters/franc.png' },
      { id: 2, title: 'Главный архитектор о проекте', src: '/static/video/safarov.webm', poster: '/static/posters/safarov.png', thumb: '/static/posters/safarov.png' },
      { id: 3, title: 'ЗОРГЕ Премьер_Обзор', src: '/static/video/hsi.webm', poster: '/static/posters/hsi.png', thumb: '/static/posters/hsi.png' }
    ],
    title: '«Зорге.Премьер» - квартиры в домах премиум-класса в Уфе',
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
  computed: {
    scrollbar () {
      return this.$refs.scrollbar.$refs.scrollbar.scrollbar
    }
  },
  mounted () {
    this.$store.commit('variables/phoneTextVisible', false)
    document.title = this.title + ' | ' + document.title
    // this.$refs.modalClosedTerritory.open();
  },
  beforeDestroy () {
    this.$store.commit('variables/phoneTextVisible', true)
  },

  methods: {
    openPopup() {
      this.openVideo=true;
      this.$refs.popupModalVideo.classList.add("active")
    }
  },
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
.about-content
  gap 29px
.content .text
  color #B9B9B9
@media(min-width 1530px)
  .about-content-1 .content
    max-width 620px
  .about-content-1
    padding-left 162px
  .about-content-1 .about-picture
    margin-right -162px
  .about-content-1 .text
    width 353px
  .about-content-2
    grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
    padding-left 162px
  .about-content-2 .content
    max-width 480px

  .about-content-3
    grid-template-columns minmax(494px,1fr) minmax(0,783px)
    gap 29px
    padding-left 162px
  .about-content-3 .content
    max-width 494px

  .about-content-4
    grid-template-columns minmax(0,783px) minmax(586px,1fr)
    margin-right 33px
  .about-content-4 .content
    max-width 586px
    justify-self end


  .about-content-5
    grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
    padding-left 162px
  .about-content-5 .content
    max-width 480px

  .about-content-6
    grid-template-columns minmax(0,783px) minmax(586px,1fr)
    margin-right 33px
  .about-content-6 .content
    max-width 586px
    justify-self end


  .about-content-7
    grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
    padding-left 162px
  .about-content-7 .content
    max-width 480px


  .about-content-8
    grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
    padding-left 162px
  .about-content-8 .content
    max-width 480px

  .about-content-9

    padding-left 162px
    gap 29px
  .about-content-9 .content
    max-width 620px
  .about-content-9 .about-picture
    margin-right -162px

  .about-content-10
    grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
    padding-left 162px
  .about-content-10 .content
    max-width 480px

  .about-content-11
    grid-template-columns minmax(0,calc(100% - 783px)) minmax(480px,1fr)
    padding-left 162px
  .about-content-11 .content
    max-width 480px


.about-content-1--img
  position relative
  &:before
      content ''
      width 593px
      height 295px
      absolute left -335px bottom -280px

      background url('./../assets/images/about-1.svg') no-repeat center/cover
.about-content-2--img
  position relative
  &:before
      content ''
      size 575px
      absolute left -375px top -170px

      background url('./../assets/images/about-2.svg') no-repeat center/cover

  &:after
      content ''
      size 649px
      absolute left -445px bottom -411px

      background url('./../assets/images/about-3.svg') no-repeat center/cover
.about-content-3--img .about-picture-4
  z-index 1
  position relative
.about-picture-8
  z-index 1
  position relative
.about-content-3--img
  position relative
  z-index 1
  &:after
      content ''
      size 920px
      absolute right -445px bottom -111px
      background url('./../assets/images/about-4.svg') no-repeat center/cover
      z-index 0
  &:before
      content ''
      size 481px
      absolute right 445px bottom -478px
      background url('./../assets/images/about-5.svg') no-repeat center/cover
      z-index 0
.about-content-4--img
  position relative
  &:before
    content ''
    size 622px
    absolute left -445px bottom -278px
    background url('./../assets/images/about-6.svg') no-repeat center/cover
    z-index 0
.about-content-4--img img
  z-index 1
  position relative
.about-content-5--img
  position relative
  &:before
    content ''
    size 416px
    absolute left 430px bottom -411px
    background url('./../assets/images/about-7.svg') no-repeat center/cover
    z-index 0
.about-content-6--img
  position relative
  &:before
    content ''
    size 579px
    absolute left -290px bottom -325px
    background url('./../assets/images/about-8.svg') no-repeat center/cover
    z-index 0
.about-content-6--img img
  position relative
  z-index 1
.about-content-7--img
  position relative
  &:before
    content ''
    size 681px
    absolute left 230px bottom -525px
    background url('./../assets/images/about-9.svg') no-repeat center/cover
    z-index 0
.about-content-8--img
  position relative
  &:before
    content ''
    size 535px
    absolute left -350px bottom -25px
    background url('./../assets/images/about-2.svg') no-repeat center/cover
    z-index 0
.about-content-9--img
  position relative
  &:after
    content ''
    size 831px
    absolute left 400px bottom -25px
    background url('./../assets/images/about-2.svg') no-repeat center/cover
    z-index 0
.about-content-9--img img
  position relative
  z-index 1
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
    size 252px

    absolute right 220px top -180px

    background url('./../assets/images/about-4.svg') no-repeat center/cover


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
  margin-bottom 24px
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
.swiper-slide
  background no-repeat center/cover
.slider-button
  z-index 3
  outline none
  cursor pointer
  size 84px 60px
  position absolute
  top calc(50% - 30px)
  &--prev
    left 20px
  &--next
    right 20px
    transform scale(-1)
  &.swiper-button-disabled
    display none
.slider-pagination
  z-index 101
  display flex
  position absolute
  align-items center
  left 50%!important
  bottom 65px!important
  width fit-content!important
  transform translate(-50%, 0)
  +below(1650px)
    bottom 55px!important
  & >>> .swiper-pagination-bullet
    size 3px
    opacity 1
    outline none
    margin 0 8px
    position relative
    border-radius 10px
    background-color #fff
    transition width .25s ease-in-out
    +below(1290px)
      margin 0 5px
    &:before
      size 0
      content ''
      border-radius 10px
      border 0 solid #f6ac6d
      absolute left 50% top 50%
      transform translate(-50% ,-50%)
      transition width .25s ease-in-out, height .25s ease-in-out, border-width .25s ease-in-out
    &-active
      size 2px
      &:before
        size 8px
        border-width 1px
.bottom-tabs
  z-index 101
  display flex
  color #f6ac6d
  line-height 1.2
  font-weight 700
  user-select none
  font-size rem(10px)
  text-transform uppercase
  letter-spacing rem(2.2px)
  font-family 'Heading Pro Wide'
  absolute right 200px bottom 28px
.bottom-tab
  cursor pointer
  &--active
    color #afafaf
    cursor default
  & + &
    margin-left 40px
.close-btn
  z-index 101
  absolute left 35px bottom 55px

  +below(1800px)
    bottom 85px
.overflow-h
  overflow hidden
.popup-content
  display grid
  grid-template-columns 419px 1fr
  gap 99px
  color white
.popup-content__left
  padding-left 40px
  display grid
  align-content center
.popup-content__left--bottom
  display flex
  justify-content center
  gap 30px
  margin-top 48px
.popup-content__left--bottom > *
  display grid
  justify-items center
  text-align center
</style>
<style scoped>
.popup-modal {
  display: none;
  background: #151C27E5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  padding: 80px;
}
.popup-modal.active {
  display:  grid;
  place-content: center;
}
.popup-modal__descclose {
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
}
</style>
