import Vertex  from "./Vertex";
class Edges {
    source: Vertex;
    destination: Vertex;
    weight: Number;
    constructor(source: Vertex, destination: Vertex, weight: Number = 1) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}
export default Edges;