import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

const Label = styled.label`
  color: var(--color-stone-300);
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

function FormRow({ label, children }) {
  return (
    <StyledFormRow>
      <Label>{label}</Label>
      {children}
    </StyledFormRow>
  );
}

export default FormRow;
