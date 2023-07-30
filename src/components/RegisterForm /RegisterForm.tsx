/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import FormInput from './FormInput';

import styles from './Register.module.css';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required().email()
});

type Inputs = {
  email: string;
  password: string;
  login: string;
};

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.reg_wrapper}>
      <p>Let&apos;s start!</p>
      <div className={styles.reg_content}>
        <FormInput
          name="login"
          title="Login"
          type="text"
          placeholder="Enter your login"
          register={register('login')}
          error={errors.login?.message}
        />
        <FormInput
          name="password"
          title="Password"
          type="password"
          placeholder="Enter your password"
          register={register('password')}
          error={errors.password?.message}
        />
        <FormInput
          name="email"
          title="Email"
          type="email"
          placeholder="Enter your email"
          register={register('email')}
          error={errors.email?.message}
        />
        <button type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
