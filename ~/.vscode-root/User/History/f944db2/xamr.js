
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
    min: 3,
    max: 24,
    avg: 1.2,
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

//Navigation
/* const nav = document.getElementById("nav");
const navBarUl = document.createElement("ul");
const navBarLi = document.createElement("li");
navBarLi.textContent = shopLocationSeattle.location + shopLocationTokyo.location;
nav.appendChild(navBarLi); */


//Main
const shopLocation = document.getElementById("shop-location");
const article = document.createElement("article");

//Heading text
const h1 = document.createElement("h1");
h1.textContent = shopLocationSeattle.location;
article.appendChild(h1);

//Ordered List
const ul = document.createElement("ul");
//const li = document.createElement("li");

for(let seattleLoop = 0; seattleLoop < shopLocationSeattle.customersPerHour.length; seattleLoop++) {
    li.textContent = shopLocationSeattle.cookiesPerHour[seattleLoop];
    for(let TokyoLoop = 0; TokyoLoop < shopLocationTokyo.customersPerHour.length; TokyoLoop++) {
        li.textContent = shopLocationTokyo.cookiesPerHour[TokyoLoop];
    }

    //ul.appendChild(li);
  const li = document.createElement("li");
    //li.textContent = shopLocationSeattle.cookiesPerHour[seattleLoop];
    ul.appendChild(li);
}

article.appendChild(ul);

shopLocation.appendChild(article);


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

