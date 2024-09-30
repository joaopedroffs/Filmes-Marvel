function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas para facilitar a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio. Se sim, exibe uma mensagem de erro e encerra a função
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum filme encontrado!, Digite o nome de um filme</p>";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item (filme) no conjunto de dados
    for (let dado of dados) {

      // Converte o título, descrição e tags do filme para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
      let dataLancamento = dado.dataLancamento;
  
      // Verifica se o termo de pesquisa está presente no título, descrição, tags ou ano do filme
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ||  parseInt(dataLancamento) === parseInt(campoPesquisa)) {

        // Se encontrar uma correspondência, adiciona o filme aos resultados da pesquisa
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">Ano do lançamento: ${dado.dataLancamento}<p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados. Se não, exibe uma mensagem de erro
    if (!resultados) {
      resultados = "<p>Nenhum filme encontrado!</p>";
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados da pesquisa
    section.innerHTML = resultados;
  }