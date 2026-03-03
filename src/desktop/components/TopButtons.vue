<template lang="pug"> .top-right-panel(:style="{ top: $route.name === 'Главная' ? '100px': '25px'}")
  .icon-border(@click="toggleMenu"): svg: use(xlink:href="/static/sprite.svg#hamburger")
  router-link.icon-border(to="/select" exact): svg: use(xlink:href="/static/sprite.svg#key")
  //.icon-border: svg: use(xlink:href="/static/sprite.svg#3d-box")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    footerShowDefault: false
  }),
  computed: mapGetters({
    footerShow: 'variables/footerShow',
    phoneShow: 'variables/phoneShow',
    phone: 'settings/phone'
  }),
  mounted () {
    this.footerShowDefault = this.footerShow
  },
  methods: mapActions({toggleMenu: 'variables/toggleMenu'})
}
</script>

<style scoped lang="stylus">
</style>
