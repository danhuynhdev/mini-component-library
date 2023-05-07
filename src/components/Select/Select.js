import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectWrapper = styled.select`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  height: 43px;
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  width: fit-content;
  color: ${COLORS.gray700};
  line-height: 1.2rem;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 12px;
  color: inherit;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <span>{displayedValue}</span>
      <IconWrapper id='chevron-down' size={24} strokeWidth={2} />

      <SelectWrapper id='select' value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </Wrapper>
  );
};

export default Select;
