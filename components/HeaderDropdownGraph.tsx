import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { GraphsContext } from "@/contexts/graphs";

const HeaderDropdownGraph = () => {
  const { graphs, current, changeCurrent } = React.useContext(GraphsContext);

  const generateOnClickHandler = (label: string) => {
    const handler: React.MouseEventHandler = (e) => {
      e.preventDefault();
      changeCurrent(label);
    };
    return handler;
  };

  return (
    <DropdownButton
      variant="success"
      id="dropdown-basic-button"
      title="Current graph"
      disabled={graphs === null}
    >
      {graphs?.graphs?.map((graph) => (
        <Dropdown.Item
          onClick={generateOnClickHandler(graph.label)}
          key={graph.label}
          active={current?.label === graph.label}
        >
          {graph.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default HeaderDropdownGraph;
