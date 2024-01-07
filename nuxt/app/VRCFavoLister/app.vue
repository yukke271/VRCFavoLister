<template>
  <ClientOnly>
    <v-app>
      <NavigationBar />
      <v-main>
        <NuxtPage />
      </v-main>
    </v-app>
    <template #fallback>
      <!-- サーバーサイドでレンダリングされる部分 -->
      <p>Loading ...</p>
    </template>
  </ClientOnly>
</template>
