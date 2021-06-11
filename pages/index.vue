<template>
  <v-container fluid>
    <p>
      <strong class="font-weight-black">{{ appName }}</strong> در کشف و یادگیری
      همه چیزهایی که باید در مورد بازسازی ، الگوهای طراحی ، اصول SOLID و سایر
      مباحث برنامه نویسی هوشمند بدانید کمک می‌کند و این راه را برای شما آسان می
      کند.
    </p>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data(): Record<string, unknown> {
    return {
      appName: "نام برنامه",
    };
  },
});
</script>

<style lang="scss">
pre {
  direction: ltr;
  text-align: left;
}
</style>
