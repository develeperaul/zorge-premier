<template lang="pug">
.flat.flat-mob(v-if="flat")

  .container
    .flat__top
      div.back(@click="$router.back()")
        svg(width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg")
          circle(cx="18" cy="18" r="16.92" stroke="#F6AC6D" stroke-width="2.16")
          path(d="M18 9.35938L10.08 17.9994L18 26.6394" stroke="white" stroke-width="2.16")
          path(d="M11.5195 18H28.0795" stroke="white" stroke-width="2.16")

        //- svg(width='124' height='124' viewbox='0 0 124 124' fill='none' xmlns='http://www.w3.org/2000/svg')
          circle(cx='62' cy='62' r='23.5' stroke='#F6AC6D' stroke-width='3')
          path(d='M62 50L51 62L62 74' stroke='white' stroke-width='3')
          path(d='M53 62H76' stroke='white' stroke-width='3')
    .flat__content
      .flat__left
        .flat__breadcrumbs
          a(href="/") Главная
          span.slash /
          router-link(to="/select") Выбор по параметрам
          span.slash /
          span Квартира №{{ flat.number}}
        .flat__title Квартира №{{flat.number}}

        .flat__info
          .list
            .item
              span {{$store.state.filter.houses[flat.house]}}
              span секция
            .item
              span {{ flat.rooms_number }}
              span комнаты
            .item
              span  {{ flat.storey_number }}
              span этаж
            .item
              span {{ flat.total_area }} м
                sup 2
              span площадь
            //- .item.item__other
              span {{ format((+flat.price).toFixed(0)) }} ₽
              //- span В ипотеку от
              //-   a(href="mor")  90 728 ₽/мес
        .flat__imgs
          div.floor
            img(:src="storey.image_maps[0].path" style="max-width: 100%;")
          div.compas
            img(src="/static/exclusive/compas.png")

      .flat__right
        .flat__img
           img(v-if="flat.images" alt :src="flat.images[0]")
        .flat__img--title 2D планировка

      .flat__btn(@click="$refs.modal.open()" style="justify-self: center;").btn.exclusive__btn
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        span Получить консультацию
    div
      .flat__title(style="margin-bottom: 32px") Интерьеры
      swiper(:options="swiperOpts")
        swiper-slide(
          v-for="i in 23"
          :key="i"
        )
          img(
            style="width: 100%; height: 100%"
            alt
            :src="`/static/gallery/interiors/flat-${i}.jpg`"
          )

        .slider-button.slider-button--prev(slot="button-prev"): img(alt src="@/assets/svg/button-prev.svg")
        .slider-button.slider-button--next(slot="button-next"): img(alt src="@/assets/svg/button-prev.svg")
        .slider-pagin(slot="pagination")
    //- MortgageCalculator
    ModalCallback(ref="modal" :theme="`Забронировать квартиру №${flat.number}`")


  //- Flat(v-if="flatId" :flatId="flatId" @close="flatId = null")
  //- checkRoomsClass(flat.rooms_number) ? 'hidden' : ''
</template>

<script>
import { mapActions } from 'vuex';
import MortgageCalculator from '@/components/MortgageCalculator.vue'
import ModalCallback from '../components/ModalCallback'
import { show } from '@/api/flats';






import { show as showStorey } from '@/api/storeys';


export default {
  components: { MortgageCalculator, ModalCallback},
  data: () => {
    return {
      flat: null,
      storey: null,
      swiperOpts: {
      pagination: {
        el: '.slider-pagin',
        clickable: true
      },
      navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev'
      }
    },
    }
  },
  computed: {
    compassStyles() {
      if(!this.flat) return '';
      return `transform: rotate(${this.flat.compass}deg)`
    },
    flatId: {
      get() {

        if(!this.$route.params.flatId) return;
        return Number(this.$route.params.flatId);
      },
      set(value) {

        if(!value) value = undefined;
        this.$router.push({
          query: { ...this.$route.params, flatId: value },
        });
      }
    },
  },
  async mounted () {
    this.loaderHide();
  },
  async created() {
    console.log(this.$route.params.flatId);
    // alert('ss')
    this.loaderShow();
    await this.getFlat();
    await this.getStorey();
    this.loaderHide();
  },
  methods: {
    ...mapActions({
      getFlat: 'flat/getFlat',
      getFlatMore: 'flat/getFlatMore',
      getStorey: 'house/getStorey',
      blobPdf: 'flat/blobPdf'
    }),
    async getFlat() {
      const { data: { data } } = await show(this.flatId);
      this.flat = data;
      console.log(this.flat);

    },

    async getStorey() {
      const { data: { data } } = await showStorey(this.flat.storey);
      this.storey = data;
    },
    format(val){
      const [num, num2 = ''] = val.toString().split('.')
      const parts = num.match(/\d{1,3}(?=(\d{3})*$)/g)

      return parts.join(" ")


      // const preffixList = {
      //   1: '',
      //   2: 'млн.',
      //   3: 'млрд.',
      //   4: 'трлн.',
      //   5: 'квлн.',
      //   6: 'квинтл.',
      // }
      // const preffix = preffixList[parts.length - 1]
      //   ? preffixList[parts.length - 1]
      //   : ''

      // if (val) {
      //   const znak = String(num).replace(/[^-]/gi, '')
      //   if (preffixList[parts.length - 1]) {
      //     const after = [parts.slice(1, parts.length).join(''), num2]
      //       .join('')
      //       .slice(0, 2)

      //     return after
      //       ? znak +
      //           [parts.slice(0, 1).join(' '), after.slice(0, 2)].join(',') +
      //           ' ' +
      //           preffix
      //       : znak + parts.slice(0, 1).join(' ') + ' ' + preffix
      //   } else
      //     return znak + [parts.join(' '), num2].filter((val) => !!val).join(',')
      // }
      // return '0'
    },
  },
}
</script>
<style >
  .flat-mob {
    margin-bottom: 72px;
  }
  .flat-mob .swiper-container {
    position: relative;
    padding-bottom: 64px;
  }
  .flat-mob .swiper-container .swiper-slide {
    height: 201px;

  }
  .flat-mob .slider-button {
    position: absolute;
    bottom: 0%;

    transform: translateY(0%);
    z-index: 3;
  }
  .flat-mob .swiper-slide img {
    border-radius: 16px;
    object-fit: cover;
  }
  .flat-mob .slider-pagin {
    position: absolute;
    bottom: 80px !important;
    left:  50% !important;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 3;
  }

  .flat-mob .slider-button--prev {
    right: 50%;
    transform: translateX(-8px);
  }

  .flat-mob .slider-button--next img,
  .flat-mob .slider-button--prev img {
    width: 67px;
    height: 48px;
  }
  .flat-mob .slider-button--next {

    right: 24px;
    left: 50%;
    transform: translateX(8px);

  }
  .flat-mob .slider-button--next > * {
   transform: rotate(180deg);
  }
  .flat-mob .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background: #FFFFFF66 !important;
    flex-shrink: 0;
    outline: 2px solid transparent;
    outline-offset: 4px;
    border-radius: 999px;
  }
  .flat-mob .swiper-pagination-bullet-active {
    outline: 2px solid white;
    background: #fff !important;
  }



