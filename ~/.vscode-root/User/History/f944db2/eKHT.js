
const Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randonNumber(min, max) {
    return Math.floor(Math.random(parseInt) * (max - min + 1)) + min;
}

const shopLocationSeattle = {
    location: "Seattle",
    min: 23,
    max: 65,
    avg: 6.3, 
    customersPerHour: [],
    cookiesPerHour: [],
    totalSold:0,
    calcTotal: function() {
        for(let i = 0; i < Hours.length; i++) {
            const randNum = randonNumber(this.min, this.max);
            this.customersPerHour.push(randNum);
            this.cookiesPerHour.push(randNum * this.avg);
        }
        
    },
};

const shopLocationTokyo = {
    location: "Tokyo",
    min: 23,
    max: 65,
    avg: 6.3, 
    customersPerHour: [],
    cookiesPerHour: [],
    totalSold:0,
    calcTotal: function() {
        for(let i = 0; i < Hours.length; i++) {
            const randNum = randonNumber(this.min, this.max);
            this.customersPerHour.push(randNum);
            this.cookiesPerHour.push(randNum * this.avg);
        }
        
    },
};

shopLocationSeattle.calcTotal();
shopLocationTokyo.calcTotal();






/* const shopLocationSeattle = {
    min: 23,
    max: 65,
    avg: 6.3   
};

const shopLocationTokyo = {
    min: 3,
    max: 24,
    avg: 1.2
};

const shopLocationTDubai = {
    min: 11,
    max: 38,
    avg: 3.7
};

const shopLocationTParis = {
    min: 20,
    max: 38,
    avg: 2.3
};

const shopLocationTLima = {
    min: 2,
    max: 16,
    avg: 4.6
}; */

