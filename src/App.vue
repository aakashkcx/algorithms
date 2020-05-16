<template>
  <div>
    <SortingAlgorithms />
  </div>
</template>

<script>
import SortingAlgorithms from "./components/SortingAlgorithms";

export default {
  name: "App",
  components: {
    SortingAlgorithms,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  text-align: center;
}
</style>
