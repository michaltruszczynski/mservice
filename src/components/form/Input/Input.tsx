import { useFormContext, useFormState, FieldErrors } from 'react-hook-form';

import styles from './Input.module.scss';

type InputPropsType = {
        type: string;
        name: string;
        label: string;
        multipleErrorMsgArr?: {
                [key: string]: string
        }
}

export type FormData = {
        firstName: string;
        email: string;
        password: string;
        confirmPassword: string;
    };

import ErrorField from '../ErrorField/ErrorField';

const Input = ({ type, name, label, multipleErrorMsgArr }: InputPropsType) => {
        const { register, control } = useFormContext();
        const { isDirty, isValid, errors } = useFormState({ name, control })

        const inputErrors: FieldErrors<FormData> = errors;
        
        return (
                <div className={styles['field']} >
                        <label className={styles['field__label']} htmlFor={name}>{label}: </label>
                        <input className={styles['field__input']} id={name} type={type} {...register(name)} />
                        <ErrorField isDirty={isDirty} isValid={isValid} name={name} errors={errors} multipleErrorMsgArr={multipleErrorMsgArr} />
                </div>
        )
}

export default Input;

