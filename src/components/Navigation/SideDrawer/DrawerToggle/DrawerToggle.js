import React from 'react';
import './DrawerToggle.css';

const DrawerToggle = props => (
    <div className = 'drawer-toggle' 
    onClick = {props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrawerToggle;