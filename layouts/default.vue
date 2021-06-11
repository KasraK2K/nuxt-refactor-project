<template>
  <v-app>
    <!-- Right Menu -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      dark
      fixed
      right
      bottom
      app
    >
      <template #prepend>
        <v-list-item class="disable-hover px-2">
          <v-list-item-avatar>
            <img src="https://avatars.githubusercontent.com/u/30779339?v=4" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>کسری کرمی</v-list-item-title>
            <v-list-item-subtitle class="pt-1">آنلاین</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list>
        <div v-for="(item, i) in items" :key="i">
          <!-- ------------------------------------------------------------------------ */
          /*                                 single menu                                */
          /* ------------------------------------------------------------------------- -->
          <v-list-item v-if="!item.submenus" :to="item.to" nuxt router exact>
            <v-list-item-action class="ml-2">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          <!-- ----------------------------------------------------------------------- -->

          <!-- ------------------------------------------------------------------------ */
          /*                                multiple menu                               */
          /* ------------------------------------------------------------------------- -->
          <v-list-group v-if="item.submenus" active-class="blue--text">
            <template #activator>
              <v-list-item-action class="ml-2" @click="routeTo(item.to)">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  @click="routeTo(item.to)"
                  v-text="item.title"
                />
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(submenu, j) in item.submenus"
              :key="j"
              :to="submenu.to"
              nuxt
              router
              exact
            >
              <v-list-item-icon v-if="submenu.icon" class="ml-0 mr-5">
                <v-icon>{{ submenu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                :class="[!submenu.icon ? 'mr-5' : 'mr-2']"
                v-text="submenu.title"
              />
            </v-list-item>
          </v-list-group>
          <!-- ----------------------------------------------------------------------- -->
        </div>
      </v-list>
    </v-navigation-drawer>

    <!-- Topbar Menu -->
    <v-app-bar class="elevation-0" :clipped-right="clipped" fixed app dark>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "left" : "right"}` }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <!-- Main -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!-- footer -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

const title = "نام برنامه";

export default Vue.extend({
  head: {
    titleTemplate: `%s - ${title}`,
  },
  data: () => ({
    clipped: false,
    drawer: true,
    fixed: false,
    items: [
      {
        icon: "mdi-home",
        title: "صفحه اصلی",
        to: "/",
      },
      {
        icon: "mdi-puzzle",
        title: "الگوهای طراحی",
        to: { name: "design-pattern" },
        submenus: [
          {
            icon: "mdi-content-cut",
            title: "کاتالوگ",
            to: { name: "design-pattern-catalog" },
          },
        ],
      },
      {
        icon: "mdi-content-cut",
        title: "بازسازی",
        to: { name: "refactor" },
      },
    ],
    miniVariant: false,
    left: true,
    leftDrawer: false,
    title,
  }),
  beforeMount() {
    if (document.body.clientWidth < 1264) this.drawer = false;
  },
  methods: {
    routeTo(path: Record<string, unknown>): void {
      this.$router.push(path);
    },
  },
});
</script>
