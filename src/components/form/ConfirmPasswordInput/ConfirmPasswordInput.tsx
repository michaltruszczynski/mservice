import React, { useEffect } from 'react';
import { useFormContext, useFormState, useWatch } from 'react-hook-form';

import styles from './ConfirmPasswordInput.module.scss';

type InputPropsType = {
        type: string,
        name: string,
        label: string
}

const ConfirmPasswordInput = ({ type, name, label }: InputPropsType) => {
        const { register, control, watch, trigger, getValues } = useFormContext();
        const { isDirty, isValid, errors } = useFormState({ name, control })

        console.log(isDirty, errors, isValid)

        const password = watch('password')
       
        useEffect(() => {
                trigger('confirmPassword')
        }, [password]);


        return (
                <div className={styles['field']} >
                        <label className={styles['field__label']} htmlFor={name}>{label}: </label>
                        <input className={styles['field__input']} id={name} type={type} {...register(name)} />
                        {errors?.[name] ? <p className={styles['field__error']}>Error</p> : <p className={[styles['field__error'], styles['field__error--hidden']].join(' ')}>No error</p>}
                </div>
        )
}

export default ConfirmPasswordInput;

