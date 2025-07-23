<script setup>
const サブタイトル = 'ホクホク！にんじん好きも、玉ねぎ好きも、うなる！'

import { computed } from 'vue'
import { onMounted } from 'vue'
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

let レシピたち_filtered = computed(() => {
  let ユーザーが指定した材料 = route.query.ingredient || ''
  if (ユーザーが指定した材料 === '') {
    return レシピたち.value
  }
  return レシピたち.value.filter((r) => {
    return r.必要な材料.some((材料) => {
      return 材料.名前 === ユーザーが指定した材料
    })
  })
})
</script>
<template>
  <div>
    <p>{{ サブタイトル }}</p>
    <h1>じゃがいもレシピ集</h1>
    <div v-for="レシピ in レシピたち_filtered" :key="レシピ.name">
      <router-link :to="`/recipe/${レシピ.name}`" style="text-decoration: none; color: orange">
        <h2>🥔{{ レシピ.name }}🥔</h2>
      </router-link>
      <div>{{ レシピ.instruction_short }}</div>
      <div style="display: flex">
        <router-link
          v-for="材料 in レシピ.必要な材料"
          :key="材料.名前"
          :to="{ query: { ingredient: 材料.名前 } }"
          style="text-decoration: none"
        >
          <div
            style="
              background-color: orange;
              color: white;
              padding: 5px;
              margin: 5px;
              border-radius: 10px;
            "
          >
            {{ 材料.名前 }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
