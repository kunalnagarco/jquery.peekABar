/**
 * @license
 * @kunalnagarco/jquery-peek-a-bar <https://kunalnagarco.github.io/jquery.peekABar>
 * Copyright 2019 Kunal Nagar
 * Available under MIT license
 */
(function ($) {
  'use strict';

  let _instanceCount = 0;

  $.peekABar = function (options) {
    let that = this;

    this.bar = {};
    this.settings = {};
    this._autohideTimer = null;

    let defaults = {
      html: 'Your Message Here',
      delay: 3000,
      autohide: false,
      padding: '1em',
      backgroundColor: 'rgb(195, 195, 195)',
      animation: {
        type: 'slide',
        duration: 'slow',
      },
      cssClass: null,
      opacity: '1',
      position: 'top',
      closeOnClick: false,

      onShow() {},
      onHide() {},
    };

    let init = () => {
      that.settings = $.extend(true, {}, defaults, options);
      _create();
      _applyCustomSettings();
    };

    this.show = (args) => {
      if (args !== undefined) {
        if (args.html) {
          this.bar.html(args.html);
        }
      }

      const duration = that.settings.animation.duration;
      const onShowDone = () => that.settings.onShow.call(that, args);

      switch (this.settings.animation.type) {
        case 'slide':
          this.bar.slideDown(duration, onShowDone);
          break;
        case 'fade':
          this.bar
            .css('opacity', 0)
            .show()
            .animate({ opacity: that.settings.opacity }, duration, onShowDone);
          break;
      }

      if (this.settings.autohide) {
        clearTimeout(this._autohideTimer);
        this._autohideTimer = setTimeout(() => {
          that.hide();
        }, this.settings.delay);
      }
    };

    this.hide = () => {
      const duration = that.settings.animation.duration;
      const onHideDone = () => that.settings.onHide.call(that);

      switch (this.settings.animation.type) {
        case 'slide':
          this.bar.slideUp(duration, onHideDone);
          break;
        case 'fade':
          this.bar.animate({ opacity: 0 }, duration, () => {
            that.bar.hide();
            onHideDone();
          });
          break;
      }
    };

    this.destroy = () => {
      clearTimeout(that._autohideTimer);
      that.bar.remove();
    };

    let _create = () => {
      const id = ++_instanceCount;
      that.bar = $('<div></div>')
        .addClass('peek-a-bar')
        .attr('id', '__peek_a_bar_' + id);
      $('html').append(that.bar);
      that.bar.hide();
    };

    let _applyCustomSettings = () => {
      _applyHTML();
      _applyPadding();
      _applyBackgroundColor();
      _applyOpacity();
      _applyCSSClass();
      _applyPosition();
      _applyCloseOnClick();
    };

    let _applyHTML = () => {
      that.bar.html(that.settings.html);
    };

    let _applyPadding = () => {
      that.bar.css('padding', that.settings.padding);
    };

    let _applyBackgroundColor = () => {
      that.bar.css('background-color', that.settings.backgroundColor);
    };

    let _applyCSSClass = () => {
      if (that.settings.cssClass !== null) {
        that.bar.addClass(that.settings.cssClass);
      }
    };

    let _applyOpacity = () => {
      that.bar.css('opacity', that.settings.opacity);
    };

    let _applyPosition = () => {
      switch (that.settings.position) {
        case 'bottom':
          that.bar.css({ bottom: 0, top: '' });
          break;
        case 'top':
        default:
          that.bar.css({ top: 0, bottom: '' });
      }
    };

    let _applyCloseOnClick = () => {
      if (that.settings.closeOnClick) {
        that.bar.css('cursor', 'pointer').click(() => {
          that.hide();
        });
      }
    };

    init();

    return this;
  };
})(jQuery);
