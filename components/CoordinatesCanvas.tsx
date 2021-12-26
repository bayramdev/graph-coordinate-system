import React from "react";
import { Stage, Layer, Text, Arrow, Circle, Line } from "react-konva";
import { NonNullGraphsContextType } from "@/contexts/graphs";
import useWheelZoom from "hooks/useWheelZoom";

type CoordinatesCanvasProps = {
  context: NonNullGraphsContextType;
};

const CANVAS_SIZE = { width: 1000, height: 600 };
const CELL_SIZE = { width: 32, height: 32 };
const AXIS_LABEL_SIZE = { width: 256, height: 32 };
const AXIS_LABEL_OFFSET = {
  width: AXIS_LABEL_SIZE.width + 32,
  height: AXIS_LABEL_SIZE.width + 32,
};
const AXIS_LINE_WIDTH = 2;
const AXIS_GRID_LINE_WIDTH = 1;

const AXIS_LINE_PADDING_NEG = 8;
const AXIS_LINE_PADDING_POS = 4;

const ORIGIN_POINT_RADIUS = 5;
const SELF_POINT_RADIUS = 4;
const TARGET_POINT_RADIUS = 3;

const AXIS_LABEL_FONT_SIZE = 14;

const AXIS_LABEL_COLOR = "black";
const AXIS_LINE_COLOR = "black";
const AXIS_GRID_LINE_COLOR = "gray";
const ORIGIN_POINT_COLOR = "red";
const SELF_POINT_COLOR = "green";
const TARGET_POINT_COLOR = "blue";

const CoordinatesCanvas: React.FC<CoordinatesCanvasProps> = (props) => {
  const xPosToCanvas = (pos: number) => (pos - 0.5) * CELL_SIZE.width;
  const yPosToCanvas = (pos: number) =>
    (props.context.current.nodes.length - (pos - 0.5)) * CELL_SIZE.height;

  const { stage, handleWheel } = useWheelZoom({
    scale: { x: 1, y: 1 },
    x: -1 * xPosToCanvas(-AXIS_LINE_PADDING_NEG),
    y: -0.5 * yPosToCanvas(0),
  });

  const yAxisLabels = props.context.current.nodes.map((node, index) => (
    <Text
      x={-1 * AXIS_LABEL_OFFSET.width}
      y={index * CELL_SIZE.height}
      text={node.label}
      fill={AXIS_LABEL_COLOR}
      fontSize={AXIS_LABEL_FONT_SIZE}
      key={node.id}
      align="right"
      verticalAlign="middle"
      width={AXIS_LABEL_SIZE.width}
      height={AXIS_LABEL_SIZE.height}
      ellipsis={true}
      wrap="none"
    />
  ));

  const xAxisLabels = props.context.current.nodes
    .reverse()
    .map((node, index) => (
      <Text
        x={index * CELL_SIZE.width}
        y={
          props.context.current.nodes.length * CELL_SIZE.height +
          AXIS_LABEL_OFFSET.height
        }
        text={node.label}
        fill={AXIS_LABEL_COLOR}
        fontSize={AXIS_LABEL_FONT_SIZE}
        key={node.id}
        rotation={270}
        align="right"
        verticalAlign="middle"
        width={AXIS_LABEL_SIZE.width}
        height={AXIS_LABEL_SIZE.height}
        ellipsis={true}
        wrap="none"
      />
    ));

  const yAxisLine = (
    <Arrow
      points={[
        xPosToCanvas(0),
        yPosToCanvas(0 - AXIS_LINE_PADDING_NEG),
        xPosToCanvas(0),
        yPosToCanvas(
          props.context.current.nodes.length + AXIS_LINE_PADDING_POS
        ),
      ]}
      fill={AXIS_LINE_COLOR}
      stroke={AXIS_LINE_COLOR}
      strokeWidth={AXIS_LINE_WIDTH}
      pointerAtBeginning={true}
    />
  );

  const xAxisLine = (
    <Arrow
      points={[
        xPosToCanvas(0 - AXIS_LINE_PADDING_NEG),
        yPosToCanvas(0),
        xPosToCanvas(
          props.context.current.nodes.length + AXIS_LINE_PADDING_POS
        ),
        yPosToCanvas(0),
      ]}
      fill={AXIS_LINE_COLOR}
      stroke={AXIS_LINE_COLOR}
      strokeWidth={AXIS_LINE_WIDTH}
      pointerAtBeginning={true}
    />
  );

  const yAxisGridLines = props.context.current.nodes.map((_node, index) => {
    const order = index + 1;

    return (
      <Line
        points={[
          xPosToCanvas(order),
          yPosToCanvas(props.context.current.nodes.length),
          xPosToCanvas(order),
          yPosToCanvas(0),
        ]}
        fill={AXIS_GRID_LINE_COLOR}
        stroke={AXIS_GRID_LINE_COLOR}
        strokeWidth={AXIS_GRID_LINE_WIDTH}
      />
    );
  });

  const xAxisGridLines = props.context.current.nodes.map((_node, index) => {
    const order = index + 1;

    return (
      <Line
        points={[
          xPosToCanvas(0),
          yPosToCanvas(order),
          xPosToCanvas(props.context.current.nodes.length),
          yPosToCanvas(order),
        ]}
        fill={AXIS_GRID_LINE_COLOR}
        stroke={AXIS_GRID_LINE_COLOR}
        strokeWidth={AXIS_GRID_LINE_WIDTH}
      />
    );
  });

  const originPoint = (
    <Circle
      x={xPosToCanvas(0)}
      y={yPosToCanvas(0)}
      radius={ORIGIN_POINT_RADIUS}
      fill={ORIGIN_POINT_COLOR}
    />
  );

  const selfPoints = props.context.current.nodes.map((_node, index) => {
    const order = index + 1;

    return (
      <Circle
        x={xPosToCanvas(order)}
        y={yPosToCanvas(order)}
        radius={SELF_POINT_RADIUS}
        fill={SELF_POINT_COLOR}
      />
    );
  });

  const targetPoints = props.context.matrix
    .map((row, rowIndex) =>
      row.map((value, columnIndex) => {
        const yPos = rowIndex + 1;
        const xPos = columnIndex + 1;

        return value ? (
          <Circle
            x={xPosToCanvas(xPos)}
            y={yPosToCanvas(yPos)}
            radius={TARGET_POINT_RADIUS}
            fill={TARGET_POINT_COLOR}
          />
        ) : null;
      })
    )
    .flat(1);

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
          {xAxisLine}
          {yAxisLine}

          {yAxisGridLines}
          {xAxisGridLines}

          {yAxisLabels}
          {xAxisLabels}

          {originPoint}
          {selfPoints}
          {targetPoints}
        </Layer>
      </Stage>
    </div>
  );
};

export default CoordinatesCanvas;
