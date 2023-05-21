function createMemory (link, date, title, image, description) {
    return `
        <a href="https://github.com/italoopaula/${link}" target="_blank" class="memory">
        <small>${date}</small>
        <h1>${title}</h1>
        <div>
            <img src="./assets/${image}.png" alt="Imagem do evento ${image}">
        </div>
        <p>${description}</p>
        </a>
    `
}

document.querySelector("nav").innerHTML =
    createMemory('nlw-copa', '06 de Novembro de 2022', 'NLW Copa', 'nlw-copa', 'Na NLW Copa desenvolvemos um projeto que mostra o calendário de jogos da Copa do Mundo de 2022.') +
    createMemory('nlw-setup', '21 de Janeiro de 2023', 'NLW Setup', 'nlw-setup', 'Na NLW Setup desenvolvemos um app para ajudar a rastrear os hábitos.')