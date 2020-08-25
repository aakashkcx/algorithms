<template>
  <div>
    <h1>Pathfinding Algorithms</h1>
    <Display :array="array" @draw="draw" />
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
    };
  },

  created() {
    let array = [...Array(25)].map(() => Array(50).fill(CELLS.CELL));
    array[12][10] = CELLS.START;
    array[12][40] = CELLS.END;
    this.array = array;
  },

  methods: {
    draw({ coords: [x, y], buttons }) {
      let row = [...this.array[y]];
      row[x] = buttons == 1 ? CELLS.WALL : CELLS.CELL;
      this.$set(this.array, y, row);
    },
  },
};
</script>

<style scoped></style>
