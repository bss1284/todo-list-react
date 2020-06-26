import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPalette = styled.div`
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

export default class Palette extends Component {
  render() {
    const { colors } = this.props;
    const selectIndex = this.props.selectIndex || 0;
    const items = colors.map((color, i) => {
      return (
        <PaletteItem
          key={color}
          color={color}
          first={i === 0}
          selected={i === selectIndex}
          onClick={() => console.log('클릭', i)}
        ></PaletteItem>
      );
    });

    return (
      <div>
        <StyledPalette>{items}</StyledPalette>
      </div>
    );
  }
}

Palette.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectIndex: PropTypes.number,
  onChange: PropTypes.func,
};
