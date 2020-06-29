import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  display: flex;
  padding: 16px;
  border: none;
  border-bottom: 1px solid #22b8cf;
`;
const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #c5f6fa;
  flex: 1 1;
  font-size: 24px;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: #22b8cf;
  color: white;
  cursor: pointer;
  padding: 0px 16px;
  margin: 0 4px;
`;

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  static defaultProps = {
    onSubmit: (item) => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <StyledForm>
        <Input
          type="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        ></Input>
        <Button onClick={this.handleClick}>추가</Button>
      </StyledForm>
    );
  }
}
