const fs = require("fs");

exports.createPages = async ({ actions: { createPage } }) => {
    // `getPokemonData` is a function that fetches our data
    const
    const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])


    // Create a page for each Pokémon.
    allPokemon.forEach(pokemon => {
        createPage({
            path: `/pokemon/${pokemon.name}/`,
            component: require.resolve("./src/templates/pokemon.js"),
            context: { pokemon },
        })
    })
}