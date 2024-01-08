<template>
  <a
    :href="`https://vrchat.com/home/world/${props.world.id}`"
    target="_blank"
    class="container"
  >
    <v-img :aspect-ratio="861 / 725" :src="props.world.thumbnailImageUrl" />
    <div class="incard">
      <p class="title">{{ props.world.name }}</p>
    </div>
    <div :class="`pc ${isPC ? '' : 'grayout'}`">
      <span>PC</span>
    </div>
    <div :class="`quest ${isQuest ? '' : 'grayout'}`">
      <span>Quest</span>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  world: World;
}>();

let isPC = false;
let isQuest = false;

if (props.world.unityPackages.length >= 1) {
  props.world.unityPackages.forEach((unityPackage) => {
    if (unityPackage.platform === "standalonewindows") {
      isPC = true;
    }
    if (unityPackage.platform === "android") {
      isQuest = true;
    }
  });
} else {
  devLog(props.world);
}
</script>

<style scoped>
.container {
  position: relative;
}
.incard {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  box-sizing: border-box;
}
.title {
  font-size: 1rem;
  font-weight: bold;
}
.pc {
  position: absolute;
  display: flex;

  top: 10%;
  right: 15%;
  width: 2rem;
  height: 2rem;

  justify-content: center;
  align-items: center;

  border: 2px solid white;
  border-radius: 50%;

  font-size: 0.6rem;
  color: black;

  background-color: rgba(0, 150, 250, 0.8);

  z-index: 1;
}
.quest {
  position: absolute;
  display: flex;

  top: 10%;
  right: 5%;
  width: 2rem;
  height: 2rem;

  justify-content: center;
  align-items: center;

  border: 2px solid white;
  border-radius: 50%;

  font-size: 0.6rem;
  color: black;

  background-color: rgb(0, 250, 50, 0.8);

  z-index: 1;
}
.grayout {
  background-color: rgb(100, 100, 100, 0.6);
  color: white;
  z-index: 0;
}
</style>
