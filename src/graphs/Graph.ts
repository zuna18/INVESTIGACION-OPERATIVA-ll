import type Edges from "./Edges";
import Vertex from "./Vertex";

export class Graph {
    vertexList: Vertex[];
    edgeList: Edges[];
    constructor() {
        this.vertexList = [];
        this.edgeList = [];
        const v1: Vertex = new Vertex("v1");
        const v2: Vertex = new Vertex("v2");
        const v3: Vertex = new Vertex("v3");
        const v4: Vertex = new Vertex("v4");
        const v5: Vertex = new Vertex("v5");
        const v6: Vertex = new Vertex("v6");
        const v7: Vertex = new Vertex("v7");
        const edge1 = v1.addNeighbor(v2, 10);
        const edge2 =  v1.addNeighbor(v3, 3);
        const edge3 = v2.addNeighbor(v1, 10);
        const edge4 = v2.addNeighbor(v4, 5);
        const edge5 = v3.addNeighbor(v4, 3);
        const edge6 = v4.addNeighbor(v2, 5);
        const edge7 = v4.addNeighbor(v3, 3);
        const edge8 = v4.addNeighbor(v1, 6);
        const edge9 = v4.addNeighbor(v5);
        const edge10 = v5.addNeighbor(v6, 9);
        const edge11 = v5.addNeighbor(v7, 4);
        const edge12 = v6.addNeighbor(v7,1);
        this.addVertex(v1);
        this.addVertex(v2);
        this.addVertex(v3);
        this.addVertex(v4);
        this.addVertex(v5);
        this.addVertex(v6);
        this.addEdges(edge1);
        this.addEdges(edge2);
        this.addEdges(edge3);
        this.addEdges(edge4);
        this.addEdges(edge5);
        this.addEdges(edge6);
        this.addEdges(edge7);
        this.addEdges(edge8);
        this.addEdges(edge9);
        this.addEdges(edge10);
        this.addEdges(edge11);
        this.addEdges(edge12);
    }
    public addVertex(vertex: Vertex) {
        this.vertexList.push(vertex);
    }
    public addEdges(edges: Edges) {
        this.edgeList.push(edges);
    }
    public getVertex() {
        return this.vertexList;
    }
    public getEdges() {
        return this.edgeList;
    }
}