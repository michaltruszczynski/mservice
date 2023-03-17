import React from 'react';
import { useForm, useFormContext, useFormState, useWatch } from 'react-hook-form';

import styles from './Input.module.scss';

type InputPropsType = {
        type: string,
        name: string,
        label: string
}

const Input = ({ type, name, label }: InputPropsType) => {
        const { register, control } = useFormContext();
        const {errors} = useFormState({name, control})
        // const errors = useWatch({name})
        // console.log(errors)
        console.log(errors)

        return (
                <div className={styles['field']} >
                        <label className={styles['field__label']} htmlFor={name}>{label}: </label>
                        <input className={styles['field__input']} id={name} type={type} {...register(name)} />
                        {errors?.[name] ? <p className={styles['field__error']}>Error</p> : <p className={[styles['field__error'], styles['field__error--hidden']].join(' ')}>No error</p>}
                </div>
        )
}

export default Input;

