//     statement: find the number of connected components in a graph
//     description: A connected component of an undirected graph is a subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the supergraph
//
//     inputExample: A graph G with n vertices and m edges
//

// export const graph2 = {
//   0: [1],
//   1: [0, 2],
//   2: [1],
//   3: [4],
//   4: [3],
//   5: [],
// };

// could not figure out how to mark nodes as visited
// turns out have to use separate object to mark what is visited and what is not
// because if you mark itself, then it seems to skip  1: visited: [2,3] skips whole array... which you have to check
export function countConnectedNodes(g) {
  let count = 0;
  const visited = {};
  for (const key in g) {
    visited[key] = false;
  }

  for (const n in g) {
    if (Object.hasOwnProperty.call(g, n)) {
      if (!visited[n]) {
        count++;
        dfs(g, n, visited);
      }
    }
  }
  return count;
}

function dfs(graph, n, visited) {
  if (!graph || !n || visited[n]) return;

  visited[n] = true;
  for (let i = 0; i < graph[n].length; i++) {
    dfs(graph, graph[n][i], visited);
  }
}
