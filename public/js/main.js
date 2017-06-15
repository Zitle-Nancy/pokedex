// XMLHttpRequest

var cargarPagina = function () {
	cargarPokemones();
	$(document).on("click", ".pokemon", obtenerDetallePokemon);
};
var contador = 0;
var cargarPokemones = function () {
	var url = 'https://pokeapi.co/api/v2/pokemon';
	$.getJSON(url, mostrarPokemones);
};
var contenedorImagenes = $('.seccion-fotos');
var mostrarPokemones = function (response) {
	var pokemones = response.results;
	pokemones.forEach(function (pokemon, indice) {
		contador ++; 
		var nombrePokemon = pokemon.name;
		var urlPokemon = pokemon.url.replace("pokemon", "pokemon-species");
		var $div = $('<div />');
		var $parrafo = $("<p />").text(nombrePokemon);
		$parrafo.addClass("pokemon");
		$parrafo.attr("data-url", urlPokemon);
		var $img = $("<img />", {
			class: 'imagen-pokemon',
			src: "./assets/img/" + contador + ".jpg",
			alt: nombrePokemon
		});
		$div.append($img);
		$(".seccion-fotos").append($div);
		$(".seccion-fotos").append($parrafo);
	});
};

var obtenerDetallePokemon = function () {
	var url = $(this).data("url");
	$.getJSON(url, mostrarDetallePokemon);
};

var mostrarDetallePokemon = function (response) {
	var habitat = response.habitat.name;
	var genero = response.genera[0].genus;
	alert(habitat +' ' +genero);
};

$(document).ready(cargarPagina);