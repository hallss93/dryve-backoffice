<template>
  <div
    class="c-card c-container-flex align-items-center justify-content-space-between medium-with-space"
  >
    <div>
      <p class="o-text title uppercase">{{title}}</p>
      <p class="o-text xxl mt-20">{{value}}</p>
      <p class="o-text title mt-20">
        <img v-if="up" :src="'@/assets/img/ic-arrow-drop-up.svg'" alt />
        <img v-else :src="'@/assets/img/ic-arrow-drop-down.svg'" alt />
        <span class="o-text small mr-5" v-bind:class="{violet:up, red:!up}">36%</span> desde ontem
      </p>
    </div>
    <div>
      <div class="c-avatar-circle">
        <img :src="icon" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    up: {
      type: Boolean,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    percentage: {
      type: String,
      default: ""
    },
    timeString: {
      type: String,
      default: ""
    }
  }
};
</script>