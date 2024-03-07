import styled from 'styled-components';
import FormRow from '../../ui/FormRow';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Select = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 2px solid var(--color-stone-600);
  border-radius: 16px;
`;

const SelectLabel = styled.p`
  font-size: var(--font-size-md);
  text-transform: capitalize;
`;

const SelectIcon = styled.span`
  ${props => props.active && 'transform: rotate(180deg);'}
`;

const Modal = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 16px);
  left: 0;
  border: 2px solid var(--color-stone-600);
  border-radius: 16px;
  background-color: var(--color-stone-800);
  z-index: 2;

  & button {
    width: 100%;
    padding: 16px;
    font-size: var(--font-size-md);
    text-align: left;
    text-transform: capitalize;
  }

  & > li:not(:last-child) button {
    border-bottom: 1px solid var(--color-stone-600);
  }
`;

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortBy, setSortBy] = useState(() =>
    searchParams.get('sort') ? searchParams.get('sort') : 'population'
  );

  const [modal, setModal] = useState(false);

  const sort = ['population', 'alphabetical', 'area'];

  function handleSortBy(op) {
    setSortBy(op);

    searchParams.set('sort', op);
    setSearchParams(searchParams);
    setModal(false);
  }

  return (
    <FormRow label="Sort by">
      <Select type="button" onClick={() => setModal(cur => !cur)}>
        <SelectLabel>{sortBy}</SelectLabel>
        <SelectIcon active={modal}>
          <img src="/Expand_down.svg" />
        </SelectIcon>
      </Select>
      {modal && (
        <Modal>
          {sort
            .filter(op => op !== sortBy)
            .map(op => (
              <li key={op} onClick={() => handleSortBy(op)}>
                <button>{op}</button>
              </li>
            ))}
        </Modal>
      )}
    </FormRow>
  );
}

export default SortBy;
