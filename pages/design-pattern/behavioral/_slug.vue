<template>
  <div>
    <v-breadcrumbs :nuxt="true" :items="breadcrumbs"></v-breadcrumbs>

    <article class="mt-6">
      <h1 class="h1 mb-6">{{ pattern.title }}</h1>

      <nuxt-content :document="pattern" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Slug",

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
  head() {
    return {
      title: `دیزاین‌پترن ${this.pattern.title}`,
    };
  },
  created() {
    this.breadcrumbs.push({
      text: this.pattern.title,
      exact: true,
      to: this.pattern.slug,
    });
  },
});
</script>

<style lang="scss" scoped>
.h1 {
  font-size: 3.5rem;
  font-weight: black;
}
.h2 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
