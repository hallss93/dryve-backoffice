<template>
  <div class="home">
    <Sidebar msg="Welcome to Your Vue.js App" />
    <Navbar />
    <div class="c-container body">
      <router-view/>
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
  name: "App",
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
          .querySelector("div.c-container.body")
          .classList.add("expand");
      }, 1000);
    }, 200);
  }
};
</script>
