const dataAlvo = new Date("2025-12-15T23:59:59");

const tempoEl = document.getElementById("tempo");
const botao = document.getElementById("btnAcessar");
const titulo = document.getElementById("titulo");

let intervalo = null; // ✅ declarado antes

function finalizar() {
    titulo.style.display = "none";
    tempoEl.innerText = "Feliz Aniversário!";
    botao.disabled = false;
}

function atualizarCronometro() {
    const agora = new Date();
    const diff = dataAlvo - agora;

    // Se já acabou (inclusive após atualizar)
    if (diff <= 0) {
        finalizar();

        if (intervalo) {
            clearInterval(intervalo);
        }

        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    tempoEl.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Executa ao carregar a página
atualizarCronometro();

// Inicia o intervalo DEPOIS
intervalo = setInterval(atualizarCronometro, 1000);

// Botão sempre funcional
botao.addEventListener("click", () => {
    window.location.href = "home.html";
});
