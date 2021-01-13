import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => {
    let types =[]; 
    props.types.forEach(type => {
        types.push(type.type.name)
    })
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
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li>
                                Height: <span className={classes.Stat}>{props.height}</span>
                            </li>
                            {props.stats.map((stat, id) => {
                                return <li key={'stat' + id}>
                                    <span className={classes.Capitalize}>{stat.stat.name}</span>{':'}<span className={classes.Stat}>{stat.base_stat}</span>
                                </li>
                            })}
                            <li>
                                Type: <span className={classes.Stat}>{types.join('/')}</span>
                            </li>
                        </ul>
                    </div>
                    <img src={props.front_default} height="50%" alt="Front" />

                    <img src={props.back_default} height="25%" alt="Back" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;