import React from "react";
import { Table } from "react-bootstrap";
import { NonNullGraphsContextType } from "@/contexts/graphs";

type CoordinatesInfoProps = {
  context: NonNullGraphsContextType;
  selectedIndex: number;
};

const CoordinatesInfo: React.FC<CoordinatesInfoProps> = (props) => {
  return (
    <div className="mt-4">
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
              <tr>
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
                    <tr>
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
              <tr>
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
                    <tr>
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
