const fs = require("fs");

exports.createPages = async ({ actions: { createPage } }) => {
  const files = await fs.promises.readdir('./blog');

  const allPokemonFiles = await Promise.all(files
    .map(f => fs.promises.readFile(`./blog/${f}`, { encoding: 'utf-8' }))
  );
  const allPokemon = allPokemonFiles.map(content => {
    console.log(content);
    return JSON.parse(content);
  });

  // Create a page for each Pokémon.
  allPokemon.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve("./src/templates/pokemon.js"),
      context: { pokemon },
    })
  })
}