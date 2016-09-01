import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.href}>Hello {this.props.name}</a>
    );
  }
}
