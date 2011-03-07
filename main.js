(function() {

	var _init = function() {
		_rotatePhotos();
	};

	var _rotatePhotos = function() {
		var photos = document.getElementsByTagName('img');
		var len = photos.length;
		while(len) {
			len--;
			photos[len].style['-webkit-transform'] = 'rotate(90deg)';
		}
	};

	return {
		init: _init
	};

})().init();
