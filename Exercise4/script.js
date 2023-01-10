const allBooks = [
    {
        "title": "les contes du pere voila pourquoi ",
        "author": "Roman",
        "image": "https://th.bing.com/th/id/OIP.11RyaI-8Q0FfJrbxpaTKJAAAAA?pid=ImgDet&rs=1",
        "alreadyRead": true
    }, {
        "title": "les comptes de mon pere",
        "author": "Pitoum",
        "image": "https://assets.lulu.com/cover_thumbs/1/6/16wyedp-front-shortedge-384.jpg",
        "alreadyRead": false
       }
];
// Récuperer la div
const listBooks = document.querySelector('.listBooks');

// Créer une table
const table = document.createElement('table');

// Ajouter la table à la div
listBooks.appendChild(table);

allBooks.forEach(book => {
    // Creer l'élément tr de la table
    const row = document.createElement('tr');

    // Contenu des titres et auteurs
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`

    // Récuperation de l'image et ajout des paramètre
    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    // Condition de verification de la lecture
    if (book.alreadyRead) {
        row.style.color = 'red';
    }

    // Ajout de tous les row à la table
    table.appendChild(row);
})