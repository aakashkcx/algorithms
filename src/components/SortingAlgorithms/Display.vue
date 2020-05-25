<template>
  <div id="display">
    <transition-group :name="animate ? 'flip-list' : ''" tag="div">
      <div
        v-for="node in array"
        :key="node.key"
        class="item"
        :style="{
          height: node.value * 5 + 'px',
          width: 1000 / array.length + 'px',
        }"
      ></div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "display",
  props: ["array", "animate"],
};
</script>

<style scoped>
#display {
  height: 500px;
  width: 1000px;
  margin: auto;
}
.item {
  display: inline-block;
  background-color: black;
}
.flip-list-move {
  transition: transform 250ms;
}
</style>
