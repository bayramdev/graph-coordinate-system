import React from "react";
import ReactFlow, {
  Node as FlowNode,
  Edge as FlowEdge,
  ArrowHeadType,
} from "react-flow-renderer";
import { NonNullGraphsContextType } from "@/contexts/graphs";

type DiagramCanvasProps = {
  context: NonNullGraphsContextType;
};

const DIAGRAM_CIRCLE_RADIUS = 1000;

const DiagramCanvas: React.FC<DiagramCanvasProps> = (props) => {
  const currentGraph = props.context.current;

  const nodes = currentGraph.nodes.map((node, index): FlowNode => {
    const nodeRatio = index / currentGraph.nodes.length;
    const radians = 2 * Math.PI * nodeRatio;

    return {
      id: node.id,
      position: {
        x: Math.cos(radians) * DIAGRAM_CIRCLE_RADIUS,
        y: -1 * Math.sin(radians) * DIAGRAM_CIRCLE_RADIUS,
      },
      data: { label: node.label },
      connectable: false,
    };
  });

  const edges = currentGraph.edges.map((edge): FlowEdge => {
    return {
      id: edge.source + edge.target,
      label: edge.metadata.factor,
      labelStyle: { fontSize: 14 },
      labelBgPadding: [6, 3],
      labelBgBorderRadius: 5,
      source: edge.source,
      target: edge.target,
      type: "smooth",
      arrowHeadType: ArrowHeadType.Arrow,
    };
  });

  return (
    <ReactFlow
      elements={[...nodes, ...edges]}
      className="bg-secondary vh-100"
    />
  );
};

export default DiagramCanvas;
