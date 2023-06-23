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
function Locations(
  storeName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerCust
) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.renderTable();
}

Locations.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(
      Math.floor(
        Math.random() * (this.maxCustPerHour - this.minCustPerHour) +
          this.minCustPerHour
      )
    );
  }
};
Locations.prototype.calcCookiesEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    const cookiesInHour = Math.ceil(
      this.customersEachHour[i] * this.avgCookiesPerCust
    );
    this.cookiesEachHour.push(cookiesInHour);

    this.totalDailyCookies += cookiesInHour;
  }
};

// seattle.totalOfDailyCookies();

//  the header row

Locations.prototype.renderTable = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();

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
  storeCell.textContent = this.storeName;
  tableRow.appendChild(storeCell);

  for (let i = 0; i < this.cookiesEachHour.length; i++) {
    let headerCell = document.createElement("td");
    headerCell.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(headerCell);
  }

  let totalCell = document.createElement("td");
  totalCell.textContent = this.totalDailyCookies;
  tableRow.appendChild(totalCell);
  table.appendChild(tableRow);
};

const seattle = new Locations("seattle", 23, 65, 6.3);
const tokyo = new Locations("tokyo", 3, 24, 1.2);
const dubai = new Locations("dubai", 11, 38, 3.7);
const paris = new Locations("paris", 20, 38, 2.3);
const lima = new Locations("lima", 2, 16, 4.6);
