/* 
Start with undirected graph 
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //   Add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Adding a edge
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
}

const graph = new Graph();

// graph.addVertex('Tokoyo');
// graph.addVertex('Dhaka');
// graph.addVertex('Jesore');
// graph.addVertex('Hong Kong');
// graph.addEdge('Tokoyo', 'Hong Kong');
// graph.addEdge('Dhaka', 'Hong Kong');
// graph.addEdge('Tokoyo', 'Dhaka');
// graph.addEdge('Dhaka', 'Jesore');
// // graph.removeEdge('Tokoyo', 'Dhaka');
// // graph.removeEdge('Dhaka', 'Jesore');
// graph.removeVertex('Hong Kong');
// graph.removeVertex('Hong Kong');
// console.log(graph);

/* Visiting/Updating/Checking */
