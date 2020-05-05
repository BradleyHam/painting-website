import React from 'react'
import classes from './AboutSection.module.scss'
import pic from '../../../../images/painter-2751665_1280.jpg'

const About = () => {
    return (
        <div className={classes.About}>
            <div className={classes.left}>
                <div className={classes.imageContainer}>
                    <img src={pic} alt="" />

                </div>
            </div>
            <div className={classes.right}>
                <h1>Why Choose Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellendus praesentium officia quia pariatur quo, illum, in rerum aspernatur tempore ipsa recusandae neque quisquam quae. Doloremque beatae voluptas, sapiente magni autem blanditiis accusantium velit ratione reiciendis assumenda natus alias a consectetur distinctio corporis. Voluptatum fuga voluptate corrupti inventore adipisci velit?
            </p>

                <div className={classes.iconRow}>
                    <h2 className={classes.one}>1 <div className={classes.honest}>Honest</div></h2>
                    <h2 className={classes.two}>2 <div className={classes.clean}>Clean</div></h2>
                    <h2 className={classes.three}>3 <div className={classes.reliable}>Reliable</div></h2>
                </div>
            </div>


        </div>
    );
}

export default About;