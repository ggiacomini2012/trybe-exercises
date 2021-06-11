console.clear();

const arrayEstados = [
    { 'AC': 'Acre' },
    { 'AL': 'Alagoas' },
    { 'AP': 'Amapá' },
    { 'AM': 'Amazonas' },
    { 'BA': 'Bahia' },
    { 'CE': 'Ceará' },
    { 'DF': 'Distrito Federal' },
    { 'ES': 'Espírito Santo' },
    { 'GO': 'Goías' },
    { 'MA': 'Maranhão' },
    { 'MT': 'Mato Grosso' },
    { 'MS': 'Mato Grosso do Sul' },
    { 'MG': 'Minas Gerais' },
    { 'PA': 'Pará' },
    { 'PB': 'Paraíba' },
    { 'PR': 'Paraná' },
    { 'PE': 'Pernambuco' },
    { 'PI': 'Piauí' },
    { 'RJ': 'Rio de Janeiro' },
    { 'RN': 'Rio Grande do Norte' },
    { 'RS': 'Rio Grande do Sul' },
    { 'RO': 'Rondônia' },
    { 'RR': 'Roraíma' },
    { 'SC': 'Santa Catarina' },
    { 'SP': 'São Paulo' },
    { 'SE': 'Sergipe' },
    { 'TO': 'Tocantins' },
  ]

  for (index = 0; index < arrayEstados.length; index += 1) {
      const estados = document.getElementById('estado');
      const estadosOptions = document.createElement('option');
      const estadoAtualValue = Object.getOwnPropertyNames(arrayEstados[index]).toString()
      const estadoAtualInnerText = Object.values(arrayEstados[index]).toString();
      estadosOptions.value = estadoAtualValue;
      estadosOptions.innerText = estadoAtualInnerText;
      estados.appendChild(estadosOptions);
  }

//   source: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
  function stopDefAction(evt) {
    evt.preventDefault();
}
//   source: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
document.getElementById('my-checkbox').addEventListener(
    'click', stopDefAction, false
);