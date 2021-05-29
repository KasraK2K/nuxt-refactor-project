<template>
  <div>
    <nuxt-link to="/pattern">دیزاین‌پترن</nuxt-link> |
    <nuxt-link :to="`/pattern/${pattern.folder}`">{{ pattern.type }}</nuxt-link> |
    <span>{{ pattern.title }}</span>

    <article class="mt-6">
      <nuxt-content :document="pattern" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

let type: string;

export default Vue.extend({
  asyncData: async ({ app, params }) => {
    const pattern = await app
      .$content(`pattern/${params.folder}`, params.slug)
      .fetch();
    return { pattern };
  },
  methods: {
    translateType(type: string): string {
      if (type === "behavioral") return "رفتاری";
      else if (type === "structural") return "ساختاری";
      else if (type === "creational") return "تکوینی";
      else return "ناموجود";
    },
  },
});
</script>