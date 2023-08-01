<script lang="ts" setup>
import { onMounted } from 'vue'

import { faCircle, faUserGroup, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCircle, faUserGroup, faLocationDot, faGithub)

import { useWindowStore } from '@/stores/window'
const windowStore = useWindowStore()

import { useGitHubProfileStore } from '@/stores/github-profile/user'
const githubProfileStore = useGitHubProfileStore()

onMounted(() => {
  githubProfileStore.getUser()
  githubProfileStore.getUserReadMe()
})

import { toRef } from 'vue'
const user = toRef(githubProfileStore, 'user')

import WindowGithubProfileReadme from './WindowGitHubProfileReadme.vue'
</script>

<template>
  <transition>
    <div v-show="windowStore.activeWindow === 'github-profile'" class="relative z-10 h-full w-full">
      <div class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <div
          class="mx-auto h-[470px] max-w-sm rounded-xl border border-accent bg-background pb-2 md:max-w-2xl lg:max-w-4xl"
          id="github-profile"
          v-drag="{ handle: '#github-profile-handle' }"
        >
          <div class="flex h-8 items-center justify-between p-2" id="title-bar">
            <div class="flex h-8 w-full items-center text-xs text-text" id="github-profile-handle">
              GitHub Profile
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
          <div class="grid grid-cols-3 gap-3 px-4 text-text">
            <div
              class="col-span-3 mr-2 h-full w-full rounded-lg border p-4 align-top lg:col-span-1"
            >
              <img class="mx-auto h-36 w-auto rounded-full" :src="user?.avatar_url" alt="" />
              <div class="my-4">
                <h1 class="text-lg font-semibold">{{ user?.name }}</h1>
                <h2>{{ user?.login }}</h2>
                <p class="my-4 text-xs">{{ user?.bio }}</p>
                <p class="mt-2 text-xs">
                  <font-awesome-icon class="pr-1.5" icon="fa-solid fa-user-group" />{{
                    user?.followers
                  }}
                  Followers &#8226; {{ user?.following }} Following
                </p>
                <span class="text-xs"
                  ><font-awesome-icon class="pr-1.5" icon="fa-solid fa-location-dot" />
                  {{ user?.location }}
                </span>
                <a
                  class="my-2 block w-full rounded-md border border-gray-400 bg-gray-900 p-1 text-center text-sm transition-all duration-150 ease-in-out hover:border-white hover:bg-gray-800"
                  href="https://github.com/paulo-pertierra"
                  target="_blank"
                >
                  <font-awesome-icon class="pr-1" icon="fa-brands fa-github" />Open My GitHub
                </a>
              </div>
            </div>
            <div
              class="col-span-3 hidden h-full overflow-hidden rounded-lg border lg:col-span-2 lg:block"
            >
              <window-github-profile-readme />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
