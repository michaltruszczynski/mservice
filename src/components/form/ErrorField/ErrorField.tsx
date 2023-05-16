import styles from './ErrorField.module.scss';

import { FormData } from '../../SigninForm/SigninForm';

type PropsType = {
    errors: any,
    isDirty: boolean,
    name: string
}

function ErrorField({ errors, isDirty, name }: PropsType) {
console.log(errors)
    const getErrorMessages = (errors: any) => {
        console.log(errors)
    }
    return (<>

        {
            errors?.[name] && isDirty ? <p className={styles['error']}></p> : <p className={[styles['field__error'], styles['field__error--hidden']].join(' ')}>No error</p>

        }</>)
}

export default ErrorField;