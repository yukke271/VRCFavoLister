<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <div>
          <h1>world parser!</h1>
          <NuxtLink to="/"> Top pages </NuxtLink>
          <br />
          <v-textarea
            v-model="worlds"
            label="ここに貼り付け"
            outlined
          ></v-textarea>
          <br />
          <v-btn @click="parseWorlds">parse</v-btn>
        </div>
      </v-col>

      <v-col cols="12" sm="10" md="8" lg="6">
        <div v-for="world in worldsList" :key="world.id">
          <ParserWorldCard :world="world" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const worlds = ref("");
const worldsList = ref<World[]>([]);

const parseWorlds = () => {
  worldsParser(worldsList.value, worlds.value);
};
</script>
