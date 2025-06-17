function produzir() {
    const produto = document.querySelector('.select-item').value;

    // colar o link do Node-Red aqui depois de fazer os nós la
    fetch('http://127.0.0.1:5500/site.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ produtoSelecionado: produto })
    })
    .then(response => {
      if (response.ok) {
        alert('Produto enviado com sucesso para o Node-RED!');
      } else {
        alert('Erro ao enviar para o Node-RED.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro de conexão com o Node-RED.');
    });
  }

function produzir() {
    const produto = document.querySelector('.select-item').value;

    if (produto === "Selecione o produto") {
        alert("Por favor, selecione um produto.");
        return;
    }

    const dados = { produtoSelecionado: produto };

    fetch('http://127.0.0.1:1880/pedido', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
            alert('Produto enviado com sucesso para o Node-RED!');
        } else {
            throw new Error('Resposta inesperada do servidor.');
        }
    })
    .catch(error => {
        console.warn('⚠️ Node-RED não disponível. Adicionando no histórico local.');
        console.log('Detalhes do erro:', error);

        // Se falhar, adiciona no histórico localmente
        const historicoDiv = document.querySelector('.historico');

        const novoItem = document.createElement('p');
        novoItem.textContent = `Produto selecionado: ${produto}`;

        historicoDiv.appendChild(novoItem);

        alert('Simulação: produto adicionado ao histórico local!');
    });
}

/*
function produzir() {
  const produto = document.querySelector('.select-item').value;

  fetch('http://localhost:1880/producao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ produtoSelecionado: produto })
  })
  .then(response => {
    if (response.ok) {
      alert('Produto enviado com sucesso para o Node-RED!');

      // 👉 Adiciona o produto no histórico
      const historico = document.querySelector('.historico');
      const novoItem = document.createElement('p');
      novoItem.textContent = produto;
      historico.appendChild(novoItem);
    } else {
      alert('Erro ao enviar para o Node-RED.');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro de conexão com o Node-RED.');
  });
}
*/
