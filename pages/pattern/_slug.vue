<template>
  <article>
    <nuxt-content :document="pattern" />
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  asyncData: async ({ app, params }) => {
    const pattern = await app
      .$content(`pattern/${params.folder}`, params.slug)
      .fetch();
    return { pattern };
  },
});
</script>