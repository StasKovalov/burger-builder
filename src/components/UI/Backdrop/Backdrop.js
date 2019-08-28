import React from 'react'
import './Backdrop.css'

const Backdrop = ({show, closeBackdrop }) => (
    show ? <div onClick={closeBackdrop} className = 'backdrop'></div> : null
);

export default Backdrop;