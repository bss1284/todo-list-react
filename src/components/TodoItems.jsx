import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class TodoItems extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateItem: PropTypes.func,
    revmoeItem: PropTypes.func,
  };
  static defaultTypes = {
    updateItem: (id, data) => {},
    removeItem: (id) => {},
  };

  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(id, checked) {
    if (!checked) {
      this.props.removeItem(id);
    } else {
      this.props.updateItem(id, {
        checked: checked,
      });
    }
  }

  render() {
    const { items } = this.props;

    return (
      <>
        {items.map((item) => (
          <TodoItem
            id={item.id}
            color={item.color}
            key={item.id}
            text={item.text}
            checked={item.checked}
            onPress={(id) => this.handleCheck(id, !item.checked)}
          ></TodoItem>
        ))}
      </>
    );
  }
}
