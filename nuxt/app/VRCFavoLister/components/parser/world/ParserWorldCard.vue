<template>
  <a
    :href="`https://vrchat.com/home/world/${props.world.id}`"
    target="_blank"
    class="container"
  >
    <v-card :image="props.world.thumbnailImageUrl" height="200" class="card">
      <v-card-text class="incard">
        <p class="title">{{ props.world.name }}</p>
      </v-card-text>
    </v-card>
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

props.world.unityPackages.forEach((unityPackage) => {
  if (unityPackage.platform === "standalonewindows") {
    isPC = true;
  }
  if (unityPackage.platform === "android") {
    isQuest = true;
  }
});
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

  top: 5%;
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

  top: 5%;
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
