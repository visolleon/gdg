
var main = {
	
	pacmanArray : [],

	game : null,

	start : function (g) {
		this.game = g;
		
		this.pacmanArray.push(new pacman(g, 100, 300));
		this.pacmanArray.push(new pacman(g, 200, 300));
		this.pacmanArray.push(new pacman(g, 300, 300));
		this.pacmanArray.push(new pacman(g, 400, 300));
		this.pacmanArray.push(new pacman(g, 500, 300));
		this.pacmanArray[0].eat();
		this.pacmanArray[4].eat();
		g.Start();
		events.init(this.pacmanArray[0]);
	},


};

//var uUnit = mainGame.createArc(100, 100, 50, 0, Math.PI * 2, true, "#19A8E0");
//uUnit.Alpha = .7;




