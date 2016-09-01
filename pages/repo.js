import React from 'react';
import Request from '../reducers/requester';
import {Link, navigateTo} from 'react-server';
import HelloWorld from '../components/hello-world';
import Button from '../components/button';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class Repo {
  
  handleRoute(next) {
    var params = this.getRequest().getQuery();

    var data = Request('GET', 'https://api.github.com/users/yusufsyaifudin/repos?sort=created', 
      {
        'headers': {
          'User-Agent': 'Awesome-Octocat-App'
        }
      });
    this.repos = data;

    return next();
  }

  getElements() {
    return (
      <div>
        <ul>
          {this.repos.map(function(repo, index) {
              return <li key={ index }><a href={repo.html_url} target="blank">{repo.full_name}</a></li>;
            })
          }
        </ul>
        <br/>
        <Link path="/login?id=12" reuseDom={true} bundleData={true}>Navigate to login</Link>
        <Link path="/" reuseDom={true} bundleData={true} class="button">Navigate to home</Link>
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

  getHeadStylesheets() {
        return []
    }
}
