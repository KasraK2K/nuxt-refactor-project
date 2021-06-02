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
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action class="ml-2">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
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

<script>
export default {
  data() {
    return {
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
      title: "نام برنامه",
    };
  },
};
</script>
