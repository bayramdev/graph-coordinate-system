import React from "react";
import Alert from "react-bootstrap/Alert";

const NotSelectedAlert = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Not selected any graph</Alert.Heading>
      <p>
        A graph group is not selected. You can select a graph from{" "}
        <strong>Current graph</strong> dropdown button on top right.
      </p>
    </Alert>
  );
};

export default NotSelectedAlert;
