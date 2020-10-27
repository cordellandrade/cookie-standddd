'use strict';

// Store Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('cookie-table');
var storeForm = document.getElementById('storeForm');
var tfoot = document.createElement('tfoot');

var storeArray = [];

// Location Objects
function Store(location, minCust, maxCust, aveSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.aveSale = aveSale;
    this.cookiesPurchasedPerHourArr = [];
    this.dailyStoreTotal = 0;
    storeArray.push(this);
    this.getRanCust = function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    };
    this.cookiesPurchasedPerHour = function() {
        for (var i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.getRanCust() * this.aveSale);
            this.cookiesPurchasedPerHourArr.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;

        }
    }
    this.render = function() {
        this.cookiesPurchasedPerHour();
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.textContent = this.location;
        tr.appendChild(td);

        for (var i = 0; i < hours.length; i++) {
            var td = document.createElement('td');
            td.textContent = this.cookiesPurchasedPerHourArr[i];
            tr.appendChild(td);
        }
        var td = document.createElement('td');
        td.textContent = this.dailyStoreTotal;
        tr.appendChild(td);
        cookieTable.appendChild(tr);
    }


}

function renderHeader() {
    var tr = document.createElement('tr');
    cookieTable.appendChild(tr);

    var th = document.createElement('th');
    th.textContent = '';
    tr.appendChild(th);

    for (var i = 0; i < hours.length; i++) {
        th = document.createElement('th');
        th.textContent = hours[i];
        tr.appendChild(th);
    }

    th = document.createElement('th');
    th.textContent = 'Total';
    tr.appendChild(th);
}

function renderFooter() {

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = 'Grand Total:';
    tr.appendChild(td);

    cookieTable.appendChild(tfoot);

    var grandTotal = 0;

    for (var i = 0; i < hours.length; i++) {
        var hourlyCounter = 0;
        for (var j = 0; j < storeArray.length; j++) {
            hourlyCounter += storeArray[j].cookiesPurchasedPerHourArr[i];

        }
        td = document.createElement('td');
        td.textContent = hourlyCounter;
        tr.appendChild(td);
        grandTotal += hourlyCounter;

    }
    td = document.createElement('td');
    td.textContent = grandTotal;
    tr.appendChild(td);
    tfoot.appendChild(tr);
    cookieTable.appendChild(tfoot);
}

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

function newStore(event) {
    event.preventDefault();



    var newMinCustPerHour = parseInt(event.target.minCustPerHour.value);
    var newMaxCustPerHour = parseInt(event.target.maxCustPerHour.value);
    var newAvgCust = parseInt(event.target.aveCust.value);
    var newLocation = event.target.location.value;
    console.log(typeof newMinCustPerHour);
    var newStore = new Store(newLocation, newMinCustPerHour, newMaxCustPerHour, newAvgCust);

    tfoot.innerHTML = '';
    newStore.render();
    renderFooter();
}

renderHeader();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderFooter();

storeForm.addEventListener('submit', newStore);