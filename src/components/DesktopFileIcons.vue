<script lang="ts" setup>
import { useWindowStore } from '@/stores/window'
const windowStore = useWindowStore()

function openResume() {
  window.open("/resume-vue.pdf", "_blank", "noreferrer")
}
</script>

<template>
  <transition v-show="windowStore.activeWindow === 'none'">
    <div class="fixed z-0 grid w-fit grid-cols-3 gap-2 p-2">
      <button
        class="h-auto border-transparent border hover:border hover:border-dotted hover:border-primary focus:border focus:border-solid focus:border-primary focus:bg-primary focus:bg-opacity-50"
      >
        <div class="h-30 w-20 overflow-hidden">
          <img class="h-14 mx-auto" src="@/assets/folder-logos/computer.svg" alt="" />
          <h3 class="text-center text-sm text-text">My Files</h3>
        </div>
      </button>
      <button
        class="h-auto hover:border border-transparent border hover:border-dotted hover:border-primary focus:border focus:border-solid focus:border-primary focus:bg-primary focus:bg-opacity-50"
        @dblclick="openResume()"
      >
        <div class="h-30 w-20 py-2 overflow-hidden">
          <img class="h-12 mx-auto" src="@/assets/folder-logos/pdf-file.svg" alt="" />
          <h3 class="text-center text-[9pt] text-text pt-2">resume.pdf</h3>
        </div>
      </button>
    </div>
  </transition>
</template>

<style></style>
