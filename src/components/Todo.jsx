import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Form from './Form';
import Input from './Input';
import Button from './Button';
import Palette from './Palette';

const StyledTodo = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  border: 0;
  width: 512px;
`;
const Header = styled.div`
  background: #22b8cf;
  text-align: center;
  padding: 32px;
  font-size: 40px;
  color: #ffffff;
`;

export default class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.props.colors || Colors,
      selectIndex: 0,
    };
  }

  render() {
    return (
      <StyledTodo>
        <Header>오늘 할 일</Header>
        <Palette colors={this.state.colors} selectIndex={this.state.selectIndex}></Palette>
        <Form>
          <Input type="text"></Input>
          <Button>확인</Button>
        </Form>
        <div></div>
      </StyledTodo>
    );
  }
}

const Colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
