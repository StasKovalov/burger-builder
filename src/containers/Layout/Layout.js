import React, { Component, Fragment } from 'react';
import './Layout.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false,
        }
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}))
    }

    render() {
        return (
            <Fragment>
                <Toolbar toggleSideDrawer = {this.sideDrawerToggleHandler}/>
                <SideDrawer open = {this.state.showSideDrawer} closed= {this.sideDrawerClosedHandler} />
                <main className='content'>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}


export default Layout;