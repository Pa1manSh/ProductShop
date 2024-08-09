<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/favorites">Избранное</router-link> |
      <router-link to="/about">О нас</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
}

nav {
  margin: 20px 0;
}

nav a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

nav a:hover {
  background-color: #007bff;
  color: white;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>
