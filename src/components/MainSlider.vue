<template lang="pug">
  .main-slider

    swiper( :options="swiperOptions"  class="" ref="mySwiper")
      swiper-slide(v-for="slide in slides" :style="{'background-image': `url(${slide.img})`}")
         .container
          .main-slider__content
            .main-slider__title(v-html="slide.title")
            .main-slider__text(v-if="slide.text" v-html="slide.text")
            a(v-if="slide.link" :href="slide.link").main-slider__btn
              svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
              | Подробнее
      //- swiper-slide(
      //-   style="background-image: url('/static/mainslider/1.png')"
      //- )
      //-   .container
      //-     .main-slider__content
      //-       .main-slider__title Парадная <br> в форме
      //-       .main-slider__text
      //-         p При покупке квартиры фитнес
      //-         p на 3 года с депозитом   <span>500 000 ₽</span>
      //-         p и премиальными условиями
      //-       a(href="https://zorge-premier.ru/events/14").main-slider__btn
      //-         svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
      //-         | Подробнее
      //- swiper-slide(
      //-   style="background-image: url('/static/mainslider/2.png')"
      //- )
      //-   .container
      //-     .main-slider__content
      //-       .main-slider__title.main-slider__title-other(style=" max-width: 608px") Истинный <br> премиум-класс в Уфе

    div(class="main-slider__nav")
      .slider-btn.slider-btn--prev(@click="prevSlide"): img(alt src="@/assets/svg/button-prev.svg")
      .slider-pagination
      .slider-btn.slider-btn--next(@click="nextSlide"): img(alt src="@/assets/svg/button-prev.svg")
