var cargarPagina = function() {
	// alert('cargada');
	var xhr = new XMLHttpRequest();
	$.getJSON('http://pokeapi.co/api/v2/pokemon/', function(data){
		// console.log(this.data);
		var listaPokemons = data.results;
		// return listaPokemons;
		//si ponemos parametros en la funcion cuando la mandas a llamar tambien se lo asignas
		traerPokemons(listaPokemons);
	});
};

function traerPokemons(listaPokemons){
	var ul = $('#pokemons');
	listaPokemons.forEach(function(pokemon){
		var li = $('<li/>');
		li.text(pokemon.name);
		ul.append(li);

	});
};



$(document).ready(cargarPagina);