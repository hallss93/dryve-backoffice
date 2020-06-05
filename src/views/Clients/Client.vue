<template>
  <div>
    <div class="c-container-flex justify-content-space-between">
      <p class="o-text gigant">Adicionar cliente</p>
    </div>
    <div class="c-tabs">
      <div class="c-tabs_list">
        <button
          class="c-tabs__button"
          v-bind:class="{active:activeTab=='DataClient'}"
          @click="openTab('DataClient')"
        >Dados do Cliente</button>
        <button
          class="c-tabs__button"
          v-bind:class="{active:activeTab=='DataVehicle'}"
          @click="openTab('DataVehicle')"
        >Dados do Veíuclo</button>
        <button
          class="c-tabs__button"
          v-bind:class="{active:activeTab=='DataIntent'}"
          @click="openTab('DataIntent')"
        >Itenção de compra</button>
      </div>

      <div id="DataClient" class="c-tabs__tab">
        <div class="c-container-flex inline">
          <div class="c-container-flex inline half">
            <div class="c-container-flex mb-15">
              <div class="c-container-flex half">
                <input type="text" class="o-input" placeholder="Nome" />
              </div>
              <div class="c-container-flex half pl-10">
                <input type="text" class="o-input" placeholder="Sobrenome" />
              </div>
            </div>
            <div class="c-container-flex mb-15">
              <input type="text" class="o-input" placeholder="E-mail" />
            </div>
            <div class="c-container-flex mb-15">
              <div class="c-container-flex half">
                <input
                  type="text"
                  class="o-input"
                  placeholder="Telefone"
                  v-mask="'(##) #####-####'"
                  v-model="telefone"
                />
              </div>
              <div class="c-container-flex half">
                <span class="o-text bright-blue ml-15 pointer">+ adicionar outro</span>
              </div>
            </div>
            <div class="c-container-flex mb-15">
              <div class="c-container-flex half">
                <input
                  type="text"
                  class="o-input"
                  placeholder="CEP"
                  v-mask="'#####-###'"
                  v-model="cep"
                />
              </div>
            </div>
            <div class="c-container-flex mb-15">
              <input type="text" class="o-input" placeholder="Endereço" />
            </div>
            <div class="c-container-flex mb-15">
              <div class="c-container-flex half">
                <input type="text" class="o-input" placeholder="Número" />
              </div>
              <div class="c-container-flex half pl-10">
                <input type="text" class="o-input" placeholder="Complemento" />
              </div>
            </div>
            <div class="c-container-flex mb-15">
              <input type="text" class="o-input" placeholder="Bairrro" />
            </div>
            <div class="c-container-flex mb-15">
              <div class="c-container-flex half">
                <input type="text" class="o-input" placeholder="Cidade" />
              </div>
              <div class="c-container-flex half pl-10">
                <input type="text" class="o-input" placeholder="Estado" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="DataVehicle" class="c-tabs__tab" style="display:none">
        <p class="o-text uppercase">Dados do Veículo</p>
      </div>

      <div id="DataIntent" class="c-tabs__tab" style="display:none">
        <p class="o-text uppercase">Itenção de compra</p>
      </div>
    </div>
    <div class="c-container-footer">
      <div class="c-container-flex">
        <div class="o-button simple bk-violet" @click="addClient">
          <p class="o-text uppercase semi-bold white-two">Adicionar</p>
        </div>
        <router-link :to="{ name: 'Clients'}">
          <div class="o-button clean ml-50">
            <p class="o-text uppercase semi-bold violet">Cancelar</p>
          </div>
        </router-link>
      </div>
    </div>
    <FooterDryve />
  </div>
</template>
<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import FooterDryve from "@/components/FooterDryve.vue";
export default {
  name: "Client",
  data() {
    return {
      telefone: "",
      cep: "",
      activeTab: "DataClient"
    };
  },
  methods: {
    addClient() {
      Swal.fire({
        title: "Sucesso",
        text: "Cliente adicionado com sucesso!",
        icon: "success",
        confirmButtonText: "Ok"
      });
    },
    openTab(tabName) {
      this.activeTab = tabName;
      var i;
      var x = document.getElementsByClassName("c-tabs__tab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "block";
    }
  },
  components: { FooterDryve }
};
</script>