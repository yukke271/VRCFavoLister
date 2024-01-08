<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <h1>World Lister</h1>
        <v-textarea
          v-model="worlds"
          label="ここに貼り付け"
          outlined
        ></v-textarea>
        <br />
        <v-btn @click="parseWorlds">parse</v-btn>
      </v-col>

      <v-col cols="12" sm="10" md="8" lg="6">
        <v-row justify="center">
          <v-col v-for="world in worldsList" :key="world.id" cols="6">
            <ParserWorldCard :world="world" />
          </v-col>
        </v-row>
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

useHead({
  title: "WorldLister",
});
</script>
