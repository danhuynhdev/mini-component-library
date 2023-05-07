import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

let uuid = 0;

const SIZES = {
  small: {
    '--height': '24px',
    '--font-size': `${14 / 16}rem`,
    '--line-height': '16px',
    '--padding-left': '24px',
    '--icon-padding': '2px',
  },
  large: {
    '--height': '36px',
    '--font-size': `${18 / 16}rem`,
    '--line-height': '21px',
    '--padding-left': '36px',
    '--icon-padding': '4px',
  },
};

const ICON_SIZES = {
  small: {
    size: 16,
    strokeWidth: 1,
  },
  large: {
    size: 24,
    strokeWidth: 2,
  },
};

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width}px;
  font-size: var(--font-size);
  line-height: var(--line-height);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: var(--height);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: var(--padding-left);
  font-weight: 700;
  font-size: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    &::placeholder {
      color: inherit;
    }
  }

  outline-offset: 2px;
`

const IconWrapper = styled(Icon)`
  position: absolute;
  top: var(--icon-padding);
  color: inherit;
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const uniqueId = "input_" + uuid++;
  const styles = SIZES[size];
  const iconSize = ICON_SIZES[size];

  return <Wrapper width={width} style={styles}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <InputWrapper id={uniqueId} type="text" placeholder={placeholder} />
    <label htmlFor={uniqueId}>
      <IconWrapper id={icon} {...iconSize} />
    </label>
  </Wrapper>
};

export default IconInput;
