import classNames from 'classnames/bind';

import { useForm, useWatch, FormProvider, SubmitHandler } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import Input from '../form/Input/Input';

import styles from './SigninForm.module.scss';
import ConfirmPasswordInput from '../form/ConfirmPasswordInput/ConfirmPasswordInput';
const cx = classNames.bind(styles);


export type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type FormDataKeys = keyof FormData;

export const PasswordErrorMsg = {
    oneCapitalLetter: "Contains at least 1 capital letter.",
    oneNumber: "Contains at least 1 number.",
    oneSpecialChar: "Contains at least 1 special character.",
    minCharNumber: "4 characters minimum."
}

const SigninForm = () => {
    const schema: ZodType<FormData> = z.object({
        name: z.string().min(2, {message: ''}).max(15),
        email: z.string().email(),
        password: z
            .string()
            .regex(new RegExp(".*[A-Z].*"), PasswordErrorMsg.oneCapitalLetter)
            .regex(new RegExp(".*\\d.*"), PasswordErrorMsg.oneNumber)
            .regex(
                new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
                PasswordErrorMsg.oneSpecialChar
            )
            .min(4, PasswordErrorMsg.minCharNumber),
        confirmPassword: z.string(),
    }).refine((data) => {
        return data.password === data.confirmPassword && data.confirmPassword !== ''
    }, {
        path: ["confirmPassword"],
        message: "Passwords don't match.",
    });

    const methods = useForm<FormData>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    });

    const { handleSubmit, watch, setValue } = methods;

    const submitHandler: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }
// check onFocus state
    return (
        <div className={cx('form-container')}>
            <FormProvider {...methods}>
                <form className={styles['form']} onSubmit={handleSubmit(submitHandler)}>

                    <Input type={"name"} name={"name"} label={"Name"} />
                    <Input type={"email"} name={"email"} label={"Email"} />
                    <Input type={"password"} name={"password"} label={"Password"} multipleErrorMsgArr={PasswordErrorMsg} />
                    <ConfirmPasswordInput type={"confirmPassword"} name={"confirmPassword"} label={"Confirm Password"} />
                    <input type="submit" value={'submit'} />
                </form>
            </FormProvider>
        </div>
    )
}

export default SigninForm