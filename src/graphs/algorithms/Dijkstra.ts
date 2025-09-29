import Vertex from '../Vertex';
import Edges from '../Edges';

/**
 * Algoritmo de Dijkstra para encontrar el camino más corto desde un vértice origen a todos los demás vértices.
 * @param startVertex Vértice de inicio
 * @param vertices Lista de todos los vértices del grafo
 * @returns Un objeto con las distancias mínimas y los predecesores
 */
export function dijkstra(startVertex: Vertex, vertices: Vertex[]) {
    const distances: Record<string, number> = {};
    const previous: Record<string, Vertex | null> = {};
    const unvisited = new Set<Vertex>(vertices);

    vertices.forEach(v => {
        distances[v.label] = Infinity;
        previous[v.label] = null;
    });
    distances[startVertex.label] = 0;

    while (unvisited.size > 0) {
        let current: Vertex | null = null;
        let minDistance = Infinity;
        for (const v of unvisited) {
            if (distances[v.label] < minDistance) {
                minDistance = distances[v.label];
                current = v;
            }
        }
        if (!current) break;
        unvisited.delete(current);

        for (const neighbor of current.getNeighbors()) {
            if (!unvisited.has(neighbor)) continue;
            const alt = distances[current.label] + current.getEdgeWeight(neighbor);
            if (alt < distances[neighbor.label]) {
                distances[neighbor.label] = alt;
                previous[neighbor.label] = current;
            }
        }
    }
    return { distances, previous };
}


export function getShortestPath(previous: Record<string, Vertex | null>, endLabel: string): string[] {
    const path: string[] = [];
    let currentLabel: string | null = endLabel;
    while (currentLabel && previous[currentLabel]) {
        path.unshift(currentLabel);
        currentLabel = previous[currentLabel]?.label || null;
    }
    if (currentLabel) path.unshift(currentLabel);
    return path;
}
