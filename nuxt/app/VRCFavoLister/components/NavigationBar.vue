<template>
  <v-app-bar color="primary" prominent>
    <v-toolbar-title>My files</v-toolbar-title>
    <v-spacer />
    <v-spacer />
    <v-spacer />

    <v-toolbar-items v-if="!isMobile()">
      <div v-for="item in items" :key="item.title">
        <NuxtLink :to="item.value"> {{ item.title }} </NuxtLink>
      </div>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      v-else
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <NuxtLink :to="item.value">
          {{ item.title }}
        </NuxtLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false); // ドロワーの開閉状態
const items = [
  // メニューのリスト
  {
    title: "Top page",
    value: "/",
  },
  {
    title: "World Parser",
    value: "/parser/world",
  },
  {
    title: "Avatar Parser",
    value: "/parser/avatar",
  },
];
const isMobile = () => {
  /* UserAgentが廃止になるため、別の方法を考える
  const userAgent = window.navigator.userAgent.toLowerCase();
  devLog(userAgent);
  if (
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("android") ||
    userAgent.includes("mobile")
  ) {
    return true;
  } else {
    return false;
  }
  */

  // 画面幅で判定する
  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(max-device-width: 640px)").matches
  ) {
    return true;
  } else {
    return false;
  }
};
</script>
