// XMLHttpRequest
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
});
var cargarPagina = function () {
	cargarPokemones();
	$(document).on("click", ".pokemon", obtenerDetallePokemon);
};
var contador = 0;
var cargarPokemones = function () {
	var url = 'https://pokeapi.co/api/v2/pokemon';
	$.getJSON(url, mostrarPokemones);
};
var plantilla = 
	  '<div id="modal1" class="modal">'+
	    '<div class="modal-content">'+
	      '<h4>Datos Pokemon</h4>'+
	      '<p><strong>habitat:</strong>__habitat__</p>'+
	      '<p><strong>color:</strong>__color__</p>'+
	      '<p><strong>shape:</strong>__shape__</p>'+
	    '</div>'+
	    '<div class="modal-footer">'+
	      '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>'+
	    '</div>'+
	  '</div>';
var contenedorImagenes = $('.seccion-fotos');
var mostrarPokemones = function (response) {
	var pokemones = response.results;
	pokemones.forEach(function (pokemon, indice) {
		contador ++; 
		var nombrePokemon = pokemon.name;
		var urlPokemon = pokemon.url.replace("pokemon", "pokemon-species");
		var $div = $('<div />');
		var $a = $("<a />",{
			href : '#modal1'	
		});
		var $parrafo = $("<p />").text(nombrePokemon);
		$parrafo.attr("data-url", urlPokemon);
		$parrafo.addClass("pokemon");
		var $img = $("<img />", {
			class: 'imagen-pokemon',
			src: "./assets/img/" + contador + ".jpg",
			alt: nombrePokemon
		});
		$a.append($img);
		$div.append($a);
		$div.append($parrafo);
		$(".seccion-fotos").append($div);
	});
};

var obtenerDetallePokemon = function () {
	var url = $(this).data("url");
	$.getJSON(url, mostrarDetallePokemon);
};
var mostrarDetallePokemon = function (response) {
	$('#habitat').text(response.habitat.name);
	$('#color').text(response.color.name);
	$('#shape').text(response.shape.name);
};

$(document).ready(cargarPagina);