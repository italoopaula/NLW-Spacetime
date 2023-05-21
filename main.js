function createMemory (date, title, image, descricao) {
    return `
        <a href="https://www.youtube.com/watch?v=3nz5HkUJaVU" target="_blank" class="memory">
        <small>${date}</small>
        <h1>${title}</h1>
        <div>
            <img src="./assets/${image}.png" alt="Imagem do evento ${image}">
        </div>
        <p>${descricao}</p>
        </a>
    `
}

document.querySelector("nav").innerHTML =
    createMemory('06 de Novembro de 2022', 'NLW Copa', 'nlw-copa', 'Na NLW Copa desenvolvemos um projeto que mostra o calendário de jogos da Copa do Mundo de 2022.') +
    createMemory('21 de Janeiro de 2023', 'NLW Setup', 'nlw-setup', 'Na NLW Setup desenvolvemos um app para ajudar a rastrear os hábitos.')