/* Traverse children easy on a tree DFS use stack also uses recursive */
class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    }
    if (this.adjacencyList[vertex2] && this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  dfsRecursive(vertex) {
    const result = [];
    const visited = new Set();

    this.dfsRecursiveHelper(vertex, visited, result);
    return result;
  }

  dfsRecursiveHelper(vertex, visited, result) {
    if (!vertex) return null;
    visited.add(vertex);
    result.push(vertex);
    this.adjacencyList[vertex].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        this.dfsRecursiveHelper(neighbor, visited, result);
      }
    });
  }

  dfsIterative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = new Set(vertex);
    let currentVertex;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// console.log(graph.dfsRecursive('A'));
// console.log(graph.dfsIterative('A'));
// console.log(graph);
