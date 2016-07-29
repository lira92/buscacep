# buscacep
Biblioteca javascript para buscar endereço a partir do cep usando jquery.

Baseado na resposta do stackoverflow do usuário Inkeliz https://pt.stackoverflow.com/questions/121515/buscar-cep-por-rua-php/121690#121690

## Para instalar utilize o bower https://bower.io/
``bower install buscacep``

## Utilização
Há dois métodos disponíveis buscaPorCep e buscaPorEndereco, para buscar por cep use o seguinte exemplo:
```javascript
$('#cep').on('blur', function() {
  buscacep.buscaPorCep($(this).val(), function(data) {
		console.log(data);
	});
});
```

Para buscar por endereço utilize:
```javascript
$('#logradouro, #cidade, #uf').on('blur', function() {
	buscacep.buscaPorEndereco($('#logradouro').val(), $('#cidade').val(), $('#uf').val(), function(data) {
		console.log(data);
	});
});
```
## Contribuir
Para contribuir faça clone do repositório, instale as dependencias com 
``bower install``
e depois 
``npm install``
depois rode
``gulp`` 
para que a cada alteração o automatizador de tarefa minifique o arquivo js.

