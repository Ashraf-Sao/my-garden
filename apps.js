'use srtict'
const form = document.getElementById('form');
const table = document.getElementById('table-container');
const tbody = document.createElement('tbody');

myFlowers.allInsertedFlowers = JSON.parse(localStorage.getItem('flowers')) || [];

function myFlowers(name, image, season) {
    this.name = name;
    this.season = season;
    this.image = image;

    myFlowers.allInsertedFlowers.push(this);

}

form.addEventListener('submit', function (e) {
    e.preventdefault();


});

const flowerName = form.flowerName
const flowerSeason = form.flowerSeason
const flowerImage = form.flowerImage

new myFlowers(flowerName.value, flowerImage.Value, flowerSeason.value);


drawTableBody();
flowerName.value = '';

function drawTableBody() {
    tbody.innerHTML = '';

    for (let i = 0; i < myFlowers.allInsertedFlowers.lengh; i++) {
        const trow = document.createElement('tr');
        const colName = document.createElement('td');
        const colImage = document.createElement('td');
        const colSeason = document.createElement('td');
        const colRemove = document.createElement('td');

        const removeButton = document.createElement('button')
        removeButton.setAttribute('id', myFlowers.allInsertedFlowers[i].name);
        removeButton.setAttribute('class', 'remove-button');
        removeButton.addEventListener('click', function () {
            removeFlowerFromDomAndLocalStorage(i)
        });
    }

}

colName.textcontent = myFlowers.allInsertedFlowers[i].name;
colSeason.textcontent = myFlowers.allInsertedFlowers[i].season
colImage.textcontent = myFlowers.allInsertedFlowers[i].image


function removeFlowerFromDomAndLocalStorage(index) {
    myFlowers.allInsertedFlowers.splice(index, 1);
    localStorage.setItem('flowers', JSON.stringify(myFlowers.allInsertedFlowers));

    drawTableBody()
}