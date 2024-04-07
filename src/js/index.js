const body = document.querySelector("body");
const botaoAlterarTema = document.getElementById("botao_alterar_tema");
const imagemBotao = document.querySelector(".imagem_botao");
let modoEscuroAtivo = localStorage.getItem("temaEscuroAtivo");

if (modoEscuroAtivo === "true") {
    body.classList.add("modo_escuro");
    imagemBotao.setAttribute("src", "./src/img/moon.png");
}

botaoAlterarTema.addEventListener("click", () => {
    if (!modoEscuroAtivo) {
        body.classList.add("modo_escuro");
        imagemBotao.setAttribute("src", "./src/img/moon.png");
        localStorage.setItem("temaEscuroAtivo", true);
        modoEscuroAtivo = true;
    } else {
        body.classList.remove("modo_escuro");
        imagemBotao.setAttribute("src", "./src/img/sun.png");
        localStorage.setItem("temaEscuroAtivo", false);
        modoEscuroAtivo = false;
    }
});