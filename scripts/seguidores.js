import { seguidores } from '../constantes/seguidores.js'


document.getElementById('form-pesquisa').addEventListener('submit', (event) => {
    event.preventDefault()

    const valorDigitadoPesquisa = document.getElementById('input-pesquisa').value

    const seguidoresFiltrados = seguidores.filter((seguidor) => seguidor.nome === valorDigitadoPesquisa)

    document.getElementById('corpo-tabela').innerHTML = ''

    
    // continua amanha

   
})

function criarLinhasTabela() {

    const seguidoresFormatados = seguidores.map(seguidor => {
        return {
            ...seguidor,
            apelido: "#" + seguidor.nome.toLowerCase().replace(" ", "_")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, '')
        }
    })

    seguidoresFormatados.map((seguidor) => {
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

window.onload = criarLinhasTabela