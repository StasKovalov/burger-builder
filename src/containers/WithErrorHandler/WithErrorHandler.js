import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
            }
        }

        componentWillMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => this.setState({error: error}));
        }

        cancelErrorHandler = _ => {
            this.setState({error: null});
        }

        render() {
            return (
        <Fragment>
            <Modal cancleOrder = { this.cancelErrorHandler } show = {this.state.error}>
                {this.state.error ? this.state.error.message : null} 
            </Modal>
            <WrappedComponent {...this.props}/>
        </Fragment>
            )
        }
    }
}

export default withErrorHandler;