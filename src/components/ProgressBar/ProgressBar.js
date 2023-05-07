/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--padding': '0px'
  },
  medium: {
    '--height': '12px',
    '--padding': '0px'
  },
  large: {
    '--height': '24px',
    '--padding': '4px'
  }
};

const Wrapper = styled.div`
  min-width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  overflow: hidden;
  padding: var(--padding);
`

const Bar = styled.div`
  width: ${props => props.width}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  border-top-right-radius: ${props => props.width === 100 ? '4px' : '0px'};
  border-bottom-right-radius: ${props => props.width === 100 ? '4px' : '0px'};
`

const ProgressBar = ({ value, size, ...props }) => {
  const clampedValue = clamp(value, 0, 100);
  const styles = SIZES[size];

  return <Wrapper
    style={styles}
    role='progressbar'
    aria-valuenow={clampedValue}
    aria-valuemax='100'
    aria-valuemin='0'
    aria-busy={clampedValue !== size}
    {...props}
  >
    <Bar width={clampedValue} />
  </Wrapper>
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default ProgressBar;
