import { usuarios } from "../constantes/usuarios.js"

document.getElementById("login-button").addEventListener("click", clicarNoBotao);

function clicarNoBotao() {
    const email = document.getElementById("campo-email").value
    const senha = document.getElementById("campo-senha").value

    document.getElementById('campo-email').classList.remove("input-error")
    document.getElementById('campo-senha').classList.remove("input-error")

    if (email === "") {
        /* adiciona um estilo inline */
        // document.getElementById('campo-email').style = "border-color: red"

        /* adiciona um estilo direto no objeto */
        // document.getElementById('campo-email').style.backgroundColor = 'red'

        document.getElementById('campo-email').classList.add("input-error")
        document.getElementById('campo-email').focus()
    } else if (senha === "") {
        document.getElementById('campo-senha').classList.add("input-error")
        document.getElementById('campo-email').focus()
    } else {
     
        document.getElementById('login-button').disabled = true
        document.getElementById('login-button').style.opacity = 0.5
        document.getElementById('login-button').innerText = "Logando ..."

        const usuarioEncontrado = usuarios.find(
            usuario => usuario.email === email && usuario.password === senha
        )

        if (usuarioEncontrado) {
            // redireciona para outra página
            window.location.href = "./home.html";
        } else {
            
            document.getElementById('login-button').disabled = false
            document.getElementById('login-button').style.opacity = 1
            document.getElementById('login-button').innerText = "Entrar"

            alert("Usuário não foi encontrado")
        }
    }
}


