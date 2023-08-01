<script setup lang="ts">
import DesktopFileIcons from '@/components/DesktopFileIcons.vue'

import WindowMusicPlayer from '@/components/WindowMusicPlayer.vue'
import WindowGithubProfile from '@/components/WindowGitHubProfile.vue'
import WindowStartPage from '@/components/WindowStartPage.vue'
import WindowWorkspace from '@/components/WindowWorkspace.vue'

import TaskBar from '@/components/TaskBar.vue'
</script>

<template>
  <!-- Active Windows Zone -->
  <window-music-player />
  <window-github-profile />
  <window-start-page />
  <window-workspace />
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
