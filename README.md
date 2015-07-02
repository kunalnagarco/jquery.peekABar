# jquery.peekABar v1.0.1

A jQuery plugin for a notification bar with a lot of customization options.

## Installation

```
bower install jquery.peekABar --save
```

## Options

### html
Use custom HTML as bar text.

Type: `String`  
Default: `Your Message Here`

### autohide
Autohide the bar after it is shown.

Type: `Boolean`  
Default: `false`

### delay
Time (in ms) before the bar is hidden if `autohide` is `true`.

Type: `Number`  
Default: `3000`

### padding
Add some padding to the bar.

Type: `String`  
Default: `1em`

### backgroundColor
Add a custom background color to the bar.

Type: `String`  
Default: `rgb(195, 195, 195)`

### animation
The way in which the bar reveals itself.

Type: `Object`  
Example:  
```
animation: {
	type: 'slide/fade',
	duration: 'slow/3000(in ms)'
}
```

### cssClass
Assign a Custom CSS class to the bar. **Overrides ALL styles passed as options**. For e.g. padding, backgroundColor etc.

Type: `String`  
Default: `empty`

### opacity
Change bar opacity.

Type: `Number`  
Default: `1`

### position
Where should the bar be revealed? Top or bottom of the page?

Type: `String`  
Default: `top`  
Values: `top | bottom`

### closeOnClick
Close the bar by clicking on it.

Type: `Boolean`  
Default: `false`

## Event Methods

### onShow
Called after the bar is shown.

### onHide
Called after the bar is hidden.

## Instance Methods

### bar.show()
Show the bar.

### bar.hide()
Hide the bar.

## Example
Please check out the complete example below:
```
// Create a bar
var bar = $.peekABar({
	html: 'Custom Message',
	delay: 2000,
	autohide: true,
	padding: '2em',
	backgroundColor: 'rgb(195, 195, 195)',
	animation: {
		type: 'fade',
		duration: '2000'
	},
	opacity: '0.8',
	cssClass: 'custom-class',
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

## Support
For any issues/queries, please open a new [Github Issue](https://github.com/kunalnagar/jquery.peekABar/issues).

## Share
If you like the plugin, please share it with your friends!
