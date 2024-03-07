import styled from 'styled-components';
import FormRow from '../../ui/FormRow';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Checklist = styled.button`
  font-size: var(--font-size-md);
`;

function Status() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [status, setStatus] = useState([]);

  const statusList = [
    { id: 0, status: 'Member of the United Nations', param: 'unMember' },
    { id: 1, status: 'Independent', param: 'independent' },
  ];

  function handleStatus(param) {
    setStatus(cur =>
      cur.includes(param) ? cur.filter(val => val !== param) : [...cur, param]
    );

    function searchParamState() {
      let arr = [...status];
      arr = [
        arr.includes(param)
          ? arr.filter(val => val !== param)
          : [...arr, param],
      ];
      return arr;
    }

    searchParams.set('status', searchParamState());
    setSearchParams(searchParams);
  }

  return (
    <FormRow label="Status">
      {statusList.map(stat => (
        <Checklist
          key={stat.id}
          active={status.includes(stat.param)}
          onClick={() => handleStatus(stat.param)}
        >
          {stat.status}
        </Checklist>
      ))}
    </FormRow>
  );
}

export default Status;
