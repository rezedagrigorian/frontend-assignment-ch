/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IFormInputProps {
  title: string;
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error: string | undefined;
  type: 'text' | 'password' | 'email';
}

const FormInput: React.FC<IFormInputProps> = ({
  title, name, placeholder, register, error, type
}) => (
  <div>
    <label htmlFor={name}>
      {title}
    </label>
    <input {...register} placeholder={placeholder} type={type} />
    <p>{error}</p>
  </div>
);

export default FormInput;
