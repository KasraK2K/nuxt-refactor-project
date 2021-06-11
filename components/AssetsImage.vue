<template>
  <div :class="divClass">
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
    <p v-if="caption" class="text-center font-weight-thin font-italic">
      {{ caption }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AssetsImage",

  props: {
    path: { type: String, required: true },
    classProps: { type: String, default: "" },
    divClass: { type: String, default: "" },
    widthProps: { type: String, default: "" },
    maxWidthProps: { type: String, default: "" },
    heightProps: { type: String, default: "" },
    maxHeightProps: { type: String, default: "" },
    containProps: { type: Boolean, default: false },
    styleProps: { type: String, default: "" },
    caption: { type: String, default: "" },
  },

  computed: {
    assetsImage() {
      return require(`~/assets/images/${this.path}`);
    },
  },
});
</script>
