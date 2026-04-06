<template lang="pug">
  div
    div.exclusive-openblock
      div.exclusive-openblock__title Эксклюзив. Готовая Квартира с дизайнерским ремонтом
      div.exclusive-openblock__btn(@click="$refs.modalfull.open()")
        svg( viewBox="0 0 43 18" fill="none" xmlns="http://www.w3.org/2000/svg")
          line(x1="43" y1="9" y2="9" stroke="currentColor" stroke-width="2")
          path(d="M43 9C38.0294 9 34 4.97056 34 0" stroke="currentColor" stroke-width="2")
          path(d="M34 18C34 13.0294 38.0294 9 43 9" stroke="currentColor" stroke-width="2")

        span Подробнее
      .exclusive-openblock__circle.exclusive-openblock__circle-1
        img(src="/static/exclusive/circle2.svg")
      .exclusive-openblock__circle.exclusive-openblock__circle-3
        img(src="/static/exclusive/circle2.svg")

      .exclusive-openblock__circle.exclusive-openblock__circle-2
        img(src="/static/exclusive/circle3.svg")

    ModalFull(ref="modalfull" )

    .home

      .wrapper()
        .curtains
          //- transition(name="fade-05"): .content(v-if="contentVisible.home && $parent.emptyHistory")
            .content__left: .left-text Клубные дома <br>у леса
            .content__center: img.logo-circle(alt src="@/assets/images/logo-circle.png")
            .content__right: svg.text-premiere: use(xlink:href="/static/sprite.svg#text-premiere")
          //- next-section(v-if="!menuShow && contentVisible.home && $parent.emptyHistory" @click="videoToAbout")
          .video-bg()
            //- div(style="background-image:url('/static/gallery/architecture/render-15.jpg');")
            .video(

              style="background-image:url('/static/gallery/architecture/render-12.jpg');"
            )
            //- video.video(
            //-   v-if="$parent.emptyHistory"
            //-   playsinline muted
            //-   src="./../assets/other/home-video-transition-to-about.mp4"
            //-   poster="/static/gallery/architecture/render-15.jpg"
            //-   :style="{opacity:videoVisible.toAbout ? '1' : '0'}"
            //-   @loadedmetadata="videoLoaded('toAbout')"
            //-   @playing="videoTransitionToAboutPlay"
            //-   @pause="videoTransitionToAboutPause"
            //-   ref="videoTransitionToAbout"
            //- )
            //- video.video(
            //-   v-if="$parent.emptyHistory"
            //-   loop playsinline muted autoplay
            //-   src="./../assets/other/home-video-cycle.mp4"
            //-   :style="{opacity:videoVisible.cycle ? '1' : '0'}"
            //-   @loadedmetadata="videoLoaded('cycle')"
            //- )

        transition(name="fade-05"): About.about(v-if="contentVisible.about || !$parent.emptyHistory")

        div.popup-modal(ref="popupModal")
          .popup-modal__wrapper
            .popup-modal__content
              .popup-modal__close(@click="closePopupModal")
                svg(width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg")
                  circle( cx="25" cy="25" r="23.5" fill="#F6AC6D" stroke="#F6AC6D" stroke-width="3")
                  line(x1="16.9393" y1="32.9393" x2="31.9393" y2="17.9393" stroke="#1F252F" stroke-width="3")
                  line(x1="17.0607" y1="17.9688" x2="32.0607" y2="32.9688" stroke="#1F252F" stroke-width="3")
              img(alt src=`/static/action7.png`)
              .popup-modal__descr
                //- .popup-modal__title Роскошная пара
                //- .popup-modal__text 2 паркинга в подарок <br> при покупке лимитированной квартиры*
                //- proposed-page(to="/select") Подбор на фасаде
                a(href="https://zorge-premier.ru/events/14").popup-modal__btn
                  svg: use(xlink:href="/static/sprite.svg#arrow-horizontal-long")
                  | Подробнее
</template>

<script>
import About from '../components/About'
import NextSection from '../components/NextSection'
import ProposedPage from '../components/ProposedPage'
import { mapGetters } from 'vuex'
import ModalFull from '@/components/ModalFull.vue'
import MainSlider from '@/components/MainSlider.vue'

export default {
  components: { About, NextSection,ProposedPage, ModalFull, MainSlider },
  data: () => ({
    videoStatusLoaded: {
      cycle: false,
      toAbout: false
    },
    pageComplete: false
  }),
  beforeDestroy () {
    this.$store.commit('variables/footerShow', true)
  },
  mounted() {
    setTimeout(() => {



    const blockTime = localStorage.getItem('blockTime');
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


    this.loaderHide()
    // if (!this.$parent.emptyHistory) {
    //   this.videoStatusLoaded.toAbout = true
    //   this.contentVisible.home = false
    //   this.contentVisible.about = true
    //   this.loaderHide()
    // }
    this.$store.commit('variables/footerShow', false)
  },
  computed: mapGetters({
    menuShow: 'variables/menuShow',
    contentVisible: 'variables/homeContentVisible',
    videoVisible: 'variables/homeVideoVisible',
    transitionToAbout: 'variables/homeTransitionToAbout'
  }),
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
    videoLoaded (type) {
      this.videoStatusLoaded[type] = true
      let allLoaded = true
      Object.keys(this.videoStatusLoaded).map(key => {
        if (!this.videoStatusLoaded[key]) {
          allLoaded = false
        }
      })
      if (allLoaded) {
        this.loaderHide()
        this.pageComplete = true
      }
    },
    mouseWheel ({deltaY}) {
      if (!this.$parent.emptyHistory) {
        return false
      }
      if (!this.pageComplete) {
        return false
      }
      // переход с "штор" на "О компании"
      if (deltaY > 0 && !this.transitionToAbout) {
        this.videoToAbout()
      }
    },
    videoToAbout () {
      if (!this.$parent.emptyHistory) {
        return false
      }
      this.videoVisible.toAbout = true
      setTimeout(() => {
        this.videoVisible.cycle = false
      }, 700)
      this.$store.commit('variables/homeTransitionToAbout', true)
      const video = this.$refs.videoTransitionToAbout
      video.currentTime = 0
      video.playbackRate = 1.3
      video.play()
    },
    videoTransitionToAboutPlay () {
      if (!this.$parent.emptyHistory) {
        return false
      }
      this.contentVisible.home = false
    },
    videoTransitionToAboutPause () {
      if (!this.$parent.emptyHistory) {
        return false
      }
      this.contentVisible.about = true
    }
  }
}
</script>

<style scoped lang="stylus">
.video
  transition opacity 1s
.curtains
  size 100%
  fixed top 0 left 0
.content
  z-index 1
  display flex
  size 100% 100vh
  user-select none
  position relative
  align-items center
  absolute top 0 left 0
  justify-content center
  &__left, &__right
    flex-basis 100%
  &__left
    text-align right
  &__right
    text-align left
  &__center
    text-align center
.logo-circle
  size 340px
  margin 0 150px
  +below(1360px)
    margin 0 10vw
  +below(1320px)
    margin 0 8vw
.left-text
  color #fff
  font-weight 700
  font-size rem(20px)
  text-transform uppercase
  letter-spacing rem(4.4px)
  font-family 'Heading Pro Wide'
  +above(1540px)
    br
      display none
.text-premiere
  fill #fff
  size 330px 30px
.video-bg
  size 100vw 100vh
  absolute top 82px left 0
  background-repeat no-repeat
  background-size cover
.video
  size 100vw 100vh
  object-fit cover
  absolute top 0px left 0
  background no-repeat center/cover
.about
  position relative

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
.popup-modal img {

}
.popup-modal__content {
  width: 540px;
  height: 715px;
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
  padding: 48px;
  bottom: 0px;
  left: 0;
}
.popup-modal__title {
  color: #F6AC6D;
  font-family: Heading Pro Wide;
  font-weight: 600;
  font-size: 23px;
  line-height: 100%;
  letter-spacing: 22%;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.popup-modal__text {
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  color: white;
  margin-bottom: 24px;
}
.popup-modal__btn {
  display: flex;
  width: fit-content;
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
  cursor: pointer;

}
</style>
