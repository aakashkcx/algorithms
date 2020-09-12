<template>
  <div id="display">
    <div class="row" v-for="(row, y) in array" :key="y" :row="y">
      <div
        class="cell"
        v-for="(cell, x) in row"
        :key="x"
        :x="x"
        :y="y"
        :style="{ backgroundColor: getColor(cell) }"
        @mouseenter="mouse([x, y], $event)"
        @mousedown="mouse([x, y], $event)"
        @contextmenu.prevent
      ></div>
    </div>
  </div>
</template>

<script>
import { CELLS } from "./pathfindings";

export default {
  name: "Display",
  props: ["array"],

  methods: {
    getColor(cell) {
      switch (cell) {
        case CELLS.WALL:
          return "dimgray";
        case CELLS.CELL:
          return "white";
        case CELLS.START:
          return "yellow";
        case CELLS.END:
          return "green";
      }
    },

    mouse(coords, { buttons, ctrlKey, altKey }) {
      if (buttons) this.$emit("draw", { coords, buttons, ctrlKey, altKey });
    },
  },
};
</script>

<style scoped>
#display {
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 500px;
  margin: auto;
  border: solid 1px black;
}

.row {
  display: flex;
  height: 100%;
}

.cell {
  display: block;
  width: 100%;
  height: 100%;
  border: solid 1px black;
}
</style>
