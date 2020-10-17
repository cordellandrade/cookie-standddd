'use strict';

// Store Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am,', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattleUl = document.getElementById('seattle');
var tokyoUl = document.getElementById('tokyo');
var dubaiUl = document.getElementById('dubai');
var parisUl = document.getElementById('paris');
var limaUl = document.getElementById('lima');


// Location Objects
var seattle = {
    minCust: 23,
    maxCust: 65,
    aveSale: 6.3,
    cust: 0,
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



seattle.render();

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



tokyo.render();

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



dubai.render();

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



paris.render();

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



lima.render();