import React from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

class Dropdowns extends React.Component {
  render() {
    return (
      <>
        <UncontrolledDropdown group>
          <DropdownToggle caret color="primary">
            Primary
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="secondary">
            Secondary
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="success">
            Success
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="info">
            Info
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="warning">
            Warning
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown group>
          <DropdownToggle caret color="danger">
            Danger
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

      </>
    );
  }
}

export default Dropdowns;