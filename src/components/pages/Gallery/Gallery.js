import React from 'react';
import classes from './Gallery.module.scss'

const Gallery = () => {
    return (
        <div className={classes.Gallery}>


            <div className={classes.GalleryGrid}>
                <h1 className={classes.see}>See our Work</h1>
                <div className={classes.One}></div>
                <div className={classes.Two}></div>
                <div className={classes.Three}></div>
                <div className={classes.Four}></div>
            </div>
        </div>
    );
}

export default Gallery;