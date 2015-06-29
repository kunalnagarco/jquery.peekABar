/*!
 * jQuery.peekABar - A Notification Bar Plugin
 *
 * Original Author: @kunalnagar
 *
 * Copyright (c) 2015 Kunal Nagar and other contributors
 *
 * Licensed under the MIT License
 * http://opensource.org/licenses/MIT
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ($, window, document, undefined) {

	'use strict';

	$.peekABar = function (options) {

		var that = this,

			// Used for generating random bar IDs
			rand = parseInt(Math.random() * 100000000, 0);


		// Bar Instance
		this.bar = {};

		// Bar Settings
		this.settings = {};

		// Create the defaults once
		var defaults = {

			// Custom HTML
			html: 'Your Message Here',

			// Autohide bar after showing
			autohide: false,

			// Time the bar is shown for
			delay: 3000,

			// Bar Animation
			// Type: slide/fade
			// Duration: slow/fast or time (in ms)
			animation: {
				type: 'slide',
				duration: 'slow'
			},

			// Bar Padding
			padding: '1em',

			// Bar Background Color
			backgroundColor: '#B3FCFF',

			// Assign a class to the Bar
			// for custom control
			cssClass: '',

			// Opacity
			opacity: '1',

			// Bar Position: top/bottom
			position: 'top',

			// Event called after Bar is shown
			onShow: function () {
			},

			// Event called after Bar is hidden
			onHide: function () {
			},

			// Close the Bar by clicking on it
			closeOnClick: false
		};

		// Initial Setup
		var init = function () {
			that.settings = $.extend({}, defaults, options);

			// Create the Bar
			_create();

			// Apply Custom Settings passed via instance
			_applyCustomSettings();
		};

		// Show the Bar
		this.show = function (args) {
			if (args.html) {
				this.bar.html(args.html);
			}
			switch (this.settings.animation.type) {
				case 'slide':
					this.bar.slideDown(that.settings.animation.duration);
					break;
				case 'fade':
					this.bar.fadeIn(that.settings.animation.duration);
					break;
			}
			if (that.settings.autohide) {
				setTimeout(function () {
					that.hide();
				}, that.settings.delay);
			}
			that.settings.onShow.call(that, args);
		};

		// Hide the Bar
		this.hide = function () {
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

		// Create the Bar
		var _create = function () {
			that.bar = $('<div></div>').addClass('peek-a-bar').attr('id', '__peek_a_bar_' + rand);
			$('html').append(that.bar);
			that.bar.hide();
		};

		// Apply Custom Settings passed via the instance
		var _applyCustomSettings = function () {
			that.bar.html(that.settings.html);
			switch (that.settings.position) {
				case 'top':
					that.bar.css('top', 0);
					break;
				case 'bottom':
					that.bar.css('bottom', 0);
			}
			if (that.settings.cssClass) {
				that.bar.addClass(that.settings.cssClass);
			}
			that.bar.css('padding', that.settings.padding);
			that.bar.css('opacity', that.settings.opacity);
			that.bar.css('background-color', that.settings.backgroundColor);
			if (that.settings.closeOnClick) {
				that.bar.click(function () {
					that.hide();
				});
			}
		};

		init();

		return this;
	}

})(jQuery, window, document);
