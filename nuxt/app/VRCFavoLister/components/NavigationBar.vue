<template>
  <v-app-bar color="primary" prominent>
    <v-toolbar-title>My files</v-toolbar-title>
    <v-spacer />
    <v-spacer />
    <v-spacer />

    <v-toolbar-items v-if="!isMobile()">
      <NuxtLink to="/"> Top pages </NuxtLink>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      v-else
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list :items="items" />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false); // ドロワーの開閉状態
const items = ref([{ title: "Home", value: "/" }]); // メニューのリスト
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
