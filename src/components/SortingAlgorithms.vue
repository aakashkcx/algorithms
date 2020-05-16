<template>
  <div>
    <h1>Sorting Algorithms</h1>
    <Display :array="array" />
    <div>
      <button @click="bubbleSort">Bubble Sort</button>
      <button @click="insertionSort">Insertion Sort</button>
      <button @click="selectionSort">Selection Sort</button>
      <button @click="mergeSort">Merge Sort</button>
      <button @click="newArray">New Array</button>
    </div>
  </div>
</template>

<script>
import Display from "./SortingAlgorithms/components/Display";
import { newArray } from "./SortingAlgorithms/util";

export default {
  name: "SortingAlgorithms",

  components: { Display },

  data() {
    return {
      array: Array(100).fill(),
      list: null,
    };
  },

  created() {
    this.newArray();
  },

  methods: {
    newArray: function() {
      this.array = newArray(100);
    },
    bubbleSort: function() {
      this.array = this.array.sort((a, b) => a.value - b.value);
    },
    insertionSort: function() {
      this.array = this.array.sort((a, b) => a.value - b.value);
    },
    selectionSort: function() {
      this.array = this.array.sort((a, b) => a.value - b.value);
    },
    mergeSort: function() {
      this.array = this.array.sort((a, b) => a.value - b.value);
    },
  },
};
</script>

<style scoped></style>
