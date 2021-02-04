"use strict";

function toggleScheme() {
  console.log(localStorage.getItem("nasin-lukin"));

  switch (localStorage.getItem("nasin-lukin")) {
    case "walo":
      localStorage.setItem("nasin-lukin", "pimeja");
      break;

    case "pimeja":
      localStorage.setItem("nasin-lukin", "walo");
      break;

    default:
      localStorage.setItem("nasin-lukin", "walo");
      break;
  }

  applyScheme();
}

function applyScheme() {
  switch (localStorage.getItem("nasin-lukin")) {
    case "walo":
      document.querySelector(":root").setAttribute("data-nasin-lukin", "walo");
      break;

    case "pimeja":
      document.querySelector(":root").setAttribute("data-nasin-lukin", "pimeja");
      break;

    default:
      document.querySelector(":root").setAttribute("data-nasin-lukin", "ala");
      break;
  }
}

function addlen(len) {
  var mu = JSON.parse(localStorage.getItem("lens")) || [];
  mu.push(len);
  localStorage.setItem("lens", JSON.stringify(mu));
  applylens();
}

function removelen(len) {
  var mu = JSON.parse(localStorage.getItem("lens")) || [];
  mu = mu.filter(function (item) {
    return item != len;
  });
  localStorage.setItem("lens", JSON.stringify(mu));
  applylens();
}

function applylens() {
  var items = JSON.parse(localStorage.getItem("lens")) || [];
  document.querySelectorAll(".lt-card.lt-article-card").forEach(function (item) {
    var a = [];
    item.querySelectorAll(".lt-article-card-chip").forEach(function (item) {
      a.push(item.textContent);
    });

    if (a.some(function (item) {
      return items.includes(item);
    })) {
      item.classList.add("lipu-len");
    } else {
      item.classList.remove("lipu-len");
    }
  });
}

applyScheme();
applylens();

