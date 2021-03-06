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

  allPokemon.forEach(pokemon => {
    // Create a page for each Pokémon.
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve("./src/templates/pokemon.js"),
      context: { pokemon },
    })

    // Create 2 more sub-pages for Weekend days
    const weekend = ['Saturday', 'Sunday'];

    weekend.forEach((day) => (
      createPage({
        path: `/pokemon/${pokemon.name}/day/${day}`,
        component: require.resolve("./src/templates/weekend-pokemon.js"),
        context: { pokemon, day },
      })
    ));
  })
}