<template>
  <div>
    <h1>Pathfinding Algorithms</h1>
    <Display :array="array" @draw="draw" />
    <div>
      <button @click="newGrid">New Grid</button>
    </div>
    <div>
      <button @click="dijkstras">Dijkstras</button>
      <button @click="aStar">A* Search</button>
    </div>
    <div>
      <button @click="stop">Stop</button>
    </div>
  </div>
</template>

<script>
import Display from "./Display";
import { CELLS, stop, dijkstrasAlgorithm, aStarSearch } from "./algorithms";

const [COLS, ROWS] = [64, 32];
const START = [8, 16];
const END = [56, 16];

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
      const array = [...Array(COLS)].map(() => Array(ROWS).fill(CELLS.CELL));
      const [sx, sy] = (this.start = START);
      const [ex, ey] = (this.end = END);
      array[sx][sy] = CELLS.START;
      array[ex][ey] = CELLS.END;
      this.array = array;
    },

    stop() {
      stop();
    },

    setCell([x, y], cellType) {
      if (x == this.start[0] && y == this.start[1]) return;
      if (x == this.end[0] && y == this.end[1]) return;
      let column = [...this.array[x]];
      column[y] = cellType;
      this.$set(this.array, x, column);
    },

    draw({ coords, buttons, ctrlKey, altKey }) {
      if (buttons != 1) this.setCell(coords, CELLS.CELL);
      else if (ctrlKey) {
        this.setCell(coords, CELLS.START);
        let oldStart = this.start;
        this.start = coords;
        this.setCell(oldStart, CELLS.CELL);
      } else if (altKey) {
        this.setCell(coords, CELLS.END);
        let oldEnd = this.end;
        this.end = coords;
        this.setCell(oldEnd, CELLS.CELL);
      } else this.setCell(coords, CELLS.WALL);
    },

    dijkstras() {
      dijkstrasAlgorithm(this.array, this.start, this.end, this.setCell);
    },

    aStar() {
      aStarSearch(this.array, this.start, this.end, this.setCell);
    },
  },
};
</script>

<style scoped></style>
