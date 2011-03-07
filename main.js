(function() {

	var _init = function() {
		_rotatePhoto();
	};

	var _rotatePhoto = function() {
		document.getElementsByTagName('img')[0].style['-webkit-transform'] = 'rotate(90deg)';
	};

	return {
		init: _init
	};

})().init();
