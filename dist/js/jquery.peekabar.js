"use strict";

/**
 * @license
 * jquery.peekABar 2.0.0 <http://kunalnagar.github.io/jquery.peekABar>
 * Copyright 2019 Kunal Nagar
 * Available under MIT license
 */
(function ($) {
  'use strict';

  $.peekABar = function (options) {
    var _this = this;

    var that = this,
        rand = parseInt(Math.random() * 100000000, 0);
    this.bar = {};
    this.settings = {};
    var defaults = {
      html: 'Your Message Here',
      delay: 3000,
      autohide: false,
      padding: '1em',
      backgroundColor: 'rgb(195, 195, 195)',
      animation: {
        type: 'slide',
        duration: 'slow'
      },
      cssClass: null,
      opacity: '1',
      position: 'top',
      closeOnClick: false,
      onShow: function onShow() {},
      onHide: function onHide() {}
    };

    var init = function init() {
      that.settings = $.extend({}, defaults, options);

      _create();

      _applyCustomSettings();
    };

    this.show = function (args) {
      if (args !== undefined) {
        if (args.html) {
          _this.bar.html(args.html);
        }
      }

      switch (_this.settings.animation.type) {
        case 'slide':
          _this.bar.slideDown(that.settings.animation.duration);

          break;

        case 'fade':
          _this.bar.fadeIn(that.settings.animation.duration);

          break;
      }

      if (_this.settings.autohide) {
        setTimeout(function () {
          that.hide();
        }, _this.settings.delay);
      }

      _this.settings.onShow.call(_this, args);
    };

    this.hide = function () {
      switch (_this.settings.animation.type) {
        case 'slide':
          _this.bar.slideUp(that.settings.animation.duration);

          break;

        case 'fade':
          _this.bar.fadeOut(that.settings.animation.duration);

          break;
      }

      _this.settings.onHide.call(_this);
    };

    var _create = function _create() {
      that.bar = $('<div></div>').addClass('peek-a-bar').attr('id', '__peek_a_bar_' + rand);
      $('html').append(that.bar);
      that.bar.hide();
    };

    var _applyCustomSettings = function _applyCustomSettings() {
      _applyHTML();

      _applyAutohide();

      _applyPadding();

      _applyBackgroundColor();

      _applyOpacity();

      _applyCSSClass();

      _applyPosition();

      _applyCloseOnClick();
    };

    var _applyHTML = function _applyHTML() {
      that.bar.html(that.settings.html);
    };

    var _applyAutohide = function _applyAutohide() {
      if (that.settings.autohide) {
        setTimeout(function () {
          that.hide();
        }, that.settings.delay);
      }
    };

    var _applyPadding = function _applyPadding() {
      that.bar.css('padding', that.settings.padding);
    };

    var _applyBackgroundColor = function _applyBackgroundColor() {
      that.bar.css('background-color', that.settings.backgroundColor);
    };

    var _applyCSSClass = function _applyCSSClass() {
      if (that.settings.cssClass !== null) {
        that.bar.addClass(that.settings.cssClass);
      }
    };

    var _applyOpacity = function _applyOpacity() {
      that.bar.css('opacity', that.settings.opacity);
    };

    var _applyPosition = function _applyPosition() {
      switch (that.settings.position) {
        case 'top':
          that.bar.css('top', 0);
          break;

        case 'bottom':
          that.bar.css('bottom', 0);
          break;

        default:
          that.bar.css('top', 0);
      }
    };

    var _applyCloseOnClick = function _applyCloseOnClick() {
      if (that.settings.closeOnClick) {
        that.bar.click(function () {
          that.hide();
        });
      }
    };

    init();
    return this;
  };
})(jQuery);
