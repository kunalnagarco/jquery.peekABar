# jquery.peekABar v1.0.0

A jQuery plugin for a notification bar with a lot of cusotmization options.

## Installation

```
bower install jquery.peekABar --save
```

## Options

### html
Type: `String`  
Default: `Your Message Here`

### delay
Type: `Number`  
Default: `3000`

### autohide
Type: `Boolean`  
Default: `false`

### padding
Type: `String`  
Default: `1em`

### animation
Type: `Object`  
Default: `{ type: 'slide/fade', duration: 'slow/time(in ms)' }`  
Example:  
```
animation: {
	type: 'slide',
	duration: 'slow'
}
```

### cssClass
Type: `String`  
Default: `empty`

### opacity
Type: `Number`  
Default: `1`

### position
Type: `String`  
Default: `top`  
Values: `top | bottom`

### closeOnClick
Type: `Boolean`  
Default: `false`

## Event Methods

### onShow

### onHide

## Instance Methods

### bar.show()

### bar.hide()

## Example
```
// Create a bar
var bar = $.peekABar({
	html: 'Custom Message',
	delay: 2000,
	autohide: true,
	padding: '2em',
	animation: {
		type: 'fade',
		duration: '2000'
	},
	cssClass: 'custom-class',
	opacity: '0.8',
	position: 'bottom',
	closeOnClick: true
	onShow: function() {
		console.log('called after bar is shown');
	},
	onHide: function() {
		console.log('called after bar is hidden');
	}
});

// Show the bar
bar.show();

// Hide the bar
bar.hide();

// Show the bar with custom HTML
// This call will override the HTML
// set in any previous definitions.
bar.show({
	html: 'Overrides all, puny human.'
});
```
