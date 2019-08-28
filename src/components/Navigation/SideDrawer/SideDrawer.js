import React, { Fragment } from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
    let attachedClasses = ['side-drawer', 'close'];
    if(props.open) {
        attachedClasses = ['side-drawer', 'open'];
    }
    return (
        <Fragment>
            <Backdrop cancleClick={props.closed} show={props.open} />
            <div className={attachedClasses.join(' ')}>
                <div className='logo-wrapper'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}


export default sideDrawer;