<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/sorting">Sorting</router-link> |
      <router-link to="/pathfinding">Pathfinding</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", "Segoe UI Emoji", sans-serif;
  text-align: center;
}
</style>
