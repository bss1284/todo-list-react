import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background: #f1f3f5;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const PaletteItem = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.color};
  opacity: ${(props) => (props.selected ? '1' : '0.4')};
  margin-left: ${(props) => (props.first ? '0px' : '4px')};
  cursor: pointer;
`;

export default class Palette extends PureComponent {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    colorIndex: PropTypes.number,
    pickColor: PropTypes.func,
  };
  static defaultProps = {
    colorIndex: 0,
    pickColor: (index) => {},
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.pickColor(index);
  }

  render() {
    const { colors, colorIndex } = this.props;
    const items = colors.map((color, i) => (
      <PaletteItem
        key={color}
        color={color}
        first={i === 0}
        selected={i === colorIndex}
        onClick={() => this.handleClick(i)}
      ></PaletteItem>
    ));

    return (
      <div>
        <Container>{items}</Container>
      </div>
    );
  }
}
