var regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function fazerCadastro() {
    var nome = document.getElementById('campo-nome-completo').value
    var senha = document.getElementById('campo-senha').value
    var telefone = document.getElementById('campo-telefone').value
    var email = document.getElementById('campo-email').value

    document.getElementById('campo-nome-completo').classList.remove("input-error")
    document.getElementById('error-nome').hidden = true

    document.getElementById('campo-senha').classList.remove("input-error")
    document.getElementById('error-senha').hidden = true

    document.getElementById('campo-telefone').classList.remove("input-error")
    document.getElementById('error-telefone').hidden = true

    document.getElementById('campo-email').classList.remove("input-error")
    document.getElementById('error-email').hidden = true

    if (nome === "") {
        document.getElementById('campo-nome-completo').classList.add('input-error')
        document.getElementById('campo-nome-completo').focus()
        document.getElementById('error-nome').hidden = false
        document.getElementById('error-nome').innerText = "O nome é obrigatório"
    } else if (senha.length < 9) {
        document.getElementById('campo-senha').classList.add('input-error')
        document.getElementById('error-senha').hidden = false
        document.getElementById('error-senha').innerText = "A senha deve no minimo 8 caracteres"
    } else if (regexTelefone.test(telefone) === false) {
        document.getElementById('campo-telefone').classList.add('input-error')
        document.getElementById('error-telefone').hidden = false
        document.getElementById('error-telefone').innerText = "Digite um telefone válido"
    } else if (regexEmail.test(email) === false) {
        document.getElementById('campo-email').classList.add('input-error')
        document.getElementById('error-email').hidden = false
        document.getElementById('error-email').innerText = "Digite um email válido"
    }
}