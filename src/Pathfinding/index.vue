<template>
  <div>
    <h1>Pathfinding Algorithms</h1>
    <Display :array="array" @draw="draw" />
    <div>
      <button @click="newGrid">New Grid</button>
    </div>
    <div>
      <button>Depth-First Search</button>
      <button>Breadth-First Search</button>
    </div>
  </div>
</template>

<script>
import Display from "./Display";
import { CELLS } from "./pathfindings";

export default {
  name: "Pathfinding",
  components: { Display },

  data() {
    return {
      array: [[]],
      start: [],
      end: [],
    };
  },

  created() {
    this.newGrid();
  },

  methods: {
    newGrid() {
      let [sx, sy] = (this.start = [10, 12]);
      let [ex, ey] = (this.end = [40, 12]);
      let array = [...Array(50)].map(() => Array(25).fill(CELLS.CELL));
      array[sx][sy] = CELLS.START;
      array[ex][ey] = CELLS.END;
      this.array = array;
    },

    setCell([x, y], cellType) {
      let column = [...this.array[x]];
      column[y] = cellType;
      this.$set(this.array, x, column);
    },

    draw({ coords, buttons, ctrlKey, altKey }) {
      if (buttons != 1) this.setCell(coords, CELLS.CELL);
      else if (ctrlKey) {
        this.setCell(coords, CELLS.START);
        this.setCell(this.start, CELLS.CELL);
        this.start = coords;
      } else if (altKey) {
        this.setCell(coords, CELLS.END);
        this.setCell(this.end, CELLS.CELL);
        this.end = coords;
      } else this.setCell(coords, CELLS.WALL);
    },
  },
};
</script>

<style scoped></style>
