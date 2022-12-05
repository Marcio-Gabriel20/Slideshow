const containerItems = document.querySelector('#container-items')

const loadImages = ( images, container ) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
        // = pega somente o último conteúdo, += concatena com anterior
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]); // appendChild: método para jogar a imagem para o final da fila
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] ); // isertBefore: insere antes
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);