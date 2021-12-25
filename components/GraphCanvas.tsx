import React from "react";
import ReactFlow, {
  Node as FlowNode,
  Edge as FlowEdge,
  ArrowHeadType,
} from "react-flow-renderer";
import { NonNullGraphsContextType } from "@/contexts/graphs";

type GraphCanvasProps = {
  context: NonNullGraphsContextType;
};

const GRAPH_CIRCLE_RADIUS = 1000;

const GraphCanvas: React.FC<GraphCanvasProps> = (props) => {
  return (
    <ReactFlow
      elements={[
        ...props.context.current.nodes.map(
          (node, index): FlowNode => ({
            id: node.id,
            position: {
              x:
                Math.cos(
                  (2 * Math.PI * index) / props.context.current.nodes.length
                ) * GRAPH_CIRCLE_RADIUS,
              y:
                Math.sin(
                  (2 * Math.PI * index) / props.context.current.nodes.length
                ) * GRAPH_CIRCLE_RADIUS,
            },
            data: { label: node.label },
            connectable: false,
          })
        ),
        ...props.context.current.edges.map(
          (edge): FlowEdge => ({
            id: edge.source + edge.target,
            label: edge.metadata.factor,
            labelStyle: { fontSize: 14, fontFamily: "monospace" },
            labelBgPadding: [6, 3],
            labelBgBorderRadius: 5,
            source: edge.source,
            target: edge.target,
            type: "smooth",
            arrowHeadType: ArrowHeadType.Arrow,
          })
        ),
      ]}
      className="bg-secondary"
    />
  );
};

export default GraphCanvas;
