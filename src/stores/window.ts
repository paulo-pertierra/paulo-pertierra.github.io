import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { Window } from './window.type'
import { usePreferenceStore } from './preferences'

export const useWindowStore = defineStore('windows', () => {
  const preferenceStore = usePreferenceStore()

  const activeWindow: Ref<Window> = ref(
    preferenceStore.isAutoHideStartPage ? preferenceStore.lastOpenedWindow : 'start-page'
  )

  function setActiveWindow(changeWindow: Window) {
    activeWindow.value = activeWindow.value === changeWindow ? 'none' : changeWindow
    preferenceStore.lastOpenedWindow = activeWindow.value
  }
  return { activeWindow, setActiveWindow }
})
