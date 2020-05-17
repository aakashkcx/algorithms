import ArrayLinkedList from "./ArrayLinkedList";

export const bubbleSort = (array) => {
  let list = new ArrayLinkedList();
  array = [...array];
  list.add([...array]);
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j].value < array[j - 1].value) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        list.add([...array]);
      }
    }
  }
  return list;
};
export const insertionSort = () => {
  return new ArrayLinkedList();
};
export const selectionSort = () => {
  return new ArrayLinkedList();
};
export const mergeSort = () => {
  return new ArrayLinkedList();
};
