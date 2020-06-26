import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  background: #22b8cf;
  color: white;
  cursor: pointer;
`;

export default class Button extends Component {
  render() {
    return <StyledButton>{this.props.children}</StyledButton>;
  }
}
