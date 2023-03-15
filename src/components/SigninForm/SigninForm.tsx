import React, { useEffect } from 'react';
import styles from './SigninForm.module.scss';
import { useForm, useWatch } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
        firstName: string;
        lastName: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
};

const SigninForm = () => {
        const schema: ZodType<FormData> = z.object({
                firstName: z.string().min(2).max(15)
        })
        const { register, formState: { errors }, control, handleSubmit } = useForm<FormData>({
                resolver: zodResolver(schema),
                mode: 'onChange'

        });

        const watch = useWatch({control, name: 'firstName'});
        console.log(watch)

        const submitHandler = (data: FormData) => {
                console.log(data)
        }

        console.log(errors)

        useEffect(() => {
                console.log('effect')
        })

        return (
                <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
                        <label htmlFor='firstName'>First Name: </label>
                        <input id='firstName' type="text"  {...register('firstName')} />
                        <label htmlFor='lastName'>Last Name: </label>
                        <input id='lastName' type="text" {...register('lastName')} />
                        <label htmlFor='email'>Email: </label>
                        <input id='id' type="email" {...register('email')} />
                        <label htmlFor='password'>Password</label>
                        <input id='password' type="password" {...register('password')} />
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input id='confirmPassword' type="password" {...register('confirmPassword')} />
                        <input type="submit" value={'submit'} />
                </form>
        )
}

export default SigninForm