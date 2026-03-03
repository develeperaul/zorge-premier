<script>
export default {
  name: 'VideoSlide',
  props: {
    src: { type: String, required: true },
    poster: { type: String, default: '' },
    title: { type: String, default: '' }
  },
  data() {
    return { isPlaying: false }
  },
  mounted() {
    const v = this.$refs.video
    v.addEventListener('play', this.onPlay)
    v.addEventListener('pause', this.onPause)
    v.addEventListener('ended', this.onEnded)
  },
  beforeDestroy() {
    const v = this.$refs.video
    v && v.removeEventListener && (v.removeEventListener('play', this.onPlay),
                                   v.removeEventListener('pause', this.onPause),
                                   v.removeEventListener('ended', this.onEnded))
  },
  methods: {
    onPlay() { this.isPlaying = true },
    onPause() { this.isPlaying = false },
    onEnded() { this.isPlaying = false },
    toggle() {
      const v = this.$refs.video
      if (!v) return
      v.paused ? v.play() : v.pause()
    },
    play() { this.$refs.video && this.$refs.video.play() },
    pause() { this.$refs.video && this.$refs.video.pause() },
    stop() {
      const v = this.$refs.video
      if (!v) return
      v.pause(); v.currentTime = 0
    }
  }
}
</script>

<template lang="pug">
.vc-m--video-wrap(:class="{ 'is-playing': isPlaying }" @click="toggle")
  video.vc-m--video(ref="video" :poster="poster" preload="none" playsinline webkit-playsinline  :src="src")
  .vc-m--playbtn
    .icon
  .vc-m--caption(v-if="title") {{ title }}
</template>

<style scoped>
/* при желании локальные стили; базовые — см. ниже */
</style>
