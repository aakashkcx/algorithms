<template>
  <div>
    <h1>Sorting Algorithms</h1>
    <div>
      <button @click="newArray">New Array</button>
    </div>
    <Display :array="array" :animate="!interval" />
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
  </div>
</template>

<script>
import Display from "./SortingAlgorithms/Display";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort,
} from "./SortingAlgorithms/sorts";
import { newArray } from "./SortingAlgorithms/util";

export default {
  name: "SortingAlgorithms",

  components: { Display },

  data() {
    return {
      array: newArray(100),
      list: null,
      interval: null,
    };
  },

  methods: {
    newArray: function() {
      this.array = newArray(100);
      this.list = null;
    },
    start: function() {
      if (this.list.head) this.array = this.list.head;
    },
    end: function() {
      if (this.list.tail) this.array = this.list.tail;
    },
    next: function() {
      if (this.array.next) this.array = this.array.next;
    },
    previous: function() {
      if (this.array.previous) this.array = this.array.previous;
    },
    play: function() {
      this.interval = setInterval(() => {
        if (this.array.next) this.array = this.array.next;
        else this.pause();
      }, 1);
    },
    pause: function() {
      clearInterval(this.interval);
      this.interval = null;
    },
    bubbleSort: function() {
      this.list = bubbleSort(this.array);
      this.array = this.list.head;
    },
    insertionSort: function() {
      this.list = insertionSort(this.array);
      this.array = this.list.head;
    },
    selectionSort: function() {
      this.list = selectionSort(this.array);
      this.array = this.list.head;
    },
    mergeSort: function() {
      this.list = mergeSort(this.array);
      this.array = this.list.head;
    },
    quickSort: function() {
      this.list = quickSort(this.array);
      this.array = this.list.head;
    },
  },
};
</script>

<style scoped></style>
