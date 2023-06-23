"use strict";

// finding element with the id "container"
const container = document.getElementById("container");

//defining the open hours
let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let headerHours = [
  "",
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  "Daily Location Total",
];

// code for statistics
const seattle = {
  storeName: "Seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour) +
            this.minCustPerHour
        )
      );
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const cookiesInHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerCust
      );
      this.cookiesEachHour.push(cookiesInHour);

      this.totalDailyCookies += cookiesInHour;
    }
  },
  // totalOfDailyCookies: function () {
  //   return this.cookiesEachHour * hours.length;
  // },
};
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
// seattle.totalOfDailyCookies();

//  the header row

function renderTable() {
  let table = document.getElementById("my-table");
  let headerRow = document.createElement("tr");
  for (let i = 0; i < headerHours.length; i++) {
    let headerCell = document.createElement("th");
    headerCell.textContent = headerHours[i];
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  let tableRow = document.createElement("tr");

  let storeCell = document.createElement("td");
  storeCell.textContent = seattle.storeName;
  tableRow.appendChild(storeCell);

  for (let i = 0; i < seattle.cookiesEachHour.length; i++) {
    let headerCell = document.createElement("td");
    headerCell.textContent = seattle.cookiesEachHour[i];
    tableRow.appendChild(headerCell);
  }

  let totalCell = document.createElement("td");
  totalCell.textContent = seattle.totalDailyCookies;
  tableRow.appendChild(totalCell);
  table.appendChild(tableRow);
}
renderTable();

// data cell
