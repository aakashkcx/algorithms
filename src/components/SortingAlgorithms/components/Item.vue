<template>
  <div class="item" :style="{ height: value * 5 + 'px' }"></div>
</template>

<script>
export default {
  name: "Item",
  props: ["value"],
};
</script>

<style scoped>
.item {
  display: inline-block;
  width: 10px;
  background-color: black;
}
</style>
