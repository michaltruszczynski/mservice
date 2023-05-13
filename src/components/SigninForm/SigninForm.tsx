import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import { useForm, useWatch, FormProvider, SubmitHandler } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import Input from '../form/Input/Input';

import styles from './SigninForm.module.scss';
const cx = classNames.bind(styles);


type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const SigninForm = () => {
    const schema: ZodType<FormData> = z.object({
        firstName: z.string().min(2).max(15),
        lastName: z.string().min(2).max(15),
        email: z.string().email(),
        password: z.string(),
        confirmPassword: z.string()
    });

    const methods = useForm<FormData>({
        defaultValues: {
            firstName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        resolver: zodResolver(schema)
    });

    const { handleSubmit } = methods;

    const submitHandler: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }

    return (
        <div className={cx('form-container')}>
            <FormProvider {...methods}>
                <form className={styles['form']} onSubmit={handleSubmit(submitHandler)}>

                    <Input type={"firstName"} name={"firstName"} label={"First Name"} />
                    {/* <Input type={"lastName"} name={"lastName"} label={"Last Name"} /> */}
                    <Input type={"email"} name={"email"} label={"Email"} />
                    <Input type={"password"} name={"password"} label={"Password"} />
                    <Input type={"confirmPassword"} name={"confirmPassword"} label={"Confirm Password"} />
                    <input type="submit" value={'submit'} />
                </form>
            </FormProvider>
        </div>
    )
}

export default SigninForm