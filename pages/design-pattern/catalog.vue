<template>
  <v-container>
    <h1 class="text-center mt-5 mb-10">کاتالوگ الگوهای طراحی</h1>

    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <nuxt-link to="/design-pattern/creational">
          <h2 class="mb-6">پترن‌های سازنده</h2>
        </nuxt-link>
        <p>
          این الگوها مکانیسم های مختلف ایجاد شی را فراهم می کنند ، که انعطاف
          پذیری و استفاده مجدد از کد موجود را افزایش می دهد.
        </p>
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <nuxt-link to="/design-pattern/structural">
          <h2 class="mb-6">پترن‌های ساختاری</h2>
        </nuxt-link>
        <p>
          این الگوها نحوه جمع آوری اشیا and و کلاسها را به ساختارهای بزرگتر و در
          عین حال انعطاف پذیر و کارآمد نگه داشتن این ساختارها توضیح می دهد.
        </p>
      </v-col>

      <v-col cols="12" sm="6" lg="6">
        <nuxt-link to="/design-pattern/behavioral">
          <h2 class="mb-6">پترن‌های رفتاری</h2>
        </nuxt-link>
        <p>این الگوها مربوط به الگوریتم ها و تعیین وظایف بین اشیا هستند.</p>
      </v-col>
    </v-row>

    <v-row>
      <!-- ------------------------------------------------------------------------ */
      /*                             Creational Pattern                             */
      /* ------------------------------------------------------------------------- -->
      <v-col cols="12" sm="6" lg="3">
        <v-row no-gutters>
          <v-col
            v-for="cPattern in cPatterns"
            :key="cPattern.slug"
            class="flex-grow-0"
          >
            <BlogCard
              max-width-prop="120"
              :data="cPattern"
              :link="`${baseLink}/${cPattern.slug}/${cPattern.thumbnail}`"
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- ------------------------------------------------------------------------ */
      /*                             Structural Pattern                             */
      /* ------------------------------------------------------------------------- -->
      <v-col cols="12" sm="6" lg="3">
        <v-row no-gutters>
          <v-col
            v-for="sPattern in sPatterns"
            :key="sPattern.slug"
            class="flex-grow-0"
          >
            <BlogCard
              max-width-prop="120"
              :data="sPattern"
              :link="`${baseLink}/${sPattern.slug}/${sPattern.thumbnail}`"
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- ------------------------------------------------------------------------ */
      /*                             Behavioral Pattern                             */
      /* ------------------------------------------------------------------------- -->
      <v-col cols="12" sm="6" lg="6">
        <v-row no-gutters>
          <v-col
            v-for="bPattern in bPatterns"
            :key="bPattern.slug"
            class="flex-grow-0"
          >
            <BlogCard
              max-width-prop="145"
              :data="bPattern"
              :link="`${baseLink}/${bPattern.slug}/${bPattern.thumbnail}`"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Catalog",

  asyncData: async ({ app, params }) => {
    const cPatterns = await app
      .$content("design-pattern/creational", params.slug)
      .only(["title", "thumbnail", "slug", "folder"])
      .sortBy("createdAt", "desc")
      .fetch();

    const sPatterns = await app
      .$content("design-pattern/structural", params.slug)
      .only(["title", "thumbnail", "slug", "folder"])
      .sortBy("createdAt", "desc")
      .fetch();

    const bPatterns = await app
      .$content("design-pattern/behavioral", params.slug)
      .only(["title", "thumbnail", "slug", "folder"])
      .sortBy("createdAt", "desc")
      .fetch();

    return { bPatterns, cPatterns, sPatterns };
  },
  data: () => ({
    baseLink: "design-pattern",
  }),
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
