<template>
  <div class="c-table-uniform-container mt-30">
    <table class="c-table uniform">
      <thead>
        <tr>
          <th class="mini">
            <div class="control-group">
              <label class="control control-checkbox">
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
            </div>
          </th>
          <th>Nome</th>
          <th>Status</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th class="mini"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in listClient" :key="index">
          <td>
            <div class="control-group">
              <label class="control control-checkbox">
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
            </div>
          </td>
          <td>{{client.name}}</td>
          <td class="mini">
            <div
              class="o-button-radius-color"
              v-bind:class="{disabled:client.disabled}"
            >{{client.function}}</div>
          </td>
          <td>{{client.phone}}</td>
          <td>{{client.email}}</td>
          <td>
            <img src="@/assets/img/ic-more-vert.svg" alt class="pointer" />
          </td>
        </tr>
        <tr>
          <td colspan="6">
            <div class="c-container-flex">
              <p class="o-text steel">Itens por página:</p>
              <div class="c-container-flex mr-10">
                <p class="o-text bold ml-10">{{pageSize}}</p>
                <div class="o-dropdown">
                  <img src="@/assets/img/ic-arrow-drop-down_silver.svg" class="pointer" alt />
                  <div class="o-dropdown-content">
                    <p @click="pageSize=10">10</p>
                    <p @click="pageSize=20">20</p>
                    <p @click="pageSize=50">50</p>
                  </div>
                </div>
              </div>
              <p class="o-text steel">1-{{pageSize}} de 3.456</p>
              <div class="c-container-flex">
                <img src="@/assets/img/ic-chevron-right.svg" alt />
                <img src="@/assets/img/ic-chevron-left.svg" alt />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
const Chance = require("chance");
var chance = new Chance();
export default {
  name: "Table",
  data() {
    return { pageSize: 10 };
  },
  computed: {
    listClient() {
      let list = [];
      for (var i = 0; i < this.pageSize; i++) {
        list.push({
          phone: chance.phone({ country: "br" }),
          email: chance.email(),
          name: chance.name(),
          disabled: i % 6 ? false : true,
          function: i % 6 ? "Client" : "Lead"
        });
      }
      return list;
    }
  }
};
</script>