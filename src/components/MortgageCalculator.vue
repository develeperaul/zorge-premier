<template lang="pug">
.mortgage-calc(v-if="config")
  .mortgage-calc__layout
    //- Список предложений
    .mortgage-calc__offers
      .table-header
        .col Банк
        .col Программа / Условия
        .col Ставка
        .col Первонач. взнос
        .col Платеж в месяц

      .bank-row(v-for="(bank, index) in config.banks" :key="index")
        .col.bank-name {{ bank.name }}
        .col.bank-program {{ bank.program }}
        .col.bank-rate {{ bank.rate }}%
        .col.bank-dep от {{ bank.minDeposit }}%
        .col.bank-pay от {{ calculateMonthly(bank.rate) | formatCurrency }} ₽

    //- Панель управления
    aside.mortgage-calc__sidebar
      .control-item
        label Стоимость недвижимости
        .control-value {{ price | formatCurrency }} ₽
        input.slider(type="range" v-model.number="price" min="1000000" max="50000000" step="10000")

      .control-item
        label Первоначальный взнос ({{ depositPercent }}%)
        .control-value {{ depositAmount | formatCurrency }} ₽
        input.slider(type="range" v-model.number="depositPercent" min="10" max="90")

      .control-item
        label Срок кредита
        .control-value {{ years }} лет
        input.slider(type="range" v-model.number="years" min="1" max="30")

      .summary
        span Сумма кредита
        .summary-total {{ loanAmount | formatCurrency }} ₽
        button.btn-consult ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        p.disclaimer Данный расчет приведен для общей информации...
</template>

<script>
import json from "../../public/config.json"

export default {
  data() {
    return {
      config: null,
      price: 0,
      depositPercent: 0,
      years: 0
    }
  },
  computed: {
    depositAmount() {
      return Math.round((this.price * this.depositPercent) / 100)
    },
    loanAmount() {
      return this.price - this.depositAmount
    }
  },
  filters: {
    formatCurrency(val) {
      return val.toLocaleString('ru-RU')
    }
  },
  methods: {
    calculateMonthly(rate) {
      const i = rate / 12 / 100
      const n = this.years * 12
      const pay = this.loanAmount * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
      return Math.round(pay)
    },
    async fetchConfig() {

      this.config = json
      const { defaults } = this.config
      this.price = defaults.price
      this.depositPercent = defaults.depositPercent
      this.years = defaults.years
    }
  },
  mounted() {
    console.log(json);

    this.fetchConfig()
  }
}
</script>

<style lang="stylus" scoped>
$orange = #F6AC6D
$dark-bg = #121416
$border = #2d2f31

.mortgage-calc
  background $dark-bg
  color white
  padding 40px
  font-family sans-serif

  &__layout
    display flex
    gap 60px

  &__offers
    flex 1

  &__sidebar
    width 350px

.table-header
  display grid
  grid-template-columns 100px 1fr 80px 100px 150px
  font-size 12px
  color #666
  padding-bottom 15px

.bank-row
  display grid
  grid-template-columns 100px 1fr 80px 100px 150px
  align-items center
  padding 25px 0
  border-bottom 1px solid $border
  font-size 14px

  .bank-pay
    font-weight bold
    font-size 16px

.control-item
  margin-bottom 30px
  label
    color #888
    font-size 13px
  .control-value
    font-size 18px
    margin 10px 0

.slider
  -webkit-appearance none
  width 100%
  height 2px
  background #333
  outline none

  &::-webkit-slider-thumb
    -webkit-appearance none
    width 12px
    height 12px
    background $orange
    border-radius 50%
    cursor pointer
    box-shadow 0 0 8px rgba($orange, 0.5)

.summary
  margin-top 40px
  &-total
    font-size 32px
    font-weight bold
    margin 10px 0 25px

.btn-consult
  background $orange
  color black
  border none
  width 100%
  padding 18px
  border-radius 30px
  font-weight bold
  text-transform uppercase
  cursor pointer
  &:hover
    opacity 0.9

.disclaimer
  font-size 10px
  color #555
  margin-top 15px
</style>
