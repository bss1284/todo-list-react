import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  padding: 16px;
  border: none;
  border-bottom: 1px solid #00ffff;
`;

export default class Form extends Component {
  render() {
    return <StyledForm>{this.props.children}</StyledForm>;
  }
}
