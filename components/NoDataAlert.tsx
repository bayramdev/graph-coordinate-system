import React from "react";
import Alert from "react-bootstrap/Alert";

const NoDataAlert = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading>No data</Alert.Heading>
      <p>
        Graph data is not provided. You can upload graph data in JSON format by
        clicking <strong>Choose File</strong> button on top right.
      </p>
    </Alert>
  );
};

export default NoDataAlert;
