var events = {
	init : function (o) {
		document.addEventListener("keydown", function (e) {
			events.keydown(o, window.event ? e.keyCode : e.which);
		}, true);

        document.addEventListener("keyup", function (e) {
			events.keyup(o, window.event ? e.keyCode : e.which);
		}, true);
	},

	keydown : function (o, key) {
		switch(key){
			case 39:
				o.left();
				break;
			case 65:
				o.left();
				break;
			case 38:
				o.up();
				break;
			case 87:
				o.up();
				break;
			case 37:
				o.right();
				break;
			case 68:
				o.right();
				break;
			case 40:
				o.down();
				break;
			case 83:
				o.down();
				break;
		};
	},

	keyup : function (o, key) {
		clearInterval(o.moveInterval);
	}
};

var keys = {
	left : 39,
	up : 38,
	right : 37,
	down : 40,
	A : 65,
	W : 87,
	D : 68,
	S : 83
};