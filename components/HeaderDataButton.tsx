import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GraphsContext } from "@/contexts/graphs";

const HeaderDataButton = () => {
  const { graphs, setGraphs } = React.useContext(GraphsContext);

  const handleFile: React.ChangeEventHandler = (e) => {
    e.preventDefault();
    setGraphs({});
  };

  const handleReset: React.MouseEventHandler = (e) => {
    setGraphs(null);
  };

  return graphs ? (
    <Button variant="warning" onClick={handleReset}>
      Reset data
    </Button>
  ) : (
    <Form.Group controlId="formFile">
      <Form.Control type="file" accept=".xls,.xlsx" onChange={handleFile} />
    </Form.Group>
  );
};

export default HeaderDataButton;
