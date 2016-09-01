import React from 'react';
import HelloWorld from '../components/hello-world';
import Button from '../components/button';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class Login {
  

  handleRoute(next) {
    var params = this.getRequest().getQuery();
    this.params = params;
    return next();
  }

  getElements() {
    return (
      <div>
        <HelloWorld/>
        <Button name={this.params.id}/>
      </div>
      );
  }

  getMetaTags() {
    return [
      {charset: 'utf8'},
      {'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'hello world, powered by React Server'},
      {name: 'generator', content: 'React Server'},
    ];
  }

  getTitle() {
    return "Login page"
  }
}
