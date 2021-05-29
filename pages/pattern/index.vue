<template>
  <v-container fluid>
    <!-- <h1>دیزاین پترن</h1> -->
    
    <v-row>
      <!-- ------------------------------------------------------------------------ */
      /*                             Creational Pattern                             */
      /* ------------------------------------------------------------------------- -->
      <v-col>
        <v-row no-gutters>
          <v-col xs="12" sm="6" md="3" v-for="cPattern in cPatterns" :key="cPattern.slug">
            <v-card class="border-hover" outlined tile>
              <nuxt-link :to="{ name: 'pattern-folder-slug', params: { slug: cPattern.slug, folder: cPattern.folder } }">
                <article>
                  <div class="pa-3 pb-0">
                    <v-img :src="`/images/pattern/${cPattern.slug}/${cPattern.thumbnail}`" />
                  </div>
                  <v-card-title class="justify-center">
                    <small :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                      {{ cPattern.title }}
                    </small>
                  </v-card-title>
                </article>
              </nuxt-link>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- ----------------------------------------------------------------------- -->

      <!-- ------------------------------------------------------------------------ */
      /*                             Structural Pattern                             */
      /* ------------------------------------------------------------------------- -->
      <v-col>
        <v-row no-gutters>
          <v-col xs="12" sm="6" md="3" v-for="sPattern in sPatterns" :key="sPattern.slug">
            <v-card class="border-hover" outlined tile>
              <nuxt-link :to="{ name: 'pattern-folder-slug', params: { slug: sPattern.slug, folder: sPattern.folder } }">
                <article>
                  <div class="pa-3 pb-0">
                    <v-img :src="`/images/pattern/${sPattern.slug}/${sPattern.thumbnail}`" />
                  </div>
                  <v-card-title class="justify-center">
                    <small :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                      {{ sPattern.title }}
                    </small>
                  </v-card-title>
                </article>
              </nuxt-link>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- ----------------------------------------------------------------------- -->

      <!-- ------------------------------------------------------------------------ */
      /*                             Behavioral Pattern                             */
      /* ------------------------------------------------------------------------- -->
      <v-col>
        <v-row no-gutters>
          <v-col xs="12" sm="6" md="3" v-for="bPattern in bPatterns" :key="bPattern.slug">
            <v-card class="border-hover" outlined tile>
              <nuxt-link :to="{ name: 'pattern-folder-slug', params: { slug: bPattern.slug, folder: bPattern.folder } }">
                <article>
                  <div class="pa-3 pb-0">
                    <v-img :src="`/images/pattern/${bPattern.slug}/${bPattern.thumbnail}`" />
                  </div>
                  <v-card-title class="justify-center">
                    <small :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                      {{ bPattern.title }}
                    </small>
                  </v-card-title>
                </article>
              </nuxt-link>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- ----------------------------------------------------------------------- -->

    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  asyncData: async ({ app, params }) => {
    const cPatterns = await app
      .$content("pattern/creational", params.slug)
      .only(["title", "thumbnail", "slug", "folder"])
      .sortBy("createdAt", "desc")
      .fetch();

    const sPatterns = await app
      .$content("pattern/structural", params.slug)
      .only(["title", "thumbnail", "slug", "folder"])
      .sortBy("createdAt", "desc")
      .fetch();

    const bPatterns = await app
      .$content("pattern/behavioral", params.slug)
      .only(["title", "thumbnail", "slug", "folder"])
      .sortBy("createdAt", "desc")
      .fetch();

    return { bPatterns, cPatterns, sPatterns };
  },
});
</script>

<style lang="scss" scoped>
.border-hover {
  border: solid 1px #f5f5f5;
  &:hover {
    border: solid 1px #ea6153;
  }
}
</style>
