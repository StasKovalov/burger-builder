import React from 'react'
import './Toolbar.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
        <header className = 'toolbar'>
           <DrawerToggle toggle = {props.toggleSideDrawer}/>
            <Logo/>
            <nav className = 'desktop-only'>
               <NavigationItems/>
            </nav>
        </header>
)
      

export default toolbar;
