import React from "react";
import { Stage, Layer, Circle } from "react-konva";
import { NonNullGraphsContextType } from "@/contexts/graphs";
import useWheelZoom from "hooks/useWheelZoom";

type CoordinatesCanvasProps = {
  context: NonNullGraphsContextType;
};

const CANVAS_SIZE = { width: 1000, height: 600 };

const CoordinatesCanvas: React.FC<CoordinatesCanvasProps> = (props) => {
  const { stage, handleWheel } = useWheelZoom();

  return (
    <div>
      <Stage
        className="bg-secondary"
        style={CANVAS_SIZE}
        {...CANVAS_SIZE}
        draggable={true}
        onWheel={handleWheel}
        {...stage}
      >
        <Layer>
          <Circle x={0} y={0} radius={10} fill="black" />
        </Layer>
      </Stage>
    </div>
  );
};

export default CoordinatesCanvas;
