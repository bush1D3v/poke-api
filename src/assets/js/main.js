const pokemonList = document.getElementById('pokemon-list')
const loadButton = document.getElementById('load-button')
const detailsModal = document.getElementById('pokemon-list-details')

const maxRecords = 151
const limit = 10
let offset = 0;

const loadPokemonItens = (offset, limit) => {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
            <li class="tooltip pokemon ${pokemon.type}" ontouch="requestDetail(${pokemon.number})" onclick='requestDetail(${pokemon.number})'>
                <span class="number">#${pokemon.number}</span>
                <h2 class="name">${pokemon.name}</h2>
                <div class="detail">
                    <ul class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ul>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('');
    })
    setTimeout(() => {
        tooltip()
    }, 1000);
}

const requestDetail = (pokemonNumber) => {
    pokeApi.getPokemonDetailForModal(pokemonNumber).then((pokemonDetail = []) => {
        detailsModal.innerHTML = `
        <article class="pokemon-open ${pokemonDetail.type}">
            <h1 class="name-open">${pokemonDetail.name}</h1>
            <div class="div-button-close">
                <span class="close-button" onclick="closeModal()" ontouch="closeModal()">&times;</span>
                <span>#${pokemonDetail.number}</span>
            </div>

            <ul class="types-open">
                <li>
                    <span>Types: </span>
                    ${pokemonDetail.types.map((type) => `<span class="type-open ${type}">${type}</span>`).join('')}
                </li>
            </ul>

            <div class="div-skills">
                <ul class="skills">
                    <span>Skills:</span>
                    <li class="skill-open ${pokemonDetail.type}">${pokemonDetail.skill1}</li>
                    <li class="skill-open ${pokemonDetail.type}">${pokemonDetail.skill2}</li>
                </ul>
            </div>

            <div class="image-open">
                <img class="images"src="${pokemonDetail.photo}" alt="${pokemonDetail.name}">
            </div>

            <ul class="div-attributes">
                <span class="attributes-header">Atributes:</span>
                <span class="atribute">Hp</span>
                <li class="values">${pokemonDetail.statValueHp}</li>
                <span class="attribute">Attack</span>
                <li class="values">${pokemonDetail.statValueAtk}</li>
                <span class="attribute">Defense</span>
                <li class="values">${pokemonDetail.statValueDef}</li>
                <span class="attribute">Sp-atk</span>
                <li class="values">${pokemonDetail.statValueSatk}</li>
                <span class="attribute">Sp-def</span>
                <li class="values">${pokemonDetail.statValueSdef}</li>
                <span class="attribute">Speed</span>
                <li class="values">${pokemonDetail.statValueSpd}</li>
            </ul>
        </article>
        `
    })
}

loadPokemonItens(offset, limit)

loadButton.addEventListener('click', () => {
    offset += limit
    const qtdRecords = offset + limit

    if (qtdRecords >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadButton.parentElement.removeChild(loadButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
