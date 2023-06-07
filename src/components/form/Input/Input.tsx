import { useFormContext, useFormState, FieldErrors } from 'react-hook-form';

import styles from './Input.module.scss';

import { FormData, FormDataKeys } from '../../SigninForm/SigninForm';

type MultipleError = {
        [key: string]: string
}

type InputPropsType = {
        type: string;
        name: FormDataKeys;
        label: string;
        multipleErrorMsgArr?: MultipleError
}

import ErrorField from '../ErrorField/ErrorField';

const Input = ({ type, name, label, multipleErrorMsgArr }: InputPropsType) => {
        const { register, control } = useFormContext<FormData>();
        const { isDirty, isValid, errors, touchedFields } = useFormState<FormData>({ name, control });

        const checkIfInputTouched = <T,>(touchedFields: Partial<Readonly<{ [Property in keyof T]: boolean }>>, name: keyof T) => {
                if (!touchedFields[name]) return false
                return Boolean(touchedFields[name]);
        };

        const isTouched = checkIfInputTouched<FormData>(touchedFields, name)
        console.log(isTouched)
        
        return (
                <div className={styles['field']} >
                        <label className={styles['field__label']} htmlFor={name}>{label}: </label>
                        <input className={styles['field__input']} id={name} type={type} {...register(name)} />
                        <ErrorField
                                isDirty={isDirty}
                                isValid={isValid}
                                isTouched={isTouched}
                                name={name}
                                errors={errors}
                                multipleErrorMsgArr={multipleErrorMsgArr} />
                </div>
        )
}

export default Input;

