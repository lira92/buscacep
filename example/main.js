$('#cep').on('blur', function() {
	buscacep.buscaPorCep($(this).val(), function(data) {
		$('#logradouro').val(data.logradouro);
		$('#bairro').val(data.bairro);
		$('#cidade').val(data.localidade);
		$('#uf').val(data.uf);
	});
});

$('#logradouro, #cidade, #uf').on('blur', function() {
	buscacep.buscaPorEndereco($('#logradouro').val(), $('#cidade').val(), $('#uf').val(), function(data) {
		$('#cep').val(data.cep);
	});
})