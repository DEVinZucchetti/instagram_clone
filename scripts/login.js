
function clicarNoBotao() {
    var email = document.getElementById("campo-email").value
    var senha = document.getElementById("campo-senha").value

    document.getElementById('campo-email').classList.remove("input-error")
    document.getElementById('campo-senha').classList.remove("input-error")
    
    if (email === "") {
        /* adiciona um estilo inline */
        // document.getElementById('campo-email').style = "border-color: red"

         /* adiciona um estilo direto no objeto */
        // document.getElementById('campo-email').style.backgroundColor = 'red'
        
        document.getElementById('campo-email').classList.add("input-error")
        document.getElementById('campo-email').focus()
    } else if(senha === "") {
        document.getElementById('campo-senha').classList.add("input-error")
        document.getElementById('campo-email').focus()
    } else {
        document.getElementById('login-button').disabled = true
        document.getElementById('login-button').style.opacity = 0.5
        document.getElementById('login-button').innerText = "Logando ..." 
        // redireciona para outra página
        window.location.href = "./home.html";
    }
}