</style>
<style scoped lang="stylus">
.flat
  &__top
    margin-bottom 16px

  &__content
    display grid
    gap 24px

    margin-bottom 88px
  &__breadcrumbs
    font-family 'TT Commons'
    font-size 12px
    line-height 140%
    color: #FFFFFF99;
    display flex
    gap 8px
    a
      color #F6AC6D
      text-decoration underline
    .slash
      color: #FFFFFF4D
  &__title
    font-size 20px
    line-height 100%
    letter-spacing 0.022em
    font-family 'Heading Pro Wide'
    text-transform uppercase
    color #ffffff
  &__imgs
    display grid
    grid-template-columns 1fr 1fr
    gap 16px
    & > *
      background: #FFFFFF0A;
      display grid
      place-content center
      border-radius 16px
      padding 24px
      width 100%
      & > *
        height 64px
    .compas
      & > *
        width 56px
        height 56px
  &__left
    display grid
    align-content start
    gap 24px
  &__info
    .list
      display grid
      grid-template-columns 1fr 1fr
      gap 16px
      .item
        display grid
        text-align center
        gap 4px
        place-content center
        border: 1px solid #FFFFFF33
        border-radius 16px
        padding 16px 10px
        color #ffffff
        & > :first-child
          letter-spacing -0.022em
          font-family 'Heading Pro Wide'
          font-size 20px
          line-height 100%
        & > :last-child
          font-size 14px
          line-height 120%
          font-weight 500
        a
          color #F6AC6D
          text-decoration underline
        &__other
          grid-column 2 span

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
    border-radius 62px
    font-size 9px
    height 50px
    padding 9px 12px 9px
    border 3px solid #f6ac6d
    text-transform uppercase
    background-color #f6ac6d
    letter-spacing rem(2.64px)
    font-family 'Heading Pro Wide'
    transition background-color .15s ease-in-out, color .15s ease-in-out
    margin 0
    +below(1290px)
      font-size rem(11px)
      padding 9px 10px 8px
      letter-spacing rem(1px)
    &:hover
      color #fff
      text-decoration none
      background-color transparent
    svg
      fill #1F252F
      size 43px 18px
      margin-right 18px
      transition fill .15s ease-in-out
    &:hover svg
      fill #fff
  &__right
    display grid
    grid-template-rows 1fr auto
    gap 17px

  &__img
    align-self center
    width 100%
    & > *
      object-fit contain
      width 100%
      margin auto
  &__img--title
    color #AFAFAF
    font-size 11px
    line-height  197%
    letter-spacing 0.022em
    font-family 'Heading Pro Wide'
    text-align center
  @media (min-width: 1440px)
    &__content
      grid-template-columns 458px 1fr
    &__title
      font-size 24px
    &__info
    .list
      gap 24px
      .item
        padding 20px 10px
        display grid
        gap 4px
        & > :first-child
          font-size 28px
    &__imgs
      margin-top 16px
    &__btn
      margin-top 20px
      font-size 12px

    &__img img
      height 458px
  @media (min-width: 1920px)
    &__title
      font-size 24px
    &__info
    .list
      gap 24px
      .item
        padding 20px 10px
        display grid
        gap 4px
        & > :first-child
          font-size 28px
    &__btn
      font-size 12px

    &__img img
      height 558px

</style>

