<template>
  <div id="display">
    <div
      class="item"
      v-for="(value, index) in array"
      :key="index"
      :style="{ height: value * 7.2 + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Display",
  props: ["array"],
};
</script>

<style scoped>
#display {
  display: flex;
  width: 1280px;
  height: 720px;
  margin: auto;
  align-items: flex-end;
}
.item {
  background-color: black;
  width: 100%;
}
</style>
