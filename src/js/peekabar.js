/**
 * @license
 * jquery.peekABar 2.0.0 <http://kunalnagar.github.io/jquery.peekABar>
 * Copyright 2019 Kunal Nagar
 * Available under MIT license
 */
(function($) {

	'use strict';

	$.peekABar = function(options) {

		let that = this,
			rand = parseInt(Math.random() * 100000000, 0);

		this.bar = {};

		this.settings = {};

		let defaults = {
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

			onShow() {},
			onHide() {}
		};

		let init = () => {
			that.settings = $.extend({}, defaults, options);
			_create();
			_applyCustomSettings();
		};

		this.show = args => {
			if(args !== undefined) {
				if(args.html) {
					this.bar.html(args.html);
				}
			}
			switch (this.settings.animation.type) {
				case 'slide':
					this.bar.slideDown(that.settings.animation.duration);
					break;
				case 'fade':
					this.bar.fadeIn(that.settings.animation.duration);
					break;
			}
			if(this.settings.autohide) {
				setTimeout(function () {
					that.hide();
				}, this.settings.delay);
			}
			this.settings.onShow.call(this, args);
		};

		this.hide = () => {
			switch (this.settings.animation.type) {
				case 'slide':
					this.bar.slideUp(that.settings.animation.duration);
					break;
				case 'fade':
					this.bar.fadeOut(that.settings.animation.duration);
					break;
			}
			this.settings.onHide.call(this);
		};

		let _create = () => {
			that.bar = $('<div></div>').addClass('peek-a-bar').attr('id', '__peek_a_bar_' + rand);
			$('html').append(that.bar);
			that.bar.hide();
		};

		let _applyCustomSettings = () => {
			_applyHTML();
			_applyAutohide();
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

		let _applyAutohide = () => {
			if(that.settings.autohide) {
				setTimeout(() => {
					that.hide();
				}, that.settings.delay);
			}
		};

		let _applyPadding = () => {
			that.bar.css('padding', that.settings.padding);
		};

		let _applyBackgroundColor = () => {
			that.bar.css('background-color', that.settings.backgroundColor);
		};

		let _applyCSSClass = () => {
			if(that.settings.cssClass !== null) {
				that.bar.addClass(that.settings.cssClass);
			}
		};

		let _applyOpacity = () => {
			that.bar.css('opacity', that.settings.opacity);
		};

		let _applyPosition = () => {
			switch(that.settings.position) {
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

		let _applyCloseOnClick = () => {
			if(that.settings.closeOnClick) {
				that.bar.click(() => {
					that.hide();
				});
			}
		};

		init();

		return this;
	};

})(jQuery);
