//     statement: Find the shortest path between two nodes in a graph
//     description: The shortest path between two nodes in a graph is the path with the least number of edges between the two nodes
//  This can be found using a variety of algorithms, such as Dijkstra's algorithm or A* search
//
//     inputExample: A graph with two nodes and three edges
//

// 0---1
// |   |
// |   |
// 3---2
// |
// |
// 4
// export const uGraph1 = {
//   0: [1, 3],
//   1: [0, 2],
//   2: [1, 3],
//   3: [0, 2, 4],
//   4: [3],
// };

// use DFS
export function shortestUnweightedPath(g, a, b) {
  const visited = {};
  for (const n in g) {
    visited[n] = false;
  }
  const queue = [{ node: a, depth: 0 }];
  // first step we visit right away, because it was entered into queue
  visited[a] = true;
  while (queue.length > 0) {
    const current = queue.shift(); // fifo
    if (current.node === b) {
      return current.depth;
    }
    for (let i = 0; i < g[current.node].length; i++) {
      const neighbor = g[current.node][i];
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push({ node: neighbor, depth: current.depth + 1 });
      }
    }
  }

  // if it doesnt work out we return -1
  return -1;
}
