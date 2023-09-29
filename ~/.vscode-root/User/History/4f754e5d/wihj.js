//function to add data to table
const form = document.getElementById("cookiesShop");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const location = event.target.location.value;
    const hour = event.target.hour.value;
    const cookiesSold = event.target.cookiesSold.value;

    //Add data to table
    const table = document.getElementById("salesTable");
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    //cell1.innerHtml = location;
    cell1.textContent = `${location}`;
    cell2.textContent = `${hour}`;
    cell3.textContent = `${cookiesSold}`;


    //console.log(result);
});

