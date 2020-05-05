import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import classes from './Social.module.scss'

const Social = () => {
    const iconColor = 'white'
    return (
        <div className={classes.social}>
            <FontAwesomeIcon className={classes.icon} size={"2x"} icon={faYoutube} />
            <FontAwesomeIcon className={classes.icon} size={"2x"} icon={faFacebook} />
            <FontAwesomeIcon className={classes.icon} size={"2x"} icon={faTwitter} />
            <FontAwesomeIcon className={classes.icon} size={"2x"} icon={faGoogle} />
        </div>
    );
}

export default Social;
