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

applyScheme();

