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
      const oneHour = this.cookiesEachHour.push(
        Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCust)
      );
      this.totalDailyCookies += oneHour;
    }
  },
  totalOfDailyCookies: function () {
    return this.cookiesEachHour * hours.length;
  },
};
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.totalOfDailyCookies();

// parent and child tags
let article = document.createElement("article");
container.appendChild(article);

let h3 = document.createElement("h3");
h3.textContent = seattle.storeName;
article.appendChild(h3);

let ul = document.createElement("ul");
article.appendChild(ul);

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
  for (let i = 0; i < headerHours.length; i++) {
    let headerCell = document.createElement("td");
    tableRow.appendChild(headerCell);
  }
  table.appendChild(tableRow);
}
renderTable();

// data cell
