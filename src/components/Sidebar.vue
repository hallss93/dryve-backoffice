<template>
  <div class="c-sidebar">
    <ul>
      <li>
        <img src="@/assets/img/ic-home.svg" alt />
      </li>
      <li>
        <img src="@/assets/img/ic-person.svg" alt />
      </li>
      <li>
        <img src="@/assets/img/ic-directions-car.svg" alt />
      </li>
      <li>
        <img src="@/assets/img/ic-vector-triangle.svg" alt />
      </li>
      <li>
        <img src="@/assets/img/ic-account-balance-wallet.svg" alt />
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
