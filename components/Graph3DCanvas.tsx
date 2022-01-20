import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import { NonNullGraphsContextType } from "@/contexts/graphs";
import { colorNodeBy, colorEdgeBy } from "utils/colors";
import { NodeType } from "@/types/graphs";

type Graph3DCanvasProps = {
  context: NonNullGraphsContextType;
};

const Graph3DCanvas: React.FC<Graph3DCanvasProps> = (props) => {
  return (
    <div className="bg-secondary vh-100 w-100 overflow-hidden d-flex justify-content-center">
      <ForceGraph3D
        graphData={{
          nodes: props.context.current.nodes,
          links: props.context.current.edges.map((edge) => ({
            source: edge.source,
            target: edge.target,
            label: edge.metadata.factor,
          })),
        }}
        nodeColor={(node) => colorNodeBy((node as NodeType).certain)}
        linkColor={(edge) => colorEdgeBy((edge.source as NodeType).certain)}
        nodeLabel="label"
        linkLabel="label"
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        linkCurvature={0.25}
        width={1280}
        height={720}
      />
    </div>
  );
};

export default Graph3DCanvas;
