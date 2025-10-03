$(document).ready(function () {
    let params = new URLSearchParams(document.location.search);
    let idCategoria = params.get("idCategoria");

    console.log("Categoria: " + idCategoria);

    $.ajax({
        url: urlBase + "/Categoria/" + idCategoria, //Endpoint
        type: "GET",
        contentType: "application/json",
        //se der sucesso (200) cai aqui nesse bloco
        success: function (dados) {
            const tituloCategoria = $('#title-category');
            tituloCategoria.html(dados.nome);

        },
        error: function (erro) {
            console.log('Erro a o carregar categorias!');
        }
    });

    $.ajax({
        url: urlBase + "/Produto/by-category/" + idCategoria, //Endpoint
        type: "GET",
        contentType: "application/json",
        //se der sucesso (200) cai aqui nesse bloco
        success: function (dados) {

            const divProdutos = $('#products');
            divProdutos.empty();

            const divLancamento = `<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Lançamento</div>`;	

            dados.forEach(produto => {
                let card = `<div class="col mb-5">
                                <div class="card h-100">
                                ${produto.ehLancamento == true ? divLancamento : ''}
                                    <!-- Product image-->
                                    <img class="card-img-top" src="${produto.imagem}" width="450" alt="..." />
                                    <!-- Product details-->
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <!-- Product name-->
                                            <h5 class="fw-bolder">${produto.nome}</h5>
                                            <!-- Product reviews-->
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                ${'<div class=bi-star-fill></div>'.repeat(produto.nota)}
                                            </div>
                                            <!-- Product price-->
                                            R$${produto.preco.toFixed(2)}
                                        </div>
                                    </div>
                                    <!-- Product actions-->
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="produto_detalhes.html?idProduto=${produto.id}">Ver Produto</a></div>
                                    </div>
                                </div>
                            </div>`;

                divProdutos.append(card);
            });
        },
        error: function (erro) {
            console.log('Erro a o carregar produtos!');
        }
    });

});