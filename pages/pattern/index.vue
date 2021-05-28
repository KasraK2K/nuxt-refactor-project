<template>
  <v-container fluid>
    <!-- <h1>دیزاین پترن</h1> -->
    
    <v-row no-gutters>
      <v-col xs="12" sm="6" md="1" v-for="pattern in patterns" :key="pattern.slug">
        <v-card outlined tile>
          <nuxt-link :to="{ name: 'pattern-slug', params: { slug: pattern.slug } }" class="black--text">
            <article>
              <div class="pa-3 pb-0">
                <v-img :src="require(`~/assets/images/pattern/${pattern.slug}/${pattern.thumbnail}`)" />
              </div>
              <v-card-title class="justify-center">{{ pattern.title }}</v-card-title>
            </article>
          </nuxt-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const patterns = await $content('pattern', params.slug)
      .only(['title', 'thumbnail', 'slug'])
      .sortBy('createdAt', 'DESC')
      .fetch()
    return { patterns }
  },
}
</script>
