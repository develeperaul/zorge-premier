<template lang="pug"> .top-right-panel(:style="{ top: $route.name === 'Главная' ? '100px': '25px'}")
  .icon-border(@click="toggleMenu"): svg: use(xlink:href="/static/sprite.svg#hamburger")
  router-link.icon-border(to="/select" exact): svg: use(xlink:href="/static/sprite.svg#key")
  .icon-border(@click="openPopup")
    svg(width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg")
      path(d="M13.9987 2.33398C7.5587 2.33398 2.33203 7.56065 2.33203 14.0007C2.33203 20.4407 7.5587 25.6673 13.9987 25.6673C20.4387 25.6673 25.6654 20.4407 25.6654 14.0007C25.6654 7.56065 20.4387 2.33398 13.9987 2.33398ZM11.6654 19.2507V8.75065L18.6654 14.0007L11.6654 19.2507Z" fill="white")

  //.icon-border: svg: use(xlink:href="/static/sprite.svg#3d-box")
  div.popup-modal(ref="popupModalVideo")
      svg(class="popup-modal__descclose" @click="()=>{$refs.popupModalVideo.classList.remove('active');openVideo=false;}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg")
        circle(cx="25" cy="25" r="23.5" stroke="#F6AC6D" stroke-width="3")
        line(x1="17.0607" y1="16.9393" x2="34.0312" y2="33.9099" stroke="white" stroke-width="3")
        line(x1="16.9393" y1="33.9393" x2="33.9099" y2="16.9688" stroke="white" stroke-width="3")


      VideoCarousel(:items="items" v-if="openVideo")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VideoCarousel from './VideoCarousel/VideoCarousel.vue'
export default {
  components: { VideoCarousel},
  data: () => ({
    footerShowDefault: false,
    openVideo:false,
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
  computed: mapGetters({
    footerShow: 'variables/footerShow',
    phoneShow: 'variables/phoneShow',
    phone: 'settings/phone'
  }),
  mounted () {
    this.footerShowDefault = this.footerShow
  },
  methods: {
    ...mapActions({ toggleMenu: 'variables/toggleMenu' }),
    openPopup() {
      this.openVideo=true;
      this.$refs.popupModalVideo.classList.add("active")
    }
  }

}
</script>

<style scoped lang="stylus">
.popup-modal
  display: none
  background: #151C27E5
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 1000
  padding: 80px

.popup-modal.active
  display:  grid
  place-content: center

.popup-modal__descclose
  position: absolute
  right: 30px
  top: 30px
  cursor: pointer

</style>

<style scoped>
</style>
