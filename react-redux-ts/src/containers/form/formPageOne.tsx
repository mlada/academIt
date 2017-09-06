import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import './form.css';

const validate:any = (values:any) => {
    const errors:any = {};
    if (!values.phone) {
        errors.phone = 'Обязательное поле'
    }else if (!/^[0-9]{5,10}$/i.test(values.phone)) {
        errors.phone = 'Телефон без 8, 10 знаков'
    }else if (isNaN(Number(values.phone))) {
        errors.phone = 'Только цифры'
    }
    return errors
}
const warn:any = (values:any) => {
    const warnings:any = {};
    if (values.phone) {
        warnings.phone = 'done'
    }
    return warnings
}
const renderField:any = ({
    input,
    name,
    type,
    meta: { touched, error, warning }
    }:any) =>
        <div className="registration-field">
            <div className="registration-field-input">
                <input {...input} id={name} type={type} />
                <label htmlFor={name}>
                    {name}
                </label>
            </div>
            <div className="registration-field-error">
                {touched &&
                    ((error &&
                        <span className="input-error input-error_error">
                            {error}
                        </span>) ||
                    (warning &&
                        <span className="input-error input-error_checked">
                            {warning}
                        </span>))
                }
            </div>
        </div>


let ContactForm:any = (props:any) => {

    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <Field
                name="phone"
                type="text"
                component={renderField}
            />
            <div className="registration-button_submit">
                <button type="submit" disabled={pristine || submitting}>Далее</button>
            </div>
        </form>
    )
}

ContactForm = reduxForm({
    form: 'contact'
    , validate
    , warn

})(ContactForm)

export default ContactForm;