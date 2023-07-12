import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('headerTab', () => {
  const hTab = ref('Home');
  function changeTab(tab: string) {
    hTab.value = tab;
  }

  return { hTab, changeTab }
})
