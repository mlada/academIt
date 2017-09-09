import * as React from 'react';
import { Field, reduxForm } from 'redux-form'
import './form.css';
import normalizePhone from "./components/normalizePhone";

/*validate*/
const required:any = (value:boolean) => (value ? undefined : 'Обязательное поле');
const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Длинна поля должна быть меньше ${max} символов` : undefined;
const maxLength11: any = maxLength(11);
const minLength = (min: number) => (value: string) =>
    value && value.length < min ? `Длинна поля должна быть больше ${min} символов` : undefined;
const minLength6: any = minLength(6);
const number: any = (value: number) => value && isNaN(Number(value)) ? 'Должно быть числом' : undefined;
const cyrillic:any = (value:any) =>
    value && /[^а-яА-Я0-9ёЁ ]/i.test(value)
        ? 'Только кириллица'
        : undefined;
const email = (value:any) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Не верно введен email' : undefined;

/*normalize*/
const lower = (value:string) => value && value.toLowerCase();


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

let FormStepThree:any = (props:any) => {
    const { handleSubmit, pristine, submitting } = props;

    return (
        <form onSubmit={ handleSubmit }>
            <Field
                name="fullname"
                type="text"
                component={renderField}
                placeholder="Введите ФИО"
                validate={[required,cyrillic,minLength6]}
                normalize={lower}
            />
            <Field
                name="phone"
                type="text"
                component={renderField}
                value="907-999-9999"
                placeholder="Введите номер телефона"
                validate={[required]}
                warn={[number,maxLength11,minLength6]}
                normalize={normalizePhone}
            />

            <Field
                name="birthdate"
                type="date"
                placeholder="Дата рождения"
                validate={[required]}
                component={renderField}
            />
            <Field
                name="email"
                type="email"
                component={renderField}
                placeholder="E-mail"
                validate={[required,email]}
                normalize={lower}
            />
            <div className="registration-field">
                <label>Ваш пол</label>
                <div className="registration-field-input-row">
                    <Field name="sex" component="input" type="radio" value="Муж"/> Муж
                    <Field name="sex" component="input" type="radio" value="Жен"/> Жен
                </div>
            </div>
            <div className="registration-button_submit">
                <button type="submit" disabled={pristine || submitting}>Далее</button>
            </div>
        </form>
    )
}

FormStepThree = reduxForm({
    form: 'contact'

})(FormStepThree)

export default FormStepThree;
