import SortingLinkedList from "./SortingLinkedList";

export const bubbleSort = (array) => {
  let list = new SortingLinkedList();
  list.add([...array]);

  array = [...array];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        list.add([...array]);
      }
      list.comparisons++;
    }
  }

  list.finish();
  return list;
};

export const insertionSort = (array) => {
  let list = new SortingLinkedList();
  list.add([...array]);

  array = [...array];
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      list.add([...array]);
      list.comparisons++;
    }
  }

  list.finish();
  return list;
};

export const selectionSort = (array) => {
  let list = new SortingLinkedList();
  list.add([...array]);

  array = [...array];
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
      list.comparisons++;
    }
    if (min != i) {
      [array[min], array[i]] = [array[i], array[min]];
      list.add([...array]);
    }
  }

  list.finish();
  return list;
};

export const mergeSort = (array) => {
  let list = new SortingLinkedList();
  list.add([...array]);

  array = [...array];

  for (let size = 1; size < array.length; size *= 2) {
    for (let left = 0; left < array.length - 1; left += 2 * size) {
      let mid = Math.min(left + size - 1, array.length - 1);
      let right = Math.min(left + 2 * size - 1, array.length - 1);

      let n1 = mid - left + 1;
      let n2 = right - mid;

      let tempL = [];
      let tempR = [];
      for (let i = 0; i < n1; i++) tempL[i] = array[left + i];
      for (let j = 0; j < n2; j++) tempR[j] = array[mid + 1 + j];

      let i = 0;
      let j = 0;
      let k = left;

      while (i < n1 && j < n2) {
        if (tempL[i] > tempR[j]) {
          array[k] = tempR[j];
          j++;
        } else {
          array[k] = tempL[i];
          i++;
        }
        k++;
        list.add([...array]);
      }

      while (i < n1) {
        array[k] = tempL[i];
        i++;
        k++;
        list.add([...array]);
      }

      while (j < n2) {
        array[k] = tempR[j];
        j++;
        k++;
        list.add([...array]);
      }
    }
  }

  list.finish();
  return list;
};

export const quickSort = (array) => {
  let list = new SortingLinkedList();
  list.add([...array]);

  array = [...array];

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
      if (array[i] <= array[pivot]) {
        swap(i, pIndex);
        pIndex++;
      }
      list.comparisons++;
    }
    swap(pIndex, end);

    if (pIndex - 1 > start) stack.push([start, pIndex - 1]);
    if (pIndex + 1 < end) stack.push([pIndex + 1, end]);
  }

  list.finish();
  return list;
};
