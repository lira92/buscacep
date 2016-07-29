if("undefined"==typeof jQuery) {
    throw new Error("buscacep requires jQuery");
}

var buscacep = {
    validacep : /^[0-9]{8}$/,
    getRequest : function (url, callback) {
        $.get(url, function(data) {
            if (!("erro" in data)) {
                if (Object.prototype.toString.call(data) === '[object Array]') {
                    data = data[0];
                }
                callback(data);
            }
        });
    },
    buscaPorEndereco : function(logradouro, localidade, uf, callback) {
        if (logradouro !== '' && localidade !== '' && uf !== '') {
            this.getRequest('https://viacep.com.br/ws/' + uf + '/' + localidade + '/' + logradouro + '/json/', callback);
        }
    },
    buscaPorCep: function(cep, callback) {
        cep = cep.replace(/\D/g, '');

        if (cep !== "" && this.validacep.test(cep)) {
            this.getRequest('https://viacep.com.br/ws/' + cep + '/json/', callback);
        }
    }
};
