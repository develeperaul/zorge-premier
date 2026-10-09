<template lang="pug"> #app(:class="{'no-padding': noPadding}")
  //- .width-height-view(v-if="whv") {{ whv }}
  Header
  .main: router-view
  .footer
    div.footer__left
      .footer__left-top
        a.footer__jsi(href="https://js-invest.ru/" target="_blank"): svg: use(xlink:href="/static/sprite.svg#logo-jsi")
      .footer__left-bottom
        .footer__desc © 1994-#{new Date().getFullYear()} ООО «Жилстройинвест Девелопмент» <br>
          | Материалы сайта не являются публичной офертой.
        .footer__desc
          div(style="margin-bottom: 5px")
            a.footer__private-police(href='/static/pol.pdf' target="_blank") Политика конфиденциальности
          div
            a.footer__private-police(href='/static/sog.pdf' target="_blank") Согласие на обработку персональных данных
          div(style=" margin-top: 5px")
            span Проектная декларация на сайте
            a.footer__private-police(href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82/63827"  style="color: #F6AC6D;")  наш.дом.рф
        .footer__desc
          div Визуализация, элементы благоустройства, архитектурные, интерьерные и иные дизайнерские решения являются проектными и могут быть изменены застройщиком в любое время в ходе строительства объекта.
    div.footer__right
      .footer__socs
        a.footer__soc(
          v-for="(href,key) in $store.getters['settings/socs']"
          :key="key"
          :href="href"
          target="_blank"
        ): img( width='22' height="22 " alt :src="require(`@/assets/svg/${key}.svg`)")
      a.yesidea(href="https://yes-idea.ru/" target="_blank" v-if="yesidea !== false")
        span Архитектурная визуализация, <br> дизайн и разработка сайтов
        svg(width='87' height='19' viewbox='0 0 87 19' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M5.26487 2.58662C5.97558 2.58662 6.55707 2.00463 6.55707 1.29331C6.55707 0.58199 5.97558 0 5.26487 0C4.55415 0 3.97266 0.58199 3.97266 1.29331C3.98881 2.00463 4.55415 2.58662 5.26487 2.58662Z' fill='white')
          path(d='M19.1842 14.8559C18.6673 14.5164 17.9728 14.6619 17.6335 15.1792C17.2782 15.7127 16.6967 16.036 16.0667 16.036H14.9845C13.9508 16.036 13.127 15.1954 13.127 14.1769V10.9436C13.127 9.90896 13.9669 9.08448 14.9845 9.08448H16.0667C16.6967 9.08448 17.2782 9.40781 17.6335 9.9413C17.9728 10.4586 18.6673 10.6041 19.1842 10.2646C19.7011 9.92513 19.8465 9.22997 19.5073 8.71265C18.7481 7.54867 17.472 6.85352 16.0829 6.85352H15.0007C12.7393 6.85352 10.9141 8.69648 10.9141 10.9436V14.1769C10.9141 16.4402 12.7555 18.267 15.0007 18.267H16.0829C17.472 18.267 18.7481 17.5718 19.5073 16.4079C19.8465 15.8905 19.7011 15.1954 19.1842 14.8559Z' fill='white')
          path(d='M5.26575 5.90141C7.26867 5.90141 9.11007 4.97993 10.3054 3.37946C10.6769 2.8783 10.58 2.18314 10.0792 1.81132C9.5785 1.43949 8.88394 1.53649 8.51243 2.03765C7.75325 3.0723 6.55796 3.67045 5.26575 3.67045C3.97354 3.67045 2.7944 3.0723 2.01908 2.03765C1.64757 1.53649 0.953004 1.43949 0.452273 1.81132C0.145373 2.03765 0 2.39331 0 2.74897C0 2.76513 0 2.7813 0 2.79747V17.2179C0 17.8322 0.500731 18.3334 1.11453 18.3334H9.40082C10.0146 18.3334 10.5154 17.8322 10.5154 17.2179C10.5154 16.6036 10.0146 16.1024 9.40082 16.1024H2.24521V11.3333H7.05869C7.67249 11.3333 8.17322 10.8322 8.17322 10.2178C8.17322 9.60352 7.67249 9.10236 7.05869 9.10236H2.24521V5.12543C3.14976 5.62658 4.18353 5.90141 5.26575 5.90141Z' fill='white')
          path(d='M35.326 9.65247H34.6799C33.9208 9.65247 33.2262 9.84646 32.5962 10.186V7.9065C32.5962 7.29217 32.0955 6.79102 31.4817 6.79102C30.8679 6.79102 30.3672 7.29217 30.3672 7.9065V13.9689V16.9597V17.1698C30.3672 17.7842 30.8679 18.2853 31.4817 18.2853C31.514 18.2853 31.5463 18.2853 31.5786 18.2853C31.6109 18.2853 31.6432 18.2853 31.6756 18.2853H35.3099C37.6843 18.2853 39.6226 16.3453 39.6226 13.9689C39.6226 11.5924 37.7005 9.65247 35.326 9.65247ZM35.326 16.0382H32.5962V13.9527C32.5962 12.8049 33.5331 11.8673 34.6799 11.8673H35.326C36.4729 11.8673 37.4097 12.8049 37.4097 13.9527C37.4097 15.1005 36.4729 16.0382 35.326 16.0382Z' fill='white')
          path(d='M28.411 6.83789H21.3684C20.7546 6.83789 20.2539 7.33905 20.2539 7.95337C20.2539 8.56769 20.7546 9.06885 21.3684 9.06885H23.7752V17.152C23.7752 17.7664 24.2759 18.2675 24.8897 18.2675C25.5035 18.2675 26.0042 17.7664 26.0042 17.152V9.06885H28.411C29.0248 9.06885 29.5255 8.56769 29.5255 7.95337C29.5255 7.33905 29.0248 6.83789 28.411 6.83789Z' fill='white')
          path(d='M45.9836 15.7285C45.2729 15.7285 44.6914 16.3105 44.6914 17.0218C44.6914 17.7331 45.2729 18.3151 45.9836 18.3151C46.6943 18.3151 47.2758 17.7331 47.2758 17.0218C47.2758 16.3105 46.6943 15.7285 45.9836 15.7285Z' fill='white')
          path(d='M55.3708 2.60301C55.3708 2.58684 55.3708 2.57067 55.3708 2.55451C55.3708 2.53834 55.3708 2.52218 55.3547 2.50601C55.3547 2.48984 55.3547 2.47368 55.3385 2.44134C55.3385 2.42518 55.3385 2.40901 55.3224 2.39284C55.3224 2.37668 55.3062 2.36051 55.3062 2.32818C55.3062 2.31201 55.2901 2.29585 55.2901 2.27968C55.2901 2.26351 55.2739 2.24735 55.2739 2.23118C55.2739 2.21501 55.2577 2.19885 55.2577 2.18268C55.2577 2.16652 55.2416 2.15035 55.2416 2.13418C55.2254 2.11802 55.2254 2.10185 55.2093 2.08568C55.1931 2.06952 55.1931 2.05335 55.177 2.05335C55.1608 2.03718 55.1447 2.02102 55.1447 2.00485C55.1285 1.98869 55.1285 1.97252 55.1124 1.97252C55.0962 1.95635 55.0801 1.94019 55.0801 1.92402C55.0639 1.90785 55.0639 1.89169 55.0478 1.89169C55.0316 1.87552 55.0155 1.87552 55.0155 1.85935C54.9993 1.84319 54.9832 1.82702 54.967 1.82702L54.9508 1.81086L54.9347 1.79469C54.9185 1.77852 54.9024 1.76236 54.8862 1.76236C54.8701 1.74619 54.8539 1.74619 54.8378 1.73002C54.8216 1.71386 54.8055 1.71386 54.7893 1.69769C54.7732 1.69769 54.757 1.68152 54.7409 1.68152C54.7247 1.68152 54.7086 1.66536 54.6924 1.66536C54.6763 1.66536 54.6601 1.64919 54.644 1.64919C54.6278 1.64919 54.6116 1.63303 54.5955 1.63303C54.5793 1.63303 54.5632 1.61686 54.547 1.61686C54.5309 1.61686 54.5147 1.61686 54.4986 1.60069C54.4824 1.60069 54.4663 1.60069 54.434 1.58453C54.4178 1.58453 54.4017 1.58453 54.3855 1.58453C54.3694 1.58453 54.3371 1.58453 54.3209 1.58453C54.3047 1.58453 54.3047 1.58453 54.2886 1.58453H54.2724C54.2563 1.58453 54.2401 1.58453 54.2078 1.58453C54.1917 1.58453 54.1755 1.58453 54.1594 1.58453C54.1432 1.58453 54.1271 1.58453 54.1109 1.58453C54.0948 1.58453 54.0786 1.58453 54.0463 1.60069C54.0302 1.60069 54.014 1.60069 53.9978 1.61686C53.9817 1.61686 53.9494 1.63303 53.9332 1.63303C53.9171 1.63303 53.9009 1.64919 53.8848 1.64919C53.8686 1.64919 53.8525 1.66536 53.8363 1.66536C53.8202 1.66536 53.804 1.68152 53.7879 1.68152C53.7717 1.69769 53.7556 1.69769 53.7394 1.71386C53.7233 1.73002 53.7071 1.73002 53.6909 1.74619C53.6748 1.76236 53.6586 1.76236 53.6425 1.77852C53.6263 1.79469 53.6102 1.79469 53.594 1.81086C53.5779 1.82702 53.5617 1.82702 53.5617 1.84319C53.5456 1.85935 53.5294 1.87552 53.5133 1.87552C53.4971 1.89169 53.481 1.90785 53.481 1.90785C53.4648 1.92402 53.4648 1.94019 53.4487 1.94019C53.4325 1.95635 53.4164 1.97252 53.4164 1.98869L53.4002 2.00485L47.0845 10.2982V2.68384C47.0845 2.06952 46.5838 1.56836 45.97 1.56836C45.3562 1.56836 44.8555 2.06952 44.8555 2.68384V13.6123V13.6285C44.8555 13.6446 44.8555 13.677 44.8555 13.6931C44.8555 13.7093 44.8555 13.7255 44.8555 13.7416C44.8555 13.7578 44.8555 13.774 44.8716 13.7901C44.8716 13.8063 44.8716 13.8225 44.8878 13.8548C44.8878 13.871 44.8878 13.8871 44.9039 13.9033C44.9039 13.9195 44.9201 13.9356 44.9201 13.968C44.9201 13.9841 44.9362 14.0003 44.9362 14.0165C44.9362 14.0326 44.9524 14.0488 44.9524 14.065C44.9524 14.0811 44.9685 14.0973 44.9685 14.1135C44.9685 14.1296 44.9847 14.1458 44.9847 14.162C45.0008 14.1781 45.0008 14.1943 45.017 14.2105C45.0331 14.2266 45.0331 14.2428 45.0493 14.2428C45.0655 14.259 45.0816 14.2751 45.0816 14.2913C45.0978 14.3075 45.0978 14.3236 45.1139 14.3236C45.1301 14.3398 45.1462 14.356 45.1462 14.3721C45.1624 14.3883 45.1624 14.4045 45.1785 14.4045C45.1947 14.4206 45.2108 14.4206 45.2108 14.4368C45.227 14.453 45.2431 14.4691 45.2593 14.4691L45.2754 14.4853C45.2916 14.4853 45.2916 14.5015 45.3077 14.5015C45.3239 14.5176 45.3239 14.5176 45.34 14.5338C45.3562 14.55 45.3724 14.55 45.3885 14.5661C45.4047 14.5661 45.4047 14.5823 45.4208 14.5823C45.4531 14.5985 45.4854 14.6146 45.5016 14.6308C45.5339 14.647 45.5662 14.647 45.5985 14.6631C45.6146 14.6631 45.6146 14.6631 45.6308 14.6793C45.6469 14.6793 45.6793 14.6955 45.6954 14.6955C45.7116 14.6955 45.7116 14.6955 45.7277 14.6955C45.7439 14.6955 45.7762 14.7116 45.8085 14.7116C45.8246 14.7116 45.8246 14.7116 45.8408 14.7116C45.8731 14.7116 45.9054 14.7116 45.9377 14.7116C45.9862 14.7116 46.0185 14.7116 46.0508 14.7116C46.0669 14.7116 46.0669 14.7116 46.0831 14.7116C46.1154 14.7116 46.1477 14.6955 46.18 14.6955C46.1961 14.6955 46.1961 14.6955 46.2123 14.6793C46.2446 14.6793 46.2607 14.6631 46.2931 14.6631C46.3092 14.6631 46.3254 14.647 46.3254 14.647C46.3577 14.6308 46.3738 14.6308 46.4061 14.6146C46.4223 14.6146 46.4384 14.5985 46.4384 14.5985C46.4546 14.5823 46.4869 14.5823 46.503 14.5661C46.5192 14.5661 46.5353 14.55 46.5353 14.55C46.5515 14.5338 46.5838 14.5176 46.6 14.5015C46.6161 14.5015 46.6161 14.4853 46.6323 14.4853C46.6646 14.453 46.6969 14.4368 46.713 14.4045C46.7292 14.3883 46.7292 14.3883 46.7453 14.3721C46.7615 14.356 46.7776 14.3236 46.8099 14.3075C46.8099 14.3075 46.8099 14.2913 46.8261 14.2913L53.1095 5.99795V17.1851C53.1095 17.7994 53.6102 18.3006 54.224 18.3006C54.8378 18.3006 55.3385 17.7994 55.3385 17.1851V2.68384V2.66767C55.3708 2.63534 55.3708 2.61917 55.3708 2.60301Z' fill='white')
          path(d='M72.588 6.82281C72.5072 6.82281 72.4264 6.80664 72.3457 6.80664H72.3295H71.2473H71.2311C71.1504 6.80664 71.0696 6.80664 70.9889 6.80664C68.8406 6.93597 67.1445 8.71427 67.1445 10.8967V14.13C67.1445 16.3933 68.9859 18.2201 71.2311 18.2201H72.3134C73.7025 18.2201 74.9785 17.525 75.7377 16.361C76.0769 15.8436 75.9315 15.1485 75.4147 14.809C74.8978 14.4695 74.2032 14.615 73.864 15.1323C73.5087 15.6658 72.9272 15.9891 72.2972 15.9891H71.215C70.1812 15.9891 69.3574 15.1485 69.3574 14.13V13.4025H73.9448C75.3016 13.4025 76.4 12.3032 76.4 10.9452V10.8967C76.4323 8.73044 74.7363 6.95214 72.588 6.82281ZM74.2032 10.9452C74.2032 11.0746 74.1063 11.1716 73.9771 11.1716H69.3897V10.8967C69.3897 10.8159 69.3897 10.7189 69.4059 10.6381C69.422 10.6057 69.4221 10.5572 69.4382 10.5249C69.4867 10.2986 69.5674 10.0884 69.6966 9.89442C70.052 9.36093 70.6335 9.0376 71.2634 9.0376H72.3457C72.9756 9.0376 73.5571 9.36093 73.9125 9.89442C74.0417 10.0884 74.1225 10.2986 74.1709 10.5249C74.1871 10.5572 74.1871 10.6057 74.2032 10.6381C74.2194 10.7189 74.2194 10.8159 74.2194 10.8967V10.9452H74.2032Z' fill='white')
          path(d='M61.7665 1.56836H60.6843C59.2951 1.56836 58.0191 2.26351 57.2599 3.42749C56.9207 3.94482 57.0661 4.63997 57.583 4.97947C58.0999 5.31896 58.7944 5.17346 59.1336 4.65614C59.489 4.12265 60.0705 3.79932 60.7004 3.79932H61.7826C62.8164 3.79932 63.6402 4.63997 63.6402 5.65846V7.25893C63.0749 6.96793 62.4287 6.80627 61.7665 6.80627H60.6843C58.4229 6.80627 56.5977 8.64924 56.5977 10.8964V14.0811V14.1296C56.5977 16.2959 58.2937 18.0904 60.442 18.2197C60.5227 18.2197 60.6035 18.2197 60.6843 18.2197H60.7004H61.7826H61.7988C61.8796 18.2197 61.9603 18.2197 62.0411 18.2197C64.1894 18.0904 65.8854 16.3121 65.8854 14.1296V5.65846C65.8693 3.39516 64.0279 1.56836 61.7665 1.56836ZM58.8106 10.9125C58.8106 9.87788 59.6505 9.0534 60.6681 9.0534H61.7503C62.3803 9.0534 62.9618 9.37672 63.3171 9.91021C63.4464 10.1042 63.5271 10.3144 63.5756 10.5407C63.5917 10.6054 63.6079 10.6539 63.624 10.7024V14.1458C63.624 14.2266 63.624 14.3236 63.6079 14.4045C63.5917 14.4368 63.5917 14.4853 63.5756 14.5176C63.5271 14.744 63.4464 14.9541 63.3171 15.1481C63.3171 15.1643 63.301 15.1643 63.2848 15.1805C63.2687 15.1966 63.2525 15.229 63.2364 15.2451C63.2364 15.2613 63.2202 15.2613 63.2202 15.2775C63.2041 15.2936 63.1879 15.326 63.1718 15.3421C63.1718 15.3421 63.1718 15.3421 63.1556 15.3583C63.1395 15.3906 63.1072 15.4068 63.091 15.4391C63.0425 15.4876 62.9779 15.5361 62.9295 15.5846C62.9295 15.5846 62.9133 15.5846 62.9133 15.6008C62.5903 15.8594 62.1865 16.0049 61.7503 16.0049H60.6681C60.0382 16.0049 59.4567 15.6816 59.1175 15.1481C58.9882 14.9541 58.9075 14.744 58.859 14.5176C58.8429 14.4853 58.8429 14.4368 58.8267 14.4045C58.8106 14.3236 58.8106 14.2266 58.8106 14.1458V14.0973V10.9125Z' fill='white')
          path(d='M85.6258 6.80664C85.5935 6.80664 85.5612 6.80664 85.5289 6.80664C85.4966 6.80664 85.4643 6.80664 85.432 6.80664H81.7815C79.4071 6.80664 77.4688 8.74661 77.4688 11.1231C77.4688 12.4649 78.0825 13.6612 79.0517 14.4533L77.6626 16.5711C77.3234 17.0885 77.4688 17.7836 77.9856 18.1231C78.1795 18.2524 78.3894 18.3009 78.5994 18.3009C78.9548 18.3009 79.3101 18.1231 79.5363 17.7998L81.1354 15.3748C81.3615 15.4072 81.5715 15.4233 81.7976 15.4233H82.4438C83.2029 15.4233 83.8975 15.2293 84.5274 14.8898V17.1693C84.5274 17.7836 85.0282 18.2848 85.642 18.2848C86.2558 18.2848 86.7565 17.7836 86.7565 17.1693V11.1069V8.13228V7.92212C86.7403 7.3078 86.2396 6.80664 85.6258 6.80664ZM82.4276 13.2085H81.7815C80.6347 13.2085 79.6978 12.2709 79.6978 11.1231C79.6978 9.97525 80.6347 9.0376 81.7815 9.0376H84.5113V11.1231C84.5113 12.2709 83.5744 13.2085 82.4276 13.2085Z' fill='white')

  .bottom-right-panel
    button(
      v-if="!menuShow && !phoneHidden"
      type="button"
      @click="$refs.modal.open()"
      style="width: 30px; height: 30px; margin-bottom: 16px; display: block; background: transparent; outline: 0; border: 0; padding: 0; margin-left: auto"
    )
      img(src="@/assets/svg/callme.svg" style=" height: 100%; width: 100%;")
    a.phone.comagic_phone(
      v-if="!menuShow && !phoneHidden"
      :href="`tel://${phone.href}`"

      :class="{'phone--black-mode': phoneBlackMode}"
      style="width: 30px; height: 30px;"
      @click="$VKGoal('contact')"
    )

      .icon-bg(style="width: 30px; height: 30px;")
        svg(style="width: 14px; height: 14px;"): use(xlink:href="/static/sprite.svg#phone" )
  Menu
  .first-boot(v-if="firstBoot")
  Cookies(@openPol="openPrivatePolice")
  ModalCallback(ref="modal" theme="Заказать обратный звонок")
  transition(name="fade-025"): .hidden-menu(v-if="menuShow")
    .top-right-panel
      .icon-bg.icon-bg--close(@click="toggleMenu"): svg: use(xlink:href="/static/sprite.svg#close")
      a.phone.comagic_phone(
        :href="`tel://${phone.href}`"
        @mouseover="$store.commit('variables/phoneShow', true)"
        @mouseleave="$store.commit('variables/phoneShow', false)"
        @click="$VKGoal('contact')"
      )
        .phone__number {{ phone.text }}
        .icon-bg: svg: use(xlink:href="/static/sprite.svg#phone")
      button(
        type="button"
        @click="$refs.modal.open()"
        style="margin-top: 10px; display: block; background: transparent; outline: 0; border: 0; padding: 0; margin-left: auto"
      )
        img(src="@/assets/svg/callme.svg")
    .ellipses
      svg.ellipse.ellipse-1(xmlns="http://www.w3.org/2000/svg" width="1016" height="1016" viewBox="0 0 1016 1016")
        clipPath#yjkqa(xmlns="http://www.w3.org/2000/svg"): path(fill="#fff" d="M1016 508c0 280.561-227.439 508-508 508C227.439 1016 0 788.561 0 508 0 227.439 227.439 0 508 0c280.561 0 508 227.439 508 508z")
        path(fill="none" stroke-width="4" stroke-miterlimit="20" d="M1016 508c0 280.561-227.439 508-508 508C227.439 1016 0 788.561 0 508 0 227.439 227.439 0 508 0c280.561 0 508 227.439 508 508z" clip-path="url(#yjkqa)")
      svg.ellipse.ellipse-2(width="1108" height="766" viewBox="0 0 1108 766" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(d="M1107 0C1107 611.379 611.379 1107 0 1107" stroke="url(#paint0_linear)" stroke-opacity="0.3" stroke-width="2")
        defs: linearGradient#paint0_linear(x1="0" y1="-1107" x2="0" y2="1107" gradientUnits="userSpaceOnUse")
          stop(stop-color="#F6AC6D")
          stop(offset="1" stop-color="#764419")
      svg.ellipse.ellipse-3(xmlns="http://www.w3.org/2000/svg" width="522" height="522" viewBox="0 0 522 522")
        clipPath#udina: path(fill="#fff" d="M522 261c0 144.146-116.854 261-261 261C116.854 522 0 405.146 0 261 0 116.854 116.854 0 261 0c144.146 0 261 116.854 261 261z")
        path(fill="none" stroke-miterlimit="20" stroke-width="4" d="M522 261c0 144.146-116.854 261-261 261C116.854 522 0 405.146 0 261 0 116.854 116.854 0 261 0c144.146 0 261 116.854 261 261z" clip-path="url(#udina)")
      svg.ellipse.ellipse-4(xmlns="http://www.w3.org/2000/svg" width="659" height="659" viewBox="0 0 659 659")
        clipPath#ix7qa: path(fill="#fff" d="M659 329.5C659 511.478 511.478 659 329.5 659S0 511.478 0 329.5 147.522 0 329.5 0 659 147.522 659 329.5z")
        path(fill="none" stroke-miterlimit="20" stroke-width="4" d="M659 329.5C659 511.478 511.478 659 329.5 659S0 511.478 0 329.5 147.522 0 329.5 0 659 147.522 659 329.5z" clip-path="url(#ix7qa)")
    .container.h-100.menu: .hidden-menu__wrapper
      .first-menu: router-link(v-for="item in menu" :key="item.to" :to="item.to" exact) {{ item.title }}
      .second-menu: router-link(v-for="item in subMenu" :key="item.to" :to="item.to" exact) {{ item.title }}
</template>

<script>
import Menu from './components/Menu'
import Header from './components/Header'
// import ModalCallback from './components/ModalCallback.vue'
import ModalCallback from '@/components/ModalFull.vue'
import Cookies from '@/components/cookies'
import {mapGetters} from 'vuex'
import Vue from 'vue'
export default {
  data: () => ({
    noPadding: false,
    firstBoot: true,
    whv: ''
  }),
  components: { Menu, Header, ModalCallback,Cookies },
  computed: mapGetters({
    menu: 'menu/links',
    phone: 'settings/phone',
    subMenu: 'menu/subLinks',
    phoneShow: 'variables/phoneShow',
    phoneTextVisible: 'variables/phoneTextVisible',
    phoneHidden: 'variables/phoneHidden',
    phoneBlackMode: 'variables/phoneBlackMode',
    mobileTopLogoBgHide: 'variables/mobileTopLogoBgHide',
    mobileMenuContext: 'menu/mobileMenuContext',
    menuShow: 'variables/menuShow',
    privatePolice: 'agreePrivatePolice/privatePolice'
  }),
  mounted () {
    document.body.className = 'mobile-desktop'
    if (process.env.NODE_ENV === 'development') {
      this.whv = innerWidth + 'x' + innerHeight
      $(window).resize(() => {
        this.whv = innerWidth + 'x' + innerHeight
      })
    }
    const loaderHide = Vue.prototype.loaderHide
    Vue.prototype.loaderHide = () => {
      this.firstBoot = false
      this.mobileMenuContext.close()
      setTimeout(() => loaderHide(), 200)
    }
    $.fancybox.defaults.beforeShow = () => {
      this.mobileMenuContext.lock = true
    }
    $.fancybox.defaults.beforeClose = () => {
      this.mobileMenuContext.lock = false
    }
    $.fancybox.defaults.thumbs.autoStart = true
    $.fancybox.defaults.thumbs.axis = 'x'
  },
  methods: {
    openPrivatePolice () {
      $.fancybox.open(`<div class="container">${this.privatePolice}</div>`)
    }
  }
}
</script>

<style lang="stylus">
.fancybox-thumbs
  width auto
  left 0
  bottom 0
  top auto
  right  0
  height 95px
  box-sizing border-box
  padding 10px 10px 5px 10px
  background rgba(0, 0, 0, .3)
.fancybox-show-thumbs .fancybox-inner
  right 0
  bottom 95px
</style>
<style scoped lang="stylus">
.width-height-view
  color #000
  z-index 9999
  line-height 1
  background #fff
  fixed left 0 top 0
#app
  user-select none
  padding-top 90px
  &.no-padding
    padding-top 0
.footer
  z-index 1
  position relative
  padding 20px 20px 15px
  background-color #151b26
  display grid
  gap 34px
  font-family 'TT Commons'
  &__left-top
    margin-bottom 22px
  &__left-bottom
    display grid
    gap 15px
  &__right
    display flex
    justify-content space-between
    align-items center
  &__private-police
    line-height 1
    margin-top 5px
    cursor pointer
    width fit-content
    font-size rem(12px)
    border-bottom 1px dashed
    color rgba(255, 255, 255, .7)
  &__jsi svg
    fill #fff
    size 221px 32px
    margin-bottom 10px
  &__desc
    color #b9b9b9
    font-size 11px
    line-height 1.2
  &__bottom
    display flex
    align-items center
    justify-content space-between
  &__socs
    display flex
    align-items center
  &__soc
    margin-right 6px
    svg
      size 22px
      fill #b8babd
  .yesidea
    color #fff
    font-size 7.33px
    line-height 120%
    letter-spacing -0.02em
    display flex
    font-family 'TT Commons'
    white-space nowrap
    align-items center

    @media (min-width: 1440px)
      font-size 10px

    &:hover
      color #fff
      text-decoration none
    span
      padding-right 7.33px
      margin-right 7.33px
      border-right 1px solid #FFFFFF33
      foont-family 'TT Commons'
      @media (min-width: 1440px)
        padding-right 16px
        margin-right 16px
    svg
      fill #fff
      size 86px 18px
>>>
  .icon-border
    border-width 2px
  .second-title
    color #fff
    font-size 14px
    font-weight 400
    text-align center
    margin-bottom 15px
    line-height 20.58px
    text-transform uppercase
    font-family 'Heading Pro Wide'
  .event-button
    height 41px
    display flex
    margin 0 auto
    line-height 1
    color #1f252f
    cursor pointer
    font-weight 700
    padding 0 12px 0
    user-select none
    width fit-content
    align-items center
    border-radius 62px
    letter-spacing 1px
    font-size rem(10px)
    border 3px solid #f6ac6d
    text-transform uppercase
    background-color #f6ac6d
    font-family 'Heading Pro Wide'
    transition background-color .15s ease-in-out, color .15s ease-in-out
    &:hover
      color #fff
      text-decoration none
      background-color transparent
    svg
      fill #1F252F
      size 30px 9px
      margin-right 9px
      transition fill .15s ease-in-out
    &:hover svg
      fill #fff
  .smooth-scrollbar
    overflow visible!important
  .scrollbar-track-x
    top -35px
    height 1px
    bottom auto
  .scrollbar-thumb-x
    top -2px
    height 3px
</style>
