import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import './form.css';

/*validate*/
const required:any = (value:boolean) => (value ? undefined : 'Обязательное поле');
export const phoneNumber:any = (value:any) =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Неверный формат, должен содержать 10 знаков'
        : undefined;

/*warn*/
// const alphaNumeric:any = (value:any) =>
//     value && /[^a-zA-Z0-9 ]/i.test(value)
//         ? 'Only alphanumeric characters'
//         : undefined;

const renderField:any = ({
    input,
    name,
    type,
    placeholder,
    meta: { touched, error, warning }
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
                    (warning &&
                        <span className="input-error input-error_checked">
                            {warning}
                        </span>))
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
                placeholder="Номер телефона"
                validate={[required, phoneNumber]}

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