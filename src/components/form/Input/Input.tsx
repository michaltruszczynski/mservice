import React from 'react';
import { useFormContext, useFormState, FieldErrors } from 'react-hook-form';

import styles from './Input.module.scss';

type InputPropsType = {
        type: string,
        name: string,
        label: string
}

import { FormData } from '../../SigninForm/SigninForm';

const Input = ({ type, name, label }: InputPropsType) => {
        const { register, control } = useFormContext();
        const {isDirty, isValid, errors} = useFormState({name, control})
        // typeof errors
        // const errors = useWatch({name})
        // console.log(errors)
        console.log(isDirty, errors, isValid)
        const getErrorMessages = (errors: FieldErrors<FormData>) => {
                
        }

        return (
                <div className={styles['field']} >
                        <label className={styles['field__label']} htmlFor={name}>{label}: </label>
                        <input className={styles['field__input']} id={name} type={type} {...register(name)} />
                        {errors?.[name] && isDirty ? <p className={styles['field__error']}></p> : <p className={[styles['field__error'], styles['field__error--hidden']].join(' ')}>No error</p>}
                </div>
        )
}

export default Input;

