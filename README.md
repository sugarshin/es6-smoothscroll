# es6-smoothscroll

[![Build Status](https://travis-ci.org/sugarshin/es6-smoothscroll.svg?branch=master)](https://travis-ci.org/sugarshin/es6-smoothscroll) [![Coverage Status](https://coveralls.io/repos/sugarshin/es6-smoothscroll/badge.svg)](https://coveralls.io/r/sugarshin/es6-smoothscroll) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Fes6-smoothscroll.svg)](http://badge.fury.io/gh/sugarshin%2Fes6-smoothscroll) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

ES6 SmoothScroll

```shell
npm i es6-smoothscroll
```

## Usage

```javascript
import SmoothScroll from 'es6-smoothscroll';

new SmoothScroll(element, opts);
```
### Config

options

```javascript
// default
{
  speed: 500,
  easingName: null,
  offset: 0,
  onScrollBefore: (el) => {},
  onScrollAfter: (el) => {}
}
```

## Contributing

[Babel](//babeljs.io/)

[Browserify](//browserify.org/)

[mocha-phantomjs](//github.com/metaskills/mocha-phantomjs)

[power-assert](//github.com/twada/power-assert)

```shell
npm test
```

**attention**

currently no test

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
