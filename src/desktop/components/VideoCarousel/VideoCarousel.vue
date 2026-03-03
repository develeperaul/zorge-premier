<script>
import VideoSlide from './VideoSlide.vue'

export default {
  name: 'VideoCarousel',
  components: { VideoSlide },
  props: { items: { type: Array, required: true } },
  data () {
    return {
      mainOptions: {
        spaceBetween: 16,
        slidesPerView: 1,
        controller: { control: null }
      },
      thumbsOptions: {
        direction: 'vertical',
        spaceBetween: 8,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        height: 140,
        // ключевое:
        slideToClickedSlide: true,
        controller: { control: null }
      }
    }
  },
  mounted () {
    const main = this.$refs.main && this.$refs.main.$swiper
    const thumbs = this.$refs.thumbs && this.$refs.thumbs.$swiper
    if (!main || !thumbs) return

    // двусторонняя связка
    main.controller.control = thumbs
    thumbs.controller.control = main
    const toMain = () => {
      const idx = thumbs.clickedIndex
      if (typeof idx === 'number' && idx >= 0) main.slideTo(idx)
    }
    thumbs.on('tap', toMain)
    thumbs.on('click', toMain)
    // // клик/тап по превью -> переход в основной
    // thumbs.on('tap', () => {
    //   const idx = thumbs.clickedIndex
    //   if (typeof idx === 'number' && idx >= 0) {
    //     main.slideTo(idx)


    //   }
    // })
    // // на всякий случай, если 'tap' не ловится в твоей конфе:
    // thumbs.on('click', (e) => {
    //   const idx = thumbs.clickedIndex
    //   if (typeof idx === 'number' && idx >= 0) {
    //     console.log(idx);
    //     console.log(thumbs);



    //     main.slideTo(idx)
    //   }
    // })

    // автопауза видео на неактивных
    main.on('slideChange', () => {
      console.log(main.activeIndex);

      const active = main.activeIndex
      Array.prototype.forEach.call(thumbs.slides, (slide) => {
          slide.classList.remove('swiper-slide-active');
          // slide.classList.remove('swiper-slide-thumb-active');
        });
        thumbs.slides[active].classList.add('swiper-slide-active');
      this.items.forEach((_, i) => {
        const ref = this.$refs['slide-' + i]
        const comp = Array.isArray(ref) ? ref[0] : ref
        if (comp && i !== active) comp.pause()
      })
    })

    // this.$nextTick(() => { main.update(); thumbs.update() })
    this.$nextTick(() => {
      // иногда полезно чуть отложить
      setTimeout(() => {
        main.update()
        thumbs.update()
        // выровнять активность превью с основным
        thumbs.slideTo(main.activeIndex || 0, 0)
        // syncPlay()
      }, 0)
    })
  },
  methods: {
    prev () { this.$refs.main.$swiper.slidePrev() },
    next () { this.$refs.main.$swiper.slideNext() }
  }
}
</script>


<template lang="pug">
.vc-root
  //- Левое превью (thumbs)
  div.vc-btn.vc-btn-prev(@click="next")
    svg(width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg")
      g( clip-path="url(#clip0_1362_11638)")
        circle( cx="25" cy="25" r="23.5" transform="rotate(90 25 25)" fill="#19202A" stroke="#F6AC6D" stroke-width="3")
        path( d="M13 25L25 36L37 25" stroke="white" stroke-width="3")
        path(d="M25 34L25 11" stroke="white" stroke-width="3")
      defs
        clipPath( id="clip0_1362_11638")
          rect( width="50" height="50" fill="white")




  div.vc-btn.vc-btn-next(@click="prev")
    svg(width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg")
      g( clip-path="url(#clip0_1362_11638)")
        circle( cx="25" cy="25" r="23.5" transform="rotate(90 25 25)" fill="#19202A" stroke="#F6AC6D" stroke-width="3")
        path( d="M37 25L25 14L13 25" stroke="white" stroke-width="3")
        path(d="M25 16L25 39" stroke="white" stroke-width="3")
      defs
        clipPath( id="clip0_1362_11638")
          rect( width="50" height="50" fill="white")



  swiper.vc-thumbs(ref="thumbs" :options="thumbsOptions")
    swiper-slide(v-for="(it, i) in items" :key="it.id")
      img.vc-thumb-img( :src="it.thumb || it.poster")
      .vc-thumb-title {{it.title}}
  //- Основной слайдер
  .vc-main


    swiper(ref="main" :options="mainOptions")
      swiper-slide(v-for="(it, i) in items" :key="it.id")
        VideoSlide(:ref="'slide-' + i" :src="it.src" :poster="it.poster" :title="it.title")
</template>
<style >
.vc-root { display: grid; grid-template-columns: 249px 1fr; gap: 16px; align-items: stretch; position: relative; }
.vc-thumbs { height: calc(100vh - 160px); width: 100%; }
.vc-thumbs .swiper-slide {
  opacity: .6;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 140px !important;
  background: #0000007A;
  position: relative;
 }
.vc-thumbs .swiper-slide-thumb-active { opacity: 1; box-shadow: 0 0 0 2px #F6AC6D inset; }
.vc-thumb-img { width: 100%; height: 140px; object-fit: cover; display: block; }
.vc-thumb-title {
  font-family: Heading Pro Wide;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 22%;
  text-transform: uppercase;

  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: white;

}

.vc-main { position: relative; border-radius: 12px; overflow: hidden; background: #0f1115; }
.vc-main .swiper-container { width: 100%; height: 100%; }

.vc-video-wrap { position: relative; background: #000; }
.vc-video { width: 100%; height: calc(100vh - 160px); object-fit: cover; display: block; }

.vc-playbtn { position: absolute; inset: 0; display: grid; place-items: center; pointer-events: none; transition: opacity .2s ease; }
.vc-playbtn .icon { width: 64px; height: 64px; background: rgba(255,255,255,.9); clip-path: polygon(30% 20%, 30% 80%, 80% 50%); border-radius: 12px; }
.vc-video-wrap.is-playing .vc-playbtn { opacity: 0; }

.vc-caption {
  position: absolute;
  left: 16px;
  bottom: 16px;
  color: #fff;
  font-family: Heading Pro Wide;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 22%;
  text-transform: uppercase;



  background: linear-gradient(90deg, rgba(0,0,0,.6), rgba(0,0,0,0)); padding: 8px 12px; border-radius: 8px; }
.vc-nav { position: absolute; right: 12px; top: 12px; z-index: 10; display: flex; gap: 8px; }
.vc-btn {  position: absolute; left: 95px;  cursor: pointer; z-index: 5; }
.vc-btn-next {
  top: 0;

}
.vc-btn-prev{
  bottom: 0;
}
/* у тебя уже есть .swiper-slide-thumb-active — добавим актив по умолчанию */
.vc-thumbs .swiper-slide-active { opacity: 1; box-shadow: 0 0 0 2px #F6AC6D- inset; }

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
