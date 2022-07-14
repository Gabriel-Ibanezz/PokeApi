const url = 'https://pokeapi.co/api/v2/pokemon/90'; // API 


// FUNCION //
const Nombre = () => {
    fetch(url) //utilizamos la funcion fetch que es para manipular codigo http en api 
        .then(res => res.json()) // hacemos que se cuarde en resolve
        .then(data => { // creamos una funcion anonima para guardar los datos 
            //creamos un template o una plantilla 

            // el metodo getElementById() devuelve un elemento con un valor especificado
            let element = document.getElementById('element')
                //innerHTML devuelve o establece la sintaxis html 


            // el formato ${ejemplo} nos permite  ingressar  un valor dinamico y lo guardamos en data 
            element.innerHTML = `  
           
        <h1> <p style>Name: ${data.name}</p> 
        <h1> <p>Id: ${data.id}</p> 
        <h1> <p>Number: ${data.order}</p> 
        <h1> <p>Type: ${data.types[0].type.name}</p> 
        <h1> <p>Favourite Skill: ${data.moves[0].move.name}</p> 
      
        
        `;

        })
        .catch(err => console.log(err)) // en caso que haya algun erron lo muestra por consola

    return element; //retorna elemnt
}

// hacemos una funcion para modularizar  

// movimiento de personaje
const Personaje = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                let element = document.getElementById('element3')
                element3.innerHTML = `
        <marquee>
        <img height = 300  src= '${data.sprites.front_default}' />
        </marquee>

    `;

            })
            .catch(err => console.log(err))

    }
    // llamamos a las funciones 
Nombre(element);
Personaje();