async function pokeSearch(){
    const div = document.getElementById("poke-body");
    div.innerHTML = []

    const pokemon_number = parseInt(document.getElementById("poke-num").value)
    const pokemon_type = document.getElementById("poke-type").value.toLowerCase()

    const response = await fetch(`https://pokeapi.co/api/v2/type/${pokemon_type}`)
    const data =await response.json()

    const pokemon_array = data.pokemon.map((item)=>(
        item.pokemon.name
    ))
    
    render(pokemon_array,pokemon_number);

}

async function render(arr,num){
    for(let i=0;i<num;i++){
        const pokemon_name = document.createElement("p");
        pokemon_name.innerHTML = arr[i];

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${arr[i]}`)
        const response =await data.json();

        const poke_image = document.createElement("img")
        poke_image.setAttribute("src",response.sprites.front_default);
        
        const desc = document.createElement("div");
        desc.setAttribute("class","card")

        const div = document.getElementById("poke-body");

        desc.appendChild(poke_image)
        desc.appendChild(pokemon_name)

        div.appendChild(desc)
    }
}