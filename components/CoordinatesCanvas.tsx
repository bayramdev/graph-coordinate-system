import React from "react";
import { Stage, Layer, Text, Arrow, Circle, Line } from "react-konva";
import { NonNullGraphsContextType } from "@/contexts/graphs";
import useWheelZoom from "hooks/useWheelZoom";
import { colorNodeBy } from "utils/colors";

type CoordinatesCanvasProps = {
  context: NonNullGraphsContextType;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
};

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
  const { selected, setSelected, context } = props;

  const xToCanvasPos = (pos: number) => (pos - 0.5) * CELL_SIZE.width;
  const yToCanvasPos = (pos: number) =>
    (context.current.nodes.length - (pos - 0.5)) * CELL_SIZE.height;

  const { stage, handleWheel } = useWheelZoom({
    scale: { x: 1, y: 1 },
    x: -1 * xToCanvasPos(-AXIS_LINE_PADDING_NEG),
    y: -0.5 * yToCanvasPos(0),
  });

  React.useEffect(() => {
    setSelected(null);
  }, [context, setSelected]);

  const yAxisLabels = context.current.nodes
    .slice()
    .reverse()
    .map((node, index) => (
      <Text
        x={-1 * AXIS_LABEL_OFFSET.width}
        y={index * CELL_SIZE.height}
        text={node.label}
        fill={AXIS_LABEL_COLOR}
        fontSize={AXIS_LABEL_FONT_SIZE}
        align="right"
        verticalAlign="middle"
        width={AXIS_LABEL_SIZE.width}
        height={AXIS_LABEL_SIZE.height}
        ellipsis={true}
        wrap="none"
        key={`yAxisLabel:${node.id}`}
      />
    ));

  const xAxisLabels = context.current.nodes.map((node, index) => (
    <Text
      x={index * CELL_SIZE.width}
      y={
        context.current.nodes.length * CELL_SIZE.height +
        AXIS_LABEL_OFFSET.height
      }
      text={node.label}
      fill={AXIS_LABEL_COLOR}
      fontSize={AXIS_LABEL_FONT_SIZE}
      rotation={270}
      align="right"
      verticalAlign="middle"
      width={AXIS_LABEL_SIZE.width}
      height={AXIS_LABEL_SIZE.height}
      ellipsis={true}
      wrap="none"
      key={`xAxisLabel:${node.id}`}
    />
  ));

  const yAxisLine = (
    <Arrow
      points={[
        xToCanvasPos(0),
        yToCanvasPos(0 - AXIS_LINE_PADDING_NEG),
        xToCanvasPos(0),
        yToCanvasPos(context.current.nodes.length + AXIS_LINE_PADDING_POS),
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
        xToCanvasPos(context.current.nodes.length + AXIS_LINE_PADDING_POS),
        yToCanvasPos(0),
      ]}
      fill={AXIS_LINE_COLOR}
      stroke={AXIS_LINE_COLOR}
      strokeWidth={AXIS_LINE_WIDTH}
      pointerAtBeginning={true}
    />
  );

  const yAxisGridLines = context.current.nodes.map((_node, index) => {
    const order = index + 1;
    const isSelected = order === selected;
    const color = isSelected
      ? AXIS_SELECTED_GRID_LINE_COLOR
      : AXIS_GRID_LINE_COLOR;

    return (
      <Line
        points={[
          xToCanvasPos(order),
          yToCanvasPos(context.current.nodes.length),
          xToCanvasPos(order),
          yToCanvasPos(0),
        ]}
        fill={color}
        stroke={color}
        strokeWidth={AXIS_GRID_LINE_WIDTH}
        key={`yAxisGridLine:${order}`}
      />
    );
  });

  const xAxisGridLines = context.current.nodes.map((_node, index) => {
    const order = index + 1;
    const isSelected = order === selected;
    const color = isSelected
      ? AXIS_SELECTED_GRID_LINE_COLOR
      : AXIS_GRID_LINE_COLOR;

    return (
      <Line
        points={[
          xToCanvasPos(0),
          yToCanvasPos(order),
          xToCanvasPos(context.current.nodes.length),
          yToCanvasPos(order),
        ]}
        fill={color}
        stroke={color}
        strokeWidth={AXIS_GRID_LINE_WIDTH}
        key={`xAxisGridLine:${order}`}
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

  const selfPoints = context.current.nodes.map((node, index) => {
    const order = index + 1;

    return (
      <Circle
        x={xToCanvasPos(order)}
        y={yToCanvasPos(order)}
        radius={SELF_POINT_RADIUS}
        fill={colorNodeBy(node.certain)}
        onClick={(_event) => {
          setSelected(order);
        }}
        onTouchStart={(_event) => {
          setSelected(order);
        }}
        key={`selfPoint:${order}`}
      />
    );
  });

  const targetPoints = context.matrix
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
            key={`targetPoint:${rowIndex}:${columnIndex}`}
          />
        ) : null;
      })
    )
    .flat(1);

  return (
    <div className="bg-secondary vh-100 w-100 overflow-hidden">
      <Stage
        width={1280}
        height={720}
        draggable={true}
        // onDragStart={() => {}}
        // onDragEnd={() => {}}
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
