import React from 'react'
import classes from './Home.module.scss'
import Hero from './Hero/Hero'
import AboutSection from './AboutSection/AboutSection'
import HomeGallery from '../Home/HomeGallery/HomeGallery'
import Testimonials from '../Home/Testimonials/Testimonials'



const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <HomeGallery />
            <Testimonials />

        </div>);
}

export default Home;