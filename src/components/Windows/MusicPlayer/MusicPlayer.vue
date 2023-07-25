<script lang="ts" setup>
import {
  faCircle,
  faPause,
  faPlay,
  faForwardFast,
  faBackwardFast,
  faShuffle,
  faEllipsisVertical,
  faListUl
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faCircle,
  faPause,
  faPlay,
  faForwardFast,
  faBackwardFast,
  faShuffle,
  faEllipsisVertical,
  faListUl
)

import SliderInput from '@/components/Windows/MusicPlayer/SliderInput/SliderInput.vue'

import { useWindowStore } from '@/stores/window'
const windowStore = useWindowStore()

import * as fns from 'date-fns'

const music = fns.differenceInYears(new Date(), new Date('2001-11-03'))
</script>

<template>
  <transition>
    <div v-show="windowStore.activeWindow === 'music-player'" class="relative z-10 h-full w-full">
      <div
        class="absolute left-1/2 top-1/2 max-w-sm -translate-x-1/2 -translate-y-1/2 md:max-w-md lg:max-w-xl"
      >
        <div
          v-drag="{ handle: '#music-player-handle' }"
          class="rounded-xl border border-accent bg-gradient-to-r from-purple-950 to-blue-950 pb-2"
          id="music-player"
        >
          <div
            class="flex h-8 items-center justify-between border-b border-b-accent p-2"
            id="title-bar"
          >
            <div class="flex h-8 w-full items-center text-xs text-text" id="music-player-handle">
              Music Player
            </div>
            <div class="flex">
              <button @click="windowStore.setActiveWindow('none')">
                <font-awesome-icon class="p-1 text-xs text-green-400" icon="fa-solid fa-circle" />
              </button>
              <font-awesome-icon
                class="p-1 text-xs text-orange-400 opacity-30"
                icon="fa-solid fa-circle"
              />
              <button @click="windowStore.setActiveWindow('none')">
                <font-awesome-icon class="p-1 text-xs text-red-400" icon="fa-solid fa-circle" />
              </button>
            </div>
          </div>
          <div class="flex" id="music-player-body">
            <transition name="slide">
              <div class="hidden px-4 py-4 text-text backdrop-brightness-75 lg:block" v-show="true">
                <div>
                  <p class="">Playlist</p>
                  <p class="text-[8pt]">Music played: {{ music }} years.</p>
                </div>
                <div class="my-8">
                  <div class="my-3 flex">
                    <img class="rounded-lg" src="https://placehold.co/40" alt="" />
                    <div class="ml-2 w-48">
                      <h1 class="text-sm">Born in November</h1>
                      <h2 class="text-xs opacity-80">Paraluman Hilomen</h2>
                    </div>
                  </div>
                  <div class="my-3 flex">
                    <img class="rounded-lg" src="https://placehold.co/40" alt="" />
                    <div class="ml-2 w-48">
                      <h1 class="text-sm">Went to Elementary</h1>
                      <h2 class="text-xs opacity-80">Paulo Pertierra</h2>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <div class="p-8">
              <img
                class="pointer-events-none mx-auto my-4 h-auto w-[160px] rounded-lg shadow-sm drop-shadow-md"
                src="https://res.cloudinary.com/dyfvwmpc8/image/upload/h_160,w_160/display-picture_zzlzhf.png"
                alt=""
              />
              <h1 class="text-center text-xl font-semibold text-text">Paulo Roman H. Pertierra</h1>
              <h2 class="text-center text-text">Frontend Web Developer</h2>
              <div class="mx-auto my-4 flex h-16 w-64 items-center justify-evenly text-text">
                <div
                  class="my-8 flex h-10 w-10 items-center justify-center rounded-full border p-4"
                >
                  <font-awesome-icon class="text-sm" icon="fa-solid fa-backward-fast" />
                </div>
                <div
                  class="my-8 flex h-14 w-14 items-center justify-center rounded-full border p-4"
                >
                  <font-awesome-icon class="text-3xl" icon="fa-solid fa-pause" />
                </div>
                <div
                  class="my-8 flex h-10 w-10 items-center justify-center rounded-full border p-4"
                >
                  <font-awesome-icon class="text-sm" icon="fa-solid fa-forward-fast" />
                </div>
              </div>
              <div class="mx-auto w-60">
                <SliderInput />
              </div>
              <div class="mx-auto my-4 flex h-16 w-64 items-center justify-between px-2 text-text">
                <div class="flex">
                  <div
                    class="my-8 mr-2 flex h-2 w-2 items-center justify-center rounded-full border p-3"
                  >
                    <font-awesome-icon class="text-xs" icon="fa-solid fa-shuffle" />
                  </div>
                  <div
                    class="my-8 flex h-2 w-2 items-center justify-center rounded-full border p-3"
                  >
                    <font-awesome-icon class="text-xs" icon="fa-solid fa-list-ul" />
                  </div>
                </div>
                <div class="my-8 flex h-2 w-2 items-center justify-center rounded-full border p-3">
                  <font-awesome-icon class="-ml-0.5 text-xs" icon="fa-solid fa-ellipsis-vertical" />
                </div>
              </div>
            </div>
          </div>
          <div class="absolute -ml-0.5 h-4 w-64 backdrop-brightness-75"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-enter-to {
  transform: translateX(300px);
  opacity: 0;
}
</style>
