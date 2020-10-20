'use strict';

// Store Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am,', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('cookie-table');



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
            // Create an element
            var td = document.createElement('td');
            // Give it content
            td.textContent = this.cookiesPurchasedPerHourArr[i];
            // Append to the DOM
            tr.appendChild(td);
        }
        var td = document.createElement('td');
        td.textContent = this.dailyStoreTotal;
        tr.appendChild(td);
        cookieTable.appendChild(tr);
    }
}

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);


/* 
var seattle = {
    minCust: 23,
    maxCust: 65,
    aveSale: 6.3,
    cookiesPurchasedPerHourArr: [],
    dailyStoreTotal: 0,

    getRanCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

    cookiesPurchasedPerHour: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.getRanCust() * this.aveSale);
            this.cookiesPurchasedPerHourArr.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
        }
    },

    render: function() {
        this.cookiesPurchasedPerHour();
        for (var i = 0; i < hours.length; i++) {
            // Create an element
            var li = document.createElement('li');
            // Give it content
            li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArr[i]} cookies`;
            // Append to the DOM
            seattleUl.appendChild(li);
        }
        // Create an element
        li = document.createElement('li');
        // Give it content
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        // Append to the DOM
        seattleUl.appendChild(li);
    }
};

var tokyo = {
    minCust: 3,
    maxCust: 24,
    aveSale: 1.2,
    cookiesPurchasedPerHourArr: [],
    dailyStoreTotal: 0,

    getRanCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

    cookiesPurchasedPerHour: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.getRanCust() * this.aveSale);
            this.cookiesPurchasedPerHourArr.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
        }
    },

    render: function() {
        this.cookiesPurchasedPerHour();
        for (var i = 0; i < hours.length; i++) {
            // Create an element
            var li = document.createElement('li');
            // Give it content
            li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArr[i]} cookies`;
            // Append to the DOM
            tokyoUl.appendChild(li);
        }
        // Create an element
        li = document.createElement('li');
        // Give it content
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        // Append to the DOM
        tokyoUl.appendChild(li);
    }
};

var dubai = {
    minCust: 11,
    maxCust: 38,
    aveSale: 3.7,
    cookiesPurchasedPerHourArr: [],
    dailyStoreTotal: 0,

    getRanCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

    cookiesPurchasedPerHour: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.getRanCust() * this.aveSale);
            this.cookiesPurchasedPerHourArr.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
        }
    },

    render: function() {
        this.cookiesPurchasedPerHour();
        for (var i = 0; i < hours.length; i++) {
            // Create an element
            var li = document.createElement('li');
            // Give it content
            li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArr[i]} cookies`;
            // Append to the DOM
            dubaiUl.appendChild(li);
        }

        // Create an element
        li = document.createElement('li');
        // Give it content
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        // Append to the DOM
        dubaiUl.appendChild(li);
    }
};

var paris = {
    minCust: 20,
    maxCust: 38,
    aveSale: 2.3,
    cookiesPurchasedPerHourArr: [],
    dailyStoreTotal: 0,

    getRanCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

    cookiesPurchasedPerHour: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.getRanCust() * this.aveSale);
            this.cookiesPurchasedPerHourArr.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
        }
    },

    render: function() {
        this.cookiesPurchasedPerHour();
        for (var i = 0; i < hours.length; i++) {
            // Create an element
            var li = document.createElement('li');
            // Give it content
            li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArr[i]} cookies`;
            // Append to the DOM
            parisUl.appendChild(li);
        }
        // Create an element
        li = document.createElement('li');
        // Give it content
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        // Append to the DOM
        parisUl.appendChild(li);
    }
};

var lima = {
    minCust: 2,
    maxCust: 16,
    aveSale: 4.6,
    cookiesPurchasedPerHourArr: [],
    dailyStoreTotal: 0,

    getRanCust: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },

    cookiesPurchasedPerHour: function() {
        for (var i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.getRanCust() * this.aveSale);
            this.cookiesPurchasedPerHourArr.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
        }
    },



    render: function() {
        this.cookiesPurchasedPerHour();
        for (var i = 0; i < hours.length; i++) {
            // Create an element
            var li = document.createElement('li');
            // Give it content
            li.textContent = `${hours[i]}: ${this.cookiesPurchasedPerHourArr[i]} cookies`;
            // Append to the DOM
            limaUl.appendChild(li);
        }
        // Create an element
        li = document.createElement('li');
        // Give it content
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        // Append to the DOM
        limaUl.appendChild(li);
    }
};

*/


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();