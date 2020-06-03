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
        <div class="c-container-flex th1">
          <div class="c-card no-padding mt-30 width-100">
            <p>kjk</p>
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
