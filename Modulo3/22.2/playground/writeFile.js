const fs = require('fs').promises;

fs.writeFile('./arquivosTxt/meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    console.error('err');
  });
