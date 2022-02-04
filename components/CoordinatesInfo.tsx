import React from "react";
import { Table } from "react-bootstrap";
import { NonNullGraphsContextType } from "@/contexts/graphs";

type CoordinatesInfoProps = {
  context: NonNullGraphsContextType;
  selectedIndex: number;
};

const CoordinatesInfo: React.FC<CoordinatesInfoProps> = (props) => {
  const selected = props.context.current.nodes[props.selectedIndex];
  const directTargetIndexesOfSelected = props.context.matrix
    .map((row, index) => (row[props.selectedIndex] !== 0 ? index : null))
    .filter((nullable) => nullable) as number[];
  const indirectTargetIndexesOfSelected = directTargetIndexesOfSelected.flatMap(
    (targetIndex) =>
      props.context.matrix
        .map((row, index) =>
          row[targetIndex] !== 0 ? [targetIndex, index] : null
        )
        .filter((nullable) => nullable) as number[][]
  );
  const directSourceIndexesOfSelected = props.context.matrix[
    props.selectedIndex
  ]
    .map((value, colIndex) => (value ? colIndex : null))
    .filter((nullable) => nullable) as number[];
  const indirectSourceIndexesOfSelected = directSourceIndexesOfSelected.flatMap(
    (sourceIndex) =>
      props.context.matrix[sourceIndex]
        .map((value, index) => (value ? [index, sourceIndex] : null))
        .filter((nullable) => nullable) as number[][]
  );
  
  return (
    <div className="mt-4">
      <p>
        Displaying analyze for the selected node labeled{" "}
        <strong>
          {props.context.current.nodes[props.selectedIndex].label}
        </strong>
        ...
      </p>

      <h2 className="mt-4 mb-2">Level 1 Targeted Nodes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Factor</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {props.context.matrix.map((row, rowIndex) =>
            row[props.selectedIndex] ? (
              <tr key={`${row}-${rowIndex}`}>
                <td>{rowIndex}</td>
                <td>{row[props.selectedIndex]}</td>
                <td>{props.context.current.nodes[rowIndex].label}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>

      <h2 className="mt-4 mb-2">Level 2 Targeted Nodes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Factor</th>
            <th>Source label</th>
            <th>Target label</th>
          </tr>
        </thead>
        <tbody>
          {props.context.matrix.map((row, rowIndex) =>
            row[props.selectedIndex]
              ? props.context.matrix.map((rowInner, rowInnerIndex) =>
                  rowInner[rowIndex] ? (
                    <tr key={`${row}-${rowIndex}-${rowInner}-${rowInnerIndex}`}>
                      <td>{rowIndex}</td>
                      <td>{rowInner[rowIndex]}</td>
                      <td>{props.context.current.nodes[rowIndex].label}</td>
                      <td>
                        {props.context.current.nodes[rowInnerIndex].label}
                      </td>
                    </tr>
                  ) : null
                )
              : null
          )}
        </tbody>
      </Table>

      <h2 className="mt-4 mb-2">Level 1 Sourced Nodes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Factor</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {props.context.matrix[props.selectedIndex].map((value, colIndex) =>
            value ? (
              <tr key={`${value}-${colIndex}`}>
                <td>{colIndex}</td>
                <td>{value}</td>
                <td>{props.context.current.nodes[colIndex].label}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>

      <h2 className="mt-4 mb-2">Level 2 Sourced Nodes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Factor</th>
            <th>Source label</th>
            <th>Target label</th>
          </tr>
        </thead>
        <tbody>
          {props.context.matrix[props.selectedIndex].map((value, colIndex) =>
            value
              ? props.context.matrix[colIndex].map((valueInner, indexInner) =>
                  valueInner ? (
                    <tr
                      key={`${value}-${colIndex}-${valueInner}-${indexInner}`}
                    >
                      <td>{colIndex}</td>
                      <td>{valueInner}</td>
                      <td>{props.context.current.nodes[indexInner].label}</td>
                      <td>{props.context.current.nodes[colIndex].label}</td>
                    </tr>
                  ) : null
                )
              : null
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CoordinatesInfo;
