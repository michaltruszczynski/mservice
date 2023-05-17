import styles from './ErrorField.module.scss';

type PropsType = {
    errors: any;
    name: string;
    isDirty: boolean;
    isValid: boolean;
    multipleErrorMsgArr: string[];
}

function ErrorField({ errors, isDirty, name, isValid, multipleErrorMsgArr }: PropsType) {
    console.log(errors)
    const getErrorMessages = (errors: any, multipleErrorMsgArr) => {
        if (!errors?.name) return null;
        const errorArray = Object.values(errors[name].types);
        errorArray.flat();


    }

    const getErrorMessage;

    
    return (<>
        
        {
            errors?.[name] && isDirty ? <p className={styles['error']}></p> : <p className={[styles['field__error'], styles['field__error--hidden']].join(' ')}>No error</p>

        }</>)
}

export default ErrorField;