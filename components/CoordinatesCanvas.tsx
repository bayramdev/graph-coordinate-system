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

const ORIGIN_POINT_RADIUS = 4;
const SELF_POINT_RADIUS = 8;
const TARGET_POINT_RADIUS = 4;

const AXIS_LABEL_FONT_SIZE = 14;

const AXIS_LABEL_COLOR = "black";
const AXIS_LINE_COLOR = "black";
const AXIS_GRID_LINE_COLOR = "gray";
const ORIGIN_POINT_COLOR = "red";
const SELF_POINT_COLOR = "green";
const TARGET_POINT_COLOR = "blue";
const AXIS_SELECTED_GRID_LINE_COLOR = "red";

const CoordinatesCanvas: React.FC<CoordinatesCanvasProps> = (props) => {
  const xToCanvasPos = (pos: number) => (pos - 0.5) * CELL_SIZE.width;
  const yToCanvasPos = (pos: number) =>
    (props.context.current.nodes.length - (pos - 0.5)) * CELL_SIZE.height;

  const { stage, handleWheel } = useWheelZoom({
    scale: { x: 1, y: 1 },
    x: -1 * xToCanvasPos(-AXIS_LINE_PADDING_NEG),
    y: -0.5 * yToCanvasPos(0),
  });

  const [selectedNodeOrder, setSelectedNodeOrder] = React.useState<
    number | null
  >(null);

  React.useEffect(() => {
    setSelectedNodeOrder(null);
  }, [props.context]);

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
        xToCanvasPos(0),
        yToCanvasPos(0 - AXIS_LINE_PADDING_NEG),
        xToCanvasPos(0),
        yToCanvasPos(
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
        xToCanvasPos(0 - AXIS_LINE_PADDING_NEG),
        yToCanvasPos(0),
        xToCanvasPos(
          props.context.current.nodes.length + AXIS_LINE_PADDING_POS
        ),
        yToCanvasPos(0),
      ]}
      fill={AXIS_LINE_COLOR}
      stroke={AXIS_LINE_COLOR}
      strokeWidth={AXIS_LINE_WIDTH}
      pointerAtBeginning={true}
    />
  );

  const yAxisGridLines = props.context.current.nodes.map((_node, index) => {
    const order = index + 1;
    const isSelected = order === selectedNodeOrder;
    const color = isSelected
      ? AXIS_SELECTED_GRID_LINE_COLOR
      : AXIS_GRID_LINE_COLOR;

    return (
      <Line
        points={[
          xToCanvasPos(order),
          yToCanvasPos(props.context.current.nodes.length),
          xToCanvasPos(order),
          yToCanvasPos(0),
        ]}
        fill={color}
        stroke={color}
        strokeWidth={AXIS_GRID_LINE_WIDTH}
      />
    );
  });

  const xAxisGridLines = props.context.current.nodes.map((_node, index) => {
    const order = index + 1;
    const isSelected = order === selectedNodeOrder;
    const color = isSelected
      ? AXIS_SELECTED_GRID_LINE_COLOR
      : AXIS_GRID_LINE_COLOR;

    return (
      <Line
        points={[
          xToCanvasPos(0),
          yToCanvasPos(order),
          xToCanvasPos(props.context.current.nodes.length),
          yToCanvasPos(order),
        ]}
        fill={color}
        stroke={color}
        strokeWidth={AXIS_GRID_LINE_WIDTH}
      />
    );
  });

  const originPoint = (
    <Circle
      x={xToCanvasPos(0)}
      y={yToCanvasPos(0)}
      radius={ORIGIN_POINT_RADIUS}
      fill={ORIGIN_POINT_COLOR}
    />
  );

  const selfPoints = props.context.current.nodes.map((_node, index) => {
    const order = index + 1;

    return (
      <Circle
        x={xToCanvasPos(order)}
        y={yToCanvasPos(order)}
        radius={SELF_POINT_RADIUS}
        fill={SELF_POINT_COLOR}
        onClick={(_event) => {
          setSelectedNodeOrder(order);
        }}
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
            x={xToCanvasPos(xPos)}
            y={yToCanvasPos(yPos)}
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
