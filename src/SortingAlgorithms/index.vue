<template>
  <div>
    <h1>Sorting Algorithms</h1>
    <Display :array="array" />
    <div>
      <button @click="newArray">New Array</button>
    </div>
    <div>
      <button @click="bubbleSort">Bubble Sort</button>
      <button @click="insertionSort">Insertion Sort</button>
      <button @click="selectionSort">Selection Sort</button>
      <button @click="mergeSort">Merge Sort</button>
      <button @click="quickSort">Quick Sort</button>
    </div>
    <div v-if="list">
      <button @click="start">⏮</button>
      <button @click="previous">⏪</button>
      <button @click="play" v-if="!interval">▶</button>
      <button @click="pause" v-if="interval">⏸</button>
      <button @click="next">⏩</button>
      <button @click="end">⏭</button>
    </div>
    <div v-if="list">
      Comparisons: {{ list.comparisons }}<br />
      Swaps: {{ list.length }}<br />
      Time Taken: {{ list.time.toFixed(3) }} ms
    </div>
  </div>
</template>

<script>
import Display from "./Display";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort,
} from "./sorts";

export default {
  name: "SortingAlgorithms",
  components: { Display },

  data() {
    return {
      original: [],
      array: [],
      list: null,
      interval: null,
    };
  },

  created() {
    this.newArray();
  },

  methods: {
    newArray() {
      this.original = [...Array(100)].map(() =>
        Math.floor(Math.random() * 101)
      );
      this.array = this.original;
      this.list = null;
      this.interval = null;
    },

    start() {
      if (this.list.head) this.array = this.list.head;
    },
    end() {
      if (this.list.tail) this.array = this.list.tail;
    },
    next() {
      if (this.array.next) this.array = this.array.next;
    },
    previous() {
      if (this.array.previous) this.array = this.array.previous;
    },

    play() {
      this.interval = setInterval(() => {
        if (this.array.next) this.array = this.array.next;
        else this.pause();
      }, 1);
    },
    pause() {
      clearInterval(this.interval);
      this.interval = null;
    },

    bubbleSort() {
      this.list = bubbleSort(this.original);
      this.array = this.list.head;
    },
    insertionSort() {
      this.list = insertionSort(this.original);
      this.array = this.list.head;
    },
    selectionSort() {
      this.list = selectionSort(this.original);
      this.array = this.list.head;
    },
    mergeSort() {
      this.list = mergeSort(this.original);
      this.array = this.list.head;
    },
    quickSort() {
      this.list = quickSort(this.original);
      this.array = this.list.head;
    },
  },
};
</script>

<style scoped></style>
