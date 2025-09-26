import Edges from "./Edges";

class Vertex {
    label: string;
    isVisited: boolean = false;
    neighbors: Vertex[] = [];
    edges: Edges[] = [];
    mapVertex: Record<string, Edges> = {};
    constructor(label: string) {
        this.label = label;
        this.mapVertex = {};
    }
    public addNeighbor(neighbor: Vertex, weight: number = 1): Edges {
        this.neighbors.push(neighbor);
        const edge: Edges = new Edges(this, neighbor, weight);
        this.edges.push(edge);
        this.mapVertex[`${this.label}-${neighbor.label}`] = edge;
        return edge;
    }
    public getEdgeWeight(neighbor: Vertex) {
        return this.mapVertex[`${this.label}-${neighbor.label}`]?.weight ?? Infinity;
    }
    public setIsVisited(isVisited: boolean): void {
        this.isVisited = isVisited;
    }
    public getIsVisited() {
        return this.isVisited;
    }
    public printLabel() {
        console.log(this.label);
    }
    public getNeighbors() {
        return this.neighbors;
    }
    
}
export default Vertex;