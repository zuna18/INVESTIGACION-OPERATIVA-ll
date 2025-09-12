import type Vertex from "../Vertex";

export const Bfs = (root: Vertex) => {
    const line: Vertex[] = [];
    root.setIsVisited(true);
    line.push(root);
    while (line.length > 0) {
        const firstElement = line.shift();
        if (firstElement) {
            firstElement.printLabel();
            firstElement.getNeighbors().forEach(item => {
                if (!item.getIsVisited()) {
                    item.setIsVisited(true);
                    line.push(item);
                }

            });
        }
    }
}