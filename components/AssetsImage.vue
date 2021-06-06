<template>
  <v-img
    :src="assetsImage"
    :class="classProps"
    :width="widthProps"
    :max-width="maxWidthProps"
    :height="heightProps"
    :max-height="maxHeightProps"
    :contain="containProps"
    :style="styleProps"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AssetsImage",

  props: {
    path: { type: String, required: true },
    classProps: { type: String, default: "" },
    widthProps: { type: String, default: "" },
    maxWidthProps: { type: String, default: "" },
    heightProps: { type: String, default: "" },
    maxHeightProps: { type: String, default: "" },
    containProps: { type: Boolean, default: false },
    styleProps: { type: String, default: "" },
  },

  computed: {
    assetsImage() {
      return require(`~/assets/images/${this.path}`);
    },
  },
});
</script>
