
const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=93561627d3e2e258c24fe369c4c8bb21&hash=8c2b81e47f1cc675a44660336f3b8d58';

fetch(baseUrl).then(respuesta => respuesta.json())
.then((data) => {
    // console.log(data.data.results);
    const allItems = [];
    // const contenedor        = document.createElement('div');
    // contenedor.className    = 'container';

    // const roww        = document.createElement('div');
    // roww.className    = 'row';

    const conten = document.querySelector('.row');

    
    data.data.results.forEach(element => {
        // console.log(element);
        //nombre
        //imagen
        //descripcion
        const nombre            = document.createElement('h2');
        nombre.textContent      = element.name;
        
        const imagen            = document.createElement('img');
        imagen.src              = `${element.thumbnail.path}${".jpg"}`;
        imagen.className        = 'img-fluid img-thumbnail';
        
        const descripcion       = document.createElement('p');
        descripcion.textContent = element.description;
        descripcion.className   = 'text-dark';
        const container         = document.createElement('div');
        container.className     = 'col-md-4'
        
        container.append(nombre, imagen, descripcion);
        allItems.push(container);
        // roww.append(...allItems);
        // contenedor.appendChild(roww);    
    });
    conten.append(...allItems);
})