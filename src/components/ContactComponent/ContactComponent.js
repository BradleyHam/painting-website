import React from 'react';
import classes from './ContactComponent.module.scss'
import { Map, GoogleApiWrapper } from "google-maps-react"
import { faPhone, faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactComponent = (props) => {
    return (
        <div className={classes.contact}>
            <div className={classes.details}>
                <h3>Contact</h3>
                <div>
                    <div className={classes.email}><FontAwesomeIcon icon={faEnvelope} className={classes.icon} /> bradleyham8@gmail.com</div>
                    <div className={classes.phone}><FontAwesomeIcon icon={faPhone} className={classes.icon} /> 0226132936</div>

                </div>
            </div>
            <div className={classes.services}>
                <h3>Services</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} className={classes.icon} /> Residential</li>
                    <li><FontAwesomeIcon icon={faCheck} className={classes.icon} /> Commercial</li>
                    <li><FontAwesomeIcon icon={faCheck} className={classes.icon} /> Office</li>
                    <li><FontAwesomeIcon icon={faCheck} className={classes.icon} /> Roofs</li>
                    <li><FontAwesomeIcon icon={faCheck} className={classes.icon} /> Cabinatry</li>
                </ul>
            </div>
            <div className={classes.map}>
                <Map google={props.google} style={{ width: '500px', height: '300px', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0' }} zoom={10}
                    initialCenter={{
                        lat: -45.031162,
                        lng: 168.662643
                    }} />
            </div>
        </div>
    );
}

export default GoogleApiWrapper({

})(ContactComponent)