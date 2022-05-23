let listOne = document.querySelector('#listOne');
let listTwo = document.querySelector('#listTwo');
let listThree = document.querySelector('#listThree');
let listFour = document.querySelector('#listFour');

let mainImage = document.querySelector('.mainImage');

let listArray = [listOne, listTwo, listThree, listFour];

function checkIfActive () {
    listArray.forEach(element => {
        if (element.classList.contains('active')) {
            return element;
        }
    });
}

let currentValue = checkIfActive();
console.log(checkIfActive());

