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
        <strong>{selected.label}</strong>
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
          {directTargetIndexesOfSelected.map((target) => (
            <tr>
              <td>{target}</td>
              <td>{props.context.matrix[target][props.selectedIndex]}</td>
              <td>{props.context.current.nodes[target].label}</td>
            </tr>
          ))}
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
          {indirectTargetIndexesOfSelected.map(([source, target]) => (
            <tr>
              <td>{target}</td>
              <td>{props.context.matrix[target][source]}</td>
              <td>{props.context.current.nodes[source].label}</td>
              <td>{props.context.current.nodes[target].label}</td>
            </tr>
          ))}
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
          {directSourceIndexesOfSelected.map((source) => (
            <tr>
              <td>{source}</td>
              <td>{props.context.matrix[props.selectedIndex][source]}</td>
              <td>{props.context.current.nodes[source].label}</td>
            </tr>
          ))}
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
          {indirectSourceIndexesOfSelected.map(([source, target]) => (
            <tr>
              <td>{target}</td>
              <td>{props.context.matrix[target][source]}</td>
              <td>{props.context.current.nodes[source].label}</td>
              <td>{props.context.current.nodes[target].label}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CoordinatesInfo;
