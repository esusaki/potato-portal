<template>
  <div id="全体的に">
    <nav>
      <router-link to="/recipes" class="link-button">レシピ一覧</router-link>
      <router-link to="/potato-game" class="link-button">お楽しみ</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');

.link-button {
  background-color: white;
  padding: 10px;
  color: orange;
  text-decoration: none;
  margin: 5px;
  border-radius: 5px;
}
nav {
  display: flex;
}
#全体的に {
  color: orange;
  font-family: 'Mochiy Pop P One', sans-serif;
}
</style>
