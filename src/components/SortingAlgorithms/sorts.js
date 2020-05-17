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

export const insertionSort = (array) => {
  let list = new ArrayLinkedList();
  array = [...array];
  list.add([...array]);
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1].value > array[j].value; j--) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      list.add([...array]);
    }
  }
  return list;
};

export const selectionSort = (array) => {
  let list = new ArrayLinkedList();
  array = [...array];
  list.add([...array]);
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++)
      if (array[j].value < array[min].value) min = j;
    if (min != i) {
      [array[min], array[i]] = [array[i], array[min]];
      list.add([...array]);
    }
  }
  return list;
};

export const mergeSort = (array) => {
  let list = new ArrayLinkedList();
  array = [...array];
  list.add([...array]);
  return list;
};

export const quickSort = (array) => {
  let list = new ArrayLinkedList();
  array = [...array];
  list.add([...array]);

  const swap = (a, b) => {
    if (a != b) {
      [array[a], array[b]] = [array[b], array[a]];
      list.add([...array]);
    }
  };

  let stack = [];
  stack.push([0, array.length - 1]);

  while (stack.length) {
    let [start, end] = stack.pop();

    let pivot = end;
    let pIndex = start;

    for (let i = start; i < end; i++) {
      if (array[i].value <= array[pivot].value) {
        swap(i, pIndex);
        pIndex++;
      }
    }
    swap(pIndex, end);

    if (pIndex - 1 > start) stack.push([start, pIndex - 1]);
    if (pIndex + 1 < end) stack.push([pIndex + 1, end]);
  }

  return list;
};
