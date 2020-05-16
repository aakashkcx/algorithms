<template>
  <div id="display">
    <Item v-for="node in array" :key="node.key" :value="node.value" />
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "display",
  props: ["array"],
  components: { Item },
};
</script>

<style scoped>
#display {
  height: 500px;
  width: 1000px;
  margin: auto;
}
</style>
