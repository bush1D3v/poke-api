const pokeApi = {}

const convertPokeApiDetailToPokemon = (pokeDetail) => {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    const skills = pokeDetail.abilities.map((skillsSlot) => skillsSlot.ability.name)
    const [skill1, skill2 = 'not have 2nd skill'] = skills
    pokemon.skill1 = skill1
    pokemon.skill2 = skill2

    const statsValues = pokeDetail.stats.map((statsSlot) => statsSlot.base_stat)
    const [statValueHp, statValueAtk, statValueDef, statValueSatk, statValueSdef, statValueSpd] = statsValues

    pokemon.statValueHp = statValueHp
    pokemon.statValueAtk = statValueAtk
    pokemon.statValueDef = statValueDef
    pokemon.statValueSatk = statValueSatk
    pokemon.statValueSdef = statValueSdef
    pokemon.statValueSpd = statValueSpd

    return pokemon
}

pokeApi.getPokemons = async (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    const response = await fetch(url);
    const jsonBody = await response.json();
    const pokemons = jsonBody.results;
    const detailRequests = pokemons.map(pokeApi.getPokemonDetail);
    const pokemonsDetailsArray = await Promise.all(detailRequests);
    return pokemonsDetailsArray;
}

pokeApi.getPokemonDetail = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const pokeDetail = await response.json();
    return convertPokeApiDetailToPokemon(pokeDetail);
}

pokeApi.getPokemonDetailForModal = async (pokemonNumber) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`
    const response = await fetch(url);
    const pokeDetail = await response.json();
    const pokemonDetail = convertPokeApiDetailToPokemon(pokeDetail);

    openModal()

    return pokemonDetail;
}
