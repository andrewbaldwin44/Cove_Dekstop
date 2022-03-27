import { useState } from 'react';
import styled from 'styled-components';

export default function FormDynamicInput({
  type = 'text',
  text,
  className,
  name,
  onBlur,
  onChange,
  required,
}) {
  const [inputHasValue, setInputHasValue] = useState(false);

  const handleFormInput = e => {
    if (e.target.value) {
      setInputHasValue(true);
    } else {
      setInputHasValue(false);
    }
  };

  return (
    <Wrapper className={className} inputHasValue={inputHasValue}>
      <div className='form-control'>
        <input
          className='form-control-input'
          onBlur={onBlur}
          onChange={onChange}
          onInput={handleFormInput}
          name={name}
          required={required}
          type={type}
        />

        <label className='form-control-label' htmlFor={name}>
          {[...text].map((letter, index) => (
            <span
              className='form-control-text'
              key={`${text}-${index}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {letter}
            </span>
          ))}
          {required && (
            <span
              className='form-control-text'
              style={{ transitionDelay: `${(text.length + 1) * 50}ms` }}
            >
              *
            </span>
          )}
        </label>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .form-control {
    position: relative;
    margin: 10px 0;
  }

  .form-control-input {
    position: relative;
    display: block;
    z-index: 10;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #d3d3d3;
    width: 100%;
    padding: 10px 0;
    padding-top: 20px;
    outline: none;
  }

  .form-control-input:focus,
  .form-control-input:valid {
    outline: none;
    border-bottom-color: red;
  }

  .form-control-label {
    position: absolute;
    top: 10px;
    letter-spacing: 2px;
  }

  .form-control-text {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    min-width: 5px;
    color: black;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control-input:focus + label span,
  .form-control-input:valid + label span,
  .form-control-input:disabled + label span {
    transform: translateY(-20px);
    font-size: 12px;
  }

  .form-control-input:focus + label span,
  .form-control-input:valid + label span {
    color: red;
  }

  .form-control-input:focus {
    border-width: 2px;
  }

  .form-control-input:focus + label span {
    font-weight: bold;
  }

  .form-control-input:invalid {
    ${({ inputHasValue }) => inputHasValue && `border-color: red`};
  }

  .form-control-input:invalid + label span {
    ${({ theme, inputHasValue }) =>
      inputHasValue &&
      `
      transform: translateY(-20px);
      font-size: 12px;
      color: #F13240;
    `};
  }
`;
