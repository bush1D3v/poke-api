# Kanto Poke Api
![Logo](https://github.com/bush1D3v/poke-api/assets/133554156/33f3886c-bb57-4e02-9038-43ef2a0cdb3c)

Tabela de conteúdos
=================
   * [Sobre](#sobre)
   * [Tecnologias](#tecnologias)
   * [Desafios](#desafios)
   * [Tooltip](#utilização-do-tooltip)
   * [Modal](#utilização-do-modal)
   * [Paginação](#paginação)

## Sobre

Uma <strong>API de Pokédex</strong> da região de Kanto, que através da <strong>Fetch API</strong> no JavaScript, cria <strong>requisições de informações</strong> para a <strong>pokeapi(https://pokeapi.co/)</strong>. <br><br> Essas informações são exibidas em uma estilização desenvolvida apartir do <strong>Grid-layout</strong> com adição de efeitos visuais, sendo o hover utilizando o <strong>tooltips</strong> e o click utilizando <strong>modal</strong>.

## Tecnologias

<div>
    <img align='center' height='60' width='80' title='HTML5' alt='html5' src='https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg' />
    <img align='center' height='60' width='80' title='CSS3' alt='css3' src='https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg' />
    <img align='center' height='60' width='80' title='JavaScript' alt='javascript' src='https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg' />
</div>

## Desafios

Meu <strong>primeiro grande desafio</strong> foi saber como poderia utilizar a <strong>FetchAPI</strong> junto da <strong>filtração de informações</strong> vindas da PokeAPI, o que me demandou bastante tempo e <strong>vários `console.log( )`</strong>, rsrs. <br><br>
Após a construção da <strong>estilização inicial</strong> do layout, entro no meu desafio <strong>final</strong>: descobrir como poderia criar um design para demonstração de <strong>detalhes dos pokémon</strong>. Apartir desse momento, seguimos para os <strong>próximos tópicos... ↓</strong>

## Utilização do Tooltip
![Tooltip](https://github.com/bush1D3v/poke-api/assets/133554156/791f1614-d056-4620-8cb1-6cfd7354e8c3)

> `Tooltip é aquela moldura flutuante que abre quando passa-se o mouse sobre um elemento da interface, que contém uma explicação adicional sobre tal elemento.` <br><br>
Baseando-me nessa explicação, corri atrás de <strong>aprender a utilizar este tooltip</strong>, criando uma interface <strong>interativa e intuitiva</strong> para o usuário, <strong>evitando o não uso</strong> de qualquer funcionalidade.

## Utilização do Modal
![Modal](https://github.com/bush1D3v/poke-api/assets/133554156/8bfd40f7-fb00-4cea-9869-1c8322ba7565)
> `A janela em modal é uma janela que aparece como um elemento secundário (filho) no sistema para enfatizar algo contido ou requerido pelo seu elemento primário (pai).` <br><br>
Tendo a ideia principal de se criar uma <strong>área de destaque total</strong>, ao ser apresentado para a ideia do modal, senti que isso se <strong>encaixava perfeitamente</strong> com meu objetivo.

## Paginação
![Load-more](https://github.com/bush1D3v/poke-api/assets/133554156/768b72dd-ab44-4729-8229-abef2e6243bb)

> `Paginação é um conceito ou melhor, uma técnica para dividir o conjunto de resultados em pequenos páginas para o usuário navegar através dele com facilidade.` <br><br>
> Pensando nisso, desenvolvi um botão que, <strong>ao ser clicado</strong>, carrega mais pokémon na tela do usuário, evitando o <strong>sobrepeso ao carregar a página</strong> e o <strong>acúmulo de informações</strong> de uma só vez.
