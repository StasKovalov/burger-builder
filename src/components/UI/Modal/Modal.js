import React, { Component, Fragment } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Fragment>
                <Backdrop cancleClick = {this.props.cancleOrder} show={this.props.show} />
                <div className='modal'
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }

}

export default Modal;

