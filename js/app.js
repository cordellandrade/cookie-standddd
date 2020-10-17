'use strict';

// Store Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am,', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Location Objects

// How to output object as an array!
/* var seattle = {
    minCust: 23,
    maxCust: 65,
    aveSale: 6.3,
    cust: [],
    getRanCust: function() {
        for (var i = 0; i < hours.length; i++) {
            this.cust.push(randomCust(this.minCust, this.maxCust));
        }


    }
};

function randomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


seattle.getRanCust();
console.log(seattle); */



// How to maybe get cookie per hour formula...

// numberOfCookiesPerHour: function() { this.randomCust * this.aveSale = cookiesPurchasedPerHour
// }


var seattle = {
        minCust: 23,
        maxCust: 65,
        aveSale: 6.3,
        cookiesPurchasedPerHourArr: [],
        dailyStoreTotal: 0,
        getRanCust: function() {
            return Math.floor(Math.random() * this.maxCust - this.minCust + 1)
        };


        /* {
        this.cust = `${randomCust(23, 65)}`;
        console.log(`${this.cust} is the random number of customers for Seattle`);



    }


}



function randomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
*/

        var storeOpen = 6;
        var storeClose = 8;
        var hoursOpen = storeOpen - storeClose;

        for (var i = 0; i < hoursOpen; i++) {
            var storeVisits = seattle.getRanCust(23, 65);

            var cookieSales = multiply(storeVisits * seattle.aveSale);


        }



        seattle.getRanCust();




        var tokyo = {
            minCust: 3,
            maxCust: 24,
            aveSale: 1.2,
            cust: 0,
            getRanCust: function() {
                this.cust = `${randomCust(3, 24)}`;
                console.log(`${this.cust} is the random number of customers for Tokyo`);


            }
        };

        function randomCust(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        tokyo.getRanCust();



        var dubai = {
            minCust: 11,
            maxCust: 38,
            aveSale: 3.7,
            cust: 0,
            getRanCust: function() {
                this.cust = `${randomCust(11, 38)}`;
                console.log(`${this.cust} is the random number of customers for Dubai`);


            }
        };

        function randomCust(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        dubai.getRanCust();

        var paris = {
            minCust: 20,
            maxCust: 38,
            aveSale: 2.3,
            cust: 0,
            getRanCust: function() {
                this.cust = `${randomCust(20, 38)}`;
                console.log(`${this.cust} is the random number of customers for Paris`);


            }
        };

        function randomCust(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        paris.getRanCust();

        var lima = {
            minCust: 2,
            maxCust: 16,
            aveSale: 4.6,
            cust: 0,
            getRanCust: function() {
                this.cust = `${randomCust(2, 16)}`;
                console.log(`${this.cust} is the random number of customers for Lima`);


            }
        };

        function randomCust(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        lima.getRanCust();