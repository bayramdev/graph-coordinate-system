import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import { NonNullGraphsContextType } from "@/contexts/graphs";

type Graph3DCanvasProps = {
  context: NonNullGraphsContextType;
};

const Graph3DCanvas: React.FC<Graph3DCanvasProps> = (props) => {
  return (
    <ForceGraph3D
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
      width={1000}
      height={600}
    />
  );
};

export default Graph3DCanvas;
