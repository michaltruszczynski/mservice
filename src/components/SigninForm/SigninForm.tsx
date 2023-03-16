import React, { useEffect } from 'react';
import styles from './SigninForm.module.scss';
import { useForm, useWatch } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

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
                lastName: z.string(),
                email: z.string(),
                password: z.string(),
                confirmPassword: z.string()
        })
        const { register, formState: { errors }, control, handleSubmit } = useForm<FormData>({
                resolver: zodResolver(schema),
                mode: 'onChange'

        });

        const watch = useWatch({ control, name: 'firstName' });
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
                        <div className={styles['form__field']} >
                                <label className={styles['form__label']} htmlFor='firstName'>First Name: </label>
                                <input className={styles['form__input']} id='firstName' type="text"  {...register('firstName')} />
                                <p className={styles['form__error']}>Error</p>
                        </div>
                        <div className={styles['form__field']} >
                                <label className={styles['form__label']}  htmlFor='lastName'>Last Name: </label>
                                <input className={styles['form__input']}  id='lastName' type="text" {...register('lastName')} />
                        </div>
                        <div className={styles['form__field']} >
                                <label htmlFor='email'>Email: </label>
                                <input className={styles['form__input']}  id='id' type="email" {...register('email')} />
                        </div>
                        <div className={styles['form__field']} >
                                <label htmlFor='password'>Password</label>
                                <input className={styles['form__input']}  id='password' type="password" {...register('password')} />
                        </div>
                        <div className={styles['form__field']} >
                                <label htmlFor='confirmPassword'>Confirm Password</label>
                                <input className={styles['form__input']}  id='confirmPassword' type="password" {...register('confirmPassword')} />
                        </div>




                        <input type="submit" value={'submit'} />
                </form>
        )
}

export default SigninForm