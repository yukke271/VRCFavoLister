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
