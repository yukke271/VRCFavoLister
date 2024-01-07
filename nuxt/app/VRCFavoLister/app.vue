<template>
  <ClientOnly>
    <v-app>
      <NavigationBar />
      <v-main>
        <NuxtPage />
      </v-main>
    </v-app>
    <template #fallback>
      <PageLoding />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return (
      titleChunk?.trim().concat(" - VRChat Favo Lister") ?? "VRChat Favo Lister"
    );
  },
});
</script>
