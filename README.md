# es6-smoothscroll

[![Build Status](https://travis-ci.org/sugarshin/es6-smoothscroll.svg?branch=master)](https://travis-ci.org/sugarshin/es6-smoothscroll) [![Coverage Status](https://coveralls.io/repos/sugarshin/es6-smoothscroll/badge.svg)](https://coveralls.io/r/sugarshin/es6-smoothscroll) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Fes6-smoothscroll.svg)](http://badge.fury.io/gh/sugarshin%2Fes6-smoothscroll) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

SmoothScroll

```shell
npm i sugarshin/es6-smoothscroll
```

## Usage

```javascript
import SmoothScroll from 'smoothscroll';

new SmoothScroll(element);
```
### Config

default

```javascript
{
  speed: 500,
  easingName: null,
  offset: 0,
  onScrollBefore: (el) => {},
  onScrollAfter: (el) => {}
}
```

## Contributing

[mocha-phantomjs](//github.com/metaskills/mocha-phantomjs)

[power-assert](//github.com/twada/power-assert)

```shell
npm test
```

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
