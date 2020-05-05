import classes from './Block.module.scss'
import React from 'react';

const Block = (props) => {
    return (
        <div className={classes.block}>
            {props.children}
        </div>);
}

export default Block;