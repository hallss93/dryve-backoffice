<template>
  <div class="c-card no-padding mt-30 width-100 align-items-flex-start c-table-uniform-container">
    <div class="c-container-flex inline flex-grow">
      <div class="pt-15 pb-15 pl-20 pr-20 c-container-flex justify-content-space-between">
        <p class="o-text semi-bold">Últimas avaliações</p>
        <p class="o-text semi-bold">
          Hoje
          <img src="@/assets/img/ic-arrow-drop-down_silver.svg" alt />
        </p>
      </div>
      <div>
        <table class="c-table uniform">
          <tbody>
            <tr class="c-table__item">
              <td>
                <p class="o-text uppercase p-r20">
                  <span class="o-text disabled">Dados do Veículo</span>
                </p>
              </td>
              <td>
                <p class="o-text uppercase p-r20">
                  <span class="o-text disabled">Valor</span>
                </p>
              </td>
              <td>
                <p class="o-text uppercase p-r20">
                  <span class="o-text disabled">Status</span>
                </p>
              </td>
            </tr>
            <tr v-for="(item, index) in listCars" :key="index" class="c-table__item">
              <td class="p-2f0">
                <div class="c-container-flex">
                  <img :src="item.image" width="80" height="60" alt class="o-img classic" />
                  <div class="ml-10">
                    <p class="o-text bold uppercase dark_blue_grey small">{{item.name}}</p>
                    <p class="o-text uppercase steel smaller">GDL8019</p>
                    <p
                      class="o-text uppercase steel smaller"
                    >{{item.model_year}} - {{item.fuel_type}}</p>
                    <p
                      class="o-text uppercase steel smaller"
                    >{{item.transmission_type}} - {{formatNumber(item.mileage)}} km</p>
                  </div>
                </div>
              </td>
              <td class="p-2f0">
                <p class="o-text uppercase steel smaller">Anúncio</p>
                <p
                  class="o-text bold uppercase dark_blue_grey small"
                >R$ {{formatNumber(item.ad_selling_price)}}</p>
                <p class="o-text uppercase steel smaller">MÍNIMO ACEITO</p>
                <p
                  class="o-text uppercase steel smaller"
                >R$ {{formatNumber(item.ad_selling_price-4500)}}</p>
              </td>
              <td class="p-2f0">
                <div class="c-container-flex inline align-items-center">
                  <p class="c-badge o-text steel small">Aguardando precificação</p>
                  <p class="o-text uppercase steel smaller mt-10">18/04/2020 às 14:35</p>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <div class="p-20 c-container-flex justify-content-flex-end">
                  <p class="o-text bright-blue pointer">
                    Ver tudo
                    <img src="@/assets/img/ic-arrow-drop-next_blue.svg" alt />
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import cars from "@/api/cars";
export default {
  name: "LastUpdates",
  data() {
    return {
      listCars: []
    };
  },
  methods: {
    async getAllCars() {
      const { data, status } = await cars.getAllCars();
      this.listCars = data;
    },
    formatNumber(num) {
      return new Intl.NumberFormat("de-DE").format(num);
    }
  },
  created() {
    this.getAllCars();
  }
};
</script>