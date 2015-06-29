;(function($) {

	'use strict';

	$.peekABar = function(options) {

		var that = this,
			rand = parseInt(Math.random() * 100000000, 0);

		this.bar = {};
		this.settings = {};

		var defaults = {
			html: 'Your Message Here',
			delay: 3000,
			animation: {
				type: 'slide',
				duration: 'slow'
			},
			cssClass: '',
			opacity: '1',
			close: {
				show: 'false',
				icon: '&times;',
				cssClass: '',
				padding: ''
			},
			position: 'top',

			onShow: function() {},
			onHide: function() {},

			closeOnClick: false
		};

		var init = function() {
			that.settings = $.extend({}, defaults, options);
			_create();
			_applyCustomSettings();
		};

		this.show = function(args) {
			console.info('show called');
			if(args.html) {
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
			this.settings.onShow.call(this, args);
		};

		this.hide = function() {
			console.info('hide called');
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

		var _create = function() {
			console.info('bar created with id: __peek_a_bar_' + rand);
			console.info('bar created with class: .peek-a-bar');
			that.bar = $('<div></div>').addClass('peek-a-bar').attr('id', '__peek_a_bar_' + rand);
			console.info('printing bar element');
			console.log(that.bar);
			$('html').append(that.bar);
			that.bar.hide();
		};

		var _applyCustomSettings = function() {
			that.bar.html(that.settings.html);
			switch(that.settings.position) {
				case 'top':
					that.bar.css('top', 0);
					break;
				case 'bottom':
					that.bar.css('bottom', 0);
			}
			that.bar.addClass(that.settings.cssClass);
			that.bar.css('opacity', that.settings.opacity);
			if(that.settings.closeOnClick) {
				that.bar.click(function() {
					that.hide();
				});
			}
		};

		init();

		return this;
	}

})(jQuery);
