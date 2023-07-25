<script lang="ts" setup>
import * as fns from 'date-fns'
import { ref, onMounted } from 'vue'

const currentDate = ref(new Date())

function updateDate() {
  currentDate.value = new Date()
}

onMounted(() => {
  setInterval(updateDate, 1000)
})

import { useWindowStore } from '@/stores/window'
const windowStore = useWindowStore()
</script>

<template>
  <div
    class="fixed bottom-0 z-20 h-12 w-screen rounded-lg border-accent bg-secondary bg-opacity-75 backdrop-blur-lg"
  >
    <div class="flex h-12 items-center justify-between p-0.5">
      <div class="mx-auto flex h-12 w-fit items-center justify-center p-0.5">
        <button class="tooltip">
          <img
            class="mx-2 h-9 rounded-lg bg-white transition-all hover:h-10 hover:border-2"
            src="@/assets/taskbar-logos/arch-linux-logo.svg"
            alt=""
          />
          <span class="tooltiptext text-xs">My Favorite Linux Distro</span>
        </button>
        <button class="tooltip" @click="windowStore.setActiveWindow('music-player')">
          <img
            class="mx-2 h-9 rounded-lg bg-white transition-all hover:h-10 hover:border-2"
            src="@/assets/taskbar-logos/turn-table-logo.svg"
            alt=""
          />
          <span class="tooltiptext text-xs">Music Player</span>
        </button>
        <button class="tooltip" @click="windowStore.setActiveWindow('github-profile')">
          <img
            class="mx-2 h-9 rounded-lg bg-white p-1 transition-all hover:h-10 hover:border-2"
            src="@/assets/link-logos/github-mark.svg"
            alt=""
          />
          <span class="tooltiptext text-xs">My GitHub Profile</span>
        </button>
      </div>
      <div class="m-2 flex h-12 w-24 items-center text-text">
        <div class="w-full text-center">
          <span class="block text-sm">{{ fns.format(currentDate, 'PP') }}</span>
          <span class="block text-xs">{{ fns.format(currentDate, 'p') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
