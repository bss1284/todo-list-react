import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  flex: 1 1;
  padding: 1px 2px;
  border: none;
  border-bottom: 1px solid #00ffff;
`;

export default class Form extends Component {
  render() {
    return <StyledForm>{this.props.children}</StyledForm>;
  }
}
