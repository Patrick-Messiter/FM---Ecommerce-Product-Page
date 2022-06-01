/* MAIN IMAGE SECTION */

let listOne = document.querySelector('#listOne');
let listTwo = document.querySelector('#listTwo');
let listThree = document.querySelector('#listThree');
let listFour = document.querySelector('#listFour');

let mainImage = document.querySelector('.mainImage');

let listArray = [listOne, listTwo, listThree, listFour];



let lightBoxContainer = document.querySelector('.lightBoxGallery');
let lightBoxClose = document.querySelector('.closeLightBoxButton');
let lightBoxPrevious = document.querySelector('.previousButton');
let lightBoxNext = document.querySelector('.nextButton')

let lightBoxMainImage = document.querySelector('.lightBoxGallery .mainImage');

function mainImageSelector () {
    switch(true) {
        case listOne.checked:
            mainImage.src = "images/image-product-1.jpg";
            lightBoxMainImage.src = "images/image-product-1.jpg";
            break;
        case listTwo.checked:
            mainImage.src = "images/image-product-2.jpg";
            lightBoxMainImage.src = "images/image-product-2.jpg";
            break;
        case listThree.checked:
            mainImage.src = "images/image-product-3.jpg";
            lightBoxMainImage.src = "images/image-product-3.jpg";
            break;
        case listFour.checked:
            mainImage.src = "images/image-product-4.jpg";
            lightBoxMainImage.src = "images/image-product-4.jpg";
            break;
    }
}


mainImageSelector();

listOne.addEventListener('click', mainImageSelector);
listTwo.addEventListener('click', mainImageSelector);
listThree.addEventListener('click', mainImageSelector);
listFour.addEventListener('click', mainImageSelector);


/*LIGHT BOX SECTION */

function openLightBox () {
    lightBoxContainer.style.display = 'flex';
}

mainImage.addEventListener('click', openLightBox);

function closeLightBox () {
    lightBoxContainer.style.display = 'none';
}

lightBoxClose.addEventListener('click', closeLightBox);

function previousPhoto () {
    for (i=0 ; i < listArray.length; i++) {
        if (listArray[i].checked == true && listArray[i - 1] >= listArray[0]) {
            listArray[i].checked = false;
            listArray[i-1].checked = true;
            mainImageSelector();
        }
    }
}

function nextPhoto () {
    for (i= 3 ; i > -1; i--) {
        if (listArray[i].checked == true && listArray[i + 1] <= listArray[3]) {
            listArray[i].checked = false;
            listArray[i+1].checked = true;
            mainImageSelector();
        }
    }
}

function test () {
    console.log(`1: ${listOne.checked} 2: ${listTwo.checked} 3: ${listThree.checked} 4: ${listFour.checked}`);
}

lightBoxPrevious.addEventListener('click', previousPhoto);
lightBoxNext.addEventListener('click', nextPhoto);

lightBoxMainImage.addEventListener('click', test);





/* SHOE VALUE SECTION */

let shoeTally = document.querySelector('.shoeTally');
let shoeMinus = document.querySelector('#minusShoe');
let shoeAdd = document.querySelector('#addShoe');

let cartValueNumber = document.querySelector('#cartValueNumber');
let addToCartButton = document.querySelector('.addToCartButton');


let shoeValue = 0;

function addShoe () {
    shoeValue += 1;
    shoeTally.innerHTML = `${shoeValue}`;
}

function minusShoe () {
    if (shoeValue > 0) {
        shoeValue -= 1;
        shoeTally.innerHTML = `${shoeValue}`;
    }
}

function addToCart () {
    cartValueNumber.style.display = "flex";
    cartValueNumber.innerHTML = `${shoeValue}`;
}

shoeMinus.addEventListener('click', minusShoe);
shoeAdd.addEventListener('click', addShoe);
addToCartButton.addEventListener('click', addToCart);



/* CART SECTION */

let cartButton = document.querySelector('#cartButton');
let cartContainer = document.querySelector('.cartContainer');
let cartContainerContent = document.querySelector('.cartContainerContents');
let cartContainerEmpty = document.querySelector('.cartContainerEmpty');
let cartContainerItemTally = document.querySelector('.itemTally');
let cartContainerItemTotalCost = document.querySelector('.itemTotalCost');

function toggleCartContainer () {
    let displayValue = window.getComputedStyle(cartContainer).getPropertyValue("display");
    if (displayValue == "none") {
        cartContainer.style.display = "grid";
    } else if(displayValue == "grid") {
        cartContainer.style.display = "none";
    }
}

function cartItemCalculation () {
    let totalValue = shoeValue * 125;
    cartContainerItemTally.innerHTML = `${shoeValue} `;
    cartContainerItemTotalCost.innerHTML = `$${totalValue}`;
    if (shoeValue == 0) {
        cartContainerContent.style.display = "none";
        cartContainerEmpty.style.display = "flex";
    } else {
        cartContainerEmpty.style.display = "none";
        cartContainerContent.style.display = "grid";
    }
}

function interactCartContainer () {
    toggleCartContainer();
    cartItemCalculation();
}

cartButton.addEventListener('click', interactCartContainer);

