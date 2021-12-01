const graph = require('./graph');

const PriorityQueue = require('js-priority-queue');

const dijkstra = (finish) => {
  const queue = new PriorityQueue({comparator: (a, b) => a.distance - b.distance});
  const distances = {};
  const previous = {};
  const start = '0';
  
  let path = []; // to return at the end
  let smallest;

  for (let vertex in graph) {
    if (vertex === start) {
        distances[vertex] = 0;
        queue.queue({vertex, distance: 0});
    } else {
        distances[vertex] = Infinity;
        queue.queue({vertex, distance: Infinity});
    }
    previous[vertex] = null;
  }


  while (queue.length) {
    smallest = queue.dequeue().vertex;
    if (smallest === finish) {
      while(previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    }    
    if (smallest || distances[smallest] !== Infinity) {   
      for (let neighbor in graph[smallest]) {
        let nextNode = {};
        nextNode[neighbor] = graph[smallest][neighbor];
        // Calculate the distance between this node and 'start'
        let candidate = distances[smallest] + nextNode[neighbor];
        let neighborValue = neighbor;
        if (candidate < distances[neighborValue]) {
            // update 'distances' object
            distances[neighborValue] = candidate;
            // update 'previous' object
            previous[neighborValue] = smallest;
            // enqueue priority queue with new smallest distance
            queue.queue({vertex: neighborValue, distance: candidate});
        }
      }
    }
  }
  return path.concat(smallest).reverse();
}
module.exports = dijkstra;