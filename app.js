
        // Função de pesquisa
        function pesquisar() {
            // Obtém a seção HTML onde os resultados serão exibidos
            let section = document.getElementById("resultados-pesquisa");

            // Obtém o valor do campo de pesquisa
            let campoPesquisa = document.getElementById("campo-pesquisa").value;

            // Se campoPesquisa for uma string vazia ou apenas espaços
            if (!campoPesquisa.trim()) {
                section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>";
                return;
            }

            // Converte a pesquisa para minúsculas para comparação
            campoPesquisa = campoPesquisa.toLowerCase();

            // Inicializa uma string vazia para armazenar os resultados
            let resultados = "";

            // Itera sobre cada dado da lista de dados
            for (let dado of dados) {
                let titulo = dado.titulo.toLowerCase();
                let descricao = dado.descricao.toLowerCase();

                // Verifica se o campo de pesquisa está incluído no título ou descrição
                if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
                    // Adiciona o resultado encontrado à variável 'resultados'
                    resultados += `
                        <div class="item-resultado">
                            <h2>
                                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                            </h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <img src="${dado.url}" alt="${dado.titulo}" class="imagem-resultado">
                            <a href="${dado.link}" target="_blank">Mais informações</a>
                        </div>
                    `;
                }
            }

            // Exibe uma mensagem se nenhum resultado for encontrado
            if (!resultados) {
                resultados = "<p>Nada foi encontrado</p>";
            }

            // Atribui os resultados gerados à seção HTML
            section.innerHTML = resultados;
        }