import { defineStore } from 'pinia'
export const useレシピのデータ = defineStore('レシピのデータ_ゲームのカードみたいに', {
  state: () => ({
    レシピたち: [],
  }),
  actions: {
    async fetchレシピたち() {
      if (this.レシピたち.length === 0) {
        const response = await fetch('/src/assets/potato_recipes.json')
        this.レシピたち = await response.json()
      } else {
        console.log('もうjsonファイルは読み込みされてるから読み込みません！')
      }
    },
  },
})
