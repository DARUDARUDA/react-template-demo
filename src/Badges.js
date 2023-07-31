import React from "react";
// reactstrap components
import { Badge } from "reactstrap";

class Badges extends React.Component {
  render() {
    return (
      <>
        <Badge
          className="badge-default"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Default
        </Badge>
        <Badge
          color="primary"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Primary
        </Badge>
        <Badge
          color="secondary"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Secondary
        </Badge>
        <Badge color="info" href="#pablo" onClick={e => e.preventDefault()}>
          Info
        </Badge>
        <Badge
          color="success"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Success
        </Badge>
        <Badge color="danger" href="#pablo" onClick={e => e.preventDefault()}>
          Danger
        </Badge>
        <Badge
          color="warning"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Warning
        </Badge>
      </>
    );
  }
}

export default Badges;