let listOne = document.querySelector('#listOne');
let listTwo = document.querySelector('#listTwo');
let listThree = document.querySelector('#listThree');
let listFour = document.querySelector('#listFour');

let mainImage = document.querySelector('.mainImage');

let listArray = [listOne, listTwo, listThree, listFour];

function mainImageSelector () {
    switch(true) {
        case listOne.checked:
            mainImage.src = "images/image-product-1.jpg";
            break;
        case listTwo.checked:
            mainImage.src = "images/image-product-2.jpg";
            break;
        case listThree.checked:
            mainImage.src = "images/image-product-3.jpg";
            break;
        case listFour.checked:
            mainImage.src = "images/image-product-4.jpg";
            break;
    }
}


mainImageSelector();

listOne.addEventListener('click', mainImageSelector);
listTwo.addEventListener('click', mainImageSelector);
listThree.addEventListener('click', mainImageSelector);
listFour.addEventListener('click', mainImageSelector);

