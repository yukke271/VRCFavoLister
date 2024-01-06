<template>
  <v-card>
    <v-card-title>
      <h3>{{ props.world.name }}</h3>
    </v-card-title>
    <v-card-text>
      <a
        :href="`https://vrchat.com/home/world/${props.world.id}`"
        target="_blank"
        >{{ props.world.name }}</a
      >
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  world: World;
}>();
</script>
