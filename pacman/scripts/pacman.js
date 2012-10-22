/**
 * Export object : pacman
 */
(function (global) {
	var pacman = function (g, x, y) {
		var borderStyle = 'rgba(0,0,0,0.8)';

		this.init();

		this.x = x;
		this.y = y;
		this.step = 1;

		var t = this;
		// create body...
		this.body = g.createShape(function (ctx) {
			ctx.strokeStyle = borderStyle;
			ctx.lineWidth = 8;

			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.arc(this.x, this.y, 50, t.startAngle, t.endAngle, false);
			ctx.closePath();
			ctx.stroke();

			ctx.fillStyle = "#EBED03";
			ctx.fill();
		}.bind(this));

		// create eye
		this.eye = g.createArc(this.x, this.y - 25, 5, 0, Math.PI * 2, false, borderStyle);
	};

	var eatThread;

	// init
	pacman.prototype.init = function () {
		this.startAngle = Math.PI * 1/6;
		this.endAngle = Math.PI * 11/6;
	};

	pacman.prototype.moveX = function (num) {
		this.x += num;
		this.eye.Position[0] = this.x;
	};

	pacman.prototype.moveY = function (num) {
		this.y += num;
		this.eye.Position[1] = this.y - 25;
	};

	// eating...
	pacman.prototype.eat = function () {
		var no = 1;
		var total = 6;
		var isplus = true;
		var step = 0.2;

		// scope : 0 - 2
		eatThread = setInterval(function () {
			no += (isplus ? step : -step);
			if(no >= 2 || no <= 0) {
				isplus = !isplus;
			}
			this.startAngle = Math.PI * no/total;
			this.endAngle = Math.PI * (total * 2 - no)/total;
		}.bind(this), 30);
	};

	// stop eating...
	pacman.prototype.stop = function () {
		clearInterval(eatThread);
		this.init();
	};

	pacman.prototype.up = function () {
		this.moveInterval = setInterval(function () {
			this.moveY(-this.step)
			console.log('up');
		}.bind(this), 30);
	},

	pacman.prototype.down = function () {
		this.moveY(this.step);
	}

	pacman.prototype.left = function () {
		this.moveX(-this.step);
	}

	pacman.prototype.right = function () {
		this.moveX(this.step);
	}

	global.pacman = pacman;
	
})(window);