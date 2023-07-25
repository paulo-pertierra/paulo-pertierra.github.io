<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="h-screen w-screen overflow-hidden" id="background">
    <div class="h-full w-full backdrop-blur-sm">
      <RouterView />
    </div>
  </main>
</template>

<style>
#background {
  background-image: url('https://res.cloudinary.com/dyfvwmpc8/image/upload/w_1280,h_720/pexels-pixabay-315191_rop41q.jpg');
  background-size: cover;
}
</style>
