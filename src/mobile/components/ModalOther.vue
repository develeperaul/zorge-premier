<template lang="pug"> .custom-modal(v-if="isOpened"): .wrapper(:class="{'hiding': !visible}")

  .shadow(@click="close" :class="{'hiding': !visible}")
  .wrapper(:class="{'hiding': !visible,'full': full} "): smooth-scrollbar: .content
    .top
      div
        .title {{ title }}
        .close-btn.icon-border(@click="close")
          svg: use(xlink:href="/static/sprite.svg#close")


    .body: slot
  //- .close-btn.icon-border(@click="close")
  //-   svg: use(xlink:href="/static/sprite.svg#arrow-back")
</template>

<script>
export default {
  props: ['title', 'className', 'full'],
  data: () => ({
    visible: false,
    isOpened: false
  }),
  methods: {
    open () {
      document.body.style.overflow = 'hidden';
      this.isOpened = true
      this.$nextTick(() => {
        this.visible = true
      })
    },
    close () {
      document.body.style.overflow = 'auto';
      this.visible = false
      this.$nextTick(() => {
        setTimeout(() => {
          this.isOpened = false
        }, 100)
        this.$emit('afterClose')
      })
    }
  },
  watch: {
    isOpened(value) {
      if(value === false) this.$emit('close');
    }
  }
}
</script>

<style scoped lang="stylus">
.popup-modal
  z-index 1
  position relative
.title
  color #fff
  width 100%
  line-height 1
  font-weight 700
  text-align left
  max-width 1230px
  font-size rem(16px)
  text-transform uppercase
  letter-spacing rem(4.4px)
  font-family 'Heading Pro Wide'
.top
  padding-top 70px
  padding-bottom 25px
.top div
  display flex
  align-items center
  gap 10px
.body
  flex-basis 100%
.shadow
  size 100%
  opacity 1
  z-index 99
  animation fadeIn .5s
  fixed left 0 top 0
  background-color rgba(21, 28, 39, .79)
  @keyframes fadeIn
    from
      opacity 0
    to
      opacity 1
  &.hiding
    opacity 0
    transition opacity .15s ease-in-out
.wrapper
  size 100%
  z-index 100
  display flex
  max-width 1460px
  fixed right 0 top 0
  flex-direction column
  transform translateX(0)
  background-color #1f252f
  animation rightToLeft .5s
  @keyframes rightToLeft
    to
      transform translateX(0)
    from
      transform translateX(100%)
  &.hiding
    transform translateX(100%)
    transition transform .15s ease-in-out
.wrapper.full
  max-width 100vw
.content
  padding 25px
.close-btn
  flex-shrink 0
  size 34px
.icon-border svg
  size 13px
</style>
