<template lang="pug"> .home
  //- .curtains
    .curtains-content
      .curtains-text Клубные дома у леса
      img.curtains-logo(alt src="@/assets/images/logo-circle.png")
      svg.curtains-premiere: use(xlink:href="/static/sprite.svg#text-premiere")
    .curtains-arrow-bottom(@click="scrollToAboutSection"): svg: use(xlink:href="/static/sprite.svg#arrow-bottom")

  .about(ref="about")
    //- div(style=" padding-top: 185px")
    MainSlider
    .about-image
      //- .main-title(style="margin-top:0;padding-top:90px;")
        //- span «Зорге.Премьер» - квартиры в домах премиум-класса <br> в Уфе.
        //- .main-title__circle-1
      //- div( class="first-section__btn" @click="open")
        img(src="/static/popup-icon.png")
    .about-collage-1
      div.main-title-other

        span «Зорге.Премьер» - квартиры в домах премиум-класса <br> в Уфе.
      .about-collage-1__image
      .second-title {{ $store.getters['about/block1'].title }}
      .about-content(v-html="$store.getters['about/block1'].desc") {{ $store.getters['about/block1'].desc }}
    .about-collage-2.about-item
      .about-collage-2__image
      .second-title {{ $store.getters['about/block2'].title }}
      .about-content(v-html="$store.getters['about/block2'].desc") {{ $store.getters['about/block2'].desc }}
      router-link(
        v-if="$store.getters['about/block2'].button.text"
        :to="$store.getters['about/block2'].button.link"
        exact
      ).event-button
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        | {{ $store.getters['about/block2'].button.text }}
    .about-collage-3.about-item
      .about-collage-3__image
      .second-title {{ $store.getters['about/block3'].title }}
      .about-content(v-html="$store.getters['about/block3'].desc") {{ $store.getters['about/block3'].desc }}
      router-link(
        v-if="$store.getters['about/block3'].button.text"
        :to="$store.getters['about/block3'].button.link"
        exact
      ).event-button
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        | {{ $store.getters['about/block3'].button.text }}
    .about-collage-4.about-item
      .about-collage-4__image
      .second-title {{ $store.getters['about/block4'].title }}
      .about-content(v-html="$store.getters['about/block4'].desc") {{ $store.getters['about/block4'].desc }}
      router-link(
        v-if="$store.getters['about/block4'].button.text"
        :to="$store.getters['about/block4'].button.link"
        exact
      ).event-button
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        | {{ $store.getters['about/block4'].button.text }}
    .about-full-bg.about-full-bg-1
    .about-collage-5.about-item
      .about-collage-5__image
      .second-title {{ $store.getters['about/block5'].title }}
      .about-content(v-html="$store.getters['about/block5'].desc") {{ $store.getters['about/block4'].desc }}
      div(
        @click="$refs.modalClosedTerritory.open()"
      ).event-button
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        | {{ $store.getters['about/block5'].button.text }}

    .about-collage-6.about-item
      .about-collage-6__image
      .second-title {{ $store.getters['about/block6'].title }}
      .about-content(v-html="$store.getters['about/block6'].desc") {{ $store.getters['about/block6'].desc }}
      .event-button(v-if="$store.getters['about/block6'].button.text" @click="$refs.modalClosedTerritory.open()")
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        | {{ $store.getters['about/block6'].button.text }}
    .about-collage-7.about-item
      .about-collage-7__image
      .second-title {{ $store.getters['about/block7'].title }}
      .about-content(v-html="$store.getters['about/block7'].desc") {{ $store.getters['about/block7'].desc }}
      //- router-link(
      //-   v-if="$store.getters['about/block7'].button.text"
      //-   :to="$store.getters['about/block7'].button.link"
      //-   exact
      //- ).event-button
      //-   svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
      //-   | {{ $store.getters['about/block7'].button.text }}

    .about-collage-8.about-item
      .about-collage-8__image
      .second-title {{ $store.getters['about/block8'].title }}
      .about-content(v-html="$store.getters['about/block8'].desc") {{ $store.getters['about/block8'].desc }}
    .about-collage-9.about-item
      .about-collage-9__image
      .second-title {{ $store.getters['about/block10'].title }}
      .about-content(v-html="$store.getters['about/block10'].desc") {{ $store.getters['about/block10'].desc }}
      router-link(
        v-if="$store.getters['about/block9'].button.text"
        :to="$store.getters['about/block9'].button.link"
        exact
      ).event-button
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        | {{ $store.getters['about/block9'].button.text }}
    .about-collage-10.about-item
      .about-collage-10__image
      .second-title {{ $store.getters['about/block11'].title }}
      .about-content(v-html="$store.getters['about/block11'].desc") {{ $store.getters['about/block10'].desc }}
      router-link(
        v-if="$store.getters['about/block11'].button.text"
        :to="$store.getters['about/block11'].button.link"
        exact
      ).event-button
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        | {{ $store.getters['about/block11'].button.text }}
    .about-collage-11.about-item
      .about-collage-11__image
      .second-title {{ $store.getters['about/block12'].title }}
      .about-content(v-html="$store.getters['about/block12'].desc") {{ $store.getters['about/block11'].desc }}
      router-link(
        v-if="$store.getters['about/block12'].button.text"
        :to="$store.getters['about/block12'].button.link"
        exact
      ).event-button
        svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
        | {{ $store.getters['about/block12'].button.text }}
  ModalOther(title="Роскошный двор" full ref="modalClosedTerritory")
    .modal-wrapper
      .overflow-h
        div.popup-content
          .popup-content__left
            div.popup-content--top
              p Только резиденты комплекса могут попасть в настоящую гостиную под открытым небом — внутренний двор «Зорге.Премьер». Здесь гармонично расположились места для активного и спокойного отдыха и территории для взрослых и детей.
              p Местом притяжения жителей комплекса станут две игровые для ребят разного возраста, батут, песочница, самая длинная гряда качелей, альпинарий, настоящий сад камней и эксклюзивные решения - сухой ручей и светомузыкальный фонтан.

            div.popup-content__left--bottom(style="display:grid; grid-template-columns: 1fr 1fr; margin-bottom: 32px;" )
              div(style="display:grid; gap: 24px;")
                img.modal-icon(alt src="../assets/images/icon-camera.svg" style="margin: 0 auto;")
                .modal-icon-text(style="color:#F6AC6D; font-weight:600; text-align:center;") Видео-<br>наблюдение
              div(style="display:grid; gap: 24px;")
                img.modal-icon(alt src="../assets/images/icon-password.svg" style="margin: 0 auto;")
                .modal-icon-text(style="color:#F6AC6D; font-weight:600; text-align:center;") Вход по <br> чип-карте
          .popup-content__right.overflow-h
            swiper(:options="swiperOptions"  ref="mySwiper")
              swiper-slide(
              )
                img(alt src="../assets/images/yard/1.png" style="object-fit:cover;width:100%;height:100%;")
              swiper-slide(
              )
                img(alt src="../assets/images/yard/2.png" style="object-fit:cover;width:100%;height:100%;")
              swiper-slide(
              )
                img(alt src="../assets/images/yard/3.png" style="object-fit:cover;width:100%;height:100%;")
              swiper-slide(
              )
                img(alt src="../assets/images/yard/4.png" style="object-fit:cover;width:100%;height:100%;")

              .slider-button.slider-button--prev(slot="button-prev"): img(alt src="@/assets/svg/button-prev.svg")
              .slider-button.slider-button--next(slot="button-next"): img(alt src="@/assets/svg/button-prev.svg")
  //- modal-right-to-left(title="Закрытая территория" ref="modalClosedTerritory")
    img(alt src="../assets/images/modal-closed-territory.jpg")
    .custom-modal-text
      p Закрытая территория, спокойные прогулки с детьми, тишина и приватность – всё это ZORGE PREMIERE гарантирует своим жителям приватность и безопасность.
      p Изолированный внутренний двор на высоте второго этажа, спокойные прогулки с детьми, тишина, современные системы видеонаблюдения на всей территории комплекса обеспечивают неприкосновенность вашей личной жизни.
      .row
        .col-6.text-center
          img.custom-modal-icon(alt src="../../desktop/assets/images/icon-camera.svg")
          .custom-modal-icon-text Видео-<br>наблюдение
        .col-6.text-center
          img.custom-modal-icon(alt src="../../desktop/assets/images/icon-password.svg")
          .custom-modal-icon-text Вход по чип-<br>карте
  div.popup-modal(ref="popupModalVideo")
      svg(class="popup-modal__mobclose" @click="()=>{$refs.popupModalVideo.classList.remove('active');openVideo=false;}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg")
        circle(cx="25" cy="25" r="23.5" stroke="#F6AC6D" stroke-width="3")
        line(x1="17.0607" y1="16.9393" x2="34.0312" y2="33.9099" stroke="white" stroke-width="3")
        line(x1="16.9393" y1="33.9393" x2="33.9099" y2="16.9688" stroke="white" stroke-width="3")


      VideoCarousel(:items="items" v-if="openVideo")
  div.popup-modal(ref="popupModal")
    .popup-modal__wrapper
      .popup-modal__content
        .popup-modal__close(@click="closePopupModal")
          svg(width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg")
            circle( cx="25" cy="25" r="23.5" fill="#F6AC6D" stroke="#F6AC6D" stroke-width="3")
            line(x1="16.9393" y1="32.9393" x2="31.9393" y2="17.9393" stroke="#1F252F" stroke-width="3")
            line(x1="17.0607" y1="17.9688" x2="32.0607" y2="32.9688" stroke="#1F252F" stroke-width="3")

        img(alt src=`/static/action7-m.png`)
        .popup-modal__descr
          //- .popup-modal__title Роскошная пара
          //- .popup-modal__text 2 паркинга в подарок <br> при покупке лимитированной квартиры*
          //- proposed-page(to="/select") Подбор на фасаде
          a(href="https://zorge-premier.ru/events/14").popup-modal__btn
            svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
            |
</template>

<script>
import ModalOther from '../components/ModalOther'
import VideoCarousel from '../components/VideoCarousel/VideoCarousel.vue'
import MainSlider from '@/components/MainSlider.vue'
export default {
  components: {ModalOther,VideoCarousel,MainSlider},
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
  mounted() {
    setTimeout(() => {



    // const blockTime = localStorage.getItem('blockTime');
		// if(this.$refs.popupModal){
		// 	if (blockTime !== null) {
		// 			// Сверяем время блокировки с текущим временем
		// 			if (+new Date() >= parseInt(blockTime)) {
		// 				// Если время блокировки вышло, то очищаем localStorage
		// 				localStorage.removeItem('blockTime');
		// 				this.openPopupModal()
		// 			} else {
		// 				popupModal.classList.remove('active');
		// 				// Иначе скрываем элемент
		// 				console.log('activess');
		// 			}
		// 	} else {
		// 		this.openPopupModal()
		// 	}
		// }

    }, 500)
    setTimeout(() => {
      this.loaderHide()
    }, 200)
    this.$parent.noPadding = true
    addEventListener('scroll', this.scroll)
    this.scroll()
    // this.$refs.modalClosedTerritory.open();
  },
  beforeDestroy () {
    this.$parent.noPadding = false
    removeEventListener('scroll', this.scroll)
    this.$store.commit('variables/setMobileTopLogoBgHide', false)
  },
  methods: {
    openPopupModal() {
      localStorage.setItem('blockTime', +new Date() + (24*3600 * 1000));
      if (this.$refs.popupModal) {

        this.$refs.popupModal.classList.add("active")
        window.addEventListener("click", this.targetWindow)
      }
    },
    targetWindow(e) {
      const el = e.target;
      if (!el.closest('.popup-modal__content')) {
        this.closePopupModal()
      }

    },
    closePopupModal() {
      if (this.$refs.popupModal) {

        this.$refs.popupModal.classList.remove("active")
        window.removeEventListener('click', this.targetWindow)
      }
    },
    scroll () {
      if (scrollY >= this.$refs.about.offsetTop) {
        this.$store.commit('variables/setMobileTopLogoBgHide', false)
      } else {
        this.$store.commit('variables/setMobileTopLogoBgHide', true)
      }
    },
    scrollToAboutSection () {
      window.scroll({ top: this.$refs.about.offsetTop, behavior: 'smooth' })
    },
    open() {
      this.openVideo=true;
      this.$refs.popupModalVideo.classList.add("active")
    }
  }
}

</script>

<style scoped lang="stylus">
.about
  width 100%
.about-image
  size 100% 480px
  position relative
  background #1f252f url('/static/gallery/architecture/render-12.jpg') no-repeat center bottom/cover
  &:after
    content ''
    opacity .95
    size 100% 154px
    absolute left 0 bottom 0
    background-image linear-gradient(0deg, #181f29 0%, rgba(31, 37, 47, 0) 100%)
.curtains
  display flex
  height 100vh
  align-items center
  justify-content center
  background url('../assets/images/main-bg-curtains.jpg') no-repeat center/cover
  @media(max-height 620px)
    padding-bottom 60px
  @media(max-height 550px)
    padding-top 85px
    padding-bottom 0
    align-items flex-start
.curtains-content
  text-align center
  padding-bottom 30px
.curtains-logo
  size 192px
  display block
  margin 0 auto
  margin-bottom 35px
.curtains-premiere
  fill #fff
  size 214px 21px
.curtains-text
  color #fff
  line-height 1
  font-size 15px
  font-weight 700
  margin-bottom 85px
  letter-spacing 1.43px
  text-transform uppercase
  font-family 'Heading Pro Wide'
  @media(max-height 620px)
    margin-bottom 10vh
  @media(max-height 520px)
    margin-bottom 8vh
.curtains-arrow-bottom
  size 60px
  display flex
  margin-left -30px
  align-items center
  border-radius 60px
  justify-content center
  absolute left 50% bottom 20px
  border 1px solid rgba(246, 172, 109, .5)
  @media(max-height 520px)
    size 48px
    margin-left -24px
  svg
    fill #f6ac6d
    size 17px 33px
    @media(max-height 520px)
      size 12px 26px
.main-title-other
  color #f6ac6d
  font-size 23px
  font-weight 700
  margin-top -65px
  text-align center
  position relative
  padding 60px 0 20px 0
  letter-spacing 2.19px
  text-transform uppercase
  font-family 'Heading Pro Wide'
  span
    position relative
    z-index 1
.main-title
  color #f6ac6d
  font-size 20px
  font-weight 700
  margin-top -65px
  text-align center
  position relative
  padding 30px 0 330px
  letter-spacing 2.19px
  text-transform uppercase
  font-family 'Heading Pro Wide'
  span
    position relative
    z-index 1
  &::before
    content ''
    position absolute
    background linear-gradient(180deg, #1F252F 0%, rgba(31, 37, 47, 0) 100%)
    left 0
    top 0px
    width 100%
    height 300px
    z-index 0
  &__circle-1
    margin-right -45px
    size 233px 278px
    absolute right 50% top 20px
    background url('../assets/images/main-about-top-line.png') no-repeat center/223px 278px
.about-content
  color #b9b9b9
  font-size 12px
  line-height 20px
  text-align center
.about-item
  position relative
  padding 310px 20px 30px
.about-full-bg
  height 290px
  background no-repeat center/cover
.about-full-bg-1
  background-image url('../assets/images/about-full-bg-1.png')
.about-full-bg-2
  background-image url('../assets/images/about-full-bg-2.jpg')
.about-collage-1
  padding 0 20px
  position relative
  &__image
    height 275px
    height 275px
    margin-bottom  24px
    background url('../assets/images/about-collage-1.png') no-repeat center top/contain
.about-collage-1 .about-content
  margin-bottom 32px
.about-collage-2
  &__image
    size 275px
    z-index -1
    absolute left 50% top 0
    transform translateX(-50%)
    border-radius: 50%
    background url('../assets/images/about-collage-2.png') no-repeat center top/contain
    background-size: cover;
.about-collage-3
  &__image
    size 275px
    z-index -1
    absolute left 50% top 0
    transform translateX(-50%)
    border-radius: 50%
    background url('../assets/images/about-collage-3.png') no-repeat center top/contain
    background-size: cover;
.about-collage-4
  &__image
    size 275px
    border-radius: 50%
    z-index -1
    absolute left 50% top 10px
    transform: translateX(-50%)
    background url('../assets/images/about-collage-4.png') no-repeat center/contain
.about-collage-5
  margin-top 30px
  &__image
    size 275px
    z-index -1
    absolute left 50% top 10px
    transform: translateX(-50%)
    background url('/static/about/roskoshndvor.png') no-repeat center top/contain
.about-collage-6
  &__image
    size 275px
    z-index -1
    absolute left 50% top 0
    transform translateX(-50%)
    border-radius: 50%
    background url('../assets/images/about-collage-6.png') no-repeat center top/contain
    background-size: cover;
.about-collage-7
  &__image
    size 275px
    z-index -1
    absolute left 50% top 0
    transform translateX(-50%)
    border-radius: 50%
    background url('../assets/images/about-collage-7.png') no-repeat center top/contain
    background-size: cover;
.about-collage-8
  padding-top 330px
  &__image
    size 275px
    z-index -1
    absolute left 50% top 0
    transform translateX(-50%)
    background url('../assets/images/about-picture-31.png') no-repeat center top/contain
.about-collage-9
  &__image
    size 275px
    z-index -1
    absolute left 50% top 0
    transform translateX(-50%)
    background url('../assets/images/about-collage-9.png') no-repeat center top/contain
.about-collage-10
  padding-top 320px
  &__image
    size 275px
    z-index -1
    absolute left 0 top 0
    absolute left 50% top 0
    transform translateX(-50%)
    border-radius: 50%
    background url('../assets/images/about-collage-10.png') no-repeat center top/contain
.about-collage-12
  padding-top 310px
  &__image
    size 275px
    z-index -1
    absolute left 0 top 0
    background url('../assets/images/about-collage-12.png') no-repeat center top/294px
.about-collage-11
  &__image
    size 275px
    z-index -1
    absolute left 50% top 0
    transform translateX(-50%)
    background url('../assets/images/about-collage-11.png') no-repeat center top/contain
.popup-content
  color white

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
.popup-content__left--bottom
  font-family 'Heading Pro Wide'
  font-weight 600
  font-size 10px
  line-height 135%
  letter-spacing 22%
  text-align center
  text-transform uppercase

.swiper-slide
  background no-repeat center/cover
  height 208px
.slider-button
  z-index 3
  outline none
  cursor pointer
  size 56px 40px
  position absolute
  top calc(50% - 30px)
  &--prev
    left 20px
  &--next
    right 20px
    transform scale(-1)
  &.swiper-button-disabled
    display none
.slider-slide img
  width 100%
.slider-button img
  width 100%
  object-fit cover
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

</style>
<style scoped>
.popup-modal {
  display: none;
  background: #0000003D;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.popup-modal.active {
  display:  grid;
  place-content: center;
}
.popup-modal__wrapper {
  transform: translateY(80px);
}
.popup-modal img {

}
.popup-modal__content {
  width: 311px;
  height: 414px;
  position: relative;
}
.popup-modal__content::before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 6.43%, rgba(0, 0, 0, 0.17) 100%);
  top: 0;
  left: 0;
}
.popup-modal__content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.popup-modal__descr {
  position: absolute;
  display: grid;
  width: 100%;
  padding: 24px;
  bottom: 10px;
  left: 0;
}
.popup-modal__title {
  color: #F6AC6D;
  font-family: Heading Pro Wide;
  font-weight: 700;
  font-style: Bold;
  font-size: 23px;
  line-height: 100%;
  letter-spacing: 22%;
  text-transform: uppercase;

  margin-bottom: 12px;
}
.popup-modal__text {
  color: white;
  font-family: TT Commons;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;

  margin-bottom: 24px;
}
.popup-modal__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1F252F;
  background: #F6AC6D;
  padding: 0px 24px;
  height: 50px;
  border-radius: 62px;
  gap: 16px;
  font-family: Heading Pro Wide;
  font-weight: 700;
  font-style: Bold;
  font-size: 12px;
  line-height: 197%;
  letter-spacing: 22%;
  text-transform: uppercase;

}
.popup-modal__btn:hover {
  text-decoration: none;
  color: #1F252F;
}
.popup-modal__btn svg {
  height: 43px;
  width: 43px;
}
.popup-modal__close {
  position: absolute;
  top: -17px;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 50px;
  height: 50px;
}
.popup-modal__mobclose {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 36px;height: 36px;
}
.first-section__btn {
  position: absolute;
  width: 80px;
  height: 80px;
  left: 10px;
  bottom: 10px;
  border-radius: 9999px;
  z-index: 1;
}
.first-section__btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
