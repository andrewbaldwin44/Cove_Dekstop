import styled from 'styled-components';

export default function FormInvalidMessage({ message }) {
  return (
    <Wrapper>
      <p className='message'>{message}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 15px;
  background: white;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.red[200]};

  .message {
    color: ${({ theme }) => theme.red[500]};
    text-align: center;
  }
`;
