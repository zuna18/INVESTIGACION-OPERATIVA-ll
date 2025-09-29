import Vertex from '../Vertex';
import { dijkstra, getShortestPath } from './Dijkstra';

// test de Dijkstra 
const A = new Vertex('A');
const B = new Vertex('B');
const C = new Vertex('C');
const D = new Vertex('D');
const E = new Vertex('E');

A.addNeighbor(B, 2);
A.addNeighbor(C, 5);
B.addNeighbor(C, 1);
B.addNeighbor(D, 2);
C.addNeighbor(D, 3);
C.addNeighbor(E, 1);
D.addNeighbor(E, 1);

const vertices = [A, B, C, D, E];

const { distances, previous } = dijkstra(A, vertices);

console.log('Distancias mínimas desde A:');
console.log(distances);

console.log('Camino más corto de A a E:');
console.log(getShortestPath(previous, 'E'));
