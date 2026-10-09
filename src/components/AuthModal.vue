<template>
  <transition name="modal-fade">
    <div v-if="value" class="auth-overlay" @click.self="closeOnBackdrop">
      <div class="auth-modal">
        <button v-if="allowClose" class="close-btn" @click="close">&times;</button>
        <h2>Вход для агентов</h2>
        <p class="subtitle">Доступ к разделу подбора квартир</p>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input
              type="text"
              v-model="login"
              placeholder="Логин"
              autocomplete="off"
              required
              ref="loginInput"
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              v-model="password"
              placeholder="Пароль"
              required
              @keyup.enter="handleSubmit"
            />
          </div>

          <div v-if="error" class="error-message">{{ error }}</div>

          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? 'Проверка...' : 'Войти' }}
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
const AUTH_KEY = 'agent_authenticated'
const AUTH_EXPIRY_KEY = 'agent_auth_expiry'
const AGENT_LOGIN = 'agent'
const AGENT_PASSWORD = '2T5JGMa1MK' // Замените на ваш пароль
const AUTH_DAYS = 30 // 30 дней

export default {
  name: 'AuthModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    allowClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      login: '',
      password: '',
      error: '',
      loading: false
    }
  },
  watch: {
    value: function(val) {
      if (val) {
        var self = this
        this.$nextTick(function() {
          if (self.$refs.loginInput) {
            self.$refs.loginInput.focus()
          }
        })
      } else {
        this.resetForm()
      }
    }
  },
  methods: {
    handleSubmit: function() {
      var self = this
      this.error = ''
      this.loading = true

      setTimeout(function() {
        if (self.login === AGENT_LOGIN && self.password === AGENT_PASSWORD) {
          // Устанавливаем авторизацию на 30 дней
          const expiryDate = new Date()
          expiryDate.setDate(expiryDate.getDate() + AUTH_DAYS)
          sessionStorage.setItem(AUTH_KEY, 'true')
          sessionStorage.setItem(AUTH_EXPIRY_KEY, expiryDate.getTime().toString())

          self.$emit('success')
          self.$emit('input', false)
        } else {
          self.error = 'Неверный логин или пароль'
        }
        self.loading = false
      }, 500)
    },
    resetForm: function() {
      this.login = ''
      this.password = ''
      this.error = ''
    },
    close: function() {
      if (this.allowClose) {
        this.$emit('input', false)
        this.$emit('close')
        this.$emit('cancel')
      }
    },
    closeOnBackdrop: function() {
      if (this.allowClose) {
        this.close()
      }
    }
  }
}
</script>

<style scoped>
.auth-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.auth-modal {
  background: white;
  border-radius: 12px;
  padding: 32px;
  width: 90%;
  max-width: 420px;
  position: relative;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #999;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #333;
}

.auth-modal h2 {
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #333;
}

.subtitle {
  margin: 0 0 24px 0;
  color: #666;
  font-size: 14px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #f6ac6d;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #f6ac6d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: #e5954a;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 16px;
  text-align: center;
}
</style>
