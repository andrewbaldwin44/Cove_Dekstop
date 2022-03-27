import { useRef, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { formActions } from 'components/form/form.slice';
import Spinner from 'components/Spinner';
import FormInvalidMessage from 'components/form/form-invalid-message.component';
import { useTranslations } from 'hooks/use-translations';

function Form({
  children,
  className,
  errorMessage,
  isSubmitted,
  onSubmit,
  setErrorMessage,
  setHasSubmitted,
  success,
}) {
  const formElement = useRef();
  const { getTranslations } = useTranslations();

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage({ errorMessage: null });
    }
  }, []);

  const toggleFormDisabled = useCallback(
    ({ isDisabled = true } = {}) => {
      const { elements } = formElement.current;

      for (let i = 0; i < elements.length; i++) {
        elements[i].readOnly = isDisabled;
        elements[i].disabled = isDisabled;
      }
    },
    [formElement],
  );

  const formSubmitHandler = useCallback(
    async event => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const inputData = {};

      for (const [name, value] of formData) {
        if (value) {
          inputData[name] = value;
        }
      }

      setHasSubmitted();
      toggleFormDisabled();

      onSubmit(inputData);
    },
    [onSubmit, toggleFormDisabled],
  );

  useEffect(() => {
    if (success || errorMessage) {
      toggleFormDisabled({ isDisabled: false });
    }
  }, [success, errorMessage, formElement]);

  return (
    <Wrapper
      ref={formElement}
      className={`form-wrapper ${className}`}
      isSubmitted={isSubmitted}
      onSubmit={formSubmitHandler}
    >
      {isSubmitted && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      {children}
      {errorMessage && (
        <div className='error-message'>
          <span>
            <FormInvalidMessage message={errorMessage} />
          </span>
        </div>
      )}
    </Wrapper>
  );
}

const SpinnerWrapper = styled.div`
  .loader-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Wrapper = styled.form`
  ${({ isSubmitted }) =>
    isSubmitted &&
    `
      &.form-wrapper {
        position: relative;
        height: fit-content;
        opacity: 0.6;
      }
  `}
`;

const storeConnector = ({ form }) => ({
  isSubmitted: form.isSubmitted,
  success: form.success,
  errorMessage: form.errorMessage,
});

const actionCreator = {
  setHasSubmitted: formActions.submitted,
  setErrorMessage: formActions.setErrorMessage,
};

export default connect(storeConnector, actionCreator)(Form);
