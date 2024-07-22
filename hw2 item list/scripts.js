import clothesList from './clothes.js';
import electronicsList from './electronics.js';

let lastClickedItem = null;
function displayProducts(category) {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';
    let products;

    if (category === 'clothes') {
        products = clothesList;
        display.innerHTML = '';
    } else if (category === 'electronics') {
        products = electronicsList;
        display.innerHTML = '';
    }

    products.forEach(product => {
        let listItem = document.createElement('li');
        listItem.textContent = product.name;
        listItem.onclick = () => {
            document.getElementById('display').innerHTML = product.getDetails();
            if(lastClickedItem === product){
                display.innerHTML = '';
                lastClickedItem = null;
            }else{
                display.innerHTML = product.getDetails();
                lastClickedItem = product;
            }
        }
        productList.appendChild(listItem);
    });
}

window.onload = () => {
    document.getElementById('clothesBtn').onclick = () => displayProducts('clothes');
    document.getElementById('electronicsBtn').onclick = () => displayProducts('electronics');
};
