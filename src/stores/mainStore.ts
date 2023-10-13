import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('headerTab', () => {
  const hTab = ref([{

  }]);
  function changeTab(window: {
    type: String
  }) {
    hTab.value.push(window);
  }

  return { hTab, changeTab }
})
