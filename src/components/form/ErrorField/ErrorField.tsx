import classNames from 'classnames/bind';

import styles from './ErrorField.module.scss';

const cx = classNames.bind(styles);

type PropsType = {
    errors: any;
    name: string;
    isDirty: boolean;
    isValid: boolean;
    multipleErrorMsgArr: {
        [key: string]: string
    };
}

function ErrorField({ errors, isDirty, name, isValid, multipleErrorMsgArr }: PropsType) {
    console.log(errors)
    const getErrorMessages = (errors: any, multipleErrorMsgArr: { [key: string]: string }, name: string) => {
        if (!multipleErrorMsgArr && errors) {
            <p className={cx('error', {'error--hiiden': isValid})}>{errors[name].message}</p>
        }
        
        if (!multipleErrorMsgArr) {
            Object.entries(multipleErrorMsgArr).map((key, message) => {
                return (
                    <p className={cx('error', {'error--hiiden': isValid})}></p>
                )
            })
        }
        
        if (!errors?.name) return null;
        const errorArray = Object.values(errors[name].types);
        errorArray.flat();

        if (multipleErrorMsgArr) {
            // multipleErrorMsgArr.map(message)
        }

    }

    // const getErrorMessage;


    return (<>

        {
            errors?.[name] && isDirty ? <p className={styles['error']}></p> : <p className={[styles['field__error'], styles['field__error--hidden']].join(' ')}>No error</p>

        }</>)
}

export default ErrorField;