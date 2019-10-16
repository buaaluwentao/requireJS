
//需要对外暴露的才写到这里
/*require.config({
	paths:{
		jquery:"jquery"
	}
});*/

require(["jquery"], function($){
	require(["updateStyle"], function(style){
			style.updateUI();
	});	
});