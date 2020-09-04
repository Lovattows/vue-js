new Vue({
    el: "#desafio",
    data: {
        nome: 'Gabriel Lovatto',
        idade: '25',
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        num_random: function () {
            return Math.random()
        }
    }
})
