import { useFormContext, useFormState, FieldErrors } from 'react-hook-form';
import classNames from 'classnames/bind';

import { FormData, FormDataKeys } from '../../SigninForm/SigninForm';
import styles from './ErrorField.module.scss';

const cx = classNames.bind(styles);

type PropsType = {
    errors: FieldErrors<FormData>;
    name: FormDataKeys;
    isDirty: boolean;
    isValid: boolean;
    isTouched: boolean;
    multipleErrorMsgArr: {
        [key: string]: string
    } | undefined;
}

function ErrorField({ errors, isDirty, name, isValid, isTouched, multipleErrorMsgArr }: PropsType) {

    const getErrorMessages = (errors: any, multipleErrorMsgArr: { [key: string]: string } | undefined, name: FormDataKeys) => {
        if (!multipleErrorMsgArr && errors?.[name]) {
            return <p className={cx('error', 'error--red', { 'error--hidden': isValid })}>{errors?.[name]?.message}</p>
        }

        if (multipleErrorMsgArr) {
            const errorArray = errors?.[name] ? Object.values(errors[name].types) : [];
            const errorArrayFlat = errorArray.flat();

            return Object.entries(multipleErrorMsgArr).map(([key, message]) => {
                console.log(key, message)
                const isErrorOn = errorArrayFlat.includes(message)
                console.log(isErrorOn)
                return (
                    <p key={key} className={cx('error', { 'error--hidden': isValid, 'error--green': !isErrorOn, 'error--red': isErrorOn && isTouched })}>{message}</p>
                )
            })
        }

        return null;

    }

    const errorsList = getErrorMessages(errors, multipleErrorMsgArr, name);

    // getErrorMessages(errors, multipleErrorMsgArr, name);
    //isTouched zmienia się gdy juz nie jest onFocus, sprawdzic czy jest focus state
    console.log(name, 'isDirty', isDirty)
    console.log(name, 'isTouched', isTouched)
    return <>{isTouched ?

        errorsList : <p className={cx('error',
            { 'error--hidden': true })}></p>}</>;
    // return null
}

export default ErrorField;