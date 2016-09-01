const path = require('path');

module.exports = {
	routes: {
		HelloWorld: {
			path: ['/'],
			method: 'get',
			page: path.join('.', 'pages', 'hello-world'),
		},
    Login: {
      path: ['/login'],
      method: 'get',
      page: path.join('.', 'pages', 'login'),
    },
    Repo: {
      path: ['/repo'],
      method: 'get',
      page: path.join('.', 'pages', 'repo'),
    },
	},
};
