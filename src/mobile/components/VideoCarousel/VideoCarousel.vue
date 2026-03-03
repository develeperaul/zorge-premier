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
        direction: 'horizontal',
        spaceBetween: 8,
        slidesPerView: 1.2,
        centeredSlides: true,
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

    this.$nextTick(() => {
      // иногда полезно чуть отложить
      setTimeout(() => {
        main.update()
        thumbs.update()
        // выровнять активность превью с основным
        thumbs.slideTo(main.activeIndex || 0, 0)
        syncPlay()
      }, 0)
    })

    // this.$nextTick(() => { main.update(); thumbs.update() })
  },
  methods: {
    prev () { this.$refs.thumbs.$swiper.slidePrev() },
    next () { this.$refs.thumbs.$swiper.slideNext() }
  }
}
</script>


<template lang="pug">
.vc-m--root
  //- Левое превью (thumbs)
  div.vc-m--btn.vc-m--btn-prev(@click="prev")
    svg(width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg")
      g(clip-path="url(#clip0_1362_9588)")
        circle( cx="18" cy="18" r="16.92" transform="rotate(180 18 18)" fill="#19202A" stroke="#F6AC6D" stroke-width="2.16")
        path( d="M18 9.36133L10.08 18.0013L18 26.6413" stroke="white" stroke-width="2.16")
        path( d="M11.5195 18.002L28.0795 18.002" stroke="white" stroke-width="2.16")

      defs
        clipPath( id="clip0_1362_9588")
          rect( width="36" height="36" fill="white")


  div.vc-m--btn.vc-m--btn-next(@click="next")
    svg(width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg")
      g(clip-path="url(#clip0_1362_9582)")
        circle( cx="18" cy="18" r="16.92" transform="rotate(180 18 18)" fill="#19202A" stroke="#F6AC6D" stroke-width="2.16")
        path( d="M17.998 26.6406L25.918 18.0006L17.998 9.36062" stroke="white" stroke-width="2.16")
        path( d="M24.4785 18L7.91852 18" stroke="white" stroke-width="2.16")

      defs
        clipPath( id="clip0_1362_9582")
          rect( width="36" height="36" fill="white")
  .vc-m--main
    //- .vc-m--nav

    swiper(ref="main" :options="mainOptions")
      swiper-slide(v-for="(it, i) in items" :key="it.id")
        VideoSlide(:ref="'slide-' + i" :src="it.src" :poster="it.poster" :title="it.title")
  swiper.vc-m--thumbs(ref="thumbs" :options="thumbsOptions")
    swiper-slide(v-for="(it, i) in items" :key="it.id")
      img.vc-m--thumb-img( :src="it.thumb || it.poster")
      .vc-m--thumb-title {{it.title}}
  //- Основной слайдер
</template>
<style >
.vc-m--root { display: grid;  grid-template-rows: 1fr 160px; gap: 16px; align-items: stretch; padding: 72px 20px 20px 20px; height: 100vh; }
.vc-m--thumbs { height: 100%; width: 100%; }
.vc-m--thumbs .swiper-slide {
  opacity: .6;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 140px !important;
  background: #0000007A;
  position: relative;
 }
.vc-m--thumbs .swiper-slide-thumb-active { opacity: 1; box-shadow: 0 0 0 2px #F6AC6D inset; }
.vc-m--thumb-img { width: 100%; height: 140px; object-fit: cover; display: block; }
.vc-m--thumb-title {
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

.vc-m--main { position: relative; border-radius: 12px; overflow: hidden; background: #0f1115; }
.vc-m--main .swiper-container { width: 100%; height: 100%; }
.vc-m--main .swiper-slide {
  display: flex;
  align-items: center;
}
.vc-m--video-wrap {  background: #000; }
.vc-m--video { width: 100%; height: 100%; object-fit: cover; display: block; }

.vc-m--playbtn { position: absolute; inset: 0; display: grid; place-items: center; pointer-events: none; transition: opacity .2s ease; }
.vc-m--playbtn .icon { width: 64px; height: 64px; background: rgba(255,255,255,.9); clip-path: polygon(30% 20%, 30% 80%, 80% 50%); border-radius: 12px; }
.vc-m--video-wrap.is-playing .vc-m--playbtn { opacity: 0; }

.vc-m--caption {
  position: absolute;
  left: 16px;
  bottom: 16px;
  color: #fff;
  font-family: Heading Pro Wide;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 22%;
  text-transform: uppercase;



  background: linear-gradient(90deg, rgba(0,0,0,.6), rgba(0,0,0,0)); padding: 8px 12px; border-radius: 8px; }
.vc-m--nav { position: absolute; right: 12px; top: 12px; z-index: 10; display: flex; gap: 8px; }
.vc-m--btn { width: 36px; height: 36px; position: absolute; bottom: 99px; z-index: 5;  cursor: pointer; }
.vc-m--btn-next {
  right: 0;

}
.vc-m--btn-prev{
  left: 0;
}
/* у тебя уже есть .swiper-slide-thumb-active — добавим актив по умолчанию */
.vc-m--thumbs .swiper-slide-active { opacity: 1; box-shadow: 0 0 0 2px #F6AC6D- inset; }

</style>

