import React from 'react';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <Todo colors={Colors} items={TodoItems}></Todo>
    </div>
  );
}

const Theme = {
  primary: '#22b8cf',
  secondary: '#c5f6fa',
};

const TodoItems = [
  { todo: '놀기', checked: false },
  { todo: '공부하기', checked: false },
  { todo: '아무것도 안하기', checked: true },
];
const Colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

export default App;
