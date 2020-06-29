import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4px 10px;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  color: ${(props) => props.color};
  cursor: pointer;
`;

export default class TodoItem extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onPress: PropTypes.func,
  };
  static defaultProps = {
    onPress: (id) => {},
  };

  render() {
    return (
      <Container
        id={toString(this.props.id)}
        color={this.props.color}
        checked={this.props.checked}
        onClick={(e) => this.props.onPress(this.props.id)}
      >
        {this.props.text}
      </Container>
    );
  }
}
