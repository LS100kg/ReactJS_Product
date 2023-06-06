import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
        console.log('mdid mount edit modal ', this.props.currentUser);

    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnchangeInput = (event, id) => {
        //good code
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            // console.log('check state', this.state);
        })
        // console.log('copy', copyState);
        // console.log('event : ', event.target.value, id);
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            // console.log('check prop child ', this.props);
            this.props.editUser(this.state);
        }

    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'abcClassName'}
                size='lg'
            >
                <ModalHeader toggle={() => { this.toggle() }}>
                    Edit a new user
                </ModalHeader>
                <ModalBody>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 form-group'>
                                <lable>Email</lable>
                                <input
                                    onChange={(event) => { this.handleOnchangeInput(event, 'email') }}
                                    className='form-control'
                                    type='text'
                                    value={this.state.email}
                                    disabled />
                            </div>
                            <div className='col-6 form-group'>
                                <lable>Password</lable>
                                <input
                                    onChange={(event) => { this.handleOnchangeInput(event, 'password') }}
                                    className='form-control'
                                    type='password'
                                    value={this.state.password}
                                    disabled />
                            </div>
                            <div className='col-6 form-group'>
                                <lable>First Name</lable>
                                <input
                                    onChange={(event) => { this.handleOnchangeInput(event, 'firstName') }}
                                    className='form-control'
                                    type='text'
                                    value={this.state.firstName} />
                            </div>
                            <div className='col-6 form-group'>
                                <lable>Last Name</lable>
                                <input
                                    onChange={(event) => { this.handleOnchangeInput(event, 'lastName') }}
                                    className='form-control'
                                    type='text'
                                    value={this.state.lastName} />
                            </div>
                            <div className='col-6 form-group'>
                                <lable>Address</lable>
                                <input
                                    onChange={(event) => { this.handleOnchangeInput(event, 'address') }}
                                    className='form-control'
                                    type='text'
                                    value={this.state.address} />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color='primary'
                        className='px-3'
                        onClick={() => { this.handleSaveUser() }}>
                        Save
                    </Button>
                    <Button color='secondary' className='px-3' onClick={() => { this.toggle() }}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
