<script setup lang="ts">
import DesktopFileIcons from '@/components/DesktopFileIcons.vue'

import MusicPlayer from '@/components/Windows/MusicPlayer/MusicPlayer.vue'
import GitHubProfile from '@/components/Windows/GitHubProfile/GitHubProfile.vue'
import StartPage from '@/components/Windows/StartPage/StartPage.vue'

import TaskBar from '@/components/TaskBar.vue'
</script>

<template>
  <!-- Active Windows Zone -->
  <MusicPlayer />
  <GitHubProfile />
  <StartPage />
  <!-- Desktop App Icons Zone -->
  <desktop-file-icons />

  <!-- Taskbar Zone -->
  <task-bar />
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.15s cubic-bezier(0.8, 0.31, 0.27, 0.87);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(97%);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
