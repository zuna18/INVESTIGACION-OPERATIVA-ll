import type { Graph } from "../Graph";
import type Vertex from "../Vertex";

const isEmpty = (list: Vertex[]) => {
    return list.length === 0;
}
const removeItem = (item: Vertex, list: Vertex[]) => {
    const index = list.indexOf(item);
    if (index > -1) {
        list.splice(index, 1);
    }
} 
const getTheMinimusVertex = (connectedList: Vertex[], disconnectedList: Vertex[]) => {
    let candidateVertex: Vertex | null = null;
    let minWeight = Infinity;
    for (const connectedVertex of connectedList) {
        for (const neighbor of connectedVertex.getNeighbors()) {
            if (disconnectedList.includes(neighbor)) {
                const weight = connectedVertex.getEdgeWeight(neighbor);
                if (weight < minWeight) {
                    minWeight = weight;
                    candidateVertex = neighbor;
                }
            }
        }
    }
    return candidateVertex;

}

export const prim = (graph: Graph) => {
    // step 0;
    const connectedList: Vertex[] = [];
    const disconnectedList: Vertex[] = graph.getVertex();
    // step 1;
    const firstVertex = disconnectedList.shift();
    if (firstVertex) {
        connectedList.push(firstVertex);
        firstVertex.setIsVisited(true);
    }
    // step k;
    while (!isEmpty(disconnectedList)) {
        const isTheMinVertex: Vertex | null = getTheMinimusVertex(connectedList, disconnectedList);
        if (isTheMinVertex) {
            connectedList.push(isTheMinVertex);
            removeItem(isTheMinVertex, disconnectedList);
            isTheMinVertex.setIsVisited(true);
        }

        // laboratorio: generar el arbol resultante
        console.log("connectedList: ", connectedList.map(v => v.label));
        console.log("disconnectedList: ", disconnectedList.map(v => v.label));
        
        
    }   
}
