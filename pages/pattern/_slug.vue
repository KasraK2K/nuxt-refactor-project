<template>
  <article>
    <nuxt-content :document="pattern" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const pattern = await $content('pattern', params.slug).fetch()
    return { pattern }
  },
}
</script>