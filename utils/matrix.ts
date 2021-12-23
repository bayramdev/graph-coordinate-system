import { MatrixType } from "@/types/matrix";
import { GraphType } from "@/types/graphs";

export const createMatrix = (graph: GraphType): MatrixType => {
  const matrix = Array<number[]>(graph.nodes.length)
    .fill([])
    .map((_node) => Array<number>(graph.nodes.length).fill(0));

  for (const edge of graph.edges) {
    const sourceIndex = graph.nodes.findIndex(
      (node) => node.id === edge.source
    );
    const targetIndex = graph.nodes.findIndex(
      (node) => node.id === edge.target
    );
    matrix[targetIndex][sourceIndex] = edge.metadata.factor;
  }

  return matrix;
};
