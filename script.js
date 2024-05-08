const cargarPersonajes = async () => {
    try {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');

        const datos = await respuesta.json();

        console.log(datos.results);

        let characters = '';

        datos.results.forEach(character => {
            characters = characters +
                `
            <div class="card col-lg-3 col-md-3 col-sm-6 m-3 carta" style="width: 18rem;">
                <img src="${character.image}" class="card-img-top m-2 " alt="...">
                <div class="card-body carta">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text text-bg-info">Status: ${character.status}</p>
                    <p class="card-text">Specie: ${character.species}</p>
                    <p class="card-text">Gender: ${character.gender}</p>
                    <p class="card-text">Type: ${character.type}</p>
                    <p class="card-text">Origin: ${character.origin.name}</p>
                    <p class="card-text">Location: ${character.location.name}</p>

                </div>
            </div>
            `;
        });
        document.getElementById('contenedor').innerHTML = characters;

    } catch (error) {
        console.log(error);
    }
}




cargarPersonajes(); 