<template>
  <v-app-bar color="primary" prominent>
    <!--<v-spacer />-->
    <v-app-bar-nav-icon
      v-if="!device"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <!-- Logo -->
    <!--
    <v-img
      src="/logo.svg"
      min-width="112"
      min-height="40"
      max-width="112"
      max-height="40"
    ></v-img>
    -->
    <v-toolbar-title>VRChat Favo Lister</v-toolbar-title>

    <v-app-bar-nav-icon
      v-if="device"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="device ? 'right' : 'left'"
    temporary
  >
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" class="parent">
        <NuxtLink :to="item.value" class="child">
          {{ item.title }}
        </NuxtLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false); // ドロワーの開閉状態
const device = isMobile(); // 現在のデバイスがモバイルであればtrueを返す

// ページ内リンク先
const items = [
  {
    title: "Top page",
    value: "/",
  },
  {
    title: "World Lister",
    value: "/parser/world",
  },
  {
    title: "Avatar Lister",
    value: "/parser/avatar",
  },
];
</script>

<style scoped>
.parent {
  position: relative;
}

.parent .child {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
