import { createApp } from 'vue'
import jaga from './じゃがいも.vue'
import レシピ一覧のコンポーネント from './レシピ.vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import 土台さん from './土台さん.vue'
import { createPinia } from 'pinia'
import レシピ詳細のコンポーネント from './レシピ詳細.vue'

const ルーティング設定たち = [
  { path: '/potato-game', component: jaga },
  { path: '/recipes', component: レシピ一覧のコンポーネント },
  { path: '/recipe/:recipe_name', component: レシピ詳細のコンポーネント },
]

const ルーティングするやつ = createRouter({
  history: createWebHistory(),
  routes: ルーティング設定たち,
})

const dodai = createApp(土台さん)

const ピーニャさん = createPinia()
dodai.use(ピーニャさん)

dodai.use(ルーティングするやつ)
dodai.mount('#ここにきてくれ')
