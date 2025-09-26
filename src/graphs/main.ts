import { Graph } from "./Graph";
//import { Bfs } from './paths/Bfs';
//import { Dfs } from './paths/Dfs'
import { prim } from './algorithms/Prim';

export const main = () => {
    const  graph: Graph = new Graph();
    prim(graph);
}