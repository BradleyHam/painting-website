import React from 'react'
import classes from './Testimonials.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'


const Testimonials = () => {
    return (
        <div className={classes.testimonials}>
            <h1>Dont just take our word</h1>
            <div className={classes.testimonialContainer}><FontAwesomeIcon className={classes.quoteLeft} icon={faQuoteLeft} size='3x' /><p>
                molestias voluptatem. Numquam ipsum, neque mollitia delectus ex maxime, laboriosam sapiente debitis odio eos distinctio quasi aut, quibusdam harum fuga architecto? Cumque odit suscipit voluptatum deleniti, doloribus expedita recusandae, tenetur non fuga cupiditate est. Ipsam tempore modi adipisci at eaque cum ipsum!
                 </p> <FontAwesomeIcon className={classes.quoteRight} icon={faQuoteRight} size='3x' /></div>
            <div className={classes.navigation}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>);
}

export default Testimonials;