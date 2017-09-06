import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import './form.css';


let ContactForm:any = (props:any) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={ handleSubmit }>
            <div className="registration-field">
                <div className="registration-field-input">
                    <Field name="fullName" component="input" type="text" />
                    <label htmlFor="fullName">Введите ФИО</label>
                </div>
            </div>
            <div className="registration-field">
                <div className="registration-field-input">
                    <Field name="birthDate" component="input" type="date" />
                    <label htmlFor="birthDate">Дата рождения</label>
                </div>
            </div>
            <div className="registration-field">
                <div className="registration-field-input">
                    <Field name="email" component="input" type="email" />
                    <label htmlFor="email">E-mail</label>
                </div>
            </div>
            <div className="registration-button_submit">
                <button type="submit">Далее</button>
            </div>
        </form>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)

export default ContactForm;