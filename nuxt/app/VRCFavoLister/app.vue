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
      titleChunk?.trim().concat(" - ぶいちゃふぁぼりす") ?? "ぶいちゃふぁぼりす"
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
    {
      name: "description",
      content:
        "VRChatのためのツールで、自分がお気に入りに入れたワールドやアバターを整理するためのものです。",
    },
  ],
});

useSeoMeta({
  // OGP
  ogUrl: "https://vrc-favo-lister.yukke.dev/",
  ogTitle: "ぶいちゃふぁぼりす",
  ogDescription:
    "VRChatのためのツールで、自分がお気に入りに入れたワールドやアバターを整理するためのものです。",
  ogType: "website",
  ogSiteName: "ぶいちゃふぁぼりす",
  ogImage: "https://example.com/image.png",
  // Twitter
  twitterCard: "summary_large_image",
  twitterSite: "@yukke_dev",
  twitterTitle: "ぶいちゃふぁぼりす",
  twitterDescription:
    "VRChatのためのツールで、自分がお気に入りに入れたワールドやアバターを整理するためのものです。",
  twitterImage: "https://example.com/image.png",
  twitterImageAlt: "ぶいちゃふぁぼりす",
});
</script>
