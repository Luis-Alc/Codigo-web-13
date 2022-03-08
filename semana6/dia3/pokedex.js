
const pokemonContainer = document.querySelector("#row-pokemons");



const obtenerPokemones = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();

    setPokemonsInView(data.results);
};


const setPokemonsInView = (results) => {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";
    results.map(async (result, index) => {
        const bgColor = await getColorPokemon(index + 1);
        const html = `
       <div class="col-md-4">
         <div class='row  m-1 position-relative'
         style='
            background-color: ${bgColor};
            color: #fff;
            background-image: url(./image/fondo.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            border-radius:40px;
        '>    
           <div class='card-body col-md-6 d-flex flex-column justify-content-center'>
           <h2 class='text-title-uno'>${result.name}</h2>
             <h2 class='text-title'>${result.name}</h2>
             <button class='btn-detalle' onclick='obtenerDetallePokemon("${result.url}")' data-bs-toggle='modal' data-bs-target='#modalPokemon'>ver detalle</button>
           </div>
           <div class='card-body col-md-6 d-flex justify-content-center'>
                <img 
                class='image-pk'
                src='${imgUrl}${index + 1}.png'
                >
           </div>
         </div>
       </div>
     `;
        pokemonContainer.innerHTML += html;
    });
};

// html from modal
const pokemonName = document.querySelector("#pokemon-name");
const pokemonImage = document.querySelector("#image");

const heightPokemon = document.querySelector("#height");
const abilitePokemonUno = document.querySelector("#abilite-uno");
const abilitePkemonDos = document.querySelector("#abiliti-dos");
const typePokemonUno = document.querySelector("#type-uno");
const typePokemonDos = document.querySelector("#type-dos");

const hp =document.querySelector("#hp")
const specialattack =document.querySelector("#attack")
const attack =document.querySelector("#s-attack")
const defense =document.querySelector("#s-defense")
const speed =document.querySelector("#speed")


const obtenerDetallePokemon = async (url) => {
    const response = await fetch(url);
    const modal = await response.json();
    pokemonName.innerHTML = modal.name;
    pokemonImage.src = modal.sprites.other.home.front_default;
    console.log(modal) 
    heightPokemon.innerHTML = modal.height
    abilitePokemonUno.innerHTML = modal.abilities[0].ability.name
    abilitePkemonDos.innerHTML = modal.abilities[1].ability.name
    typePokemonUno.innerHTML = modal.types[0].type.name
    typePokemonDos.innerHTML = modal.types[1].type.name
    hp.innerHTML = modal.stats[0].base_stat
    specialattack.innerHTML = modal.stats[1].base_stat
    attack.innerHTML = modal.stats[2].base_stat
    defense.innerHTML = modal.stats[3].base_stat
    speed.innerHTML = modal.stats[4].base_stat

    // document.getElementById('contenedor-modal').style.background = `#5BD5B8`

};

obtenerPokemones();



const getColorPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await response.json();
    return color[data.color.name];
};

const color = {
    red: "rgba(252, 108, 109, 0.7)",
    green: "rgba(73, 208, 176, 0.9)",
    blue: "rgba(217, 106, 255, 0.7)",
    brown: "rgba(113, 104, 226, 0.7)",
    purple: "rgba(113, 104, 226, 0.7)",
    pink: "rgba(255, 48, 50, 0.7)",
    yellow: "rgba(255, 225, 0, 0.6)",
    white: "rgba(2, 194, 125, 0.9)",
    gray: "rgba(0, 0, 0, 0.7)",
};


