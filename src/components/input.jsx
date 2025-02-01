import {joiResolver} from '@hookform/resolvers/joi';
import {useForm} from 'react-hook-form';
import React from 'react';
import {schema} from '../schema';

const Input = ({name, type, placeholder, value, className}) => {
  const {register, handleSubmit, formState: {errors}} = useForm ({
    resolver: joiResolver (schema),
  });

  return (
    <React.Fragment>
      <label htmlFor="email" className={className}>{name}</label>
      <input
        {...register (`${name}`)}
        name={name}
        type={type}
        className="form-control_"
        placeholder={placeholder}
        value={value}
      />
      {/* {errors.email &&
        <p className="alert_">
          {errors.email.message}
        </p>} */}
    </React.Fragment>
  );
};

export default Input;
