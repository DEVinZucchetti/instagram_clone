const urls = [
    'https://img.freepik.com/fotos-gratis/rolo-de-sushi_74190-7429.jpg?w=1380&t=st=1688444072~exp=1688444672~hmac=44826994fa0ff13e7b13df6b9a29e87ce094064e4b6d64b0df95d7d91c34192d',
    'https://img.freepik.com/fotos-gratis/ilha-paradisiaca-bonita-com-praia-e-mar_74190-1023.jpg?w=1380&t=st=1688444157~exp=1688444757~hmac=a395985d3cff1695a919c94b51347483b13aa9aa082e54bf24039eaedeb05c29',
    'https://img.freepik.com/fotos-gratis/pilhas-do-mar-durante-o-por-do-sol-na-praia-da-ribeira-da-janela-ilha-da-madeira-portugal_181624-26463.jpg?w=1380&t=st=1688444194~exp=1688444794~hmac=9a38216bec28eb32b3509473199b0f46005a2fb06464200fd1f04f75d0d08e49',
    'https://img.freepik.com/fotos-gratis/closeup-de-mulher-digitando-o-codigo-pin-ao-retirar-dinheiro-do-caixa-eletronico_637285-2273.jpg?w=1380&t=st=1688445308~exp=1688445908~hmac=31cf327871f0531608ae8d81177314a15aba02e45affe1cd467a6ba88fb292bc',
    'https://img.freepik.com/fotos-premium/mulheres-idosas-colocando-moedas-em-um-porquinho_336290-19.jpg?w=1380',
    'https://img.freepik.com/fotos-gratis/captura-horizontal-de-dois-gatos-sentados-em-um-fundo-desfocado_181624-56173.jpg?w=1380&t=st=1688445338~exp=1688445938~hmac=7f039cdbad0726f427974f78e1cae5e2ee07c9bb821d3611859d06a54558e621',
    'https://img.freepik.com/fotos-gratis/rolo-de-sushi_74190-7429.jpg?w=1380&t=st=1688444072~exp=1688444672~hmac=44826994fa0ff13e7b13df6b9a29e87ce094064e4b6d64b0df95d7d91c34192d',
    'https://img.freepik.com/fotos-gratis/ilha-paradisiaca-bonita-com-praia-e-mar_74190-1023.jpg?w=1380&t=st=1688444157~exp=1688444757~hmac=a395985d3cff1695a919c94b51347483b13aa9aa082e54bf24039eaedeb05c29',
    'https://img.freepik.com/fotos-gratis/pilhas-do-mar-durante-o-por-do-sol-na-praia-da-ribeira-da-janela-ilha-da-madeira-portugal_181624-26463.jpg?w=1380&t=st=1688444194~exp=1688444794~hmac=9a38216bec28eb32b3509473199b0f46005a2fb06464200fd1f04f75d0d08e49',
    'https://img.freepik.com/fotos-gratis/closeup-de-mulher-digitando-o-codigo-pin-ao-retirar-dinheiro-do-caixa-eletronico_637285-2273.jpg?w=1380&t=st=1688445308~exp=1688445908~hmac=31cf327871f0531608ae8d81177314a15aba02e45affe1cd467a6ba88fb292bc',
    'https://img.freepik.com/fotos-premium/mulheres-idosas-colocando-moedas-em-um-porquinho_336290-19.jpg?w=1380',
    'https://img.freepik.com/fotos-gratis/captura-horizontal-de-dois-gatos-sentados-em-um-fundo-desfocado_181624-56173.jpg?w=1380&t=st=1688445338~exp=1688445938~hmac=7f039cdbad0726f427974f78e1cae5e2ee07c9bb821d3611859d06a54558e621',
    'https://img.freepik.com/fotos-gratis/rolo-de-sushi_74190-7429.jpg?w=1380&t=st=1688444072~exp=1688444672~hmac=44826994fa0ff13e7b13df6b9a29e87ce094064e4b6d64b0df95d7d91c34192d',
    'https://img.freepik.com/fotos-gratis/ilha-paradisiaca-bonita-com-praia-e-mar_74190-1023.jpg?w=1380&t=st=1688444157~exp=1688444757~hmac=a395985d3cff1695a919c94b51347483b13aa9aa082e54bf24039eaedeb05c29',
    'https://img.freepik.com/fotos-gratis/pilhas-do-mar-durante-o-por-do-sol-na-praia-da-ribeira-da-janela-ilha-da-madeira-portugal_181624-26463.jpg?w=1380&t=st=1688444194~exp=1688444794~hmac=9a38216bec28eb32b3509473199b0f46005a2fb06464200fd1f04f75d0d08e49',
    'https://img.freepik.com/fotos-gratis/closeup-de-mulher-digitando-o-codigo-pin-ao-retirar-dinheiro-do-caixa-eletronico_637285-2273.jpg?w=1380&t=st=1688445308~exp=1688445908~hmac=31cf327871f0531608ae8d81177314a15aba02e45affe1cd467a6ba88fb292bc',
    'https://img.freepik.com/fotos-premium/mulheres-idosas-colocando-moedas-em-um-porquinho_336290-19.jpg?w=1380',
    'https://img.freepik.com/fotos-gratis/adoravel-cachorro-basenji-marrom-e-branco-sorrindo-e-dando-mais-uns-cinco-isolado-no-branco_346278-1657.jpg?w=1380&t=st=1688445657~exp=1688446257~hmac=6f75ad5879b641a5b978536c59b19b66553e1dfd414363d4bd228283663731a4',
    'https://img.freepik.com/fotos-gratis/rolo-de-sushi_74190-7429.jpg?w=1380&t=st=1688444072~exp=1688444672~hmac=44826994fa0ff13e7b13df6b9a29e87ce094064e4b6d64b0df95d7d91c34192d',
    'https://img.freepik.com/fotos-gratis/ilha-paradisiaca-bonita-com-praia-e-mar_74190-1023.jpg?w=1380&t=st=1688444157~exp=1688444757~hmac=a395985d3cff1695a919c94b51347483b13aa9aa082e54bf24039eaedeb05c29',
    'https://img.freepik.com/fotos-gratis/pilhas-do-mar-durante-o-por-do-sol-na-praia-da-ribeira-da-janela-ilha-da-madeira-portugal_181624-26463.jpg?w=1380&t=st=1688444194~exp=1688444794~hmac=9a38216bec28eb32b3509473199b0f46005a2fb06464200fd1f04f75d0d08e49',
    'https://img.freepik.com/fotos-gratis/closeup-de-mulher-digitando-o-codigo-pin-ao-retirar-dinheiro-do-caixa-eletronico_637285-2273.jpg?w=1380&t=st=1688445308~exp=1688445908~hmac=31cf327871f0531608ae8d81177314a15aba02e45affe1cd467a6ba88fb292bc',
    'https://img.freepik.com/fotos-gratis/cachorrinho-fofo-se-passando-por-um-empresario_23-2148985938.jpg?w=1380&t=st=1688445684~exp=1688446284~hmac=eec89c85e846f199b21a3a3d01bf8c70ea32bef6ec4c54b9bf34987668b59610',
    'https://img.freepik.com/fotos-gratis/captura-horizontal-de-dois-gatos-sentados-em-um-fundo-desfocado_181624-56173.jpg?w=1380&t=st=1688445338~exp=1688445938~hmac=7f039cdbad0726f427974f78e1cae5e2ee07c9bb821d3611859d06a54558e621',
    'https://img.freepik.com/fotos-gratis/rolo-de-sushi_74190-7429.jpg?w=1380&t=st=1688444072~exp=1688444672~hmac=44826994fa0ff13e7b13df6b9a29e87ce094064e4b6d64b0df95d7d91c34192d',
    'https://img.freepik.com/fotos-gratis/ilha-paradisiaca-bonita-com-praia-e-mar_74190-1023.jpg?w=1380&t=st=1688444157~exp=1688444757~hmac=a395985d3cff1695a919c94b51347483b13aa9aa082e54bf24039eaedeb05c29',
    'https://img.freepik.com/fotos-gratis/pilhas-do-mar-durante-o-por-do-sol-na-praia-da-ribeira-da-janela-ilha-da-madeira-portugal_181624-26463.jpg?w=1380&t=st=1688444194~exp=1688444794~hmac=9a38216bec28eb32b3509473199b0f46005a2fb06464200fd1f04f75d0d08e49',
    'https://img.freepik.com/fotos-gratis/closeup-de-mulher-digitando-o-codigo-pin-ao-retirar-dinheiro-do-caixa-eletronico_637285-2273.jpg?w=1380&t=st=1688445308~exp=1688445908~hmac=31cf327871f0531608ae8d81177314a15aba02e45affe1cd467a6ba88fb292bc',
    'https://img.freepik.com/fotos-premium/mulheres-idosas-colocando-moedas-em-um-porquinho_336290-19.jpg?w=1380',
    'https://img.freepik.com/fotos-gratis/captura-horizontal-de-dois-gatos-sentados-em-um-fundo-desfocado_181624-56173.jpg?w=1380&t=st=1688445338~exp=1688445938~hmac=7f039cdbad0726f427974f78e1cae5e2ee07c9bb821d3611859d06a54558e621',
  ]

  function gerarLista() {
        urls.map((url) => {
             const img = document.createElement('img')     // <img src="" />
             img.setAttribute('src', url)  // <img src="url" />

             document.getElementById('lista').appendChild(img) 
        })
  }


  window.onload = gerarLista 