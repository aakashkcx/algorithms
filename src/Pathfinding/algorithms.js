export const CELLS = {
  WALL: 0,
  CELL: 1,
  VISITED: 2,
  PATH: 3,
  START: 4,
  END: 5,
};

export const dijkstrasAlgorithm = (array, start, end, setCell) => {
  const unvisited = [];
  const distance = {};
  const previous = {};
  const visited = {};

  for (let x = 0; x < array.length; x++)
    for (let y = 0; y < array[x].length; y++) {
      if (array[x][y] == CELLS.WALL) continue;
      distance[[x, y]] = Infinity;
      previous[[x, y]] = undefined;
      visited[[x, y]] = false;
      unvisited.push([x, y]);
    }

  distance[start] = 0;

  const loop = () => {
    if (!unvisited.length) return;

    unvisited.sort((a, b) => distance[a] - distance[b]);
    const current = unvisited.shift();
    const [x, y] = current;
    visited[current] = true;
    setCell(current, CELLS.VISITED);

    if (x == end[0] && y == end[1]) {
      const path = [end];
      let temp = end;
      while (previous[temp]) {
        path.push(previous[temp]);
        temp = previous[temp];
        setCell(temp, CELLS.PATH);
      }
      return path.reverse();
    }

    const neighbors = [];
    if (x < array.length - 1) neighbors.push([x + 1, y]);
    if (y < array[x].length - 1) neighbors.push([x, y + 1]);
    if (x > 0) neighbors.push([x - 1, y]);
    if (y > 0) neighbors.push([x, y - 1]);

    for (const neighbor of neighbors)
      if (!visited[neighbor] && distance[current] + 1 < distance[neighbor]) {
        distance[neighbor] = distance[current] + 1;
        previous[neighbor] = current;
      }

    window.requestAnimationFrame(loop);
  };

  window.requestAnimationFrame(loop);
};

export const aStarSearch = (array, start, end, setCell) => {
  const unvisited = [];
  const distance = {};
  const previous = {};
  const visited = {};

  for (let x = 0; x < array.length; x++)
    for (let y = 0; y < array[x].length; y++) {
      if (array[x][y] == CELLS.WALL) continue;
      distance[[x, y]] = Infinity;
      previous[[x, y]] = undefined;
      visited[[x, y]] = false;
      unvisited.push([x, y]);
    }

  distance[start] = 0;

  const loop = () => {
    if (!unvisited.length) return;

    unvisited.sort((a, b) => distance[a] - distance[b]);
    const current = unvisited.shift();
    const [x, y] = current;
    visited[current] = true;
    setCell(current, CELLS.VISITED);

    if (x == end[0] && y == end[1]) {
      const path = [end];
      let temp = end;
      while (previous[temp]) {
        path.push(previous[temp]);
        temp = previous[temp];
        setCell(temp, CELLS.PATH);
      }
      return path.reverse();
    }

    const neighbors = [];
    if (x < array.length - 1) neighbors.push([x + 1, y]);
    if (y < array[x].length - 1) neighbors.push([x, y + 1]);
    if (x > 0) neighbors.push([x - 1, y]);
    if (y > 0) neighbors.push([x, y - 1]);

    for (const neighbor of neighbors)
      if (!visited[neighbor] && distance[current] + 1 < distance[neighbor]) {
        distance[neighbor] = distance[current] + 1;
        previous[neighbor] = current;
      }

    window.requestAnimationFrame(loop);
  };

  window.requestAnimationFrame(loop);
};
