<template lang="pug"> .events
  title-circle Видео  <br>о проекте

  VideoCarousel(:items="items" style=" padding-top: 10px;" )
</template>

<script>
import TitleCircle from '../components/TitleCircle'
import VideoCarousel from '../components/VideoCarousel/VideoCarousel.vue'
export default {
  components: {TitleCircle,VideoCarousel},
  data: () => ({
    openVideo: false,
    items: [
      { id: 1, title: 'ЗОРГЕ Премьер_Фр. балкон', src: '/static/video/franc.webm', poster: '/static/posters/franc.png', thumb: '/static/posters/franc.png' },
      { id: 2, title: 'Главный архитектор о проекте', src: '/static/video/safarov.webm', poster: '/static/posters/safarov.png', thumb: '/static/posters/safarov.png' },
      { id: 3, title: 'ЗОРГЕ Премьер_Обзор', src: '/static/video/hsi.webm', poster: '/static/posters/hsi.png', thumb: '/static/posters/hsi.png' }
    ],
  }),
  async mounted () {

    this.loaderHide()
  },

}
</script>

<style scoped lang="stylus">
.events
  padding 90px 20px 30px
.years
  z-index 1
  display flex
  margin 25px 0
  position relative
  justify-content center
.year
  color #fff
  margin 0 10px
  line-height 1
  cursor pointer
  font-size 14px
  font-weight 600
  letter-spacing .22em
  text-transform uppercase
  font-family 'Heading Pro Wide'
  &--active
    color #F6AC6D
.news
  z-index 1
  position relative
  padding-bottom 15px
  &__item
    display flex
    margin-top 30px
    align-items center
    &__icon
      size 62px
      display flex
      min_size 62px
      margin-right 20px
      align-items center
      border-radius 62px
      justify-content center
      background-color #F6AC6D
      svg
        size 30px
        fill #1F252F
    &__title
      color #fff
      font-size 10px
      font-weight 600
      line-height 1.4
      letter-spacing .1em
      text-transform uppercase
      font-family 'Heading Pro Wide'
</style>
<style>
.vc-m--root {
  height: auto !important;
  position: relative !important;
}
/* .vc-m--btn {
  top: 75px !important;
  bottom: auto !important;
} */
</style>
