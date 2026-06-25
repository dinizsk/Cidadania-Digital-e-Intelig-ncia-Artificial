<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cidadania Digital & IA</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Cidadania Digital & IA</h1>
        <p>Desmascarando as Deepfakes e a Desinformação</p>
        <button id="toggle-dark-mode" aria-label="Alternar modo escuro">Alternar Modo Escuro</button>
    </header>

    <main>
        <section id="sobre">
            <h2>O que são Deepfakes?</h2>
            <p>Deepfakes são vídeos, áudios ou imagens gerados por Inteligência Artificial...</p>
        </section>

        <section id="quiz">
            <h2>Quiz Interativo: É Real ou Deepfake?</h2>
            <form id="quiz-form">
                <fieldset>
                    <legend>1. Um vídeo de um político declarando guerra urgente aparece nas redes sociais sem fontes oficiais. O que você faz?</legend>
                    
                    <label>
                        <input type="radio" name="q1" value="errado">
                        Compartilho imediatamente para alertar meus amigos.
                    </label>
                    
                    <label>
                        <input type="radio" name="q1" value="correto">
                        Desconfio, analiso falhas de sincronia labial e busco em portais de notícias confiáveis.
                    </label>
                </fieldset>
                <button type="submit">Verificar Respostas</button>
            </form>
            <div id="resultado" aria-live="polite"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Desenvolvido para o Projeto de Cidadania Digital. Conteúdo 100% Autoral.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
