<template>
  <div class="home">
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
    <div class="c-container-flex justify-content-space-between mb-30">
      <div class="c-container-flex th3">
        <last-updates />
      </div>
      <div class="c-container-flex th1 inline justify-content-flex-start">
        <div class="c-card no-padding align-items-flex-start mt-30 width-100">
          <div class="pt-15 pb-15 pl-20 pr-20 width-100">
            <p>Top intenções de compra</p>
            <div class="mt-30">
              <table class="c-table">
                <tbody>
                  <tr class="c-table__item">
                    <td>
                      <img src="@/assets/img/hyundai.jpg" alt width="36" height="36" class="mb-15" />
                    </td>
                    <td>
                      <p class="o-text semi-bold mb-15">HB20</p>
                    </td>
                    <td>
                      <p class="o-text semi-bold mb-15">197</p>
                    </td>
                  </tr>
                  <tr class="c-table__item">
                    <td>
                      <img
                        src="@/assets/img/chevrolet.jpg"
                        alt
                        width="36"
                        height="36"
                        class="mb-15 mt-15"
                      />
                    </td>
                    <td>
                      <p class="o-text semi-bold mb-15 mt-15">Onix</p>
                    </td>
                    <td>
                      <p class="o-text semi-bold mb-15 mt-15">183</p>
                    </td>
                  </tr>
                  <tr class="c-table__item">
                    <td>
                      <img
                        src="@/assets/img/jeep.jpg"
                        alt
                        width="36"
                        height="36"
                        class="mb-15 mt-15"
                      />
                    </td>
                    <td>
                      <p class="o-text semi-bold mb-15 mt-15">Renegade</p>
                    </td>
                    <td>
                      <p class="o-text semi-bold mb-15 mt-15">125</p>
                    </td>
                  </tr>
                  <tr class="c-table__item">
                    <td>
                      <img
                        src="@/assets/img/volks.jpg"
                        alt
                        width="36"
                        height="36"
                        class="mb-15 mt-15"
                      />
                    </td>
                    <td>
                      <p class="o-text semi-bold mb-15 mt-15">T-Cross</p>
                    </td>
                    <td>
                      <p class="o-text semi-bold mb-15 mt-15">109</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="@/assets/img/nissan.jpg" alt width="36" height="36" class="mt-15" />
                    </td>
                    <td>
                      <p class="o-text semi-bold mt-15">Kicks</p>
                    </td>
                    <td>
                      <p class="o-text semi-bold mt-15">86</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="c-card no-padding align-items-flex-start mt-30 width-100">
          <div class="pt-15 pb-15 pl-20 pr-20 width-100">
            <p>Top intenções de compra</p>
            <div class="mt-30">
              <canvas id="myChart" width="auto" height="auto"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-divider"></div>
    <div class="c-container-flex justify-content-space-between">
      <p class="o-text brownish-grey">2020 © Dryve Tecnologia Ltda.</p>
      <p class="o-text slate-grey small">Versão 1.0.1</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleCard from "@/components/Cards/SimpleCard.vue";
import LastUpdates from "@/components/LastUpdates/index.vue";

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
    SimpleCard,
    LastUpdates
  },
  async mounted() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Na média", "Acima da média", "Abaixo da média"],
        datasets: [
          {
            label: "# of Votes",
            data: [55, 25, 15],
            backgroundColor: ["#1070ca", "#ec4c47", "#f7d154"],
            borderColor: ["#1070ca", "#ec4c47", "#f7d154"],
            borderWidth: 1
          }
        ]
      },
      options: {
        cutoutPercentage: 85,
        legend: {
          display: true,
          position: "right",
          labels: {
            usePointStyle: true
          }
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              display: false
            }
          ]
        }
      }
    });
  }
};
</script>
