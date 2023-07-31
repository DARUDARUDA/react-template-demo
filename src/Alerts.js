import React from "react";
// reactstrap components
import { Alert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <Alert className="alert-default">
          <strong>Default!</strong> This is a default alert—check it out!
        </Alert>
        <Alert color="primary">
          <strong>Primary!</strong> This is a primary alert—check it out!
        </Alert>
        <Alert color="secondary">
          <strong>Secondary!</strong> This is a secondary alert—check it out!
        </Alert>
        <Alert color="info">
          <strong>Info!</strong> This is a info alert—check it out!
        </Alert>
        <Alert color="success">
          <strong>Success!</strong> This is a success alert—check it out!
        </Alert>
        <Alert color="danger">
          <strong>Danger!</strong> This is a danger alert—check it out!
        </Alert>
        <Alert color="warning">
          <strong>Warning!</strong> This is a warning alert—check it out!
        </Alert>
      </>
    );
  }
}

export default Alerts;