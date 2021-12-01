const graph = require('../util/graph');
const dijkstra = require('../util/dijkstra');
let path;

exports.findPath = (junctionId) => {
  // remember the junctionId is a string and not a number.
  path = dijkstra(junctionId);
  return {
    status: 'OK',
    data: `received with junction ID: ${junctionId}`,
    path
  }
}

exports.sendPath = () => {
  return path? path: "None";
}