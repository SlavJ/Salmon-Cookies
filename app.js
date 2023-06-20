"use strict";

// finding element with the id "container"
const container = document.getElementById("container");

//defining the open hours
let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// code for statistics
let seattle = {
  storeName: "Seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  customersEachHour: function () {
    return Math.floor(
      Math.random() * (this.maxCustPerHour - this.minCustPerHour) +
        this.minCustPerHour
    );
  },
  cookiesEachHour: function () {
    return this.customersEachHour * this.avgCookiesPerCust;
  },
  totalDailyCookies: function () {
    return this.cookiesEachHour * hours.length;
  },
};

// parent and child tags
let article = document.createElement("article");
container.appendChild(article);

let h3 = document.createElement("h3");
h3.textContent = seattle.storeName;
article.appendChild(h3);

let ul = document.createElement("ul");
article.appendChild(ul);

// generates random number for list
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours(i)}: ${this.cookiesEachHour(i)} cookies`;
  appendChild(i);
}

// table display
let table = document.createElement("table");
article.appendChild(table);

//  the header row
let headerRow = document.createElement("tr");
table.appendChild(headerRow);

// table header cells
let seattleHeaderCell = document.createElement("th");
seattleHeaderCell.textContent = "Seattle";
headerRow.appendChild(seattleHeaderCell);

let tokyoHeaderCell = document.createElement("th");
tokyoHeaderCell.textContent = "Tokyo";
headerRow.appendChild(tokyoHeaderCell);

let dubaiHeaderCell = document.createElement("th");
dubaiHeaderCell.textContent = "Dubai";
headerRow.appendChild(dubaiHeaderCell);

let parisHeaderCell = document.createElement("th");
parisHeaderCell.textContent = "Paris";
headerRow.appendChild(parisHeaderCell);

let limaHeaderCell = document.createElement("th");
limaHeaderCell.textContent = "Lima";
headerRow.appendChild(limaHeaderCell);

// data row
let dataRow = document.createElement("tr");
table.appendChild(dataRow);

// data cell
