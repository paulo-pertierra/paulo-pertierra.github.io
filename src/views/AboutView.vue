<script lang="ts" setup>
import { ref } from 'vue'

const showP = ref(false)
</script>

<template>
  <div class="about">
    <transition name="fade">
      <h1 v-if="showP">This is an about page</h1>
    </transition>
    <button @click="showP = !showP">toggle</button>
  </div>
</template>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
</style>
