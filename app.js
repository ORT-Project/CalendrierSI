let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Ordinateur Portable',
        image: '1.png',
        price: 120000,
        category: 'hardware'
    },
    {
        id: 2,
        name: 'Mac Pro',
        image: '2.jpg',
        price: 120000,
        category: 'hardware'
    },
    {
        id: 3,
        name: 'Support Ordinateur',
        image: '3.PNG',
        price: 220000,
        category: 'hardware'
    },
    {
        id: 4,
        name: 'Souris de bureau',
        image: '4.webp',
        price: 123000,
        category: 'hardware'
    },
    {
        id: 5,
        name: 'Clavier de bureau',
        image: '5.webp',
        price: 320000,
        category: 'hardware'
    },
    {
        id: 6,
        name: 'Imprimante',
        image: '6.PNG',
        price: 120000,
        category: 'hardware'
    },
    {
        id: 7,
        name: 'Cartouche Imprimante',
        image: '7.PNG',
        price: 120000,
        category: 'hardware'
    },
    {
        id: 8,
        name: 'Pack Office',
        image: '8.PNG',
        price: 120000,
        category: 'software'
    },
    {
        id: 9,
        name: 'Licence Adobe',
        image: '9.png',
        price: 120000,
        category: 'software'
    },
    {
        id: 10,
        name: 'Licence Linkedin',
        image: '10.webp',
        price: 120000,
        category: 'software'
    },
    {
        id: 11,
        name: 'Licence JetBrains',
        image: '11.png',
        price: 120000,
        category: 'software'
    }
    ,
    {
        id: 12,
        name: 'Formation JavaScript',
        image: 'js.png',
        price: 120000,
        category: 'services'
    },
    {
        id: 13,
        name: 'Formation ReactJS',
        image: 'react.png',
        price: 120000,
        category: 'services'
    },
    {
        id: 14,
        name: 'Formation Symfony',
        image: 'symfony.png',
        price: 120000,
        category: 'services'
    },
    {
        id: 15,
        name: 'Formation PHP',
        image: 'php.png',
        price: 120000,
        category: 'services'
    },
    {
        id: 16,
        name: 'Formation aux Outils de développement FrontEnd',
        image: 'frontend.webp',
        price: 120000,
        category: 'services'
    },
    {
        id: 17,
        name: 'Formation aux Outils de développement BackEnd',
        image: 'backend.jpg',
        price: 120000,
        category: 'services'
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="equipments/${value.image}">
            <div class="title">${value.name}</div>
<!--            <div class="price">${value.price.toLocaleString()}</div>-->
            <button onclick="addToCard(${key})">Ajouter au Panier</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="equipments/${value.image}"/></div>
                <div>${value.name}</div>
<!--                <div>${value.price.toLocaleString()}</div>-->
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function reloadApp(valueSelected) {
    // Vider la liste actuelle
    list.innerHTML = '';

    // Filtrer les produits par catégorie
    const filteredProducts = products.filter(product => product.category === valueSelected);

    // Créer des éléments pour chaque produit filtré
    filteredProducts.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="equipments/${value.image}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <button onclick="addToCard(${key})">Ajouter au Panier</button>`;
        list.appendChild(newDiv);
    });
}
