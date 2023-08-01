import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { Window } from './window.type'
export const usePreferenceStore = defineStore(
  'preferences',
  () => {
    const isAutoHideStartPage: Ref<boolean> = ref(false)
    const lastOpenedWindow: Ref<Window> = ref('none')
    return { isAutoHideStartPage, lastOpenedWindow }
  },
  { persist: true }
)
