<script setup>
import { ref } from 'vue'

let potatos = ref([])
let potatoStreak = ref(0)

function incrementPotato() {
  if (Math.random() < 0.05) {
    potatos.value.push({ 種類: '🥕', 大きさ: 20, ポテトID: crypto.randomUUID() })
    potatoStreak.value = 0
  } else if (Math.random() < 0.06) {
    potatos.value.push({ 種類: '🧅', 大きさ: 20, ポテトID: crypto.randomUUID() })
    potatoStreak.value = 0
  } else {
    potatos.value.push({ 種類: '🥔', 大きさ: 20, ポテトID: crypto.randomUUID() })
    potatoStreak.value += 1
  }
}
</script>

<template>
  <div style="display: flex">
    <button @click="incrementPotato" id="incrementPotatoButton">Generate Potato</button>
    <div id="streakBoard" style="width: 14rem; height: 20px">
      <span v-if="potatoStreak >= 5"> Potato Streak : {{ potatoStreak }}</span>
    </div>
  </div>
  <div
    style="background-color: saddlebrown; padding: 10px; margin: 5px; border-radius: 10px"
    v-if="potatos.length != 0"
  >
    <span v-for="p in potatos" :key="p.ポテトID">{{ p.種類 }}</span>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bitcount+Single:wght@100..900&display=swap');

h1 {
  font-size: 30px;
}
#incrementPotatoButton {
  background: linear-gradient(to right, blue, yellow, red);
  padding: 8px;
  border: none;
  color: white;
  font-family: 'Mochiy Pop P One', sans-serif;
}

#incrementPotatoButton:hover {
  background: linear-gradient(to right, green, orange, purple);
}

#streakBoard {
  font-family: 'Bitcount Single', sans-serif;
  margin: 10px;
  color: red;
  padding: 10px;
  background-color: black;
  border-radius: 5px;
}
</style>
