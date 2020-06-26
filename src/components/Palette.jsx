import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPalette = styled.div`
  background: #f1f3f5;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const PaletteItem = styled.div`
  width: 32px;
  height: 32px;
  background: #ff0000;
  opacity: 0.5;
  margin-left: 4px;
`;

const PaletteFirstItem = styled(PaletteItem)`
  margin-left: 0px;
`;

export default class Palette extends Component {
  render() {
    return (
      <div>
        <StyledPalette>
          <PaletteFirstItem></PaletteFirstItem>
          <PaletteItem></PaletteItem>
          <PaletteItem></PaletteItem>
          <PaletteItem></PaletteItem>
        </StyledPalette>
      </div>
    );
  }
}
