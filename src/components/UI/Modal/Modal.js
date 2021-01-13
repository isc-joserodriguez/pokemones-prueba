import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.clicked} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <h1 className={classes.Name}>{props.name}</h1>
                <h3>Stats:</h3>
                <ul>
                    <li>
                        height: {props.height}
                    </li>
                    {props.stats.map((stat, id) => {
                        return <li key={'stat' + id}>
                            {`${stat.stat.name}: ${stat.base_stat}`}
                        </li>
                    })}
                    {props.types.map((type, id) => {
                        console.log(type)
                        return <li key={'type' + id}>
                            {`Type: ${type.type.name}`}
                        </li>
                    })}
                    <div>
                        <img src={props.front_default} height="50%" alt="Front" />
                        <img src={props.back_default} height="25%" alt="Back" />
                    </div>
                </ul>
            </div>
        </React.Fragment>



    )
}

export default Modal;