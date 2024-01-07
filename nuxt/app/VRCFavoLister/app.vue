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
  title: null, // default <title>VRChat Favo Lister</title>
  htmlAttrs: {
    // default <html lang="ja"> <html prefix="og: <https://ogp.me/ns#>">
    lang: "ja",
    prefix: "og: <https://ogp.me/ns#>",
  },
  meta: [
    // default <meta charset="utf-8">
    { charset: "utf-8" },
    // default <meta name="viewport" content="width=device-width, initial-scale=1">
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    // <meta name=keyworkds" content="vrchat, VRChat, お気に入り, Favorite, 整理">
    {
      hid: "keywords",
      name: "keywords",
      content: "vrchat, VRChat, お気に入り, Favorite, 整理",
    },
    // <meta name="description" content="My amazing site.">
    { name: "description", content: "My amazing site." },
  ],
});

useSeoMeta({
  // OGP
  ogUrl: "https://example.com/",
  ogTitle: "My Amazing Site",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogType: "website",
  ogSiteName: "My Amazing Site",
  ogImage: "https://example.com/image.png",
  // Twitter
  twitterCard: "summary_large_image",
  twitterTitle: "My Amazing Site",
  twitterDescription: "This is my amazing site, let me tell you all about it.",
  twitterImage: "https://example.com/image.png",
  twitterSite: "@Twitter",
});
</script>
