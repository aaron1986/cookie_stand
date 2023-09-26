const Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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

const shopLocationLima = new ShopLocation("Lima",2,16,4,6);

shopLocationSeattle.calcTotal();
shopLocationTokyo.calcTotal();
shopLocationDubai.calcTotal();
shopLocationParis.calcTotal();
shopLocationLima.calcTotal();


const shopLocationHtml = document.getElementById("shop-location");

function createShopLocation(locationData) {
    const article = document.createElement("article");

    //Headers
    const h2 = document.createElement("h2");
    h2.textContent = locationData.location;
    article.appendChild(h2);


    //Table information
    const table = document.createElement("table"); 

    const thead = document.createElement("thead"); 
    const headerRow = document.createElement("tr");

    // Loop through the hours and create table headers
    for (let i = 0; i < locationData.customersPerHour.length; i++) {
        const th = document.createElement("th");
        th.textContent = `${Hours[i]}`;
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody"); 
    const dataRow = document.createElement("tr"); 

    // Loop through the customersPerHour 
    for (let i = 0; i < locationData.customersPerHour.length; i++) {
        const td = document.createElement("td");
        td.textContent = `${locationData.customersPerHour[i]}`;
        dataRow.appendChild(td);
    }

        // Calculate and add "Daily Location Total" row
        const totalRow = document.createElement("tr");
        const totalCell = document.createElement("td");
        totalCell.textContent = "Daily Location Total";
        totalRow.appendChild(totalCell);
    
        // Calculate the daily total for each hour
        for (let i = 0; i < locationData.customersPerHour[0].length; i++) {
            let dailyTotal = 0;
            for (let j = 0; j < locationData.customersPerHour.length; j++) {
                dailyTotal += locationData.customersPerHour[j][i];
            }
            const td = document.createElement("td");
            td.textContent = `${dailyTotal} cookies`;
            totalRow.appendChild(td);
        }
    


        

    tbody.appendChild(dataRow);
    table.appendChild(tbody);
    article.appendChild(table);
            // Append the total row to the table body
            tbody.appendChild(totalRow);
    shopLocationHtml.appendChild(article);
}

createShopLocation(shopLocationSeattle);
createShopLocation(shopLocationTokyo);
createShopLocation(shopLocationDubai);
createShopLocation(shopLocationParis);
createShopLocation(shopLocationLima);




