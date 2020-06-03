<template>
  <div class="home">
    <Sidebar msg="Welcome to Your Vue.js App" />
    <Navbar />
    <div class="c-container body">
      <div class="c-container-flex justify-content-space-between">
        <simple-card
          title="Avaliações Hoje"
          value="29"
          :up="true"
          :icon="car_blue"
          percentage="36"
          timeString="desde ontem"
        />
        <simple-card
          title="Carros Publicados Hoje"
          value="397"
          :up="true"
          :icon="devices"
          percentage="4"
          timeString="este mês"
        />
        <simple-card
          title="Ticket Médio do Estoque"
          value="R$ 42.567"
          :up="false"
          :icon="money"
          percentage="4"
          timeString="este mês"
        />
      </div>
      <div class="c-container-flex justify-content-space-between">
        <div class="c-container-flex th3">
          <last-updates />
        </div>
        <div class="c-container-flex th1 inline justify-content-flex-start">
          <div class="c-card no-padding align-items-flex-start mt-30 width-100">
            <div class="pt-15 pb-15 pl-20 pr-20 width-100">
              <p>Top intenções de compra</p>
              <div class="mt-30">
                <table class="c-table">
                  <tbody>
                    <tr class="c-table__item">
                      <td>
                        <img
                          src="@/assets/img/hyundai.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mb-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15">HB20</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15">197</p>
                      </td>
                    </tr>
                    <tr class="c-table__item">
                      <td>
                        <img
                          src="@/assets/img/chevrolet.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mb-15 mt-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">Onix</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">183</p>
                      </td>
                    </tr>
                    <tr class="c-table__item">
                      <td>
                        <img
                          src="@/assets/img/jeep.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mb-15 mt-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">Renegade</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">125</p>
                      </td>
                    </tr>
                    <tr class="c-table__item">
                      <td>
                        <img
                          src="@/assets/img/volks.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mb-15 mt-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">T-Cross</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">109</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="@/assets/img/nissan.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mt-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mt-15">Kicks</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mt-15">86</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="c-card no-padding align-items-flex-start mt-30 width-100">
            <div class="pt-15 pb-15 pl-20 pr-20 width-100">
              <p>Top intenções de compra</p>
              <div class="mt-30">
                <table class="c-table">
                  <tbody>
                    <tr class="c-table__item">
                      <td>
                        <img
                          src="@/assets/img/hyundai.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mb-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15">HB20</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15">197</p>
                      </td>
                    </tr>
                    <tr class="c-table__item">
                      <td>
                        <img
                          src="@/assets/img/chevrolet.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mb-15 mt-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">Onix</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">183</p>
                      </td>
                    </tr>
                    <tr class="c-table__item">
                      <td>
                        <img
                          src="@/assets/img/jeep.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mb-15 mt-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">Renegade</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">125</p>
                      </td>
                    </tr>
                    <tr class="c-table__item">
                      <td>
                        <img
                          src="@/assets/img/volks.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mb-15 mt-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">T-Cross</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mb-15 mt-15">109</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="@/assets/img/nissan.jpg"
                          alt
                          width="36"
                          height="36"
                          class="mt-15"
                        />
                      </td>
                      <td>
                        <p class="o-text semi-bold mt-15">Kicks</p>
                      </td>
                      <td>
                        <p class="o-text semi-bold mt-15">86</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
import SimpleCard from "@/components/Cards/SimpleCard.vue";
import LastUpdates from "@/components/LastUpdates/index.vue";
import Navbar from "@/components/Navbar/index.vue";

export default {
  name: "Home",
  computed: {
    car_blue() {
      return require("@/assets/img/ic-directions-car_blue.svg");
    },
    devices() {
      return require("@/assets/img/ic-important-devices.svg");
    },
    money() {
      return require("@/assets/img/ic-attach-money.svg");
    }
  },
  components: {
    Sidebar,
    SimpleCard,
    LastUpdates,
    Navbar
  },
  created() {
    setTimeout(() => {
      document.querySelector(".c-navbar").style.top = "0";
      setTimeout(() => {
        document.querySelector(".c-sidebar").style.left = "0";
        document
          .querySelector("#app > div > div.c-container.body")
          .classList.add("expand");
      }, 1000);
    }, 200);
  }
};
</script>
