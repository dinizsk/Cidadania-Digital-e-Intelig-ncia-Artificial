// Seleção de elementos do DOM
const btnAcessibilidade = document.getElementById('btn-acessibilidade');
const quizForm = document.getElementById('quiz-form');
const resultadoQuiz = document.getElementById('resultado-quiz');

// 1. Funcionalidade de Acessibilidade: Modo Escuro
btnAcessibilidade.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Processamento e Validação do Quiz Anti-Desinformação
quizForm.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita o recarregamento da página

    // Captura a opção selecionada usando o name do input
    const respostaSelecionada = quizForm.q1.value;
    
    // Variável para processar a mensagem de feedback antes de exibir
    let mensagemFeedback = "";

    if (!respostaSelecionada) {
        mensagemFeedback = "Por favor, selecione uma alternativa antes de enviar.";
        resultadoQuiz.style.backgroundColor = "#fef08a";
        resultadoQuiz.style.color = "#854d0e";
    } else if (respostaSelecionada === "certo") {
        mensagemFeedback = "Parabéns! Você demonstrou uma excelente atitude de Cidadania Digital. Sempre verifique fontes!";
        resultadoQuiz.style.backgroundColor = "#bbf7d0";
        resultadoQuiz.style.color = "#166534";
    } else {
        mensagemFeedback = "Cuidado! Compartilhar mídias sem checar espalha desinformação automatizada gerada por IA.";
        resultadoQuiz.style.backgroundColor = "#fecaca";
        resultadoQuiz.style.color = "#991b1b";
    }

    // Exibe o resultado dinamicamente modificando o DOM
    resultadoQuiz.textContent = mensagemFeedback;
    resultadoQuiz.classList.remove('escondido');
});
