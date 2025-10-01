/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//urlBase da API
const urlBase = "http://localhost:5112/api"

$.ajax({
    url: urlBase + "/Categoria", //Endpoint
    type: "GET",
    contentType: "application/json",
    //se der sucesso (200) cai aqui nesse bloco
    success: function (dados) {

        //selecionar a div dos generos
        const menuCategorias = $('.dropdown-menu');
        menuCategorias.empty();

        dados.forEach(categoria => {

            const item = `<li><a class="dropdown-item" href="produtos.html">${categoria.nome}</a></li>`;

            menuCategorias.append(item);
        });

    },
    error: function (erro) {
        console.log('Deu erro!');
    }
});