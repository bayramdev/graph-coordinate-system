import React from "react";
import { Stage, Layer, Circle } from "react-konva";
import { NonNullGraphsContextType } from "@/contexts/graphs";

type CoordinatesCanvasProps = {
  context: NonNullGraphsContextType;
};

const CoordinatesCanvas: React.FC<CoordinatesCanvasProps> = (props) => {
  const SIZE = { width: 1000, height: 600 };

  return (
    <div>
      <Stage className="bg-secondary" style={SIZE} {...SIZE} draggable={true}>
        <Layer>
          <Circle x={0} y={0} radius={10} fill="black" />
        </Layer>
      </Stage>
    </div>
  );
};

export default CoordinatesCanvas;
