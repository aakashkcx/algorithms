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
      let start = (this.start = [10, 12]);
      let end = (this.end = [40, 12]);
      let array = [...Array(25)].map(() => Array(50).fill(CELLS.CELL));
      array[start[1]][start[0]] = CELLS.START;
      array[end[1]][end[0]] = CELLS.END;
      this.array = array;
    },

    setCell([x, y], cellType) {
      let row = [...this.array[y]];
      row[x] = cellType;
      this.$set(this.array, y, row);
    },

    draw({ coords: [x, y], buttons, ctrlKey, altKey }) {
      if (buttons != 1) this.setCell([x, y], CELLS.CELL);
      else if (ctrlKey) {
        this.setCell([x, y], CELLS.START);
        this.setCell(this.start, CELLS.CELL);
        this.start = [x, y];
      } else if (altKey) {
        this.setCell([x, y], CELLS.END);
        this.setCell(this.end, CELLS.CELL);
        this.end = [x, y];
      } else this.setCell([x, y], CELLS.WALL);
    },
  },
};
</script>

<style scoped></style>
