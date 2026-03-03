<template lang="pug"> .scroll-page: smooth-scrollbar(ref="scrollbar")
  .first-section(:style="style")
    div(v-if="isBtn" class="first-section__btn" @click="()=>$emit('open')")
      img(src="/static/popup-icon.png")
    Logo
    .container(v-if="pageTitle")
      div
        div(:class="{'first-section__title':isBtn}")
          h1 {{ pageTitle }}
          p(v-if="pageSubTitle" class="subtitle") {{ pageSubTitle }}
      slot(name="first")
    next-section(@click="nextBlock")
  .main-section
    slot
    Footer(:static="true")
</template>

<script>
import Logo from './Logo'
import Footer from './Footer'
import NextSection from './NextSection'
import {mapGetters} from 'vuex'
export default {
  props: [ 'title', 'backgroundImage', 'isBtn' ],
  components: { Logo, Footer, NextSection },
  computed: {
    ...mapGetters({scrollPageOffsetY: 'variables/scrollPageOffsetY'}),
    scrollbar () {
      return this.$refs.scrollbar.scrollbar
    },
    pageTitle () {
      return this.title || this.$route.meta.title
    },
    pageSubTitle () {
      return  this.$route.meta.subtitle
    },
    style () {
      return this.backgroundImage
        ? { backgroundImage: `url(${this.backgroundImage})` }
        : null
    },
    isBack () {
      return this.$route.params.isBack
    }
  },
  mounted () {
    if (this.scrollPageOffsetY.hasOwnProperty(this.$route.path) && this.isBack) {
      this.scrollbar.scrollTop = this.scrollPageOffsetY[this.$route.path]
    }
    this.scrollbar.addListener(({offset}) => {
      this.$store.commit('variables/setScrollPageOffsetY', {
        offset: offset.y,
        path: this.$route.path
      })
    })
  },
  methods: {
    nextBlock () {
      this.scrollbar.setMomentum(
        this.scrollbar.offset.x,
        window.innerHeight - this.scrollbar.scrollTop
      )
    }
  }
}
</script>

<style scoped lang="stylus">
.scroll-page
  height 100vh
.title
  line-height 1.2
  font-weight 700
  margin-bottom 30px
  font-size rem(20px)
  text-transform uppercase
  letter-spacing rem(4.4px)
  font-family 'Heading Pro Wide'
.first-section
  display flex
  height 100vh
  position relative
  padding-bottom 60px
  align-items flex-end
  background no-repeat center/cover
  +below(1800px)
    padding-bottom 75px
  .container
    z-index 1
    position relative
    +below(1340px)
      padding 0 35px
  &:before
    content ''
    size 100% 366px
    absolute left 0 bottom 0
    transform rotate(-180deg)
    background linear-gradient(180deg, #1F252F 0%, rgba(31, 37, 47, 0) 100%)
.main-section
  color #fff
  overflow hidden
  padding 100px 0 0
  background-color #1F252F
.subtitle
  font-weight 600
  font-size 20px
  line-height 100%
  letter-spacing 0.22em
  text-transform uppercase
  color white
  margin-top 16px

</style>
<style>
.first-section__title {
  transform: translate(0px, -100px);
  display: inline-block;
  padding-left: 70px;
}
@media (min-width: 1800px) {
  .first-section__title {
    padding-left: 70;
  }
}

.first-section__title  {

}
.first-section__btn {
  position: absolute;
  width: 160px;
  height: 160px;
  left: 62px;
  bottom: 80px;
  border-radius: 9999px;

}
</style>
