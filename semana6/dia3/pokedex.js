const pokemonContainer = document.querySelector("#row-pokemons")
const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
const pokemonName = document.querySelector("#pokemon-name");


const obtenerPokemones = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await response.json()

    setPokemonsInView(data.results)
}

const setPokemonsInView = (results) => {
    results.map((result, index) => {
        const html = `
        <div class="col-md-3 mt-3">
            <div class="card rounded">
            <img class='card-img-top' width='100' height='100'
            src='${imgUrl}${index + 1}.svg'>
                <div class="card-body text-center">
                    <h6 class="text-secondary">N° ${index + 1}</h6>
                    <h4 class="text-title">${result.name}</h4>
                </div>
                <button class='btn btn-primary' onclick='obtenerDetallePokemon("${result.url}")' data-bs-toggle='modal' data-bs-target='#modalPokemon'>ver detalle</button>
            </div>
        </div>`

        pokemonContainer.innerHTML +=(html)
    })
}


const obtenerDetallePokemon = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log("detalle", data);
    pokemonName.innerHTML = data.name;
}



obtenerPokemones()