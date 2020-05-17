<template>
  <div id="display">
    <transition-group :name="animate ? 'flip-list' : false" tag="div">
      <Item v-for="node in array" :key="node.key" :value="node.value" />
    </transition-group>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "display",
  props: ["array", "animate"],
  components: { Item },
};
</script>

<style scoped>
#display {
  height: 500px;
  width: 1000px;
  margin: auto;
}
.flip-list-move {
  transition: transform 250ms;
}
</style>