</template>
<script >
import {mapActions, mapState} from 'vuex'
export default {

  data() {
    return {

      swiperOptions: {
        loop: true,
        observer: true,
        observeParents: true,
        touchStartPreventDefault: false,
        spaceBetween: 7,
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        pagination: {
          el: '.slider-pagination',
          clickable: true,
          type: 'bullets',
          // index - порядковый номер, className - стандартный класс (swiper-pagination-bullet)
          renderBullet: function (index, className) {
            // Возвращаем свой HTML с кастомным классом
            // className добавлять обязательно, чтобы работал клик и активное состояние
            return `<span class="${className} slider-pagination-bullet"></span>`;
          },
          // dynamicBullets: true,
          // dynamicMainBullets: 4,
        }
      }
    }

  },
  computed: {
    // Получаем прямой доступ к API Swiper
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    ...mapState({
      slides: state => state.events.slides
    }),
  },
  async mounted() {
    this.data = await this.getDataSlide()
  },

  methods: {
    ...mapActions({getDataSlide: 'events/getDataSlide'}),
    prevSlide() {
      // Метод Swiper для перехода назад
      if (this.swiper) this.swiper.slidePrev();
    },
    nextSlide() {
      // Метод Swiper для перехода вперед
      if (this.swiper) this.swiper.slideNext();
    },
    // Если нужно перейти на конкретную точку (для кастомной пагинации)
    goToSlide(index) {
      if (this.swiper) this.swiper.slideTo(index);
    },

  },
}
</script>
<style scoped lang="stylus">
  .main-slider
    position relative
    margin-top 185px
    height calc(100vh - 185px)
    .swiper-container
      height 100%
    .swiper-slide
      background-repeat no-repeat
      background-size cover
      background-position center
      &:before
        content ""
        position absolute
        top 0
        width 100%
        height 185px
        background: linear-gradient(180deg, #1F252F 0%, rgba(31, 37, 47, 0) 100%);

        z-index 2
      &:after
        content ""
        position absolute
        bottom 0
        width 100%
        height 390px
        background: linear-gradient(0deg, #1F252F 0%, rgba(31, 37, 47, 0) 100%);
        z-index 2

    &__content
      position absolute
      bottom 92px
      left 20px
      display grid
      gap 16px
      z-index 3
    &__title
      font-family 'Heading Pro Wide'
      font-size 32px
      line-height 100%
      color white
      letter-spacing 0.02em
      text-transform uppercase
      letter-spacing 0.22em
      &-other
        font-size 24px
    &__text
      font-size 20px
      line-height 24px
      color white
      font-family 'TT Commons'

    &__text span,
    &__text b
      font-weight 400
      font-size 26px
      font-size 18px
      line-height 24px
      padding 4px 9px
      background #F6AC6D
      border-radius 999px
      color #201411
      p
        margin 0
    &__btn
      z-index 5
      display flex
      line-height 1
      color #1f252f
      cursor pointer
      font-weight 700
      user-select none
      margin-left auto
      width fit-content
      position relative
      align-items center
      justify-content center
      border-radius 62px
      margin-bottom 90px
      font-size rem(12px)
      padding 11px 12px 10px
      border 3px solid #f6ac6d
      text-transform uppercase
      background-color #f6ac6d
      letter-spacing rem(2.64px)
      font-family 'Heading Pro Wide'
      transition background-color .15s ease-in-out, color .15s ease-in-out
      margin 0


      width 290px
      +below(1290px)
        font-size rem(11px)

        letter-spacing rem(1px)
      &:hover
        color #fff
        text-decoration none
        background-color transparent
      svg
        fill #1F252F
        size 43px 18px
        margin-right 15px
        transition fill .15s ease-in-out
      &:hover svg
        fill #fff
    &__nav
      z-index 1
      position absolute
      bottom 32px
      left 20px
      display flex
      gap 42px
      align-items center
      .slider-pagination

        overflow hidden
        display flex
        gap 18px
        align-items center
        background #FFFFFF1A
        border-radius 999px
        height 24px
        padding 0 10px

    @media (min-width: 1024px)
      margin-top 0
      height calc(100vh - 80px)
      &__content
        bottom 64px
        left auto
        gap 24px
        display grid
      &__title
        font-size 32px
      &__text
        font-size 24px
      &__btn
        font-size 12px
      &__nav
        bottom 64px
        left auto
        right 120px
        gap 24px
        .slider-pagination

          padding 16px
    @media (min-width: 1440px)
      &__title
        font-size 40px
        line-height 100%
        &-other
          font-size 40px
      &__text
        font-size 32px
        line-height 36px
        span
          font-size 26px
          line-height 26px
          padding 8px 12px
      &__btn
        font-size 12px
      &__nav
        gap 32px
        .slider-pagination

          padding 16px
    @media (min-width: 1920px)
      &__content
        left auto

      &__nav
        bottom 64px
        right 300px





</style>
<style  lang="stylus">
  .main-slider


    &__content

      position absolute
      bottom 92px
      left 20px
      display grid
      gap 16px
      z-index 3
    &__title
      font-family 'Heading Pro Wide'
      font-size 32px
      line-height 100%
      color white
      letter-spacing 0.02em
      text-transform uppercase
      letter-spacing 0.22em
      &-other
        font-size 24px
    &__text
      font-size 20px
      line-height 24px
      color white
      font-family 'TT Commons'

    &__text span,
    &__text b
      font-weight 400
      font-size 26px
      font-size 18px
      line-height 24px
      padding 4px 9px
      background #F6AC6D
      border-radius 999px
      color #201411
      p
        margin 0
    &__btn
      z-index 5
      display flex
      line-height 1
      color #1f252f
      cursor pointer
      font-weight 700
      user-select none
      margin-left auto
      width fit-content
      position relative
      align-items center
      justify-content center
      border-radius 62px
      margin-bottom 90px
      font-size rem(12px)
      padding 11px 12px 10px
      border 3px solid #f6ac6d
      text-transform uppercase
      background-color #f6ac6d
      letter-spacing rem(2.64px)
      font-family 'Heading Pro Wide'
      transition background-color .15s ease-in-out, color .15s ease-in-out
      margin 0


      width 290px
      +below(1290px)
        font-size rem(11px)

        letter-spacing rem(1px)
      &:hover
        color #fff
        text-decoration none
        background-color transparent
      svg
        fill #1F252F
        size 43px 18px
        margin-right 15px
        transition fill .15s ease-in-out
      &:hover svg
        fill #fff
    &__nav
      z-index 1
      position absolute
      bottom 32px
      left 20px
      display flex
      gap 42px
      align-items center
      .slider-pagination

        overflow hidden
        display flex
        gap 18px
        align-items center
        background #FFFFFF1A
        border-radius 999px
        height 24px
        padding 0 10px

    @media (min-width: 1024px)
      margin-top 0
      height calc(100vh - 80px)
      &__content
        bottom 64px
        left auto
        gap 24px
        display grid
        max-width 608px
      &__title
        font-size 32px
      &__text
        font-size 24px
      &__btn
        font-size 12px
      &__nav
        bottom 64px
        left auto
        right 120px
        gap 24px
        .slider-pagination

          padding 16px
    @media (min-width: 1440px)
      &__title
        font-size 40px
        line-height 100%
        &-other
          font-size 40px
      &__text
        font-size 32px
        line-height 36px
        span
          font-size 26px
          line-height 26px
          padding 8px 12px
      &__btn
        font-size 12px
      &__nav
        gap 32px
        .slider-pagination

          padding 16px
    @media (min-width: 1920px)
      &__content
        left auto

      &__nav
        bottom 64px
        right 300px





</style>
<style >
  .slider-btn--prev,
  .slider-btn--next {
    cursor: pointer;
    width: 50px;
    height: 36px;
    & > * {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .slider-btn--next {
    transform: rotate(180deg);


  }
  .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background: #FFFFFF66 !important;
    outline: 2px solid transparent;
    outline-offset: 4px;
    border-radius: 999px;




  }
  .swiper-pagination-bullet-active {
    outline: 2px solid white;
    background: #fff !important;
  }

  @media (min-width: 1024px) {
    .slider-btn--prev,
    .slider-btn--next {
      width: 67px;
      height: 48px;

    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      &::before {
        width: 12px;
        height: 12px;
      }
      &::after {
        width: 4px;
        height: 4px;

      }
    }
  }
  @media (min-width: 1440px) {
    .slider-btn--prev,
    .slider-btn--next {
      width: 84px;
      height: 60px;
    }
  }
  @media (min-width: 1920px) {
    .slider-btn--prev,
    .slider-btn--next {
      width: 84px;
      height: 60px;
    }
  }
</style>



