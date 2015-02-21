"use strict"

import $ from 'jquery';

export default class SmoothScroll {

  static addEasing(name, func) {
    if ($.easing[name] != null) return;
    $.easing[name] = func;
  }

  _defaults() {
    return {
      speed: 500,
      easingName: null,
      offset: 0,
      onScrollBefore: (el) => {},
      onScrollAfter: (el) => {}
    };
  }

  _configure(el, opts) {
    this.$el = $(el);
    this.opts = $.extend({}, this._defaults(), opts);
    if (this.$el.attr('href') !== '#') {
      this.$target = $(this.$el.attr('href'));
    }
  }

  constructor(el, opts) {
    this._configure(el, opts);
    this.events();
  }

  scroll() {
    if (this.$target == null) return;
    if (typeof this.opts.onScrollBefore === 'function') {
      this.opts.onScrollBefore(this.$el[0]);
    }
    let val = this.$target.offset().top - this.opts.offset;
    $('html, body')
      .stop(true, true)
      .animate({
        scrollTop: val
      }, {
        duration: this.opts.speed,
        easing: this.opts.easingName
      })
      .promise()
      .done( () => {
        if (typeof this.opts.onScrollAfter === 'function') {
          this.opts.onScrollAfter(this.$el[0]);
        }
      });
    return this
  }

  events() {
    this.$el.on('click.smoothscroll', (ev) => {
      ev.preventDefault();
      this.scroll();
    });
    return this
  }

  unbind() {
    this.$el.off('click.smoothscroll');
    return this
  }
}
