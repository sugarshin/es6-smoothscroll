import assert from 'power-assert';
import SmoothScroll from '../lib/smoothscroll';

mocha.setup('bdd');
window.onload = () => {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
};



// .test()
describe('.test()', () => {
  it('テストのテスト', () => {
    assert(true);
  });
});
