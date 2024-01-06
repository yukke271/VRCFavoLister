<template>
  <div>
    <h1>world parser!</h1>
    <NuxtLink to="/"> Top pages </NuxtLink>
    <br />
    <textarea v-model="worlds" cols="80" rows="20"></textarea>
    <br />
    <button @click="parseWorlds">parse</button>
  </div>
</template>

<script setup lang="ts">
const worlds = ref("");

const parseWorlds = () => {
  const worldsList: World[] = worldsParser(worlds.value);
  devLog(worldsList);
};
</script>
