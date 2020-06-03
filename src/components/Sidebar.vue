<template>
  <div class="c-sidebar">
    <ul>
      <li class="active">
        <img src="@/assets/img/ic-home.svg" alt />
        <p class="text">Início</p>
      </li>
      <li>
        <img src="@/assets/img/ic-person.svg" alt />
        <p class="text">Clientes</p>
      </li>
      <li>
        <img src="@/assets/img/ic-directions-car.svg" alt />
        <p class="text">Veículos</p>
      </li>
      <li>
        <img src="@/assets/img/ic-vector-triangle.svg" alt />
        <p class="text">Triangulação</p>
      </li>
      <li class="disabled">
        <img src="@/assets/img/ic-account-balance-wallet.svg" alt />
        <p class="text">Financeiro</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
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
a {
  color: #42b983;
}

.c-sidebar {
}
</style>
