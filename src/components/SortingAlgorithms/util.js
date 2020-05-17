export const newArray = (size, maxSize) =>
  [...Array(size)].map((_, key) => ({
    key,
    value: Math.floor(Math.random() * (maxSize + 1)),
  }));
