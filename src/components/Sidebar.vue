<template>
  <div class="c-sidebar">
    <div class="c-container-flex mt-45">
      <div class="c-avatar">
        <img class="c-avatar__img" src="@/assets/img/profile.jpeg" alt />
      </div>
      <div class="c-container-flex inline expand min-width-200">
        <p class="o-text">Hallison Melo</p>
        <p class="o-text pointer">
          <img src="@/assets/img/ic-power-settings-new.svg" alt />
          <span class="o-text disabled" @click="darkMode">Sair</span>
        </p>
      </div>
    </div>
    <ul class="o-list">
      <router-link :to="{name:'Home'}">
        <li v-bind:class="{active:routeName=='Home'}">
          <img src="@/assets/img/ic-home_blue.svg" alt class="o-img" v-if="routeName=='Home'" />
          <img src="@/assets/img/ic-home.svg" alt class="o-img" v-else />
          <p class="o-text text">Início</p>
        </li>
      </router-link>
      <router-link :to="{name:'Clients'}">
        <li v-bind:class="{active:routeName=='Clients'}">
          <img src="@/assets/img/ic-person_blue.svg" alt class="o-img" v-if="routeName=='Clients'" />
          <img src="@/assets/img/ic-person.svg" alt class="o-img" v-else />
          <p class="o-text text">Clientes</p>
        </li>
      </router-link>
      <li>
        <img src="@/assets/img/ic-directions-car.svg" alt class="o-img" />
        <p class="o-text text">Veículos</p>
      </li>
      <li>
        <img src="@/assets/img/ic-vector-triangle.svg" alt class="o-img" />
        <p class="o-text text">Triangulação</p>
      </li>
      <li class="disabled">
        <img src="@/assets/img/ic-account-balance-wallet.svg" alt class="o-img" />
        <p class="o-text text">Financeiro</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    routeName: String
  },
  methods: {
    darkMode() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a:-webkit-any-link {
  cursor: pointer;
  text-decoration: none;
}
.c-sidebar {
}
</style>
