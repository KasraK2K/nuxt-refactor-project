<template>
  <v-container fluid>
    <!-- <h1>دیزاین پترن</h1> -->
    
    <v-row>
      <!-- creational pattern -->
      <v-col>
        <v-row no-gutters>
          <v-col xs="12" sm="6" md="3" v-for="bPattern in bPatterns" :key="bPattern.slug">
            <v-card outlined tile>
              <nuxt-link :to="{ name: 'pattern-slug', params: { slug: bPattern.slug } }" class="black--text">
                <article>
                  <div class="pa-3 pb-0">
                    <v-img :src="require(`~/assets/images/pattern/${bPattern.slug}/${bPattern.thumbnail}`)" />
                  </div>
                  <v-card-title class="justify-center">{{ bPattern.title }}</v-card-title>
                </article>
              </nuxt-link>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- structural pattern -->
      <v-col>
        <v-row no-gutters>
          <v-col xs="12" sm="6" md="3" v-for="bPattern in bPatterns" :key="bPattern.slug">
            <v-card outlined tile>
              <nuxt-link :to="{ name: 'pattern-slug', params: { slug: bPattern.slug } }" class="black--text">
                <article>
                  <div class="pa-3 pb-0">
                    <v-img :src="require(`~/assets/images/pattern/${bPattern.slug}/${bPattern.thumbnail}`)" />
                  </div>
                  <v-card-title class="justify-center">{{ bPattern.title }}</v-card-title>
                </article>
              </nuxt-link>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- structural pattern -->
      <v-col>
        <v-row no-gutters>
          <v-col xs="12" sm="6" md="3" v-for="bPattern in bPatterns" :key="bPattern.slug">
            <v-card outlined tile>
              <nuxt-link :to="{ name: 'pattern-slug', params: { slug: bPattern.slug } }" class="black--text">
                <article>
                  <div class="pa-3 pb-0">
                    <v-img :src="require(`~/assets/images/pattern/${bPattern.slug}/${bPattern.thumbnail}`)" />
                  </div>
                  <v-card-title class="justify-center">{{ bPattern.title }}</v-card-title>
                </article>
              </nuxt-link>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const bPatterns = await $content('pattern/behavioral', params.slug)
      .only(['title', 'thumbnail', 'slug'])
      .sortBy('createdAt', 'DESC')
      .fetch()
    return { bPatterns }
  },
}
</script>
