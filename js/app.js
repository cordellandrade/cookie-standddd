'use strict';

// Store Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('cookie-table');
var storeForm = document.getElementById('storeForm');






// Location Objects

function Store(name, minCust, maxCust, aveSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.aveSale = aveSale;
    this.cookiesPurchasedPerHourArr = [];
    this.dailyStoreTotal = 0;
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
        td.textContent = this.name;
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

    var tfoot = document.createElement('tfoot');
    var td = document.createElement('td');
    td.textContent = 'Grand Total:';
    tfoot.appendChild(td);

    cookieTable.appendChild(tfoot);

    var grandTotal = 0;
    var storeArray = [];
    var hourlyCounter = 0;

    for (var i = 0; i < hours.length; i++) {
        for (var j = 0; j < storeArray.length; j++) {
            hourlyCounter += storeArray[j].cookiesPurchasedPerHourArr[i];

        }

        td = document.createElement('td');
        td.textContent = hourlyCounter;
        tfoot.appendChild(td);
        // grandTotal = hourlyCounter += grandTotal;

    }
    td = document.createElement('td');
    td.textContent = grandTotal;
    tfoot.appendChild(td)
    cookieTable.appendChild(tfoot);




}

// storeForm.addEventListener('click', handleClick);





var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);


renderHeader();
renderFooter();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();