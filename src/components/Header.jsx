import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #22b8cf;
  text-align: center;
  padding: 32px;
  font-size: 40px;
  color: #ffffff;
`;

export default class Header extends PureComponent {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}
