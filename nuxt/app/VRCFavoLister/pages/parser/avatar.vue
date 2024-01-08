<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="8">
        <h1>Avatar Lister</h1>
        <v-textarea
          v-model="avatars"
          label="ここに貼り付け"
          outlined
        ></v-textarea>
        <br />
        <v-btn @click="parseAvatars">parse</v-btn>
      </v-col>

      <v-col cols="12" sm="10" md="8" lg="8">
        <v-row justify="center">
          <v-col
            v-for="avatar in avatarsList"
            :key="avatar.id"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <ParserAvatarCard :avatar="avatar" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const avatars = ref("");
const avatarsList = ref<Avatar[]>([]);

const parseAvatars = () => {
  avatarsParser(avatarsList.value, avatars.value);
};

useHead({
  title: "AvatarLister",
});
</script>
