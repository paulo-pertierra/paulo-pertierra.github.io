<script lang="ts" setup>
import { faCircle, faUserGroup, faLocationDot, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCircle, faUserGroup, faLocationDot, faGithub, faThumbsUp)

import { useWindowStore } from '@/stores/window'
const windowStore = useWindowStore()

import { usePreferenceStore } from '@/stores/preferences'
const preferenceStore = usePreferenceStore()
</script>

<template>
  <transition>
    <div v-show="windowStore.activeWindow === 'start-page'" class="relative z-10 h-full w-full">
      <div class="absolute left-1/2 top-1/2 -mt-6 w-full -translate-x-1/2 -translate-y-1/2">
        <div
          class="mx-auto -mt-16 h-[575px] max-w-sm rounded-xl border border-accent bg-background pb-2 md:mt-0 md:max-w-2xl lg:max-w-4xl"
          id="start-page"
          v-drag="{ handle: '#start-page-handle' }"
        >
          <div class="flex h-8 items-center justify-between p-2" id="title-bar">
            <div class="flex h-8 w-full items-center text-xs text-text" id="start-page-handle">
              Welcome Page
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
          <div class="scrollbar h-[500px] w-full overflow-auto p-4 text-text">
            <h1 class="w-full text-center text-2xl font-semibold">
              Welcome to Paulo Pertierra's Experience Showcase
            </h1>
            <div class="p-8">
              <div class="my-3">
                <h1 class="font-bold">What is this?</h1>
                <p class="mb-4">
                  This is my portfolio page, experience design page, and maybe my resume? This shows
                  my entire development footprint in one website, which will be very convenient for
                  employers and people who want to see my work (for some reason).
                </p>
                <p class="mb-4">
                  This will serve as the culmination of all my experience in web development
                  throughout my entire career, so I hope you stick with me through this journey!
                </p>
              </div>
              <button
                class="mx-auto mb-4 mt-10 block w-fit bg-gray-700 p-2 px-6 text-lg font-semibold transition-colors ease-in-out hover:bg-gray-800"
                @click="windowStore.setActiveWindow('none')"
              >
                Get started
              </button>
              <p class="text-center">Scroll down for more info.</p>
              <img
                class="mx-auto mb-20 h-20"
                src="https://media.giphy.com/media/UrzWDQ3VTiDU84R5dx/giphy.gif"
                alt=""
              />
              <div class="my-3">
                <h1 class="font-bold">How do I open pages?</h1>
                <p>
                  That's simple! Think of my website as a PC, or a Mac, it has all the familiar
                  buttons below and you'll feel right at home opening the windows. Trust me, it'll
                  feel natural after a few clicks.
                </p>
              </div>
              <div class="my-3">
                <h1 class="font-bold">Do you design pages like these?</h1>
                <p>
                  No, I have a pretty good background in user interface (UI) and user experience
                  (UX) design. A website facing the public or customers should always feel familiar
                  and fast after all.
                </p>
                <p>...but of course, I will do anything you want me to do! &#58;&#41;</p>
              </div>
              <div class="my-3">
                <h1 class="font-bold">But why did you design it like this?</h1>
                <p>
                  I wanted to create something unique for my portfolio. I don't want it looking like
                  this:
                </p>
                <!-- 
                Close and never look back on the div below. Warning you!
              -->
                <div class="mx-auto w-fit">
                  <div class="my-4 h-48 w-72 border">
                    <div class="border text-xs">
                      <div class="flex justify-between">
                        <div>Paulo's Portfolio</div>
                        <div>Home | About | Blog | Contact</div>
                      </div>
                    </div>
                    <div
                      class="mx-auto mt-2 flex h-16 w-3/4 items-center border bg-gradient-to-r from-transparent to-red-950 p-2 text-sm"
                    >
                      <div>
                        <p>Welcome to my Portfolio!</p>
                        <p class="text-xs">by Paulo Pertierra</p>
                      </div>
                    </div>
                    <div class="m-2 mx-auto w-3/4">
                      <div>
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                        <hr class="my-0.5 border-2 border-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="my-3">
                  <p class="mb-4">
                    For me, I love this standardized web content design, and the main reason why it
                    still exists today is because it is very familiar to users, and it can be
                    customized so many times! I wanted to create a webpage that contains many things
                    I've learnt from web design, but I also want to subvert the layout that has
                    always been used in so many things.
                  </p>
                  <p class="mb-4">
                    Oh, and yep, the windows are draggable, so fidget however you like!
                    <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                  </p>
                  <img
                    class="mx-auto"
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGNnZnJkOWNkaGpqeWlnZXV5c2EzaDIybWZpZnI3NTNncjV4ejVhZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GbcGu0dLiqO1QIL4Jn/giphy.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <button
              class="mx-auto mb-4 block w-fit bg-gray-700 p-2 px-6 text-lg font-semibold transition-colors ease-in-out hover:bg-gray-800"
              @click="windowStore.setActiveWindow('none')"
            >
              Get started
            </button>
          </div>
          <div class="flex w-full items-center justify-between p-2">
            <a href="https://hits.sh/paulo-pertierra.github.io/">
              <img
                alt="Hits"
                src="https://hits.sh/paulo-pertierra.github.io.svg?style=flat-square&color=2d70c8"
              />
            </a>
            <span class="flex items-center text-xs text-text">
              <input
                class="mr-1"
                type="checkbox"
                name="never-show"
                id="never-show"
                v-model="preferenceStore.isAutoHideStartPage"
              /><span>Don't show me this again.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
