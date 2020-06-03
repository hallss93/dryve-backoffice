<template>
  <div class="c-card no-padding mt-30 width-100">
    <div class="c-container-flex inline flex-grow">
      <div class="pt-15 pb-15 pl-20 pr-20 c-container-flex justify-content-space-between">
        <p class="o-text semi-bold">Últimas avaliações</p>
        <p class="o-text semi-bold">
          Hoje
          <img src="@/assets/img/ic-arrow-drop-down_silver.svg" alt />
        </p>
      </div>
      <div>
        <table class="c-table">
          <tbody>
            <tr class="c-table__item">
              <td>
                <p class="o-text uppercase p-20">
                  <span class="o-text disabled">Dados do Veículo</span>
                </p>
              </td>
              <td>
                <p class="o-text uppercase p-20">
                  <span class="o-text disabled">Valor</span>
                </p>
              </td>
              <td>
                <p class="o-text uppercase p-20">
                  <span class="o-text disabled">Status</span>
                </p>
              </td>
            </tr>
            <tr v-for="(item, index) in 10" :key="index" class="c-table__item">
              <td class="p-20">
                <div class="c-container-flex">
                  <img
                    src="@/assets/img/profile.jpeg"
                    width="80"
                    height="60"
                    alt
                    class="o-img classic"
                  />
                  <div class="ml-10">
                    <p class="o-text bold uppercase dark_blue_grey small">Jeep Compass</p>
                    <p class="o-text uppercase steel smaller">GDL8019</p>
                    <p class="o-text uppercase steel smaller">2018 - Diesel</p>
                    <p class="o-text uppercase steel smaller">Automático - 70.972 km</p>
                  </div>
                </div>
              </td>
              <td class="p-20">
                <p class="o-text uppercase steel smaller">Anúncio</p>
                <p class="o-text bold uppercase dark_blue_grey small">R$ 115.560</p>
                <p class="o-text uppercase steel smaller">MÍNIMO ACEITO</p>
                <p class="o-text uppercase steel smaller">R$ 115.560</p>
              </td>
              <td class="p-20">
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