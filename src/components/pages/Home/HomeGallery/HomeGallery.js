import React from 'react'
import classes from './HomeGallery.module.scss'
import Block from '../../../hoc/Block/Block'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const HomeGallery = () => {

    return (
        <div className={classes.gallery}>
            <div className={classes.text}>
                <h1>Quality is Key</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aliquid quibusdam nihil maiores dolores. Voluptatum accusantium praesentium dignissimos. Asperiores corrupti iste inventore vel et illum</p>
            </div>
            <div className={classes.commercial}>
                <Block>
                    <h3>Commercial</h3>
                    <h6>See More <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faLongArrowAltRight} /> </h6>
                </Block>
            </div>
            <div className={classes.residential}>
                <Block>
                    <h3>Residential</h3>
                    <h6>See More <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faLongArrowAltRight} /> </h6>
                </Block>
            </div>
            <div className={classes.office}>
                <Block>
                    <h3>Office</h3>
                    <h6>See More <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faLongArrowAltRight} /> </h6>
                </Block>
            </div>
        </div>
    );
}

export default HomeGallery;