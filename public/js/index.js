
var $ = require('jquery');



$(document).ready(function(){
	$('#prompt').keydown(function( e ){
		if( e.keyCode === 13 ){
			console.log( "RUN!!" );
			var code = $('#prompt').val();
			$('#prompt').val('');
			terminal.run( code );
		}
	});
});

var terminal = {};
terminal.run = function( code ){
	eval( code );
};