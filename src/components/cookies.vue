<template>
<div id="cookies-popup" >
        <div class="cookies-content">

            <div>

                <p>Мы используем файлы cookie</p>
                <div>
                  Они нужны, чтобы обеспечить вам максимальное удобство на нашем веб-сайте. Вы можете запретить передачу этих данных в настройках вашего браузера. Продолжая вы, соглашаетесь с нашей
                  <div class="cookies__link" @click="$emit('openPol')">Политикой конфиденциальности</div>
                  </div>
            </div>
          <button id="accept-cookies">Принять</button>
        </div>
    </div>
</template>
<script >
export default {
  mounted() {
    const cookiesPopup = document.getElementById('cookies-popup');
      const acceptCookiesButton = document.getElementById('accept-cookies');

      // Check if cookies have already been accepted
      if (!localStorage.getItem('cookiesAccepted')) {
        cookiesPopup.style.display = 'block'; // Show the popup
      }

      // Handle "Accept" button click
      acceptCookiesButton.onclick = function() {
        localStorage.setItem('cookiesAccepted', true); // Set flag in localStorage
        cookiesPopup.style.display = 'none'; // Hide the popup
      };
  },
}
</script>
<style scoped>
        #cookies-popup {
      display: none; /* Hidden by default */
      position: fixed;
      bottom: 20px;
      left: 50%;
      background-color: rgb(207, 225, 235);
        transform: translateX(-50%);
      padding: 15px;
      border-radius: 5px;
      z-index: 10000; /* Ensure it's above other content */
          max-width: 90vw;
        align-content: start;
    }
    #cookies-popup p{
        font-weight: 700;
        margin-bottom: 16px;
    }
    #cookies-popup div{
        font-weight: 400;
        font-size: 12px;
    }
    #cookies-popup a {
        color: rgb(90, 130, 161);
    }
    #cookies-popup button {
      background-color: rgb(52, 100, 128);
      color: white;
      border: none;
      padding: 8px 15px;
      cursor: pointer;
      margin-left: 10px;
      height: 50px;
        border-radius: 80px;

    min-width: 156px;
    }
    .cookies-content {
        display: grid;
        gap: 8px;

    }
    @media screen and (min-width: 1024px) {
        .cookies-content {
            display: grid;
            grid-template-columns: 1fr auto;
        }

    }
    .cookies__link {
      text-decoration: underline;
    }
    </style>
