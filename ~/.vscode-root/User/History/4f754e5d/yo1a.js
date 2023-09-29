const tbody = document.createElement("tbody"); 
const dataRow = document.createElement("tr"); 

// Loop through the customersPerHour 
for (let i = 0; i < locationData.customersPerHour.length; i++) {
    const td = document.createElement("td");
    td.textContent = `${locationData.customersPerHour[i]}`;
    dataRow.appendChild(td);
}



tbody.appendChild(dataRow);
    // Calculate the daily total for each hour
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("th");
    totalCell.textContent = "Daily Location Total";
    totalRow.appendChild(totalCell);


    let dailyTotal = 0;
    for(let i = 0; i < locationData.customersPerHour.length; i++) {
        dailyTotal += locationData.customersPerHour[i];
    }

    const td = document.createElement("td");
    td.textContent = `${dailyTotal}`;
    totalRow.appendChild(td);
    //console.log(dailytotal);


    
    

dataRow.appendChild(totalRow);
table.appendChild(tbody);
article.appendChild(table);
shopLocationHtml.appendChild(article);