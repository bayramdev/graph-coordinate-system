import React from "react";
import ForceGraph2D from "react-force-graph-2d";
import { NonNullGraphsContextType } from "@/contexts/graphs";

type Graph2DCanvasProps = {
  context: NonNullGraphsContextType;
};

const Graph2DCanvas: React.FC<Graph2DCanvasProps> = (props) => {
  const SIZE = { width: 1000, height: 600 };

  return (
    <div className="bg-secondary" style={SIZE}>
      <ForceGraph2D
        graphData={{
          nodes: props.context.current.nodes,
          links: props.context.current.edges.map((edge) => ({
            source: edge.source,
            target: edge.target,
            label: edge.metadata.factor,
          })),
        }}
        nodeLabel="label"
        linkLabel="label"
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        linkCurvature={0.25}
        {...SIZE}
      />
    </div>
  );
};

export default Graph2DCanvas;
