export const CELLS = {
  WALL: 0,
  CELL: 1,
  VISITED: 2,
  PATH: 3,
  START: 4,
  END: 5,
};

let STOP = false;

export const stop = () => {
  STOP = true;
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
      visited[[x, y]] = false;
    }

  unvisited.push(start);
  distance[start] = 0;

  const loop = () => {
    if (!unvisited.length) return;

    unvisited.sort((a, b) => distance[a] - distance[b]);
    const current = unvisited.shift();

    const [x, y] = current;
    visited[current] = true;
    setCell(current, CELLS.VISITED);

    if (x == end[0] && y == end[1]) {
      let temp = end;
      while (previous[temp]) {
        temp = previous[temp];
        setCell(temp, CELLS.PATH);
      }
      return;
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
        unvisited.push(neighbor);
      }

    if (!STOP) window.requestAnimationFrame(loop);
    else STOP = false;
  };

  window.requestAnimationFrame(loop);
};

export const aStarSearch = (array, start, end, setCell) => {
  const unvisited = [];

  const gScore = {};
  const fScore = {};
  const previous = {};
  const visited = {};

  const heuristic = ([x, y]) => {
    return Math.abs(x - end[0]) + Math.abs(y - end[1]);
  };

  for (let x = 0; x < array.length; x++)
    for (let y = 0; y < array[x].length; y++) {
      if (array[x][y] == CELLS.WALL) continue;
      gScore[[x, y]] = Infinity;
      fScore[[x, y]] = Infinity;
      visited[[x, y]] = false;
    }

  unvisited.push(start);
  gScore[start] = 0;
  fScore[start] = heuristic(start);

  const loop = () => {
    if (!unvisited.length) return;

    unvisited.sort((a, b) => fScore[a] - fScore[b]);
    const current = unvisited.shift();

    const [x, y] = current;
    visited[current] = true;
    setCell(current, CELLS.VISITED);

    if (x == end[0] && y == end[1]) {
      let temp = end;
      while (previous[temp]) {
        temp = previous[temp];
        setCell(temp, CELLS.PATH);
      }
      return;
    }

    const neighbors = [];
    if (x < array.length - 1) neighbors.push([x + 1, y]);
    if (y < array[x].length - 1) neighbors.push([x, y + 1]);
    if (x > 0) neighbors.push([x - 1, y]);
    if (y > 0) neighbors.push([x, y - 1]);

    for (const neighbor of neighbors)
      if (gScore[current] + 1 < gScore[neighbor]) {
        gScore[neighbor] = gScore[current] + 1;
        fScore[neighbor] = gScore[neighbor] + heuristic(neighbor);
        previous[neighbor] = current;
        if (!visited[neighbor]) unvisited.push(neighbor);
      }

    if (!STOP) window.requestAnimationFrame(loop);
    else STOP = false;
  };

  window.requestAnimationFrame(loop);
};
