import React from 'react';
import styled from 'styled-components';

export const Items = ({ data }: { data: String[] }) => {
  const handleData = [...data];
  const removeWordPattern = /[^0-9]/g;
  const callPatten = /\d{3}-\d{4}-\d{4}/;
  handleData.push(handleData[0].replaceAll(removeWordPattern, ""));
  handleData.push(handleData[1].replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  return (
    <StyledItemContainer>
      {handleData.map((element: String, index: number) => (
        <StyledItem key={index}>{element}</StyledItem>
      ))}
    </StyledItemContainer>
  );
};

const StyledItemContainer = styled.div`
  width: 400px;
`;

const StyledItem = styled.div`
  border: 1px solid #000;
`;
