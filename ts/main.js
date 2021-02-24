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

var matches = window.matchMedia("(prefers-color-scheme: dark)");
var listener;

function setTelegramCommentsColor(mode) {
  var apply = function apply(dark) {
    var frame = document.querySelector("iframe");

    if (frame != null) {
      frame.remove();
    }

    var it = document.querySelector("#comments-slot script");

    if (it != null) {
      it.remove();
    }

    var elm = document.querySelector("#comments-slot");
    var script = document.createElement("script");
    script.src = "https://comments.app/js/widget.js?3";
    script.dataset["dark"] = dark ? "1" : "0";
    script.setAttribute("data-comments-app-website", "MRjDiWij");
    script.dataset["limit"] = "10";
    script.dataset["dislikes"] = "1";
    script.dataset["outlined"] = "1";
    script.dataset["colorful"] = "1";
    elm.appendChild(script);
  };

  if (listener != null) {
    matches.removeListener(listener);
    listener = null;
  }

  switch (mode) {
    case "walo":
    case "pimeja":
      apply(mode == "pimeja");
      break;

    case null:
      var lis = function lis(ev) {
        apply(ev.matches);
      };

      matches.addListener(lis);
      apply(matches.matches);
      break;
  }
}

function applyScheme() {
  switch (localStorage.getItem("nasin-lukin")) {
    case "walo":
      document.querySelector(":root").setAttribute("data-nasin-lukin", "walo");
      setTelegramCommentsColor("walo");
      break;

    case "pimeja":
      document.querySelector(":root").setAttribute("data-nasin-lukin", "pimeja");
      setTelegramCommentsColor("pimeja");
      break;

    default:
      document.querySelector(":root").setAttribute("data-nasin-lukin", "ala");
      setTelegramCommentsColor(null);
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

