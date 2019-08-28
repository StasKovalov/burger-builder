import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx/Auxx';

const sideDrawer = props => {
    let attachedClasses = ['side-drawer', 'close'];
    if(props.open) {
        attachedClasses = ['side-drawer', 'open'];
    }
    return (
        <Aux>
            <Backdrop cancleClick={props.closed} show={props.open} />
            <div className={attachedClasses.join(' ')}>
                <div className='logo-wrapper'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}


export default sideDrawer;