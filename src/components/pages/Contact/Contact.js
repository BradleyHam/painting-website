import React, { Component } from 'react'
import classes from './Contact.module.scss'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    console.log(errors)

    const submit = (data) => {
        alert('submitted')
    }
    return (
        <div className={classes.Contact}>
            <h1>Contact Us</h1>
            <p>Call Brad on <strong>0226132936</strong>  or fill out the form below to recieve a free quote</p>
            <form className={classes.form} onSubmit={handleSubmit(submit)}>
                <input ref={(register({ required: true }))} name='name' type="text" placeholder="Name *"
                />
                {errors.name && errors.name.type === 'required' && (<p className={classes.error}>Name is Required</p>)}
                <input ref={(register({ required: true }))} name='phone' type="text" placeholder="Phone *" />
                {errors.phone && errors.phone.type === 'required' && (<p className={classes.error} >Phone is Required</p>)}
                <input ref={register} name='email' type="text" placeholder="Email" />
                <textarea ref={register} name='textarea' placeholder="Message:" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
