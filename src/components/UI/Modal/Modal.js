import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => {
    let types = [];
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
                    <div className="col-md-6 col-sm-12">
                        <ul>
                            <li>
                                <span className={classes.Capitalize}>Height:</span> <span className={classes.Stat}>{props.height}</span>
                            </li>
                            {props.stats.map((stat, id) => {
                                return <li key={'stat' + id}>
                                    <span className={classes.Capitalize}>{stat.stat.name}</span>{':'}<span className={classes.Stat}>{stat.base_stat}</span>
                                </li>
                            })}
                            <li>
                                <span className={classes.Capitalize}>Type:</span> <span className={classes.Stat}>{types.join('/')}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <img src={props.front_default} alt="Front" />
                        <img src={props.back_default} alt="Back" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;