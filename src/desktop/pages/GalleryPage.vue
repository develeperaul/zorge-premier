<script>
import VideoCarousel from '../components/VideoCarousel/VideoCarousel.vue'
export default {
  components: { VideoCarousel },
  data: () => ({
    items: [
      { id: 1, title: 'Генеральный директор о комплексе', src: '/static/video/hsi.webm', poster: '/static/gallery/architecture/arc-1.jpg', thumb: '/img/thumbs/t1.jpg' },
      { id: 2, title: 'Обзор двора', src: '/static/video/saforov.webm', poster: '/static/gallery/architecture/arc-2.jpg', thumb: '/img/thumbs/t2.jpg' },
      { id: 3, title: 'Архитектура фасадов', src: '/static/video/saforov.webm', poster: '/static/gallery/architecture/arc-3.jpg', thumb: '/img/thumbs/t3.jpg' }
    ]
  })
}
</script>

<template lang="pug">
section(style="padding:24px; background:#0b0e13; min-height:100vh;")
  VideoCarousel(:items="items")
</template>
