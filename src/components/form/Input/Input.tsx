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
        const { isDirty, isValid, errors, touchedFields } = useFormState<FormData>({ name, control })

        type x = typeof touchedFields;
        console.log(name, ': ', isDirty, isValid, errors, touchedFields)
        const inputErrors: FieldErrors<FormData> = errors;

        const checkIfInputTouched = (touchedFields: Partial<Readonly<FormData>>, name: FormDataKeys) => {
                if (!touchedFields[name]) return false
                return touchedFields[name]
        }

        return (
                <div className={styles['field']} >
                        <label className={styles['field__label']} htmlFor={name}>{label}: </label>
                        <input className={styles['field__input']} id={name} type={type} {...register(name)} />
                        <ErrorField
                                // isDirty={isDirty}
                                // isValid={isValid}
                                name={name}
                                // errors={errors}
                                multipleErrorMsgArr={multipleErrorMsgArr} />
                </div>
        )
}

export default Input;

