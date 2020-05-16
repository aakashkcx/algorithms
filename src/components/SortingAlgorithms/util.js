export const newArray = (size) =>
  [...Array(size)].map((_, key) => ({
    key,
    value: Math.floor(Math.random() * (size + 1)),
  }));
