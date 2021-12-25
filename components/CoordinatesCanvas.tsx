import { MatrixType } from "@/types/matrix";
import React from "react";
import { Stage, Layer, Text } from "react-konva";

type CoordinatesCanvasProps = {
  width?: number;
  height?: number;
  matrix: MatrixType;
};

const CoordinatesCanvas: React.FC<CoordinatesCanvasProps> = (props) => {
  const width = props.width ?? 600;
  const height = props.height ?? 600;

  return (
    <div>
      <Stage
        height={height}
        width={width}
        style={{ width, height }}
        className="bg-secondary"
      >
        <Layer></Layer>
      </Stage>
    </div>
  );
};

export default CoordinatesCanvas;
