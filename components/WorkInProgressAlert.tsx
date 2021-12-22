import React from "react";
import Alert from "react-bootstrap/Alert";

const WorkInProgressAlert = () => {
  return (
    <Alert variant="info">
      <Alert.Heading>This page is work in progress</Alert.Heading>
      <p>There is not much going on here. This page is in development.</p>
    </Alert>
  );
};

export default WorkInProgressAlert;
