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
                ) * DIAGRAM_CIRCLE_RADIUS,
              y:
                Math.sin(
                  (2 * Math.PI * index) / props.context.current.nodes.length
                ) * DIAGRAM_CIRCLE_RADIUS,
            },
            data: { label: node.label },
            connectable: false,
          })
        ),
        ...props.context.current.edges.map(
          (edge): FlowEdge => ({
            id: edge.source + edge.target,
            label: edge.metadata.factor,
            labelStyle: { fontSize: 14 },
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

export default DiagramCanvas;
