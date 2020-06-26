import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #c5f6fa;
  flex: 1 1;
  font-size: 24px;
`;

export default class Input extends Component {
  render() {
    const { ...rest } = this.props;
    return <StyledInput {...rest}></StyledInput>;
  }
}
