import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const usePreferenceStore = defineStore(
  'preferences',
  () => {
    const isAutoHideStartPage: Ref<boolean> = ref(false)
    return { isAutoHideStartPage }
  },
  { persist: true }
)
