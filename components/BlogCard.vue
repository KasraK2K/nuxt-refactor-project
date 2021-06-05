<template>
  <v-card class="border-hover" outlined tile :max-width="maxWidthProp">
    <nuxt-link
      :to="{
        name: 'design-pattern-behavioral-slug',
        params: { slug: data.slug, folder: data.folder },
      }"
    >
      <article>
        <div class="pa-3 pb-0">
          <AssetsImage :path="link" />
        </div>
        <v-card-title class="justify-center">
          <small :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
            {{ data.title }}
          </small>
        </v-card-title>
      </article>
    </nuxt-link>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    maxWidthProp: { type: String, default: "120" },
    link: { type: String, required: true },
    data: { type: Object, required: true },
  },
});
</script>
