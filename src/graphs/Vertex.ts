import Edges from "./Edges";

class Vertex {
    label: string;
    isVisited: boolean = false;
    neighbors: Vertex[] = [];
    edges: Edges[] = [];
    constructor(label: string) {
        this.label = label;
    }
    public addNeighbor(neighbor: Vertex, weight: number = 1): void {
        this.neighbors.push(neighbor);
        const edge: Edges = new Edges(this, neighbor, weight);
        this.edges.push(edge);
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