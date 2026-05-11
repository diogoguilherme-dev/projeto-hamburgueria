
const list = document.getElementById('hamburguer_menu');

const buttonShowAll = document.getElementById('nav_bar_button1');
const buttonSearch = document.getElementById('nav_bar_button2');
const buttonTotalPrice = document.getElementById('nav_bar_button3');
const buttonFilter = document.getElementById('nav_bar_button4');

const inputSearch = document.getElementById('input_search');
const inputSearchCamp = document.getElementById('input_search_camp');
const magnifyingGlass = document.getElementById('magnifying-glass');

const totalValue = document.getElementById('total_value')
const totalValueSpan = document.getElementById('total_value_span')

let myLi = ''
let totalProducts = ''

function showAll() {
    myLi = ''
    list.innerHTML = myLi
    inputSearch.style.display = 'none';

    menuOptions.forEach(product => {

        let formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        myLi += `
            <li class="hamburguer-menu" id="hamburguer_menu">
                <img src=${product.src} alt="hamburguer-X-Salada" class="hamburguer-img">

                <div class="hamburguer-properties">
                    <p class="hamburguer-name" id="hamburguer_name1">${product.name}</p>
                    <p class="hamburguer-price" id="hamburguer_price1">${formattedPrice}</p>
                </div>
            </li>
        `
        list.innerHTML = myLi;
    });
}

function search() {
    myLi = ''
    list.innerHTML = myLi
    inputSearch.style.display = 'flex';
}

function searchProduct() {
    menuOptions.map(product => {
        const formatedInputValue = inputSearchCamp.value.toLowerCase()
        const formatedProductName = product.name.toLowerCase()

        let formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        if (formatedInputValue == formatedProductName) {
            myLi = `
            <li class="hamburguer-menu" id="hamburguer_menu">
                <img src=${product.src} alt="hamburguer-X-Salada" class="hamburguer-img">

                <div class="hamburguer-properties">
                    <p class="hamburguer-name" id="hamburguer_name1">${product.name}</p>
                    <p class="hamburguer-price" id="hamburguer_price1">R$ ${formattedPrice}</p>
                </div>
            </li>
        `
            list.innerHTML = myLi;
        }

        if (formatedInputValue == '') {
            myLi = ''
            list.innerHTML = myLi
        }

    })
}

function totalPrice() {
    myLi = ''
    list.innerHTML = myLi
    inputSearch.style.display = 'none';

    menuOptions.reduce((acc, product) => {
        totalProducts = acc + product.price
        return totalProducts
    }, 0);
    /* totalValueSpan.innerHTML = totalProducts.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); */
    list.innerHTML = `
        <li class="hamburguer-menu" id="hamburguer_menu">
            <h3 class="hamburguer-name">O valor total dos itens do catálogo é <span class="hamburguer-name-span">${totalProducts.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></h3>
        </li>
    `
}

function totalFilter() {
    inputSearch.style.display = 'none';
    const filteredValues = menuOptions.filter(product => product.vegan == true)
    const fullyFilteredValues = filteredValues[filteredValues.length - 1]

    list.innerHTML = `
            <li class="hamburguer-menu" id="hamburguer_menu">
                <img src=${fullyFilteredValues.src} alt="hamburguer-X-Salada" class="hamburguer-img">

                <div class="hamburguer-properties">
                    <p class="hamburguer-name" id="hamburguer_name1">${fullyFilteredValues.name}</p>
                    <p class="hamburguer-price" id="hamburguer_price1">R$ ${fullyFilteredValues.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            </li>
        `
}

buttonShowAll.addEventListener('click', showAll)
buttonSearch.addEventListener('click', search)
magnifyingGlass.addEventListener('click', searchProduct)
buttonTotalPrice.addEventListener('click', totalPrice)
buttonFilter.addEventListener('click', totalFilter)