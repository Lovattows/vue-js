new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Botão clicado')
        },
        alterarValor(e) {
            this.valor = event.target.value
        }
    }
})