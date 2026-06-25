// Gerenciamento do Modo Escuro
const toggleBtn = document.getElementById('toggle-dark-mode');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (document.documentElement.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

// Validação do Quiz
const quizForm = document.getElementById('quiz-form');
const resultadoDiv = document.getElementById('resultado');

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedOption = quizForm.querySelector('input[name="q1"]:checked');
    
    if (!selectedOption) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, selecione uma resposta.</p>";
        return;
    }
    
    if (selectedOption.value === 'correto') {
        resultadoDiv.innerHTML = "<p style='color: green;'><strong>Correto!</strong> Sempre verifique em fontes confiáveis.</p>";
    } else {
        resultadoDiv.innerHTML = "<p style='color: red;'><strong>Incorreto.</strong> Compartilhar sem checar espalha desinformação.</p>";
    }
});

