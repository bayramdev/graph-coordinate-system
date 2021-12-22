import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GraphsContext } from "@/contexts/graphs";
import { useJsonGraphs } from "hooks/useJsonGraph";

const HeaderDataButton = () => {
  const { graphs, setGraphs } = React.useContext(GraphsContext);
  const { loading, setJsonGraphs } = useJsonGraphs();

  const handleFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files?.length) return;
    setJsonGraphs(e.target.files[0]);
  };

  const handleReset: React.MouseEventHandler = (e) => {
    setGraphs(null);
  };

  return loading ? (
    <Button variant="warning" disabled={true}>
      Loading...
    </Button>
  ) : graphs ? (
    <Button variant="warning" onClick={handleReset}>
      Reset data
    </Button>
  ) : (
    <Form.Group controlId="formFile">
      <Form.Control type="file" accept=".json" onChange={handleFile} />
    </Form.Group>
  );
};

export default HeaderDataButton;
