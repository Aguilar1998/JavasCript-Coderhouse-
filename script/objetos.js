// Objeto con index
// Colecciones de datos ordenados por un valor de índice
// let Ejcarrito = [
    {
        "precio": 500,
        "id": 1,
        "title": "Yerba",
        "thumbnailUrl": "https://jumboargentina.vtexassets.com/arquivos/ids/621306/Yerba-Mate-La-Merced-Campo-Sur-O-c-500g-1-857355.jpg?v=637473138275470000"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Mate",
        "thumbnailUrl": "../Resourse/image/mate-slider3.webp"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Termo",
        "thumbnailUrl": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/450/256/products/termo-verde-nuevo-frente1-9ebc319aca02038ab116166160261528-640-0.jpg"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Bombilla",
        "thumbnailUrl": "https://http2.mlstatic.com/D_NQ_NP_794871-MLA48950371330_012022-O.webp"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mochila matera",
        "thumbnailUrl": "https://http2.mlstatic.com/D_NQ_NP_999412-MLA49655019392_042022-O.webp"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Taza",
        "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1t17uGr72Ws532C9KyRiaWZX9dy6STeX8Lw&usqp=CAU"
    }
// ]

for (const key in Ejcarrito) {
    if (Ejcarrito.hasOwnProperty(key)) {
        const element = Ejcarrito[key];
        console.log(element);
    }
}

Object.values(Ejcarrito).forEach((item) => console.log(item));

console.log(Ejcarrito[1]);
// Nos sirve para contar elementos
console.log(Object.keys(Ejcarrito));
console.log(Object.keys(Ejcarrito).length);
