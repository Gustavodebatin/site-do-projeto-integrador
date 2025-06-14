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

