import { useFormContext, useFormState} from 'react-hook-form';

import styles from './Input.module.scss';

type InputPropsType = {
        type: string,
        name: string,
        label: string
}

import ErrorField from '../ErrorField/ErrorField';

const Input = ({ type, name, label }: InputPropsType) => {
        const { register, control } = useFormContext();
        const {isDirty, isValid, errors} = useFormState({name, control})

        return (
                <div className={styles['field']} >
                        <label className={styles['field__label']} htmlFor={name}>{label}: </label>
                        <input className={styles['field__input']} id={name} type={type} {...register(name)} />
                        <ErrorField isDirty={isDirty} name={name} errors={errors} />
                </div>
        )
}

export default Input;

