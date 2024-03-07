import { useState } from 'react';
import FormRow from '../../ui/FormRow';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const RegionWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const RegionButton = styled.button`
  padding: 12px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 12px;

  ${props => props.active && 'background-color: var(--color-stone-600);'}
`;

function Region() {
  const [searchParams, setSearchParams] = useSearchParams();

  const regions = [
    'americas',
    'antarctic',
    'africa',
    'asia',
    'europe',
    'oceania',
  ];

  const [region, setRegion] = useState(regions);

  function handleRegion(reg) {
    setRegion(cur =>
      cur.includes(reg) ? cur.filter(val => val !== reg) : [...cur, reg]
    );

    function searchParamState() {
      let arr = [...region];
      arr = [
        arr.includes(reg) ? arr.filter(val => val !== reg) : [...arr, reg],
      ];
      return arr;
    }

    searchParams.set('region', searchParamState());
    setSearchParams(searchParams);
  }

  return (
    <FormRow label="Region">
      <RegionWrap>
        {regions.map(reg => (
          <RegionButton
            key={reg}
            active={region.includes(reg)}
            onClick={() => handleRegion(reg)}
          >
            {reg}
          </RegionButton>
        ))}
      </RegionWrap>
    </FormRow>
  );
}

export default Region;
