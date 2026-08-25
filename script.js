const btnDanca = document.getElementById('btn-danca');
const statusDanca = document.getElementById('status-danca');

btnDanca.addEventListener('click', () => {
  statusDanca.textContent = '🕺 Deslizando para trás com o Moonwalk!';
  
  // Reseta o texto após 3 segundos
  setTimeout(() => {
    statusDanca.textContent = '';
  }, 3000);
});
