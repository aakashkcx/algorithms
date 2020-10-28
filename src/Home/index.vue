<template>
  <div>
    <h1>Algorithms</h1>
    <div id="buttons">
      <router-link to="/sorting">Sorting</router-link>
      <router-link to="/pathfinding">Pathfinding</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#buttons {
  margin-top: 4em;
}
#buttons a {
  display: inline-block;
  padding: 1em 2em;
  margin: 0 1em;
  border: solid black;
  text-decoration: none;
}
</style>
