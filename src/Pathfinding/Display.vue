<template>
  <div id="display">
    <div class="column" v-for="(column, x) in array" :key="x" :column="x">
      <div
        class="cell"
        v-for="(cell, y) in column"
        :key="y"
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
        case CELLS.VISITED:
          return "lightgray";
        case CELLS.PATH:
          return "gold";
        case CELLS.START:
          return "red";
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
  flex-direction: row;
  width: 1000px;
  height: 500px;
  margin: auto;
  border: solid 1px black;
}

.column {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.cell {
  display: block;
  width: 100%;
  height: 100%;
  border: solid 1px black;
}
</style>
