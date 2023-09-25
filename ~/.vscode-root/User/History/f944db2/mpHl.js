
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

const shopLocationDubai= {
    location: "Dubai",
    min: 11,
    max: 38,
    avg: 3.7,
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


const shopLocationParis = {
    location: "Paris",
    min: 20,
    max: 38,
    avg: 2.3,
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


const shopLocationLima = {
    location: "Lima",
    min: 2,
    max: 16,
    avg: 4.6,
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
shopLocationDubai.calcTotal();
shopLocationParis.calcTotal();
shopLocationLima.calcTotal();

const shopLocationHtml = document.getElementById("shop-location");
const article = document.createElement("article");


//h2 heading for the location
const h2 = document.createElement("h2");
h2.textContent = shopLocationSeattle.location;
article.appendChild(h2);
shopLocationHtml.appendChild(article);

//unordered list
const ul = document.createElement("ul");
for(let i = 0; i < shopLocationSeattle.customersPerHour.length; i++) {
    const li = document.createElement("li");
    li.textContent = shopLocationSeattle.customersPerHour[i];
    ul.appendChild(li);
}

article.appendChild(ul);


/* const Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randonNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ShopLocation(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalSold = 0;


    this.calcTotal = function() {
        for(let i = 0; i < Hours.length; i++) {
            const randNum = randonNumber(this.min, this.max);
                this.customersPerHour.push(randNum);
                this.cookiesPerHour.push(randNum * this.avg);
        }
    };

}

const shopLocationSeattle = new ShopLocation ("Seattle", 23, 65, 6.3);

const shopLocationTokyo = new ShopLocation("Tokyo", 3, 24, 1.2);

const shopLocationDubai = new ShopLocation("Dubai",11,38,3.7);

const shopLocationParis = new ShopLocation("Paris",20,38,2.3);

const shopLocationLima = new ShopLocation("Lima",2,16,4,6); */




/* const shopLocationHtml = document.getElementById("shop-location");

function createShopLocation(locationData) {
    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    h2.textContent = locationData.location;
    article.appendChild(h2);

    const ul = document.createElement("ul");
    for(let i = 0; i < locationData.customersPerHour.length; i++) {
        const li = document.createElement("li");
        li.textContent = locationData.customersPerHour[i];
        ul.appendChild(li);
    }

    article.appendChild(ul);
    shopLocationHtml.appendChild(article);
}

createShopLocation(shopLocationSeattle);
createShopLocation(shopLocationTokyo);
createShopLocation(shopLocationDubai);
createShopLocation(shopLocationParis);
createShopLocation(shopLocationLima); */
