import React from 'react';
import { tcl } from '../utils/styles.js';

const CommonInput = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  maxLength,
  className,
}) => {
  const isTextArea = type === 'textarea';

  return (
    <div className={tcl('flex flex-col text-start', className)}>
      {label && (
        <label htmlFor={name} className='text-14 font-bold mb-4'>
          {label}
          {required && <span className='text-vermillion ml-1'>*</span>}
        </label>
      )}
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          className='h-[165px] rounded-8 border-[1.5px] pt-5 pl-5 w-full'
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className='h-[64px] rounded-8 border-[1.5px] pl-5'
        />
      )}
    </div>
  );
};

export default CommonInput;
