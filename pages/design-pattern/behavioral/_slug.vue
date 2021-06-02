<template>
  <div>
    <v-breadcrumbs :nuxt="true" :items="breadcrumbs"></v-breadcrumbs>

    <article class="mt-6">
      <nuxt-content :document="pattern" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  asyncData: async ({ app, params }) => {
    const pattern = await app
      .$content("design-pattern/behavioral", params.slug)
      .fetch();
    return { pattern };
  },
  data: () => ({
    breadcrumbs: [
      {
        text: "دیزاین‌پترن",
        exact: true,
        to: "/design-pattern",
      },
      {
        text: "رفتاری",
        exact: true,
        to: "/design-pattern/behavioral",
      },
    ],
    pattern: { title: "", slug: "" },
  }),
  created() {
    this.breadcrumbs.push({
      text: this.pattern.title,
      exact: true,
      to: this.pattern.slug,
    });
  },
});
</script>
