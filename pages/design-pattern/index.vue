<template>
  <v-container v-resize="onResize">
    <!-- ------------------------------------------------------------------------ */
    /*                            Show in larg devices                            */
    /* ------------------------------------------------------------------------- -->
    <div v-if="!isMobile">
      <section class="d-flex flex-column align-center">
        <h1 class="mb-3 text-center">الگو‌های طراحی</h1>
        <p class="text-center w-300">
          <span class="font-weight-bold">الگو‌های طراحی</span>
          راه حل های معمولی برای مشکلات رایج در طراحی نرم افزار است. هر الگو
          مانند یک طرح اولیه است که می‌توانید برای حل مشکل خود در یک مورد خاص
          استفاده کنید.
        </p>
      </section>

      <div class="d-flex flex-column align-center">
        <div
          class="relative d-flex flex-column align-center"
          style="max-width: 960px"
        >
          <AssetsImage
            path="others/patterns-03.png"
            width-props="100%"
            height-props="auto"
          />
          <div>
            <section class="absolute absolute-right-top">
              <div class="panel pa-2 mb-2">
                <div class="d-flex">
                  <v-icon class="ml-1 black--text" large
                    >mdi-puzzle-outline</v-icon
                  >
                  <h2 class="mt-5 mb-3">فواید الگوها</h2>
                </div>
                <p>
                  الگوها مجموعه‌ای از راه حل‌های رایج در طراحی نرم افزار هستند.
                  آنها زبان مشترکی تعریف می کنند که به تیم شما در ارتباط موثرتر
                  کمک می کند.
                </p>
              </div>
              <div class="panel pa-2">
                <v-btn color="red" class="white--text" block
                  >فواید الگوها</v-btn
                >
              </div>
            </section>

            <section class="absolute absolute-left-top">
              <div class="panel pa-2 mb-2">
                <div class="d-flex justify-end">
                  <v-icon class="ml-1 black--text" large
                    >mdi-shape-outline</v-icon
                  >
                  <h2 class="mt-5 mb-3">دسته‌بندی</h2>
                </div>
                <p class="text-left">
                  الگوهای طراحی از نظر پیچیدگی، سطح جزئیات و مقیاس کاربرد متفاوت
                  هستند. علاوه بر این، آنها را می توان بر اساس قصد آنها به سه
                  گروه دسته بندی کرد.
                </p>
              </div>
              <div class="panel pa-2">
                <v-btn color="red" class="white--text" block>دسته‌بندی</v-btn>
              </div>
            </section>
          </div>
        </div>

        <div
          class="relative d-flex flex-column align-center"
          style="max-width: 960px"
        >
          <AssetsImage
            path="others/patterns-04.png"
            width-props="100%"
            height-props="auto"
          />
          <div>
            <section class="absolute absolute-center-center">
              <div class="panel pa-2 mb-2">
                <div class="d-flex justify-center">
                  <v-icon class="ml-1 black--text" large
                    >mdi-bookmark-outline</v-icon
                  >
                  <h2 class="mt-5 mb-3">دسته‌بندی</h2>
                </div>
                <p class="text-center">
                  لیست ۲۲ الگوی طراحی کلاسیک، که دسته‌بندی شده‌اند.
                </p>
              </div>
              <div class="panel pa-2">
                <v-btn
                  color="red"
                  class="white--text"
                  block
                  @click="$router.push({ name: 'design-pattern-catalog' })"
                  >مشاهده کاتالوگ</v-btn
                >
              </div>
            </section>
          </div>
        </div>

        <div
          class="relative d-flex flex-column align-center"
          style="max-width: 960px"
        >
          <AssetsImage
            path="others/patterns-05.png"
            width-props="100%"
            height-props="auto"
          />
        </div>

        <div
          class="relative d-flex justify-space-between"
          style="max-width: 960px"
        >
          <AssetsImage
            path="others/patterns-06.png"
            width-props="100%"
            height-props="auto"
          />
          <div>
            <section class="absolute absolute-right-center">
              <div class="panel pa-2 mb-2">
                <div class="d-flex">
                  <v-icon class="ml-1 black--text" large>mdi-timer-sand</v-icon>
                  <h2 class="mt-5 mb-3">تاریخچه الگوها</h2>
                </div>
                <p class="mb-0">چه کسی و چه زمانی الگوها را اختراع کرد؟</p>
                <p class="mb-0">
                  آیا می توانید از الگوها خارج از نرم‌افزار استفاده کنید؟
                </p>
                <p class="mb-0">چطوری این کار را انجام میدهید؟</p>
              </div>
              <div class="panel pa-2">
                <v-btn color="red" class="white--text" block
                  >تاریخچه الگوها</v-btn
                >
              </div>
            </section>

            <section class="absolute absolute-left-center">
              <div class="panel pa-2 mb-2">
                <div class="d-flex justify-end">
                  <v-icon class="ml-1 black--text" large
                    >mdi-heart-broken-outline</v-icon
                  >
                  <h2 class="mt-5 mb-3">نقد الگوها</h2>
                </div>
                <p class="text-left mb-0">
                  آیا الگوها به اندازه تبلیغات خوب هستند؟
                </p>
                <p class="text-left mb-0">
                  آیا همیشه می توان از آنها استفاده کرد؟
                </p>
                <p class="text-left mb-0">
                  آیا الگوها بعضی اوقات می توانند مضر باشند؟
                </p>
              </div>
              <div class="panel pa-2">
                <v-btn color="red" class="white--text" block
                  >تاریخچه الگوها</v-btn
                >
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <!-- ------------------------------------------------------------------------ */
    /*                               Show in movile                               */
    /* ------------------------------------------------------------------------- -->
    <div v-if="isMobile"></div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    isMobile: false,
  }),
  beforeMount() {
    if (document.body.clientWidth < 768) this.isMobile = true;
  },
  methods: {
    onResize() {
      if (document.body.clientWidth < 768) this.isMobile = true;
      else if (this.isMobile) this.isMobile = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.big {
  font-size: 3rem;
}
.w-300 {
  max-width: 300px;
}
.relative {
  position: relative;
  width: 100%;
}
.panel {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
.absolute {
  position: absolute;
  max-width: 300px;
  z-index: 1;
}
.absolute-right-top {
  right: 0;
  top: 0;
}
.absolute-left-top {
  left: 0;
  top: 0;
}
.absolute-right-center {
  right: 0;
}
.absolute-left-center {
  left: 0;
}
.absolute-center-center {
  right: 50%;
  top: 33%;
  transform: translate(50%, 33%);
}
.absolute-right-bottom {
  right: 0;
  bottom: 0;
}
.absolute-left-bottom {
  left: 0;
  bottom: 0;
}
</style>
