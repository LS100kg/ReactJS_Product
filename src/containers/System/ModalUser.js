import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { emitter } from "../../utils/emitter";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };

    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnchangeInput = (event, id) => {
    //good code
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {
        // console.log('check state', this.state);
      }
    );
    // console.log('copy', copyState);
    // console.log('event : ', event.target.value, id);
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      // console.log('check prop child ', this.props);
      this.props.createNewUser(this.state, "abc");
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"abcClassName"}
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-6 form-group">
                <lable>Email</lable>
                <input
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "email");
                  }}
                  className="form-control"
                  type="text"
                  value={this.state.email}
                />
              </div>
              <div className="col-6 form-group">
                <lable>Password</lable>
                <input
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "password");
                  }}
                  className="form-control"
                  type="password"
                  value={this.state.password}
                />
              </div>
              <div className="col-6 form-group">
                <lable>First Name</lable>
                <input
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "firstName");
                  }}
                  className="form-control"
                  type="text"
                  value={this.state.firstName}
                />
              </div>
              <div className="col-6 form-group">
                <lable>Last Name</lable>
                <input
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "lastName");
                  }}
                  className="form-control"
                  type="text"
                  value={this.state.lastName}
                />
              </div>
              <div className="col-6 form-group">
                <lable>Address</lable>
                <input
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "address");
                  }}
                  className="form-control"
                  type="text"
                  value={this.state.address}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handleAddNewUser();
            }}
          >
            Save
          </Button>
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
