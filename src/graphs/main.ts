import Vertex from "./Vertex";
//import { Bfs } from './paths/Bfs';
import { Dfs } from './paths/Dfs'

export const main = () => {
    console.log("Hello, Graphs!");
    const v1: Vertex = new Vertex("v1");
    const v2: Vertex = new Vertex("v2");
    const v3: Vertex = new Vertex("v3");
    const v4: Vertex = new Vertex("v4");
    const v5: Vertex = new Vertex("v5");
    const v6: Vertex = new Vertex("v6");
    const v7: Vertex = new Vertex("v7");
    v1.addNeighbor(v2, 10);
    v1.addNeighbor(v3, 3);
    v2.addNeighbor(v1, 10);
    v2.addNeighbor(v4, 5);
    v3.addNeighbor(v4, 3);
    v4.addNeighbor(v2, 5);
    v4.addNeighbor(v3, 3);
    v4.addNeighbor(v1, 6);
    v4.addNeighbor(v5);
    v5.addNeighbor(v6, 9);
    v5.addNeighbor(v7, 4);
    v6.addNeighbor(v7,1);
    Dfs(v1);
    //Bfs(v1);
}