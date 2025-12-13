const dataAlvo = new Date("2025-12-15T23:59:00");

function atualizarCronometro() {
    const data = new Date();

    // Calcula a diferença
    const diff = dataAlvo - data;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horasDiff = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutosDiff = Math.floor((diff / (1000 * 60)) % 60);
    const segundosDiff = Math.floor((diff / 1000) % 60);

    // Mostra no HTML
    document.getElementById("tempo").innerText =
        `${dias}d ${horasDiff}h ${minutosDiff}m ${segundosDiff}s`;
}

setInterval(atualizarCronometro, 1000);
