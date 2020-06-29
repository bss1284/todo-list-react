import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Header from '../src/components/Header';
import Form from '../src/components/Form';
import Palette from '../src/components/Palette';
import TodoItems from '../src/components/TodoItems';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  border: 0;
  width: 512px;
`;

const TodoItemData = [
  { id: 0, text: '놀기', color: '#000000', checked: false },
  { id: 1, text: '커피마시기', color: '#000000', checked: false },
  { id: 2, text: '걷기', color: '#000000', checked: true },
];
const Colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: TodoItemData,
      colors: Colors,
      colorIndex: 0,
    };

    this.itemIndex = this.state.items.length;

    this.pickColor = this.pickColor.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  pickColor(index) {
    this.setState({
      colorIndex: index,
    });
  }

  addItem(text) {
    const newItem = {
      id: this.itemIndex++,
      text: text,
      color: this.state.colors[this.state.colorIndex],
      checked: false,
    };
    const items = this.state.items.concat(newItem);

    this.setState({ items: items });
  }

  updateItem(id, data) {
    this.setState({
      items: this.state.items.map((item) => (item.id === id ? { ...item, ...data } : item)),
    });
  }

  removeItem(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  }

  render() {
    console.log('Render');
    return (
      <Container>
        <Header>오늘 할 일</Header>
        <Palette
          colors={this.state.colors}
          colorIndex={this.state.colorIndex}
          pickColor={this.pickColor}
        ></Palette>
        <Form onSubmit={this.addItem}></Form>
        <TodoItems
          items={this.state.items}
          updateItem={this.updateItem}
          removeItem={this.removeItem}
        ></TodoItems>
      </Container>
    );
  }
}

export default App;
