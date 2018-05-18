import React, { Component } from 'react';
import objstr from 'obj-str';

import styles from './Button.block.css';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleIsActive() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const style = objstr({
      [styles]: true,
      [styles.active()]: this.state.isActive,
      [styles.type(this.props.type)]: !!this.props.type
    });

    return (
      <button className={style} onClick={this.toggleIsActive.bind(this)}>
        {this.state.isActive ? "Active" : "Inactive"}
      </button>
    );
  }
}
