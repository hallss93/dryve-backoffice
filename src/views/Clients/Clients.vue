<template>
  <div>
    <div class="c-container-flex justify-content-space-between">
      <div class="c-container-flex">
        <div class="o-buttton-filter">
          <img src="@/assets/img/filter.svg" alt width="18" />
          <p class="o-text violet uppercase">Filtrar</p>
        </div>
        <div>
          <div class="o-container-input ml-10">
            <input type="text" placeholder="Buscar por nome..." />
            <img src="@/assets/img/ic-search.svg" class="input_img" />
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'Client', params: { id: 10 } }">
          <div class="o-button bk-violet pointer">
            <img src="@/assets/img/add.svg" alt width="15" class="mr-5" />
            <p class="o-text uppercase white-two">Adicionar</p>
          </div>
        </router-link>
      </div>
    </div>
    <TableItens />
    <FooterDryve />
  </div>
</template>
<script>
import FooterDryve from "@/components/FooterDryve.vue";
import TableItens from "@/components/Table/index.vue";
export default {
  name: "Clients",
  components: {
    TableItens,
    FooterDryve
  }
};
</script>