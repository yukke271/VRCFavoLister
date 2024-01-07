<template>
  <v-card>
    <v-card-title>
      <h3>{{ props.avatar.name }}</h3>
    </v-card-title>
    <v-card-text>
      <a
        :href="`https://vrchat.com/home/avatar/${props.avatar.id}`"
        target="_blank"
        >{{ props.avatar.name }}</a
      >
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  avatar: Avatar;
}>();
</script>
