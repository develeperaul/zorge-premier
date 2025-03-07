<template lang="pug"> .apartment-concepts
  ScrollPage(ref="scrollbar" :backgroundImage="require('../assets/images/engineering.jpg')")
    template(v-slot:first="")
      .desc Zorge Premiere — это современные инженерные системы, которые обеспечивают высочайший уровень безопасности и комфорта для каждого жильца.
    .container.engineering-container
      .engineering-content.engineering-content-1
        div: .engineering-picture-1.engineering-picture: .sizer
        div
          .long-title(v-html="items[0].title")
          div(v-html="items[0].content")
      .engineering-content.engineering-content-2
        div: .engineering-picture-2.engineering-picture: .sizer
        div
          .long-title(v-html="items[1].title")
          div(v-html="items[1].content")
      .engineering-content.engineering-content-3
        div: .engineering-picture-3.engineering-picture: .sizer
        div
          .long-title(v-html="items[2].title")
          div(v-html="items[2].content")
      .engineering-content.engineering-content-4
        div: .engineering-picture-4.engineering-picture: .sizer
        div
          .long-title(v-html="items[3].title")
          div(v-html="items[3].content")

</template>

<script>
import ScrollPage from '../components/ScrollPage'
import ModalRightToLeft from '../components/ModalRightToLeft'
import NextSection from '../components/NextSection'
import {mapGetters} from 'vuex'
export default {
  components: { ScrollPage, ModalRightToLeft, NextSection },
  computed: {
    ...mapGetters({items: 'engineering/items'}),
    scrollbar () {
      return this.$refs.scrollbar.$refs.scrollbar.scrollbar
    }
  },
  beforeDestroy () {
    this.$store.commit('variables/footerShow', true)
  },
  mounted () {
    this.$store.commit('variables/footerShow', false)
    this.loaderHide()
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
.next-section
  bottom -35px!important
.desc
  color #fff
  font-size 20px
  max-width 700px
  font-weight 600
  line-height 1.2
  letter-spacing .22em
  text-transform uppercase
  font-family 'Heading Pro Wide'
  +below(1340px)
    padding-left 60px
.engineering-container
  max-width: 1594px
  display grid
  grid-template-columns repeat(4,1fr)
  gap 33px



.engineering-content-1
  grid-column 1 / 2
  &:before
    content ''
    size 1075px
    absolute right -175px top 195px
    background url('./../assets/images/about-picture-17.png') no-repeat center/cover
.engineering-content-2
  grid-column 3 / 4


.engineering-content-3
  grid-column 2 / 3
  margin-top -200px
  &:before
    content ''
    size 367px
    absolute left 130px top -250px

    background url('./../assets/images/about-picture-18.png') no-repeat center/cover
.engineering-content-4
  grid-column 4 / 4
  margin-top -200px
  &:before
    content ''
    size 475px 953px
    absolute left -280px top -241px
    background url('./../assets/images/about-picture-19.png') no-repeat center/cover
.engineering-content
  position relative
  display grid
  gap 32px
  width 374px
  align-content start




.engineering-picture-1
  z-index 1
  size 278.93px
  position relative
  background url('./../assets/images/engineering-picture-9.png') no-repeat center/cover
.engineering-picture-2
  size 278.93px
  position relative
  background url('./../assets/images/engineering-picture-8.png') no-repeat center/cover
.engineering-picture-3
  size 278.93px
  position relative
  background url('./../assets/images/engineering-picture-1.png') no-repeat center/cover
.engineering-picture-4
  size 278.93px
  position relative
  background url('./../assets/images/engineering-picture-10.png') no-repeat center/cover


.engineering-picture
  +below(1345px)
    size 100%
    background-size contain
.sizer
  +below(1345px)
    padding-top 100%
  </style>
<style >
.engineering-content ul {

  display: grid;
  gap: 16px;
  padding-left: 22px;
}
</style>
