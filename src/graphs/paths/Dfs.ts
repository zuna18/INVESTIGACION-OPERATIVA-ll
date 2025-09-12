import type Vertex from "../Vertex";

export const Dfs = (root: Vertex) => {
    depth(root);
}

const depth = (root: Vertex) => {
    root.printLabel();
    root.setIsVisited(true);
    root.getNeighbors().forEach(item => {
        if (!item.getIsVisited()) {
            depth(item);
        }
    })
}