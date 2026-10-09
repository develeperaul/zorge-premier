<template>
  <div class="protected-view">
    <!-- Показываем модалку поверх страницы -->
    <AuthModal
      v-model="showAuthModal"
      @success="onAuthSuccess"
      @cancel="onAuthCancel"
      :allowClose="true"
    />

    <!-- Контент страницы показываем только после авторизации -->
    <div v-if="isAuthenticated">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AuthModal from './AuthModal.vue'

const AUTH_KEY = 'agent_authenticated'
const AUTH_EXPIRY_KEY = 'agent_auth_expiry'

export default {
  name: 'ProtectedView',
  components: {
    AuthModal
  },
  data() {
    return {
      showAuthModal: false,
      isAuthenticated: false
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    checkAuth() {
      const authenticated = sessionStorage.getItem(AUTH_KEY) === 'true'
      const expiry = sessionStorage.getItem(AUTH_EXPIRY_KEY)

      if (authenticated && expiry) {
        const now = new Date().getTime()
        if (now < parseInt(expiry)) {
          this.isAuthenticated = true
          // Скрываем лоадер, если он есть
          if (this.$root.loaderHide) {
            this.$root.loaderHide()
          }
          return
        } else {
          sessionStorage.removeItem(AUTH_KEY)
          sessionStorage.removeItem(AUTH_EXPIRY_KEY)
        }
      }

      // Если не авторизован - показываем модалку и скрываем лоадер
      this.showAuthModal = true

      // Скрываем лоадер, так как страница не будет загружаться
      if (this.$root.loaderHide) {
        this.$root.loaderHide()
      }
    },
    onAuthSuccess() {
      this.isAuthenticated = true
      this.showAuthModal = false
    },
    onAuthCancel() {
      // Закрыли модалку - редирект на главную
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.protected-view {
  min-height: 100vh;
}
</style>
