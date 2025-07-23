<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useレシピのデータ } from './レシピのデータ'

let sansho = useレシピのデータ()

const route = useRoute()

onMounted(async () => {
  await sansho.fetchレシピたち()
})

let レシピたち = computed(() => {
  return sansho.レシピたち
})

let このページの対象となるレシピ = computed(() => {
  const 料理名 = route.params.recipe_name
  const 該当する料理オブジェクト = レシピたち.value.find((れ) => れ.name === 料理名)
  return 該当する料理オブジェクト
})
</script>
<template>
  <h1>{{ このページの対象となるレシピ.name }}</h1>
  <ul>
    <li v-for="ざ in このページの対象となるレシピ.必要な材料" v-bind:key="ざ.名前">
      {{ ざ.名前 }} : {{ ざ.分量 }} {{ ざ.単位 }}
    </li>
  </ul>

  <div>
    <div v-for="説明 in このページの対象となるレシピ.instructions_long" v-bind:key="説明">
      {{ 説明 }}
    </div>
  </div>
</template>
