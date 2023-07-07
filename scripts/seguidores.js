import { seguidores } from '../constantes/seguidores.js'

const seguidoresFormatados = seguidores.map(seguidor => {
    return {
        ...seguidor,
        apelido: "#" + seguidor.nome.toLowerCase().replace(" ", "_")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '')
    }
})

document.getElementById('form-pesquisa').addEventListener('submit', (event) => {
    event.preventDefault()

    const valorDigitadoPesquisa = document.getElementById('input-pesquisa').value

    const seguidoresFiltrados = seguidoresFormatados.filter(
        (seguidor) =>
            seguidor.nome.toLowerCase() // deixa o nome caixa baixa
                .includes(valorDigitadoPesquisa.toLowerCase())
    )

    document.getElementById('corpo-tabela').innerHTML = ''

    gerarLinhasDaTabela(seguidoresFiltrados)
})

function criarLinhasTabela() {
    gerarLinhasDaTabela(seguidoresFormatados)
}

function gerarLinhasDaTabela(dados) {

    dados.map((seguidor) => {
        const tr = document.createElement('tr') // <tr></tr>

        const tdFoto = document.createElement('td') // <td> </td>
        /*
         const image = document.createElement('img')
         image.setAttribute('src', seguidor.url)
         tdFoto.appendChild(image)
        */
        tdFoto.innerHTML = `<img src=${seguidor.url} />` // td> <img /> </td>
        tr.appendChild(tdFoto) //<tr><td> </td></tr>

        const tdNome = document.createElement('td')
        tdNome.innerHTML = `${seguidor.nome} (${seguidor.apelido})`
        tr.appendChild(tdNome)

        const tdSeguidores = document.createElement('td')
        tdSeguidores.innerHTML = seguidor.quantidade_seguidores
        tr.appendChild(tdSeguidores)

        const tdPublicacoes = document.createElement('td')
        tdPublicacoes.innerHTML = seguidor.quantidade_publicacoes
        tr.appendChild(tdPublicacoes)

        document.getElementById('corpo-tabela').appendChild(tr)
    })
}

function exibirObservacao() {
    const seguidoresAtivos = seguidoresFormatados.every(
        (seguidor) => seguidor.quantidade_publicacoes >= 20
    )

    if (seguidoresAtivos === true) {
        document.getElementById('observation-message').innerText = "Parabéns ! Sua rede de seguidores é ativa."
        document.getElementById('observation-message').classList.remove("disabled-message")
    } else {
        // seguidoresFormatados.filter(seguidor => seguidor.quantidade_publicacoes < 20)

        document.getElementById('observation-message').innerText = "Sua rede de seguidores não é ativa."
        document.getElementById('observation-message').classList.remove("disabled-message")
    }

}

// ACUMULADOR = 0  -> 1 item
// ACUMULADOR = 1  -> 1 item
// ACUMULADOR = 1  -> 1 item
// ACUMULADOR = 1  -> 1 item
// ACUMULADOR = 1  -> 1 item
// ACUMULADOR = 1  -> 1 item
function quantidadeDePublicacoesSeguidores() {
    const total = seguidoresFormatados.reduce((acumulador, itemDaVez) => {
        return itemDaVez.quantidade_publicacoes + acumulador
    }, 0)

    console.log(total)

    const nomes = seguidoresFormatados.reduce((acumulador, itemDaVez) => {
        return acumulador  +  ','  + itemDaVez.nome
    }, '')

    console.log(nomes)

}

quantidadeDePublicacoesSeguidores()
exibirObservacao()

window.onload = criarLinhasTabela