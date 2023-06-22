function fazerCadastro() {
    var nome = document.getElementById('campo-nome-completo').value
    var senha = document.getElementById('campo-senha').value

    if(nome === "") {
        document.getElementById('campo-nome-completo').classList.add('input-error')
        document.getElementById('campo-nome-completo').focus()
        document.getElementById('error-nome').hidden = false
        document.getElementById('error-nome').innerText = "O nome é obrigatório"
    } else if(senha.length < 9) {
        document.getElementById('campo-senha').classList.add('input-error')
        document.getElementById('error-senha').hidden = false
        document.getElementById('error-senha').innerText = "A senha deve no minimo 8 caracteres"
    } 

}