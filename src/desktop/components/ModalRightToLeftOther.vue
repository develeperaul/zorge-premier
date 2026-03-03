<template lang="pug"> .popup-modal(v-if="isOpened")
  .shadow(@click="close" :class="{'hiding': !visible}")
  .wrapper(:class="{'hiding': !visible}"): smooth-scrollbar: .content
    .top
      .close-btn.icon-border(@click="close")
        svg: use(xlink:href="/static/sprite.svg#close")
      .top--right
        .title {{ title }}
        .status(:class="[ {free:status === 'free'}, {book:status === 'booked'}]") {{statusText[status]}}

    .body: slot

</template>

<script>
export default {
  props: ['title', 'status','className'],
  data: () => ({
    statusText: {
      free: 'Свободна',
      booked: 'Забронирована',
      sold: 'Продана'
    },
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
.title
  color #fff

  line-height 1
  font-weight 700
  text-align left
  max-width 1230px
  font-size rem(20px)
  text-transform uppercase
  letter-spacing rem(4.4px)
  font-family 'Heading Pro Wide'
.top
  display flex
  align-items center
  gap 112px
  &--right
    display flex
    align-items center
    padding-bottom 5px
    colot #fff
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
.content
  padding 25px
.close-btn

  static
.status
  display flex
  gap 10px
  font-family: TT Commons;
  font-weight: 400;
  font-size: 14px;
  line-height: 197%;
  letter-spacing: 0%;
  color white
  align-items center
  margin-left 30px
.status::before
  display block
  content ''
  width 10px
  height 10px
  border-radius 9999px
  background transparent
  border 1px solid #F6AC6D
  margin-bottom 5px
.free::before
  background #2E3541
  border 1px solid #2E3541
.booked::before
  background #B7875B
  border 1px solid #B7875B


</style>
