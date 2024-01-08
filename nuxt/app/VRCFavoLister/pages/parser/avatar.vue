<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="8">
        <h1>Avatar Lister</h1>
        <v-btn
          href="https://vrchat.com/api/1/avatars/favorites?n=300&offset=0"
          target="_blank"
          >VRChatにログイン</v-btn
        >
        <v-btn
          href="https://vrchat.com/api/1/avatars/favorites?n=300&offset=0"
          target="_blank"
          >APIを呼び出す</v-btn
        >
        <v-textarea
          v-model="avatars"
          label="ここに貼り付け"
          outlined
        ></v-textarea>
        <v-btn @click="parseAvatars">リスト化</v-btn>
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
  if (avatars.value.trim() === "") {
    alert("APIから取得した文字列を貼り付けてください");
    return;
  }
  try {
    avatarsParser(avatarsList.value, avatars.value);
  } catch (error) {
    alert(error);
  }
};

useHead({
  title: "AvatarLister",
});
</script>
