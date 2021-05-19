'use strict'

const form = document.getElementById('form');
const tableContainer = document.getElementById('table-container');
const table = document.createElement('table');


myFlowers.allInsertedFlowers = JSON.parse(localStorage.getItem('Flowers')) || [];

function myFlowers(title, category) {
    this.title = title;
    this.category = category;
    this.season = season;

    myFlowers.allInsertedFlowers.push(this);
    localStorage.setItem('flowers', JSON.stringify(myFlowers.allInsertedFlowers))
}

let flowersObject;

form.addEventListener('submit', function(e){
    e.preventDefault()
    const flowersName = form.flowersName;
    const flowersCategory = form.flowersCategory;
    new myFlowers(flowersName.value, flowersCategory.value);
    drawTableBody();

    flowersName.value = ""



})

function drawTableHeader() {
    let thead = document.createElement('thead');
    let trow = document.createElement('tr');

    let colName = document.createElement('td');
    let colCategory = document.createElement('td');
    let colSeason = document.createElement('td');
    let colRemove = document.createElement('td');

    colName.textContent = 'flowers Name';
    colCategory.textContent = 'flowers Category';
    colSeason.textContent = 'flowers Season';
    colRemove.textContent = 'Remove';

    trow.appendChild(colName);
    trow.appendChild(colCategory);
    trow.appendChild(colSeason);
    trow.appendChild(colRemove);

    thead.appendChild(trow);

    table.appendChild(thead);

    tableContainer.appendChild(table);
}

function drawTableBody() {
    const tbody = document.createElement('tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < myFlowers.allInsertedFlowers.length; i++) {

        const trow = document.createElement('tr');
        const colName = document.createElement('td');
        const colCategory = document.createElement('td');
        const colSeason = document.createElement('td');
        const colRemove = document.createElement('td');

        const removeButton = document.createElement('button');


        colName.textContent = myFlowers.allInsertedFlowers[i].title;
        colCategory.textContent = myFlowers.allInsertedFlowers[i].category;
        colSeason.textContent = myFlowers.allInsertedFlowers[i].season
        colRemove.textContent = 'X'

        colRemove.appendChild(removeButton);

        trow.appendChild(colName);
        trow.appendChild(colCategory);
        trow.appendChild(colSeason);
        trow.appendChild(colRemove);
        tbody.appendChild(trow);

    }


    table.appendChild(tbody);

    tableContainer.appendChild(table)

}
drawTableBody();    
drawTableBody();
