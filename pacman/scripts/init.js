var init = {
	LoadImage : function (url, callback) {
	    var img = new Image();
	    img.onload = function () {
	        if (callback) callback();
	    };
	    img.onerror = function(e){
	    	console.log(e);
	    };
	    img.src = url;
	},

	LoadScript : function (url, callback) {
	    var script = document.createElement("script")
	    script.type = "text/javascript";
	    document.getElementsByTagName("head")[0].appendChild(script);
	    script.onload = function () {
	        if (callback) callback();
	    };
	    script.onerror = function(e){
	    	console.log('LoadScript error, url : ' + url);
	    };
	    script.src = url;
	},

	LoadScripts : function (array, callback) {
		var c = 0;
		array.map(function (value, index, arr) {
			this.LoadScript(value, function () {
	    		c++;
	    		if(c >= arr.length) {
	    			callback && callback();
	    		}
			});
		}.bind(this));
	},

	LoadCss : function (url, callback) {
		$.ajax({
			url : url,
			success : function(data){
				_Q('head').insert({ type : 'style', html : data });
				if (callback) callback();
			}
		});
	}
};