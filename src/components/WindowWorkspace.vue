<script lang="ts" setup>
import {
  faCircle,
  faUserGroup,
  faLocationDot,
  faThumbsUp,
  faClockRotateLeft,
  faChevronLeft,
  faChevronRight,
  faDatabase,
  faWindowRestore,
  faCodeMerge,
  faTerminal
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faCircle,
  faUserGroup,
  faLocationDot,
  faGithub,
  faThumbsUp,
  faClockRotateLeft,
  faChevronLeft,
  faChevronRight,
  faDatabase,
  faWindowRestore,
  faCodeMerge,
  faTerminal
)

import { useWindowStore } from '@/stores/window'
const windowStore = useWindowStore()

import { ref } from 'vue'
import type { Ref } from 'vue'
import WindowWorkspaceFullstack from './WindowWorkspaceFullstack.vue'
import WindowWorkspaceFrontend from './WindowWorkspaceFrontend.vue';
import WindowWorkspaceBackend from './WindowWorkspaceBackend.vue';

type Stack = 'full' | 'front' | 'back' | 'dev'

const stack: Ref<Stack> = ref('full')

function setStack(newStack: Stack) {
  stack.value = newStack
}
</script>

<template>
  <transition>
    <div v-show="windowStore.activeWindow === 'work-space'" class="relative z-10 h-full w-full">
      <div class="absolute left-1/2 top-1/2 -mt-6 w-full -translate-x-1/2 -translate-y-1/2">
        <div
          class="mx-auto -mt-16 h-[575px] max-w-sm overflow-hidden rounded-xl border border-accent bg-background pb-2 md:mt-0 md:max-w-2xl lg:max-w-4xl"
          id="work-space"
          v-drag="{ handle: '#work-space-handle' }"
        >
          <div class="flex h-8 items-center justify-between p-2" id="title-bar">
            <div class="flex h-8 w-full items-center text-xs text-text" id="work-space-handle">
              Workspace
            </div>
            <div class="flex w-20 justify-end">
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
          <div
            class="flex h-10 w-full items-center justify-between border-b border-b-accent px-1 text-text"
          >
            <div>
              <button class="m-0.5 h-9 w-9 p-2 hover:bg-slate-900">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </button>
              <button class="m-0.5 h-9 w-9 p-2 hover:bg-slate-900">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </button>
            </div>
            <div
              class="flex h-8 w-96 items-center rounded-lg border border-accent px-2 text-xs capitalize"
            >
              /home/Projects/{{
                stack === 'full'
                  ? 'Fullstack'
                  : stack === 'back'
                  ? 'Backend'
                  : stack === 'front'
                  ? 'Frontend'
                  : ''
              }}
            </div>
            <div></div>
          </div>
          <div class="flex h-[490px] w-full text-text">
            <div class="h-full border-r border-r-accent">
              <div class="w-64">
                <button
                  class="flex w-full items-center p-2 hover:bg-slate-900"
                  :class="{ 'bg-slate-900': stack === 'full' }"
                  :disabled="stack === 'full'"
                  @click="setStack('full')"
                >
                  <font-awesome-icon class="mr-2 pl-2" icon="fa-solid fa-code-merge" />
                  <p>Fullstack Development</p>
                </button>
                <button
                  class="flex w-full items-center p-2 hover:bg-slate-900"
                  :class="{ 'bg-slate-900': stack === 'back' }"
                  :disabled="stack === 'back'"
                  @click="setStack('back')"
                >
                  <font-awesome-icon class="mr-2 pl-2" icon="fa-solid fa-database" />
                  <p>Backend Development</p>
                </button>
                <button
                  class="flex w-full items-center p-2 hover:bg-slate-900"
                  :class="{ 'bg-slate-900': stack === 'front' }"
                  :disabled="stack === 'front'"
                  @click="setStack('front')"
                >
                  <font-awesome-icon class="mr-2 pl-2" icon="fa-solid fa-window-restore" />
                  <p>Frontend Development</p>
                </button>
                <button
                  class="flex w-full items-center p-2 hover:bg-slate-900"
                  :class="{ 'bg-slate-900': stack === 'front' }"
                  :disabled="stack === 'dev'"
                  @click="setStack('dev')"
                >
                  <font-awesome-icon class="mr-2 pl-2" icon="fa-solid fa-terminal" />
                  <p>Development Tools</p>
                </button>
              </div>
            </div>
            <WindowWorkspaceFullstack v-if="stack === 'full'" :stack="stack" />
            <WindowWorkspaceFrontend v-else-if="stack === 'front'" :stack="stack" />
            <WindowWorkspaceBackend v-else-if="stack === 'back'" :stack="stack" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
