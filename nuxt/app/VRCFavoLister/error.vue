<template>
  <div class="container">
    <div class="stack">
      <h1>404</h1>
      <p class="error-message">{{ error?.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError();

// トップページへリダイレクト
await navigateTo({ path: "/" });
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 6rem;
  letter-spacing: 0.5rem;
  text-align: center;
  line-height: 1;
  color: rgb(0, 0, 0);
}
.error-message {
  font-weight: lighter;
}
</style>
