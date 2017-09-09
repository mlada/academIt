import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import './form.css';
import normalizePhone from './components/normalizePhone'

const required = (value: any) => value ? undefined : 'Обязательное';
const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Длинна поля должна быть меньше ${max} символов` : undefined;
const maxLength13: any = maxLength(13);
const minLength = (min: number) => (value: string) =>
    value && value.length < min ? `Длинна поля должна быть больше ${min} символов` : undefined;
const minLength6: any = minLength(6);
const number: any = (value: number) => value && isNaN(Number(value)) ? 'Должно быть числом' : undefined;


const renderField:any = ({
    input,
    value,
    name,
    type,
    placeholder,
    meta: { touched, error, warn }
    }:any) =>
        <div className="registration-field">
            <div className="registration-field-input">
                <input {...input} id={name} type={type} placeholder={placeholder}/>
                <label htmlFor={name}>
                    {placeholder}
                </label>
            </div>
            <div className="registration-field-error">
                {touched &&
                    ((error &&
                        <span className="input-error input-error_error">
                            {error}
                        </span>) ||
                    (warn &&
                        <span className="input-error input-error_error">
                        {warn}
                    </span>)
                    )
                }
            </div>
        </div>


let FormStepOne:any = (props:any) => {
    const { handleSubmit, pristine, submitting } = props;
    // const submit:any =(values:any) => console.log(values);
    return (
        <form onSubmit={ handleSubmit }>
            <Field
                name="phone"
                type="text"
                component={renderField}
                placeholder="Введите номер телефона"
                validate={[required,minLength6]}
                warn={[number,maxLength13]}
                normalize={normalizePhone}
            />

            <div className="registration-button_submit">
                <button type="submit" disabled={pristine || submitting}>Далее</button>
            </div>
        </form>
    )
}

FormStepOne = reduxForm({
    form: 'contact'
})(FormStepOne)


export default FormStepOne;