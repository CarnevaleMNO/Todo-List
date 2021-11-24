/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/showLists.js":
/*!**********************************!*\
  !*** ./src/scripts/showLists.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDailyList": () => (/* binding */ showDailyList),
/* harmony export */   "showWeeklyList": () => (/* binding */ showWeeklyList),
/* harmony export */   "showMonthlyList": () => (/* binding */ showMonthlyList),
/* harmony export */   "showYearlyList": () => (/* binding */ showYearlyList)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//List innerHTML
var high = document.querySelector(".high");
var low = document.querySelector(".low");
var localDailyStorage = localStorage.getItem("localDailyStorage");
var localDailyFinishedStorage = localStorage.getItem("localDailyFinishedStorage");
var localWeeklyStorage = localStorage.getItem("localWeeklyStorage");
var localWeeklyFinishedStorage = localStorage.getItem("localWeeklyFinishedStorage");
var localMonthlyStorage = localStorage.getItem("localMonthlyStorage");
var localMonthlyFinishedStorage = localStorage.getItem("localMonthlyFinishedStorage");
var localYearlyStorage = localStorage.getItem("localYearlyStorage");
var localYearlyFinishedStorage = localStorage.getItem("localYearlyFinishedStorage"); //New items

var question = document.querySelector(".question");
var input = document.querySelector(".textBox"); //Form

var form = document.querySelector(".list-form");
form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
});
form.addEventListener("submit", function () {
  if (question.innerText === "What do you need to do today?" || question.innerText === "Your Daily List") {
    if (input.value !== "") {
      var item = new Item(input.value);
      item.addToDaily();
      return showDailyList();
    } else {
      return;
    }
  } else if (question.innerText === "Your Weekly List") {
    if (input.value !== "") {
      var _item = new Item(input.value);

      _item.addToWeekly();

      return showWeeklyList();
    } else {
      return;
    }
  } else if (question.innerText === "Your Monthly List") {
    if (input.value !== "") {
      var _item2 = new Item(input.value);

      _item2.addToMonthly();

      return showMonthlyList();
    } else {
      return;
    }
  } else if (question.innerText === "Your Yearly List") {
    if (input.value !== "") {
      var _item3 = new Item(input.value);

      _item3.addToYearly();

      return showYearlyList();
    } else {
      return;
    }
  }
});
form.addEventListener("submit", function () {
  form.reset();
}); //Daily arrays

var dailyList = JSON.parse(localDailyStorage);

if (localDailyStorage == null) {
  dailyList = [];
}

var dailyFinished = JSON.parse(localDailyFinishedStorage);

if (localDailyFinishedStorage == null) {
  dailyFinished = [];
} //Weekly arrays


var weeklyList = JSON.parse(localWeeklyStorage);

if (localWeeklyStorage == null) {
  weeklyList = [];
}

var weeklyFinished = JSON.parse(localWeeklyFinishedStorage);

if (localWeeklyFinishedStorage == null) {
  weeklyFinished = [];
} //Monthly arrays


var monthlyList = JSON.parse(localMonthlyStorage);

if (localMonthlyStorage == null) {
  monthlyList = [];
}

var monthlyFinished = JSON.parse(localMonthlyFinishedStorage);

if (localMonthlyFinishedStorage == null) {
  monthlyFinished = [];
} //Yearly arrays


var yearlyList = JSON.parse(localYearlyStorage);

if (localYearlyStorage == null) {
  yearlyList = [];
}

var yearlyFinished = JSON.parse(localYearlyFinishedStorage);

if (localYearlyFinishedStorage == null) {
  yearlyFinished = [];
} //Classes


var Item = /*#__PURE__*/function () {
  function Item(item) {
    _classCallCheck(this, Item);

    this.item = item;
  }

  _createClass(Item, [{
    key: "addToDaily",
    value: function addToDaily() {
      dailyList.push("".concat(this.item));
      localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
    }
  }, {
    key: "addToWeekly",
    value: function addToWeekly() {
      weeklyList.push("".concat(this.item));
      localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
    }
  }, {
    key: "addToMonthly",
    value: function addToMonthly() {
      monthlyList.push("".concat(this.item));
      localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
    }
  }, {
    key: "addToYearly",
    value: function addToYearly() {
      yearlyList.push("".concat(this.item));
      localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
    }
  }]);

  return Item;
}(); //Daily list function


var showDailyList = function showDailyList() {
  high.innerHTML = "";
  low.innerHTML = "";

  if (dailyList) {
    var _iterator = _createForOfIteratorHelper(dailyList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var div = document.createElement("div");
        var p = document.createElement("p");
        var icon = document.createElement("p");
        icon.classList.add('awesome-icons');
        p.innerText = item;
        icon.innerHTML = "<p><i class=\"fas fa-recycle icon recycle\"></i></p><p><i class=\"far fa-trash-alt icon trash\"></i></p>";
        div.append(p, icon);
        div.classList.add("newItem");
        high.append(div);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (dailyFinished) {
    var _iterator2 = _createForOfIteratorHelper(dailyFinished),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _item4 = _step2.value;

        var _div = document.createElement("div");

        var _p = document.createElement("p");

        var _icon = document.createElement("p");

        _icon.classList.add('awesome-icons');

        _p.innerText = _item4;
        _icon.innerHTML = '<p><i class="fas fa-level-up-alt icon upgrade"></i></p><p><i class="far fa-trash-alt icon recycled-trash"></i></p>';

        _div.append(_p, _icon);

        _div.classList.add("newItem");

        low.append(_div);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var icons = document.querySelectorAll(".recycle");

  var _iterator3 = _createForOfIteratorHelper(icons),
      _step3;

  try {
    var _loop = function _loop() {
      var icon = _step3.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = dailyList.findIndex(function (el) {
          return el === value;
        });
        var thisItem = dailyList[found];
        dailyFinished.push(thisItem);
        var recycledItem = dailyList.splice(found, 1);
        localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
        localStorage.setItem("localDailyFinishedStorage", JSON.stringify(dailyFinished));
        return showDailyList();
      });
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var upgradeIcons = document.querySelectorAll(".upgrade");

  var _iterator4 = _createForOfIteratorHelper(upgradeIcons),
      _step4;

  try {
    var _loop2 = function _loop2() {
      var icon = _step4.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = dailyFinished.findIndex(function (el) {
          return el === value;
        });
        var thisItem = dailyFinished[found];
        dailyList.push(thisItem);
        var upgradeItem = dailyFinished.splice(found, 1);
        localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
        localStorage.setItem("localDailyFinishedStorage", JSON.stringify(dailyFinished));
        return showDailyList();
      });
    };

    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  var trashIcons = document.querySelectorAll(".trash");

  var _iterator5 = _createForOfIteratorHelper(trashIcons),
      _step5;

  try {
    var _loop3 = function _loop3() {
      var icon = _step5.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = dailyList.findIndex(function (el) {
          return el === value;
        });
        var thisItem = dailyList[found];
        var recycledItem = dailyList.splice(found, 1);
        localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
        localStorage.setItem("localDailyFinishedStorage", JSON.stringify(dailyFinished));
        return showDailyList();
      });
    };

    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var lowTrashIcons = document.querySelectorAll(".recycled-trash");

  var _iterator6 = _createForOfIteratorHelper(lowTrashIcons),
      _step6;

  try {
    var _loop4 = function _loop4() {
      var icon = _step6.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = dailyFinished.findIndex(function (el) {
          return el === value;
        });
        var thisItem = dailyFinished[found];
        var recycledItem = dailyFinished.splice(found, 1);
        localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
        localStorage.setItem("localDailyFinishedStorage", JSON.stringify(dailyFinished));
        return showDailyList();
      });
    };

    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      _loop4();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}; //Weekly list function


var showWeeklyList = function showWeeklyList() {
  high.innerHTML = "";
  low.innerHTML = "";

  if (weeklyList) {
    var _iterator7 = _createForOfIteratorHelper(weeklyList),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var item = _step7.value;
        var div = document.createElement("div");
        var p = document.createElement("p");
        var icon = document.createElement("p");
        icon.classList.add('awesome-icons');
        p.innerText = item;
        icon.innerHTML = "<p><i class=\"fas fa-recycle icon recycle\"></i></p><p><i class=\"far fa-trash-alt icon trash\"></i></p>";
        div.append(p, icon);
        div.classList.add("newItem");
        high.append(div);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  if (weeklyFinished) {
    var _iterator8 = _createForOfIteratorHelper(weeklyFinished),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _item5 = _step8.value;

        var _div2 = document.createElement("div");

        var _p2 = document.createElement("p");

        var _icon2 = document.createElement("p");

        _icon2.classList.add('awesome-icons');

        _p2.innerText = _item5;
        _icon2.innerHTML = '<p><i class="fas fa-level-up-alt icon upgrade"></i></p><p><i class="far fa-trash-alt icon recycled-trash"></i></p>';

        _div2.append(_p2, _icon2);

        _div2.classList.add("newItem");

        low.append(_div2);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }

  var icons = document.querySelectorAll(".recycle");

  var _iterator9 = _createForOfIteratorHelper(icons),
      _step9;

  try {
    var _loop5 = function _loop5() {
      var icon = _step9.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = weeklyList.findIndex(function (el) {
          return el === value;
        });
        var thisItem = weeklyList[found];
        weeklyFinished.push(thisItem);
        var recycledItem = weeklyList.splice(found, 1);
        localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
        localStorage.setItem("localWeeklyFinishedStorage", JSON.stringify(weeklyFinished));
        return showWeeklyList();
      });
    };

    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      _loop5();
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  var upgradeIcons = document.querySelectorAll(".upgrade");

  var _iterator10 = _createForOfIteratorHelper(upgradeIcons),
      _step10;

  try {
    var _loop6 = function _loop6() {
      var icon = _step10.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = weeklyFinished.findIndex(function (el) {
          return el === value;
        });
        var thisItem = weeklyFinished[found];
        weeklyList.push(thisItem);
        var upgradeItem = weeklyFinished.splice(found, 1);
        localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
        localStorage.setItem("localWeeklyFinishedStorage", JSON.stringify(weeklyFinished));
        return showWeeklyList();
      });
    };

    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      _loop6();
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var trashIcons = document.querySelectorAll(".trash");

  var _iterator11 = _createForOfIteratorHelper(trashIcons),
      _step11;

  try {
    var _loop7 = function _loop7() {
      var icon = _step11.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = weeklyList.findIndex(function (el) {
          return el === value;
        });
        var thisItem = weeklyList[found];
        var recycledItem = weeklyList.splice(found, 1);
        localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
        localStorage.setItem("localWeeklyFinishedStorage", JSON.stringify(weeklyFinished));
        return showWeeklyList();
      });
    };

    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      _loop7();
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }

  var lowTrashIcons = document.querySelectorAll(".recycled-trash");

  var _iterator12 = _createForOfIteratorHelper(lowTrashIcons),
      _step12;

  try {
    var _loop8 = function _loop8() {
      var icon = _step12.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = weeklyFinished.findIndex(function (el) {
          return el === value;
        });
        var thisItem = weeklyFinished[found];
        var recycledItem = weeklyFinished.splice(found, 1);
        localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
        localStorage.setItem("localWeeklyFinishedStorage", JSON.stringify(weeklyFinished));
        return showWeeklyList();
      });
    };

    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      _loop8();
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
}; //Monthly list function


var showMonthlyList = function showMonthlyList() {
  high.innerHTML = "";
  low.innerHTML = "";

  if (monthlyList) {
    var _iterator13 = _createForOfIteratorHelper(monthlyList),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var item = _step13.value;
        var div = document.createElement("div");
        var p = document.createElement("p");
        var icon = document.createElement("p");
        icon.classList.add('awesome-icons');
        p.innerText = item;
        icon.innerHTML = "<p><i class=\"fas fa-recycle icon recycle\"></i></p><p><i class=\"far fa-trash-alt icon trash\"></i></p>";
        div.append(p, icon);
        div.classList.add("newItem");
        high.append(div);
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
  }

  if (monthlyFinished) {
    var _iterator14 = _createForOfIteratorHelper(monthlyFinished),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _item6 = _step14.value;

        var _div3 = document.createElement("div");

        var _p3 = document.createElement("p");

        var _icon3 = document.createElement("p");

        _icon3.classList.add('awesome-icons');

        _p3.innerText = _item6;
        _icon3.innerHTML = '<p><i class="fas fa-level-up-alt icon upgrade"></i></p><p><i class="far fa-trash-alt icon recycled-trash"></i><p>';

        _div3.append(_p3, _icon3);

        _div3.classList.add("newItem");

        low.append(_div3);
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }

  var icons = document.querySelectorAll(".recycle");

  var _iterator15 = _createForOfIteratorHelper(icons),
      _step15;

  try {
    var _loop9 = function _loop9() {
      var icon = _step15.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = monthlyList.findIndex(function (el) {
          return el === value;
        });
        var thisItem = monthlyList[found];
        monthlyFinished.push(thisItem);
        var recycledItem = monthlyList.splice(found, 1);
        localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
        localStorage.setItem("localMonthlyFinishedStorage", JSON.stringify(monthlyFinished));
        return showMonthlyList();
      });
    };

    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      _loop9();
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }

  var upgradeIcons = document.querySelectorAll(".upgrade");

  var _iterator16 = _createForOfIteratorHelper(upgradeIcons),
      _step16;

  try {
    var _loop10 = function _loop10() {
      var icon = _step16.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = monthlyFinished.findIndex(function (el) {
          return el === value;
        });
        var thisItem = monthlyFinished[found];
        monthlyList.push(thisItem);
        var upgradeItem = monthlyFinished.splice(found, 1);
        localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
        localStorage.setItem("localMonthlyFinishedStorage", JSON.stringify(monthlyFinished));
        return showMonthlyList();
      });
    };

    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      _loop10();
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }

  var trashIcons = document.querySelectorAll(".trash");

  var _iterator17 = _createForOfIteratorHelper(trashIcons),
      _step17;

  try {
    var _loop11 = function _loop11() {
      var icon = _step17.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = monthlyList.findIndex(function (el) {
          return el === value;
        });
        var thisItem = monthlyList[found];
        var recycledItem = monthlyList.splice(found, 1);
        localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
        localStorage.setItem("localMonthlyFinishedStorage", JSON.stringify(monthlyFinished));
        return showMonthlyList();
      });
    };

    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      _loop11();
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }

  var lowTrashIcons = document.querySelectorAll(".recycled-trash");

  var _iterator18 = _createForOfIteratorHelper(lowTrashIcons),
      _step18;

  try {
    var _loop12 = function _loop12() {
      var icon = _step18.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = monthlyFinished.findIndex(function (el) {
          return el === value;
        });
        var thisItem = monthlyFinished[found];
        var recycledItem = monthlyFinished.splice(found, 1);
        localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
        localStorage.setItem("localMonthlyFinishedStorage", JSON.stringify(monthlyFinished));
        return showMonthlyList();
      });
    };

    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      _loop12();
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }
}; //Yearly list function


var showYearlyList = function showYearlyList() {
  high.innerHTML = "";
  low.innerHTML = "";

  if (yearlyList) {
    var _iterator19 = _createForOfIteratorHelper(yearlyList),
        _step19;

    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var item = _step19.value;
        var div = document.createElement("div");
        var p = document.createElement("p");
        var icon = document.createElement("p");
        icon.classList.add('awesome-icons');
        p.innerText = item;
        icon.innerHTML = "<p><i class=\"fas fa-recycle icon recycle\"></i></p><p><i class=\"far fa-trash-alt icon trash\"></i></p>";
        div.append(p, icon);
        div.classList.add("newItem");
        high.append(div);
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
  }

  if (yearlyFinished) {
    var _iterator20 = _createForOfIteratorHelper(yearlyFinished),
        _step20;

    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var _item7 = _step20.value;

        var _div4 = document.createElement("div");

        var _p4 = document.createElement("p");

        var _icon4 = document.createElement("p");

        _icon4.classList.add('awesome-icons');

        _p4.innerText = _item7;
        _icon4.innerHTML = '<p><i class="fas fa-level-up-alt icon upgrade"></i></p><p><i class="far fa-trash-alt icon recycled-trash"></i></p>';

        _div4.append(_p4, _icon4);

        _div4.classList.add("newItem");

        low.append(_div4);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
  }

  var icons = document.querySelectorAll(".recycle");

  var _iterator21 = _createForOfIteratorHelper(icons),
      _step21;

  try {
    var _loop13 = function _loop13() {
      var icon = _step21.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = yearlyList.findIndex(function (el) {
          return el === value;
        });
        var thisItem = yearlyList[found];
        yearlyFinished.push(thisItem);
        var recycledItem = yearlyList.splice(found, 1);
        localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
        localStorage.setItem("localYearlyFinishedStorage", JSON.stringify(yearlyFinished));
        return showYearlyList();
      });
    };

    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      _loop13();
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }

  var upgradeIcons = document.querySelectorAll(".upgrade");

  var _iterator22 = _createForOfIteratorHelper(upgradeIcons),
      _step22;

  try {
    var _loop14 = function _loop14() {
      var icon = _step22.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = yearlyFinished.findIndex(function (el) {
          return el === value;
        });
        var thisItem = yearlyFinished[found];
        yearlyList.push(thisItem);
        var upgradeItem = yearlyFinished.splice(found, 1);
        localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
        localStorage.setItem("localYearlyFinishedStorage", JSON.stringify(yearlyFinished));
        return showYearlyList();
      });
    };

    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      _loop14();
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }

  var trashIcons = document.querySelectorAll(".trash");

  var _iterator23 = _createForOfIteratorHelper(trashIcons),
      _step23;

  try {
    var _loop15 = function _loop15() {
      var icon = _step23.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = yearlyList.findIndex(function (el) {
          return el === value;
        });
        var thisItem = yearlyList[found];
        var recycledItem = yearlyList.splice(found, 1);
        localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
        localStorage.setItem("localYearlyFinishedStorage", JSON.stringify(yearlyFinished));
        return showYearlyList();
      });
    };

    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
      _loop15();
    }
  } catch (err) {
    _iterator23.e(err);
  } finally {
    _iterator23.f();
  }

  var lowTrashIcons = document.querySelectorAll(".recycled-trash");

  var _iterator24 = _createForOfIteratorHelper(lowTrashIcons),
      _step24;

  try {
    var _loop16 = function _loop16() {
      var icon = _step24.value;
      icon.addEventListener("click", function () {
        var div = icon.parentNode.parentNode;
        var value = div.firstChild.innerText;
        var found = yearlyFinished.findIndex(function (el) {
          return el === value;
        });
        var thisItem = yearlyFinished[found];
        var recycledItem = yearlyFinished.splice(found, 1);
        localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
        localStorage.setItem("localYearlyFinishedStorage", JSON.stringify(yearlyFinished));
        return showYearlyList();
      });
    };

    for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
      _loop16();
    }
  } catch (err) {
    _iterator24.e(err);
  } finally {
    _iterator24.f();
  }
}; //Exports




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n}\n\n/* Header Settings */\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 4rem;\n  background-color: #011627;\n  color: #fdfffc;\n  font-weight: bolder;\n}\n\n/* Main Content Settings */\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  width: 100%;\n  background-color: #fdfffc;\n  color: #ff9f1c;\n}\n\n.container {\n  display: flex;\n  flex-grow: 1;\n}\n\n.settings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 20%;\n  /* flex-grow: 1; */\n  font-size: 1.2rem;\n  background-color: #2ec4b6;\n  color: #fdfffc;\n  font-weight: bold;\n}\n\n.settings p {\n  cursor: pointer;\n}\n\n.settings p:hover {\n  color: #011627;\n}\n\n.active {\n  color: #011627;\n}\n\n.question {\n  margin-bottom: 3rem;\n}\n\n.list {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #ff9f1c;\n  text-align: center;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\n.high {\n  width: 100%;\n  height: auto;\n  margin-top: .5rem;\n}\n\n.low {\n  width: 100%;\n  height: auto;\n  margin-top: .2rem;\n  \n}\n\n.low .newItem {\n  text-decoration: line-through;\n}\n\n.input {\n  display: flex;\n}\n\n/* Footer Settings */\n\nfooter {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #011627;\n  color: #fdfffc;\n  margin-top: auto;\n}\n\n.social {\n  display: flex;\n}\n\n.social p {\n  margin: .2rem;\n  padding: .2rem;\n}\n\n/* Extra Styling Settings */\n\n.lists {\n  margin: auto;\n  width: 70%;\n  background-color: #fdfffc;\n  color: #6b705c;\n  min-height: 50vh;\n  border-radius: 10px;\n  box-shadow: 10px 5px 5px #e71d36;\n  border: 1px solid #011627;\n}\n\n.newItem {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #6b705c;\n  margin: .5rem;\n}\n\n.plus {\n  background-color: #2ec4b6;\n  border-radius: 50%;\n  width: 2.2rem;\n  height: 2.2rem;\n  cursor: pointer;\n  margin-right: .5rem;\n  margin-left: .5rem;\n  margin-bottom: 1rem;\n}\n\n.textBox {\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  min-width: 12rem;\n}\n\n.borderBot::after {\n  content: '';\n  display: block;\n  width: 4rem;\n  height: 1px;\n  margin: 3rem auto 1rem;\n  background-color: black;\n  opacity: .2;\n}\n\n.list-icon {\n  margin-right: .3rem;\n}\n\n.icon {\n  margin-left: 2rem;\n  margin-right: 1rem;\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n@media (max-width:600px){\n  .link-text {\n    display: none;\n  }\n  .settings {\n    width: 15%\n  }\n  .settings-title {\n    display: none;\n  }\n  .awesome-icons {\n    display: flex;\n    flex-direction: column;\n  }\n  .awesome-icons p {\n    text-decoration: none;\n  }\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,iCAAiC;EACjC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;AACnB;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,mBAAmB;AACrB;;AAEA,0BAA0B;;AAE1B;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;;AAEnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA,oBAAoB;;AAEpB;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA,2BAA2B;;AAE3B;EACE,YAAY;EACZ,UAAU;EACV,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE;EACF;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,qBAAqB;EACvB;AACF","sourcesContent":["body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n}\n\n/* Header Settings */\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 4rem;\n  background-color: #011627;\n  color: #fdfffc;\n  font-weight: bolder;\n}\n\n/* Main Content Settings */\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  width: 100%;\n  background-color: #fdfffc;\n  color: #ff9f1c;\n}\n\n.container {\n  display: flex;\n  flex-grow: 1;\n}\n\n.settings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 20%;\n  /* flex-grow: 1; */\n  font-size: 1.2rem;\n  background-color: #2ec4b6;\n  color: #fdfffc;\n  font-weight: bold;\n}\n\n.settings p {\n  cursor: pointer;\n}\n\n.settings p:hover {\n  color: #011627;\n}\n\n.active {\n  color: #011627;\n}\n\n.question {\n  margin-bottom: 3rem;\n}\n\n.list {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #ff9f1c;\n  text-align: center;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\n.high {\n  width: 100%;\n  height: auto;\n  margin-top: .5rem;\n}\n\n.low {\n  width: 100%;\n  height: auto;\n  margin-top: .2rem;\n  \n}\n\n.low .newItem {\n  text-decoration: line-through;\n}\n\n.input {\n  display: flex;\n}\n\n/* Footer Settings */\n\nfooter {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #011627;\n  color: #fdfffc;\n  margin-top: auto;\n}\n\n.social {\n  display: flex;\n}\n\n.social p {\n  margin: .2rem;\n  padding: .2rem;\n}\n\n/* Extra Styling Settings */\n\n.lists {\n  margin: auto;\n  width: 70%;\n  background-color: #fdfffc;\n  color: #6b705c;\n  min-height: 50vh;\n  border-radius: 10px;\n  box-shadow: 10px 5px 5px #e71d36;\n  border: 1px solid #011627;\n}\n\n.newItem {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #6b705c;\n  margin: .5rem;\n}\n\n.plus {\n  background-color: #2ec4b6;\n  border-radius: 50%;\n  width: 2.2rem;\n  height: 2.2rem;\n  cursor: pointer;\n  margin-right: .5rem;\n  margin-left: .5rem;\n  margin-bottom: 1rem;\n}\n\n.textBox {\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  min-width: 12rem;\n}\n\n.borderBot::after {\n  content: '';\n  display: block;\n  width: 4rem;\n  height: 1px;\n  margin: 3rem auto 1rem;\n  background-color: black;\n  opacity: .2;\n}\n\n.list-icon {\n  margin-right: .3rem;\n}\n\n.icon {\n  margin-left: 2rem;\n  margin-right: 1rem;\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n@media (max-width:600px){\n  .link-text {\n    display: none;\n  }\n  .settings {\n    width: 15%\n  }\n  .settings-title {\n    display: none;\n  }\n  .awesome-icons {\n    display: flex;\n    flex-direction: column;\n  }\n  .awesome-icons p {\n    text-decoration: none;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _showLists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showLists.js */ "./src/scripts/showLists.js");





window.addEventListener('DOMContentLoaded', _showLists_js__WEBPACK_IMPORTED_MODULE_1__.showDailyList);
window.addEventListener('DOMContentLoaded', function () {
  daily.classList.add('active');
});
var question = document.querySelector(".question"); //Lists

var daily = document.querySelector('#daily');
daily.addEventListener('click', function () {
  question.innerText = 'Your Daily List';
});
daily.addEventListener('click', _showLists_js__WEBPACK_IMPORTED_MODULE_1__.showDailyList);
daily.addEventListener('click', function () {
  daily.classList.add('active');
  weekly.classList.remove('active');
  monthly.classList.remove('active');
  yearly.classList.remove('active');
});
var weekly = document.querySelector('#weekly');
weekly.addEventListener('click', function () {
  question.innerText = 'Your Weekly List';
});
weekly.addEventListener('click', _showLists_js__WEBPACK_IMPORTED_MODULE_1__.showWeeklyList);
weekly.addEventListener('click', function () {
  daily.classList.remove('active');
  weekly.classList.add('active');
  monthly.classList.remove('active');
  yearly.classList.remove('active');
});
var monthly = document.querySelector('#monthly');
monthly.addEventListener('click', function () {
  question.innerText = 'Your Monthly List';
});
monthly.addEventListener('click', _showLists_js__WEBPACK_IMPORTED_MODULE_1__.showMonthlyList);
monthly.addEventListener('click', function () {
  daily.classList.remove('active');
  weekly.classList.remove('active');
  monthly.classList.add('active');
  yearly.classList.remove('active');
});
var yearly = document.querySelector('#yearly');
yearly.addEventListener('click', function () {
  question.innerText = 'Your Yearly List';
});
yearly.addEventListener('click', _showLists_js__WEBPACK_IMPORTED_MODULE_1__.showYearlyList);
yearly.addEventListener('click', function () {
  daily.classList.remove('active');
  weekly.classList.remove('active');
  monthly.classList.remove('active');
  yearly.classList.add('active');
}); // //Test Build
// import component from './component.js';
// console.log("I'm here!");
// document.body.append(component())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45MTU5MGMyNDUyYzcyY2MwMTg1OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLElBQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQSxJQUFJRSxpQkFBaUIsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLG1CQUFyQixDQUF4QjtBQUNBLElBQUlDLHlCQUF5QixHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FDOUIsMkJBRDhCLENBQWhDO0FBR0EsSUFBSUUsa0JBQWtCLEdBQUdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixvQkFBckIsQ0FBekI7QUFDQSxJQUFJRywwQkFBMEIsR0FBR0osWUFBWSxDQUFDQyxPQUFiLENBQy9CLDRCQUQrQixDQUFqQztBQUdBLElBQUlJLG1CQUFtQixHQUFHTCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIscUJBQXJCLENBQTFCO0FBQ0EsSUFBSUssMkJBQTJCLEdBQUdOLFlBQVksQ0FBQ0MsT0FBYixDQUNoQyw2QkFEZ0MsQ0FBbEM7QUFHQSxJQUFJTSxrQkFBa0IsR0FBR1AsWUFBWSxDQUFDQyxPQUFiLENBQXFCLG9CQUFyQixDQUF6QjtBQUNBLElBQUlPLDBCQUEwQixHQUFHUixZQUFZLENBQUNDLE9BQWIsQ0FDL0IsNEJBRCtCLENBQWpDLEVBSUE7O0FBQ0EsSUFBTVEsUUFBUSxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7QUFDQSxJQUFNYSxLQUFLLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkLEVBRUE7O0FBQ0EsSUFBTWMsSUFBSSxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtBQUNBYyxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQVVDLFdBQVYsRUFBdUI7QUFDckRBLEVBQUFBLFdBQVcsQ0FBQ0MsY0FBWjtBQUNELENBRkQ7QUFHQUgsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxZQUFZO0FBQzFDLE1BQ0VILFFBQVEsQ0FBQ00sU0FBVCxLQUF1QiwrQkFBdkIsSUFDQU4sUUFBUSxDQUFDTSxTQUFULEtBQXVCLGlCQUZ6QixFQUdFO0FBQ0EsUUFBSUwsS0FBSyxDQUFDTSxLQUFOLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNSLEtBQUssQ0FBQ00sS0FBZixDQUFYO0FBQ0FDLE1BQUFBLElBQUksQ0FBQ0UsVUFBTDtBQUNBLGFBQU9DLGFBQWEsRUFBcEI7QUFDRCxLQUpELE1BSU87QUFDTDtBQUNEO0FBQ0YsR0FYRCxNQVdPLElBQUlYLFFBQVEsQ0FBQ00sU0FBVCxLQUF1QixrQkFBM0IsRUFBK0M7QUFDcEQsUUFBSUwsS0FBSyxDQUFDTSxLQUFOLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQUlDLEtBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNSLEtBQUssQ0FBQ00sS0FBZixDQUFYOztBQUNBQyxNQUFBQSxLQUFJLENBQUNJLFdBQUw7O0FBQ0EsYUFBT0MsY0FBYyxFQUFyQjtBQUNELEtBSkQsTUFJTztBQUNMO0FBQ0Q7QUFDRixHQVJNLE1BUUEsSUFBSWIsUUFBUSxDQUFDTSxTQUFULEtBQXVCLG1CQUEzQixFQUFnRDtBQUNyRCxRQUFJTCxLQUFLLENBQUNNLEtBQU4sS0FBZ0IsRUFBcEIsRUFBd0I7QUFDdEIsVUFBSUMsTUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU1IsS0FBSyxDQUFDTSxLQUFmLENBQVg7O0FBQ0FDLE1BQUFBLE1BQUksQ0FBQ00sWUFBTDs7QUFDQSxhQUFPQyxlQUFlLEVBQXRCO0FBQ0QsS0FKRCxNQUlPO0FBQ0w7QUFDRDtBQUNGLEdBUk0sTUFRQSxJQUFJZixRQUFRLENBQUNNLFNBQVQsS0FBdUIsa0JBQTNCLEVBQStDO0FBQ3BELFFBQUlMLEtBQUssQ0FBQ00sS0FBTixLQUFnQixFQUFwQixFQUF3QjtBQUN0QixVQUFJQyxNQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTUixLQUFLLENBQUNNLEtBQWYsQ0FBWDs7QUFDQUMsTUFBQUEsTUFBSSxDQUFDUSxXQUFMOztBQUNBLGFBQU9DLGNBQWMsRUFBckI7QUFDRCxLQUpELE1BSU87QUFDTDtBQUNEO0FBQ0Y7QUFDRixDQXJDRDtBQXNDQWYsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxZQUFZO0FBQzFDRCxFQUFBQSxJQUFJLENBQUNnQixLQUFMO0FBQ0QsQ0FGRCxHQUtBOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcvQixpQkFBWCxDQUFoQjs7QUFDQSxJQUFJQSxpQkFBaUIsSUFBSSxJQUF6QixFQUErQjtBQUM3QjZCLEVBQUFBLFNBQVMsR0FBRyxFQUFaO0FBQ0Q7O0FBQ0QsSUFBSUcsYUFBYSxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBVzVCLHlCQUFYLENBQXBCOztBQUNBLElBQUlBLHlCQUF5QixJQUFJLElBQWpDLEVBQXVDO0FBQ3JDNkIsRUFBQUEsYUFBYSxHQUFHLEVBQWhCO0FBQ0QsRUFFRDs7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLGtCQUFYLENBQWpCOztBQUNBLElBQUlBLGtCQUFrQixJQUFJLElBQTFCLEVBQWdDO0FBQzlCNkIsRUFBQUEsVUFBVSxHQUFHLEVBQWI7QUFDRDs7QUFDRCxJQUFJQyxjQUFjLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXMUIsMEJBQVgsQ0FBckI7O0FBQ0EsSUFBSUEsMEJBQTBCLElBQUksSUFBbEMsRUFBd0M7QUFDdEM2QixFQUFBQSxjQUFjLEdBQUcsRUFBakI7QUFDRCxFQUVEOzs7QUFDQSxJQUFJQyxXQUFXLEdBQUdMLElBQUksQ0FBQ0MsS0FBTCxDQUFXekIsbUJBQVgsQ0FBbEI7O0FBQ0EsSUFBSUEsbUJBQW1CLElBQUksSUFBM0IsRUFBaUM7QUFDL0I2QixFQUFBQSxXQUFXLEdBQUcsRUFBZDtBQUNEOztBQUNELElBQUlDLGVBQWUsR0FBR04sSUFBSSxDQUFDQyxLQUFMLENBQVd4QiwyQkFBWCxDQUF0Qjs7QUFDQSxJQUFJQSwyQkFBMkIsSUFBSSxJQUFuQyxFQUF5QztBQUN2QzZCLEVBQUFBLGVBQWUsR0FBRyxFQUFsQjtBQUNELEVBRUQ7OztBQUNBLElBQUlDLFVBQVUsR0FBR1AsSUFBSSxDQUFDQyxLQUFMLENBQVd2QixrQkFBWCxDQUFqQjs7QUFDQSxJQUFJQSxrQkFBa0IsSUFBSSxJQUExQixFQUFnQztBQUM5QjZCLEVBQUFBLFVBQVUsR0FBRyxFQUFiO0FBQ0Q7O0FBQ0QsSUFBSUMsY0FBYyxHQUFHUixJQUFJLENBQUNDLEtBQUwsQ0FBV3RCLDBCQUFYLENBQXJCOztBQUNBLElBQUlBLDBCQUEwQixJQUFJLElBQWxDLEVBQXdDO0FBQ3RDNkIsRUFBQUEsY0FBYyxHQUFHLEVBQWpCO0FBQ0QsRUFFRDs7O0lBQ01uQjtBQUNKLGdCQUFZRCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O1dBQ0Qsc0JBQWE7QUFDWFcsTUFBQUEsU0FBUyxDQUFDVSxJQUFWLFdBQWtCLEtBQUtyQixJQUF2QjtBQUNBakIsTUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUFxQixtQkFBckIsRUFBMENWLElBQUksQ0FBQ1csU0FBTCxDQUFlWixTQUFmLENBQTFDO0FBQ0Q7OztXQUNELHVCQUFjO0FBQ1pJLE1BQUFBLFVBQVUsQ0FBQ00sSUFBWCxXQUFtQixLQUFLckIsSUFBeEI7QUFDQWpCLE1BQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVIsVUFBZixDQUEzQztBQUNEOzs7V0FDRCx3QkFBZTtBQUNiRSxNQUFBQSxXQUFXLENBQUNJLElBQVosV0FBb0IsS0FBS3JCLElBQXpCO0FBQ0FqQixNQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQXFCLHFCQUFyQixFQUE0Q1YsSUFBSSxDQUFDVyxTQUFMLENBQWVOLFdBQWYsQ0FBNUM7QUFDRDs7O1dBQ0QsdUJBQWM7QUFDWkUsTUFBQUEsVUFBVSxDQUFDRSxJQUFYLFdBQW1CLEtBQUtyQixJQUF4QjtBQUNBakIsTUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUFxQixvQkFBckIsRUFBMkNWLElBQUksQ0FBQ1csU0FBTCxDQUFlSixVQUFmLENBQTNDO0FBQ0Q7Ozs7S0FHSDs7O0FBQ0EsSUFBTWhCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQnpCLEVBQUFBLElBQUksQ0FBQzhDLFNBQUwsR0FBaUIsRUFBakI7QUFDQTNDLEVBQUFBLEdBQUcsQ0FBQzJDLFNBQUosR0FBZ0IsRUFBaEI7O0FBRUEsTUFBSWIsU0FBSixFQUFlO0FBQUEsK0NBQ0lBLFNBREo7QUFBQTs7QUFBQTtBQUNiLDBEQUE0QjtBQUFBLFlBQW5CWCxJQUFtQjtBQUMxQixZQUFNeUIsR0FBRyxHQUFHOUMsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHaEQsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixHQUF2QixDQUFWO0FBQ0EsWUFBTUUsSUFBSSxHQUFHakQsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FFLFFBQUFBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGVBQW5CO0FBQ0FILFFBQUFBLENBQUMsQ0FBQzdCLFNBQUYsR0FBY0UsSUFBZDtBQUNBNEIsUUFBQUEsSUFBSSxDQUFDSixTQUFMO0FBQ0FDLFFBQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXSixDQUFYLEVBQWNDLElBQWQ7QUFDQUgsUUFBQUEsR0FBRyxDQUFDSSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsU0FBbEI7QUFDQXBELFFBQUFBLElBQUksQ0FBQ3FELE1BQUwsQ0FBWU4sR0FBWjtBQUNEO0FBWFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlkOztBQUNELE1BQUlYLGFBQUosRUFBbUI7QUFBQSxnREFDQUEsYUFEQTtBQUFBOztBQUFBO0FBQ2pCLDZEQUFnQztBQUFBLFlBQXZCZCxNQUF1Qjs7QUFDOUIsWUFBTXlCLElBQUcsR0FBRzlDLFFBQVEsQ0FBQytDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQSxZQUFNQyxFQUFDLEdBQUdoRCxRQUFRLENBQUMrQyxhQUFULENBQXVCLEdBQXZCLENBQVY7O0FBQ0EsWUFBTUUsS0FBSSxHQUFHakQsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixHQUF2QixDQUFiOztBQUNBRSxRQUFBQSxLQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixlQUFuQjs7QUFDQUgsUUFBQUEsRUFBQyxDQUFDN0IsU0FBRixHQUFjRSxNQUFkO0FBQ0E0QixRQUFBQSxLQUFJLENBQUNKLFNBQUwsR0FDRSxvSEFERjs7QUFFQUMsUUFBQUEsSUFBRyxDQUFDTSxNQUFKLENBQVdKLEVBQVgsRUFBY0MsS0FBZDs7QUFDQUgsUUFBQUEsSUFBRyxDQUFDSSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsU0FBbEI7O0FBQ0FqRCxRQUFBQSxHQUFHLENBQUNrRCxNQUFKLENBQVdOLElBQVg7QUFDRDtBQVpnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYWxCOztBQUNELE1BQU1PLEtBQUssR0FBR3JELFFBQVEsQ0FBQ3NELGdCQUFULENBQTBCLFVBQTFCLENBQWQ7O0FBL0IwQiw4Q0FnQ1RELEtBaENTO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBZ0NqQkosSUFoQ2lCO0FBaUN4QkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHekIsU0FBUyxDQUFDMEIsU0FBVixDQUFvQixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUFwQixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBRzVCLFNBQVMsQ0FBQ3lCLEtBQUQsQ0FBeEI7QUFDQXRCLFFBQUFBLGFBQWEsQ0FBQ08sSUFBZCxDQUFtQmtCLFFBQW5CO0FBQ0EsWUFBSUMsWUFBWSxHQUFHN0IsU0FBUyxDQUFDOEIsTUFBVixDQUFpQkwsS0FBakIsRUFBd0IsQ0FBeEIsQ0FBbkI7QUFDQXJELFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FBcUIsbUJBQXJCLEVBQTBDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVosU0FBZixDQUExQztBQUNBNUIsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUNFLDJCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlVCxhQUFmLENBRkY7QUFJQSxlQUFPWCxhQUFhLEVBQXBCO0FBQ0QsT0FiRDtBQWpDd0I7O0FBZ0MxQiwyREFBd0I7QUFBQTtBQWV2QjtBQS9DeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnRDFCLE1BQU11QyxZQUFZLEdBQUcvRCxRQUFRLENBQUNzRCxnQkFBVCxDQUEwQixVQUExQixDQUFyQjs7QUFoRDBCLDhDQWlEVFMsWUFqRFM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFpRGpCZCxJQWpEaUI7QUFrRHhCQSxNQUFBQSxJQUFJLENBQUNqQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk4QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbkMsS0FBSyxHQUFHMEIsR0FBRyxDQUFDVSxVQUFKLENBQWVyQyxTQUEzQjtBQUNBLFlBQUlzQyxLQUFLLEdBQUd0QixhQUFhLENBQUN1QixTQUFkLENBQXdCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdkMsS0FBZjtBQUFBLFNBQXhCLENBQVo7QUFDQSxZQUFJd0MsUUFBUSxHQUFHekIsYUFBYSxDQUFDc0IsS0FBRCxDQUE1QjtBQUNBekIsUUFBQUEsU0FBUyxDQUFDVSxJQUFWLENBQWVrQixRQUFmO0FBQ0EsWUFBSUksV0FBVyxHQUFHN0IsYUFBYSxDQUFDMkIsTUFBZCxDQUFxQkwsS0FBckIsRUFBNEIsQ0FBNUIsQ0FBbEI7QUFDQXJELFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FBcUIsbUJBQXJCLEVBQTBDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVosU0FBZixDQUExQztBQUNBNUIsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUNFLDJCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlVCxhQUFmLENBRkY7QUFJQSxlQUFPWCxhQUFhLEVBQXBCO0FBQ0QsT0FiRDtBQWxEd0I7O0FBaUQxQiwyREFBK0I7QUFBQTtBQWU5QjtBQWhFeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpRTFCLE1BQU15QyxVQUFVLEdBQUdqRSxRQUFRLENBQUNzRCxnQkFBVCxDQUEwQixRQUExQixDQUFuQjs7QUFqRTBCLDhDQWtFVFcsVUFsRVM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFrRWpCaEIsSUFsRWlCO0FBbUV4QkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHekIsU0FBUyxDQUFDMEIsU0FBVixDQUFvQixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUFwQixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBRzVCLFNBQVMsQ0FBQ3lCLEtBQUQsQ0FBeEI7QUFDQSxZQUFJSSxZQUFZLEdBQUc3QixTQUFTLENBQUM4QixNQUFWLENBQWlCTCxLQUFqQixFQUF3QixDQUF4QixDQUFuQjtBQUNBckQsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUFxQixtQkFBckIsRUFBMENWLElBQUksQ0FBQ1csU0FBTCxDQUFlWixTQUFmLENBQTFDO0FBQ0E1QixRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQ0UsMkJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVULGFBQWYsQ0FGRjtBQUlBLGVBQU9YLGFBQWEsRUFBcEI7QUFDRCxPQVpEO0FBbkV3Qjs7QUFrRTFCLDJEQUE2QjtBQUFBO0FBYzVCO0FBaEZ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlGMUIsTUFBTTBDLGFBQWEsR0FBR2xFLFFBQVEsQ0FBQ3NELGdCQUFULENBQTBCLGlCQUExQixDQUF0Qjs7QUFqRjBCLDhDQWtGVFksYUFsRlM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFrRmpCakIsSUFsRmlCO0FBbUZ4QkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHdEIsYUFBYSxDQUFDdUIsU0FBZCxDQUF3QixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUF4QixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBR3pCLGFBQWEsQ0FBQ3NCLEtBQUQsQ0FBNUI7QUFDQSxZQUFJSSxZQUFZLEdBQUcxQixhQUFhLENBQUMyQixNQUFkLENBQXFCTCxLQUFyQixFQUE0QixDQUE1QixDQUFuQjtBQUNBckQsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUFxQixtQkFBckIsRUFBMENWLElBQUksQ0FBQ1csU0FBTCxDQUFlWixTQUFmLENBQTFDO0FBQ0E1QixRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQ0UsMkJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVULGFBQWYsQ0FGRjtBQUlBLGVBQU9YLGFBQWEsRUFBcEI7QUFDRCxPQVpEO0FBbkZ3Qjs7QUFrRjFCLDJEQUFnQztBQUFBO0FBYy9CO0FBaEd5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUczQixDQWpHRCxFQW1HQTs7O0FBQ0EsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCM0IsRUFBQUEsSUFBSSxDQUFDOEMsU0FBTCxHQUFpQixFQUFqQjtBQUNBM0MsRUFBQUEsR0FBRyxDQUFDMkMsU0FBSixHQUFnQixFQUFoQjs7QUFFQSxNQUFJVCxVQUFKLEVBQWdCO0FBQUEsZ0RBQ0dBLFVBREg7QUFBQTs7QUFBQTtBQUNkLDZEQUE2QjtBQUFBLFlBQXBCZixJQUFvQjtBQUMzQixZQUFNeUIsR0FBRyxHQUFHOUMsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHaEQsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixHQUF2QixDQUFWO0FBQ0EsWUFBTUUsSUFBSSxHQUFHakQsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FFLFFBQUFBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGVBQW5CO0FBQ0FILFFBQUFBLENBQUMsQ0FBQzdCLFNBQUYsR0FBY0UsSUFBZDtBQUNBNEIsUUFBQUEsSUFBSSxDQUFDSixTQUFMO0FBQ0FDLFFBQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXSixDQUFYLEVBQWNDLElBQWQ7QUFDQUgsUUFBQUEsR0FBRyxDQUFDSSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsU0FBbEI7QUFDQXBELFFBQUFBLElBQUksQ0FBQ3FELE1BQUwsQ0FBWU4sR0FBWjtBQUNEO0FBWGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlmOztBQUNELE1BQUlULGNBQUosRUFBb0I7QUFBQSxnREFDREEsY0FEQztBQUFBOztBQUFBO0FBQ2xCLDZEQUFpQztBQUFBLFlBQXhCaEIsTUFBd0I7O0FBQy9CLFlBQU15QixLQUFHLEdBQUc5QyxRQUFRLENBQUMrQyxhQUFULENBQXVCLEtBQXZCLENBQVo7O0FBQ0EsWUFBTUMsR0FBQyxHQUFHaEQsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixHQUF2QixDQUFWOztBQUNBLFlBQU1FLE1BQUksR0FBR2pELFFBQVEsQ0FBQytDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjs7QUFDQUUsUUFBQUEsTUFBSSxDQUFDQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsZUFBbkI7O0FBQ0FILFFBQUFBLEdBQUMsQ0FBQzdCLFNBQUYsR0FBY0UsTUFBZDtBQUNBNEIsUUFBQUEsTUFBSSxDQUFDSixTQUFMLEdBQ0Usb0hBREY7O0FBRUFDLFFBQUFBLEtBQUcsQ0FBQ00sTUFBSixDQUFXSixHQUFYLEVBQWNDLE1BQWQ7O0FBQ0FILFFBQUFBLEtBQUcsQ0FBQ0ksU0FBSixDQUFjQyxHQUFkLENBQWtCLFNBQWxCOztBQUNBakQsUUFBQUEsR0FBRyxDQUFDa0QsTUFBSixDQUFXTixLQUFYO0FBQ0Q7QUFaaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFuQjs7QUFDRCxNQUFNTyxLQUFLLEdBQUdyRCxRQUFRLENBQUNzRCxnQkFBVCxDQUEwQixVQUExQixDQUFkOztBQS9CMkIsOENBZ0NWRCxLQWhDVTtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQWdDbEJKLElBaENrQjtBQWlDekJBLE1BQUFBLElBQUksQ0FBQ2pDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSThCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUluQyxLQUFLLEdBQUcwQixHQUFHLENBQUNVLFVBQUosQ0FBZXJDLFNBQTNCO0FBQ0EsWUFBSXNDLEtBQUssR0FBR3JCLFVBQVUsQ0FBQ3NCLFNBQVgsQ0FBcUIsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt2QyxLQUFmO0FBQUEsU0FBckIsQ0FBWjtBQUNBLFlBQUl3QyxRQUFRLEdBQUd4QixVQUFVLENBQUNxQixLQUFELENBQXpCO0FBQ0FwQixRQUFBQSxjQUFjLENBQUNLLElBQWYsQ0FBb0JrQixRQUFwQjtBQUNBLFlBQUlDLFlBQVksR0FBR3pCLFVBQVUsQ0FBQzBCLE1BQVgsQ0FBa0JMLEtBQWxCLEVBQXlCLENBQXpCLENBQW5CO0FBQ0FyRCxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVSLFVBQWYsQ0FBM0M7QUFDQWhDLFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FDRSw0QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZVAsY0FBZixDQUZGO0FBSUEsZUFBT1gsY0FBYyxFQUFyQjtBQUNELE9BYkQ7QUFqQ3lCOztBQWdDM0IsMkRBQXdCO0FBQUE7QUFldkI7QUEvQzBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0QzQixNQUFNcUMsWUFBWSxHQUFHL0QsUUFBUSxDQUFDc0QsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBckI7O0FBaEQyQiwrQ0FpRFZTLFlBakRVO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBaURsQmQsSUFqRGtCO0FBa0R6QkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHcEIsY0FBYyxDQUFDcUIsU0FBZixDQUF5QixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUF6QixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBR3ZCLGNBQWMsQ0FBQ29CLEtBQUQsQ0FBN0I7QUFDQXJCLFFBQUFBLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQmtCLFFBQWhCO0FBQ0EsWUFBSUksV0FBVyxHQUFHM0IsY0FBYyxDQUFDeUIsTUFBZixDQUFzQkwsS0FBdEIsRUFBNkIsQ0FBN0IsQ0FBbEI7QUFDQXJELFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVIsVUFBZixDQUEzQztBQUNBaEMsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUNFLDRCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlUCxjQUFmLENBRkY7QUFJQSxlQUFPWCxjQUFjLEVBQXJCO0FBQ0QsT0FiRDtBQWxEeUI7O0FBaUQzQiw4REFBK0I7QUFBQTtBQWU5QjtBQWhFMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpRTNCLE1BQU11QyxVQUFVLEdBQUdqRSxRQUFRLENBQUNzRCxnQkFBVCxDQUEwQixRQUExQixDQUFuQjs7QUFqRTJCLCtDQWtFVlcsVUFsRVU7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFrRWxCaEIsSUFsRWtCO0FBbUV6QkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHckIsVUFBVSxDQUFDc0IsU0FBWCxDQUFxQixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUFyQixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBR3hCLFVBQVUsQ0FBQ3FCLEtBQUQsQ0FBekI7QUFDQSxZQUFJSSxZQUFZLEdBQUd6QixVQUFVLENBQUMwQixNQUFYLENBQWtCTCxLQUFsQixFQUF5QixDQUF6QixDQUFuQjtBQUNBckQsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUFxQixvQkFBckIsRUFBMkNWLElBQUksQ0FBQ1csU0FBTCxDQUFlUixVQUFmLENBQTNDO0FBQ0FoQyxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQ0UsNEJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVQLGNBQWYsQ0FGRjtBQUlBLGVBQU9YLGNBQWMsRUFBckI7QUFDRCxPQVpEO0FBbkV5Qjs7QUFrRTNCLDhEQUE2QjtBQUFBO0FBYzVCO0FBaEYwQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlGM0IsTUFBTXdDLGFBQWEsR0FBR2xFLFFBQVEsQ0FBQ3NELGdCQUFULENBQTBCLGlCQUExQixDQUF0Qjs7QUFqRjJCLCtDQWtGVlksYUFsRlU7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFrRmxCakIsSUFsRmtCO0FBbUZ6QkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHcEIsY0FBYyxDQUFDcUIsU0FBZixDQUF5QixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUF6QixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBR3ZCLGNBQWMsQ0FBQ29CLEtBQUQsQ0FBN0I7QUFDQSxZQUFJSSxZQUFZLEdBQUd4QixjQUFjLENBQUN5QixNQUFmLENBQXNCTCxLQUF0QixFQUE2QixDQUE3QixDQUFuQjtBQUNBckQsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUFxQixvQkFBckIsRUFBMkNWLElBQUksQ0FBQ1csU0FBTCxDQUFlUixVQUFmLENBQTNDO0FBQ0FoQyxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQ0UsNEJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVQLGNBQWYsQ0FGRjtBQUlBLGVBQU9YLGNBQWMsRUFBckI7QUFDRCxPQVpEO0FBbkZ5Qjs7QUFrRjNCLDhEQUFnQztBQUFBO0FBYy9CO0FBaEcwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUc1QixDQWpHRCxFQW1HQTs7O0FBQ0EsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCN0IsRUFBQUEsSUFBSSxDQUFDOEMsU0FBTCxHQUFpQixFQUFqQjtBQUNBM0MsRUFBQUEsR0FBRyxDQUFDMkMsU0FBSixHQUFnQixFQUFoQjs7QUFFQSxNQUFJUCxXQUFKLEVBQWlCO0FBQUEsaURBQ0VBLFdBREY7QUFBQTs7QUFBQTtBQUNmLGdFQUE4QjtBQUFBLFlBQXJCakIsSUFBcUI7QUFDNUIsWUFBTXlCLEdBQUcsR0FBRzlDLFFBQVEsQ0FBQytDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFlBQU1DLENBQUMsR0FBR2hELFFBQVEsQ0FBQytDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBLFlBQU1FLElBQUksR0FBR2pELFFBQVEsQ0FBQytDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBRSxRQUFBQSxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixlQUFuQjtBQUNBSCxRQUFBQSxDQUFDLENBQUM3QixTQUFGLEdBQWNFLElBQWQ7QUFDQTRCLFFBQUFBLElBQUksQ0FBQ0osU0FBTDtBQUNBQyxRQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBV0osQ0FBWCxFQUFjQyxJQUFkO0FBQ0FILFFBQUFBLEdBQUcsQ0FBQ0ksU0FBSixDQUFjQyxHQUFkLENBQWtCLFNBQWxCO0FBQ0FwRCxRQUFBQSxJQUFJLENBQUNxRCxNQUFMLENBQVlOLEdBQVo7QUFDRDtBQVhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZaEI7O0FBQ0QsTUFBSVAsZUFBSixFQUFxQjtBQUFBLGlEQUNGQSxlQURFO0FBQUE7O0FBQUE7QUFDbkIsZ0VBQWtDO0FBQUEsWUFBekJsQixNQUF5Qjs7QUFDaEMsWUFBTXlCLEtBQUcsR0FBRzlDLFFBQVEsQ0FBQytDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQSxZQUFNQyxHQUFDLEdBQUdoRCxRQUFRLENBQUMrQyxhQUFULENBQXVCLEdBQXZCLENBQVY7O0FBQ0EsWUFBTUUsTUFBSSxHQUFHakQsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixHQUF2QixDQUFiOztBQUNBRSxRQUFBQSxNQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixlQUFuQjs7QUFDQUgsUUFBQUEsR0FBQyxDQUFDN0IsU0FBRixHQUFjRSxNQUFkO0FBQ0E0QixRQUFBQSxNQUFJLENBQUNKLFNBQUwsR0FDRSxtSEFERjs7QUFFQUMsUUFBQUEsS0FBRyxDQUFDTSxNQUFKLENBQVdKLEdBQVgsRUFBY0MsTUFBZDs7QUFDQUgsUUFBQUEsS0FBRyxDQUFDSSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsU0FBbEI7O0FBQ0FqRCxRQUFBQSxHQUFHLENBQUNrRCxNQUFKLENBQVdOLEtBQVg7QUFDRDtBQVprQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYXBCOztBQUNELE1BQU1PLEtBQUssR0FBR3JELFFBQVEsQ0FBQ3NELGdCQUFULENBQTBCLFVBQTFCLENBQWQ7O0FBL0I0QiwrQ0FnQ1hELEtBaENXO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBZ0NuQkosSUFoQ21CO0FBaUMxQkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHbkIsV0FBVyxDQUFDb0IsU0FBWixDQUFzQixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUF0QixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBR3RCLFdBQVcsQ0FBQ21CLEtBQUQsQ0FBMUI7QUFDQWxCLFFBQUFBLGVBQWUsQ0FBQ0csSUFBaEIsQ0FBcUJrQixRQUFyQjtBQUNBLFlBQUlDLFlBQVksR0FBR3ZCLFdBQVcsQ0FBQ3dCLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLENBQTFCLENBQW5CO0FBQ0FyRCxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQXFCLHFCQUFyQixFQUE0Q1YsSUFBSSxDQUFDVyxTQUFMLENBQWVOLFdBQWYsQ0FBNUM7QUFDQWxDLFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FDRSw2QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZUwsZUFBZixDQUZGO0FBSUEsZUFBT1gsZUFBZSxFQUF0QjtBQUNELE9BYkQ7QUFqQzBCOztBQWdDNUIsOERBQXdCO0FBQUE7QUFldkI7QUEvQzJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0Q1QixNQUFNbUMsWUFBWSxHQUFHL0QsUUFBUSxDQUFDc0QsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBckI7O0FBaEQ0QiwrQ0FpRFhTLFlBakRXO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBaURuQmQsSUFqRG1CO0FBa0QxQkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHbEIsZUFBZSxDQUFDbUIsU0FBaEIsQ0FBMEIsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt2QyxLQUFmO0FBQUEsU0FBMUIsQ0FBWjtBQUNBLFlBQUl3QyxRQUFRLEdBQUdyQixlQUFlLENBQUNrQixLQUFELENBQTlCO0FBQ0FuQixRQUFBQSxXQUFXLENBQUNJLElBQVosQ0FBaUJrQixRQUFqQjtBQUNBLFlBQUlJLFdBQVcsR0FBR3pCLGVBQWUsQ0FBQ3VCLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QixDQUFsQjtBQUNBckQsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUFxQixxQkFBckIsRUFBNENWLElBQUksQ0FBQ1csU0FBTCxDQUFlTixXQUFmLENBQTVDO0FBQ0FsQyxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQ0UsNkJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVMLGVBQWYsQ0FGRjtBQUlBLGVBQU9YLGVBQWUsRUFBdEI7QUFDRCxPQWJEO0FBbEQwQjs7QUFpRDVCLDhEQUErQjtBQUFBO0FBZTlCO0FBaEUyQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlFNUIsTUFBTXFDLFVBQVUsR0FBR2pFLFFBQVEsQ0FBQ3NELGdCQUFULENBQTBCLFFBQTFCLENBQW5COztBQWpFNEIsK0NBa0VYVyxVQWxFVztBQUFBOztBQUFBO0FBQUE7QUFBQSxVQWtFbkJoQixJQWxFbUI7QUFtRTFCQSxNQUFBQSxJQUFJLENBQUNqQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk4QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbkMsS0FBSyxHQUFHMEIsR0FBRyxDQUFDVSxVQUFKLENBQWVyQyxTQUEzQjtBQUNBLFlBQUlzQyxLQUFLLEdBQUduQixXQUFXLENBQUNvQixTQUFaLENBQXNCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdkMsS0FBZjtBQUFBLFNBQXRCLENBQVo7QUFDQSxZQUFJd0MsUUFBUSxHQUFHdEIsV0FBVyxDQUFDbUIsS0FBRCxDQUExQjtBQUNBLFlBQUlJLFlBQVksR0FBR3ZCLFdBQVcsQ0FBQ3dCLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLENBQTFCLENBQW5CO0FBQ0FyRCxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQXFCLHFCQUFyQixFQUE0Q1YsSUFBSSxDQUFDVyxTQUFMLENBQWVOLFdBQWYsQ0FBNUM7QUFDQWxDLFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FDRSw2QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZUwsZUFBZixDQUZGO0FBSUEsZUFBT1gsZUFBZSxFQUF0QjtBQUNELE9BWkQ7QUFuRTBCOztBQWtFNUIsOERBQTZCO0FBQUE7QUFjNUI7QUFoRjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUY1QixNQUFNc0MsYUFBYSxHQUFHbEUsUUFBUSxDQUFDc0QsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQXRCOztBQWpGNEIsK0NBa0ZYWSxhQWxGVztBQUFBOztBQUFBO0FBQUE7QUFBQSxVQWtGbkJqQixJQWxGbUI7QUFtRjFCQSxNQUFBQSxJQUFJLENBQUNqQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk4QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbkMsS0FBSyxHQUFHMEIsR0FBRyxDQUFDVSxVQUFKLENBQWVyQyxTQUEzQjtBQUNBLFlBQUlzQyxLQUFLLEdBQUdsQixlQUFlLENBQUNtQixTQUFoQixDQUEwQixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUExQixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBR3JCLGVBQWUsQ0FBQ2tCLEtBQUQsQ0FBOUI7QUFDQSxZQUFJSSxZQUFZLEdBQUd0QixlQUFlLENBQUN1QixNQUFoQixDQUF1QkwsS0FBdkIsRUFBOEIsQ0FBOUIsQ0FBbkI7QUFDQXJELFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FBcUIscUJBQXJCLEVBQTRDVixJQUFJLENBQUNXLFNBQUwsQ0FBZU4sV0FBZixDQUE1QztBQUNBbEMsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUNFLDZCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlTCxlQUFmLENBRkY7QUFJQSxlQUFPWCxlQUFlLEVBQXRCO0FBQ0QsT0FaRDtBQW5GMEI7O0FBa0Y1Qiw4REFBZ0M7QUFBQTtBQWMvQjtBQWhHMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlHN0IsQ0FqR0QsRUFtR0E7OztBQUNBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQi9CLEVBQUFBLElBQUksQ0FBQzhDLFNBQUwsR0FBaUIsRUFBakI7QUFDQTNDLEVBQUFBLEdBQUcsQ0FBQzJDLFNBQUosR0FBZ0IsRUFBaEI7O0FBRUEsTUFBSUwsVUFBSixFQUFnQjtBQUFBLGlEQUNHQSxVQURIO0FBQUE7O0FBQUE7QUFDZCxnRUFBNkI7QUFBQSxZQUFwQm5CLElBQW9CO0FBQzNCLFlBQU15QixHQUFHLEdBQUc5QyxRQUFRLENBQUMrQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQSxZQUFNQyxDQUFDLEdBQUdoRCxRQUFRLENBQUMrQyxhQUFULENBQXVCLEdBQXZCLENBQVY7QUFDQSxZQUFNRSxJQUFJLEdBQUdqRCxRQUFRLENBQUMrQyxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQUUsUUFBQUEsSUFBSSxDQUFDQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsZUFBbkI7QUFDQUgsUUFBQUEsQ0FBQyxDQUFDN0IsU0FBRixHQUFjRSxJQUFkO0FBQ0E0QixRQUFBQSxJQUFJLENBQUNKLFNBQUw7QUFDQUMsUUFBQUEsR0FBRyxDQUFDTSxNQUFKLENBQVdKLENBQVgsRUFBY0MsSUFBZDtBQUNBSCxRQUFBQSxHQUFHLENBQUNJLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjtBQUNBcEQsUUFBQUEsSUFBSSxDQUFDcUQsTUFBTCxDQUFZTixHQUFaO0FBQ0Q7QUFYYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWWY7O0FBQ0QsTUFBSUwsY0FBSixFQUFvQjtBQUFBLGlEQUNEQSxjQURDO0FBQUE7O0FBQUE7QUFDbEIsZ0VBQWlDO0FBQUEsWUFBeEJwQixNQUF3Qjs7QUFDL0IsWUFBTXlCLEtBQUcsR0FBRzlDLFFBQVEsQ0FBQytDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQSxZQUFNQyxHQUFDLEdBQUdoRCxRQUFRLENBQUMrQyxhQUFULENBQXVCLEdBQXZCLENBQVY7O0FBQ0EsWUFBTUUsTUFBSSxHQUFHakQsUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixHQUF2QixDQUFiOztBQUNBRSxRQUFBQSxNQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixlQUFuQjs7QUFDQUgsUUFBQUEsR0FBQyxDQUFDN0IsU0FBRixHQUFjRSxNQUFkO0FBQ0E0QixRQUFBQSxNQUFJLENBQUNKLFNBQUwsR0FDRSxvSEFERjs7QUFFQUMsUUFBQUEsS0FBRyxDQUFDTSxNQUFKLENBQVdKLEdBQVgsRUFBY0MsTUFBZDs7QUFDQUgsUUFBQUEsS0FBRyxDQUFDSSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsU0FBbEI7O0FBQ0FqRCxRQUFBQSxHQUFHLENBQUNrRCxNQUFKLENBQVdOLEtBQVg7QUFDRDtBQVppQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYW5COztBQUNELE1BQU1PLEtBQUssR0FBR3JELFFBQVEsQ0FBQ3NELGdCQUFULENBQTBCLFVBQTFCLENBQWQ7O0FBL0IyQiwrQ0FnQ1ZELEtBaENVO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBZ0NsQkosSUFoQ2tCO0FBaUN6QkEsTUFBQUEsSUFBSSxDQUFDakMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJOEIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSW5DLEtBQUssR0FBRzBCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlckMsU0FBM0I7QUFDQSxZQUFJc0MsS0FBSyxHQUFHakIsVUFBVSxDQUFDa0IsU0FBWCxDQUFxQixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3ZDLEtBQWY7QUFBQSxTQUFyQixDQUFaO0FBQ0EsWUFBSXdDLFFBQVEsR0FBR3BCLFVBQVUsQ0FBQ2lCLEtBQUQsQ0FBekI7QUFDQWhCLFFBQUFBLGNBQWMsQ0FBQ0MsSUFBZixDQUFvQmtCLFFBQXBCO0FBQ0EsWUFBSUMsWUFBWSxHQUFHckIsVUFBVSxDQUFDc0IsTUFBWCxDQUFrQkwsS0FBbEIsRUFBeUIsQ0FBekIsQ0FBbkI7QUFDQXJELFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDVixJQUFJLENBQUNXLFNBQUwsQ0FBZUosVUFBZixDQUEzQztBQUNBcEMsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUNFLDRCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlSCxjQUFmLENBRkY7QUFJQSxlQUFPWCxjQUFjLEVBQXJCO0FBQ0QsT0FiRDtBQWpDeUI7O0FBZ0MzQiw4REFBd0I7QUFBQTtBQWV2QjtBQS9DMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnRDNCLE1BQU1pQyxZQUFZLEdBQUcvRCxRQUFRLENBQUNzRCxnQkFBVCxDQUEwQixVQUExQixDQUFyQjs7QUFoRDJCLCtDQWlEVlMsWUFqRFU7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFpRGxCZCxJQWpEa0I7QUFrRHpCQSxNQUFBQSxJQUFJLENBQUNqQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk4QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbkMsS0FBSyxHQUFHMEIsR0FBRyxDQUFDVSxVQUFKLENBQWVyQyxTQUEzQjtBQUNBLFlBQUlzQyxLQUFLLEdBQUdoQixjQUFjLENBQUNpQixTQUFmLENBQXlCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdkMsS0FBZjtBQUFBLFNBQXpCLENBQVo7QUFDQSxZQUFJd0MsUUFBUSxHQUFHbkIsY0FBYyxDQUFDZ0IsS0FBRCxDQUE3QjtBQUNBakIsUUFBQUEsVUFBVSxDQUFDRSxJQUFYLENBQWdCa0IsUUFBaEI7QUFDQSxZQUFJSSxXQUFXLEdBQUd2QixjQUFjLENBQUNxQixNQUFmLENBQXNCTCxLQUF0QixFQUE2QixDQUE3QixDQUFsQjtBQUNBckQsUUFBQUEsWUFBWSxDQUFDdUMsT0FBYixDQUFxQixvQkFBckIsRUFBMkNWLElBQUksQ0FBQ1csU0FBTCxDQUFlSixVQUFmLENBQTNDO0FBQ0FwQyxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQ0UsNEJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVILGNBQWYsQ0FGRjtBQUlBLGVBQU9YLGNBQWMsRUFBckI7QUFDRCxPQWJEO0FBbER5Qjs7QUFpRDNCLDhEQUErQjtBQUFBO0FBZTlCO0FBaEUwQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlFM0IsTUFBTW1DLFVBQVUsR0FBR2pFLFFBQVEsQ0FBQ3NELGdCQUFULENBQTBCLFFBQTFCLENBQW5COztBQWpFMkIsK0NBa0VWVyxVQWxFVTtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQWtFbEJoQixJQWxFa0I7QUFtRXpCQSxNQUFBQSxJQUFJLENBQUNqQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk4QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbkMsS0FBSyxHQUFHMEIsR0FBRyxDQUFDVSxVQUFKLENBQWVyQyxTQUEzQjtBQUNBLFlBQUlzQyxLQUFLLEdBQUdqQixVQUFVLENBQUNrQixTQUFYLENBQXFCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdkMsS0FBZjtBQUFBLFNBQXJCLENBQVo7QUFDQSxZQUFJd0MsUUFBUSxHQUFHcEIsVUFBVSxDQUFDaUIsS0FBRCxDQUF6QjtBQUNBLFlBQUlJLFlBQVksR0FBR3JCLFVBQVUsQ0FBQ3NCLE1BQVgsQ0FBa0JMLEtBQWxCLEVBQXlCLENBQXpCLENBQW5CO0FBQ0FyRCxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVKLFVBQWYsQ0FBM0M7QUFDQXBDLFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FDRSw0QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZUgsY0FBZixDQUZGO0FBSUEsZUFBT1gsY0FBYyxFQUFyQjtBQUNELE9BWkQ7QUFuRXlCOztBQWtFM0IsOERBQTZCO0FBQUE7QUFjNUI7QUFoRjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUYzQixNQUFNb0MsYUFBYSxHQUFHbEUsUUFBUSxDQUFDc0QsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQXRCOztBQWpGMkIsK0NBa0ZWWSxhQWxGVTtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQWtGbEJqQixJQWxGa0I7QUFtRnpCQSxNQUFBQSxJQUFJLENBQUNqQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk4QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbkMsS0FBSyxHQUFHMEIsR0FBRyxDQUFDVSxVQUFKLENBQWVyQyxTQUEzQjtBQUNBLFlBQUlzQyxLQUFLLEdBQUdoQixjQUFjLENBQUNpQixTQUFmLENBQXlCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdkMsS0FBZjtBQUFBLFNBQXpCLENBQVo7QUFDQSxZQUFJd0MsUUFBUSxHQUFHbkIsY0FBYyxDQUFDZ0IsS0FBRCxDQUE3QjtBQUNBLFlBQUlJLFlBQVksR0FBR3BCLGNBQWMsQ0FBQ3FCLE1BQWYsQ0FBc0JMLEtBQXRCLEVBQTZCLENBQTdCLENBQW5CO0FBQ0FyRCxRQUFBQSxZQUFZLENBQUN1QyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVKLFVBQWYsQ0FBM0M7QUFDQXBDLFFBQUFBLFlBQVksQ0FBQ3VDLE9BQWIsQ0FDRSw0QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZUgsY0FBZixDQUZGO0FBSUEsZUFBT1gsY0FBYyxFQUFyQjtBQUNELE9BWkQ7QUFuRnlCOztBQWtGM0IsOERBQWdDO0FBQUE7QUFjL0I7QUFoRzBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpRzVCLENBakdELEVBbUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2aEJBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsY0FBYyxzQ0FBc0Msc0JBQXNCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLHNCQUFzQixHQUFHLHFDQUFxQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLDhCQUE4QixtQkFBbUIsd0JBQXdCLEdBQUcseUNBQXlDLGtCQUFrQixpQkFBaUIsMkJBQTJCLGdCQUFnQiw4QkFBOEIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQixpQkFBaUIsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixlQUFlLHFCQUFxQix3QkFBd0IsOEJBQThCLG1CQUFtQixzQkFBc0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLGFBQWEsbUJBQW1CLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxXQUFXLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0IsbUJBQW1CLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQixzQkFBc0IsT0FBTyxtQkFBbUIsa0NBQWtDLEdBQUcsWUFBWSxrQkFBa0IsR0FBRyxxQ0FBcUMsb0JBQW9CLHNCQUFzQixnQkFBZ0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDhCQUE4QixtQkFBbUIscUJBQXFCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxlQUFlLGtCQUFrQixtQkFBbUIsR0FBRyw0Q0FBNEMsaUJBQWlCLGVBQWUsOEJBQThCLG1CQUFtQixxQkFBcUIsd0JBQXdCLHFDQUFxQyw4QkFBOEIsR0FBRyxjQUFjLGtCQUFrQixtQ0FBbUMsd0JBQXdCLG1CQUFtQixrQkFBa0IsR0FBRyxXQUFXLDhCQUE4Qix1QkFBdUIsa0JBQWtCLG1CQUFtQixvQkFBb0Isd0JBQXdCLHVCQUF1Qix3QkFBd0IsR0FBRyxjQUFjLHVCQUF1Qix3QkFBd0IscUJBQXFCLEdBQUcsdUJBQXVCLGdCQUFnQixtQkFBbUIsZ0JBQWdCLGdCQUFnQiwyQkFBMkIsNEJBQTRCLGdCQUFnQixHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxXQUFXLHNCQUFzQix1QkFBdUIsc0JBQXNCLHlCQUF5QixvQkFBb0IsMEJBQTBCLEdBQUcsNkJBQTZCLGdCQUFnQixvQkFBb0IsS0FBSyxlQUFlLHFCQUFxQixxQkFBcUIsb0JBQW9CLEtBQUssb0JBQW9CLG9CQUFvQiw2QkFBNkIsS0FBSyxzQkFBc0IsNEJBQTRCLEtBQUssR0FBRyxXQUFXLHFGQUFxRixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLCtCQUErQixjQUFj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TUFBTSxDQUFDdkIsU0FBUCxDQUFpQnFCLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0gsQ0FMRDtBQU9BLElBQU1FLE1BQU0sR0FBR3pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0F3RSxNQUFNLENBQUN6RCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFVO0FBQ3ZDSCxFQUFBQSxRQUFRLENBQUNNLFNBQVQsR0FBcUIsa0JBQXJCO0FBQ0gsQ0FGRDtBQUdBc0QsTUFBTSxDQUFDekQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNjLHlEQUFqQztBQUNBMkMsTUFBTSxDQUFDekQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVTtBQUN2Q3FELEVBQUFBLEtBQUssQ0FBQ25CLFNBQU4sQ0FBZ0JxQixNQUFoQixDQUF1QixRQUF2QjtBQUNBRCxFQUFBQSxNQUFNLENBQUNwQixTQUFQLENBQWlCcUIsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDdEIsU0FBUixDQUFrQnFCLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FFLEVBQUFBLE1BQU0sQ0FBQ3ZCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0gsQ0FMRCxHQWNBO0FBQ0E7QUFDQTtBQUNBLG9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9zY3JpcHRzL3Nob3dMaXN0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3NjcmlwdHMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vTGlzdCBpbm5lckhUTUxcbmNvbnN0IGhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2hcIik7XG5jb25zdCBsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvd1wiKTtcbmxldCBsb2NhbERhaWx5U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxEYWlseVN0b3JhZ2VcIik7XG5sZXQgbG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICBcImxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2VcIlxuKTtcbmxldCBsb2NhbFdlZWtseVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsV2Vla2x5U3RvcmFnZVwiKTtcbmxldCBsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICBcImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlXCJcbik7XG5sZXQgbG9jYWxNb250aGx5U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiKTtcbmxldCBsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgXCJsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2VcIlxuKTtcbmxldCBsb2NhbFllYXJseVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsWWVhcmx5U3RvcmFnZVwiKTtcbmxldCBsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICBcImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlXCJcbik7XG5cbi8vTmV3IGl0ZW1zXG5jb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb25cIik7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dEJveFwiKTtcblxuLy9Gb3JtXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWZvcm1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50T2JqZWN0KSB7XG4gIGV2ZW50T2JqZWN0LnByZXZlbnREZWZhdWx0KCk7XG59KTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChcbiAgICBxdWVzdGlvbi5pbm5lclRleHQgPT09IFwiV2hhdCBkbyB5b3UgbmVlZCB0byBkbyB0b2RheT9cIiB8fFxuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9PT0gXCJZb3VyIERhaWx5IExpc3RcIlxuICApIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGxldCBpdGVtID0gbmV3IEl0ZW0oaW5wdXQudmFsdWUpO1xuICAgICAgaXRlbS5hZGRUb0RhaWx5KCk7XG4gICAgICByZXR1cm4gc2hvd0RhaWx5TGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKHF1ZXN0aW9uLmlubmVyVGV4dCA9PT0gXCJZb3VyIFdlZWtseSBMaXN0XCIpIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGxldCBpdGVtID0gbmV3IEl0ZW0oaW5wdXQudmFsdWUpO1xuICAgICAgaXRlbS5hZGRUb1dlZWtseSgpO1xuICAgICAgcmV0dXJuIHNob3dXZWVrbHlMaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAocXVlc3Rpb24uaW5uZXJUZXh0ID09PSBcIllvdXIgTW9udGhseSBMaXN0XCIpIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGxldCBpdGVtID0gbmV3IEl0ZW0oaW5wdXQudmFsdWUpO1xuICAgICAgaXRlbS5hZGRUb01vbnRobHkoKTtcbiAgICAgIHJldHVybiBzaG93TW9udGhseUxpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIGlmIChxdWVzdGlvbi5pbm5lclRleHQgPT09IFwiWW91ciBZZWFybHkgTGlzdFwiKSB7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgIGl0ZW0uYWRkVG9ZZWFybHkoKTtcbiAgICAgIHJldHVybiBzaG93WWVhcmx5TGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59KTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm0ucmVzZXQoKTtcbn0pO1xuXG5cbi8vRGFpbHkgYXJyYXlzXG5sZXQgZGFpbHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbERhaWx5U3RvcmFnZSk7XG5pZiAobG9jYWxEYWlseVN0b3JhZ2UgPT0gbnVsbCkge1xuICBkYWlseUxpc3QgPSBbXTtcbn1cbmxldCBkYWlseUZpbmlzaGVkID0gSlNPTi5wYXJzZShsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlKTtcbmlmIChsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlID09IG51bGwpIHtcbiAgZGFpbHlGaW5pc2hlZCA9IFtdO1xufVxuXG4vL1dlZWtseSBhcnJheXNcbmxldCB3ZWVrbHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFdlZWtseVN0b3JhZ2UpO1xuaWYgKGxvY2FsV2Vla2x5U3RvcmFnZSA9PSBudWxsKSB7XG4gIHdlZWtseUxpc3QgPSBbXTtcbn1cbmxldCB3ZWVrbHlGaW5pc2hlZCA9IEpTT04ucGFyc2UobG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2UpO1xuaWYgKGxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlID09IG51bGwpIHtcbiAgd2Vla2x5RmluaXNoZWQgPSBbXTtcbn1cblxuLy9Nb250aGx5IGFycmF5c1xubGV0IG1vbnRobHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbE1vbnRobHlTdG9yYWdlKTtcbmlmIChsb2NhbE1vbnRobHlTdG9yYWdlID09IG51bGwpIHtcbiAgbW9udGhseUxpc3QgPSBbXTtcbn1cbmxldCBtb250aGx5RmluaXNoZWQgPSBKU09OLnBhcnNlKGxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZSk7XG5pZiAobG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlID09IG51bGwpIHtcbiAgbW9udGhseUZpbmlzaGVkID0gW107XG59XG5cbi8vWWVhcmx5IGFycmF5c1xubGV0IHllYXJseUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsWWVhcmx5U3RvcmFnZSk7XG5pZiAobG9jYWxZZWFybHlTdG9yYWdlID09IG51bGwpIHtcbiAgeWVhcmx5TGlzdCA9IFtdO1xufVxubGV0IHllYXJseUZpbmlzaGVkID0gSlNPTi5wYXJzZShsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZSk7XG5pZiAobG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2UgPT0gbnVsbCkge1xuICB5ZWFybHlGaW5pc2hlZCA9IFtdO1xufVxuXG4vL0NsYXNzZXNcbmNsYXNzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgfVxuICBhZGRUb0RhaWx5KCkge1xuICAgIGRhaWx5TGlzdC5wdXNoKGAke3RoaXMuaXRlbX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICB9XG4gIGFkZFRvV2Vla2x5KCkge1xuICAgIHdlZWtseUxpc3QucHVzaChgJHt0aGlzLml0ZW19YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICB9XG4gIGFkZFRvTW9udGhseSgpIHtcbiAgICBtb250aGx5TGlzdC5wdXNoKGAke3RoaXMuaXRlbX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsTW9udGhseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcbiAgfVxuICBhZGRUb1llYXJseSgpIHtcbiAgICB5ZWFybHlMaXN0LnB1c2goYCR7dGhpcy5pdGVtfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxZZWFybHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHllYXJseUxpc3QpKTtcbiAgfVxufVxuXG4vL0RhaWx5IGxpc3QgZnVuY3Rpb25cbmNvbnN0IHNob3dEYWlseUxpc3QgPSAoKSA9PiB7XG4gIGhpZ2guaW5uZXJIVE1MID0gXCJcIjtcbiAgbG93LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKGRhaWx5TGlzdCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgZGFpbHlMaXN0KSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdhd2Vzb21lLWljb25zJyk7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9IGA8cD48aSBjbGFzcz1cImZhcyBmYS1yZWN5Y2xlIGljb24gcmVjeWNsZVwiPjwvaT48L3A+PHA+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gdHJhc2hcIj48L2k+PC9wPmA7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgaGlnaC5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhaWx5RmluaXNoZWQpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGRhaWx5RmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2F3ZXNvbWUtaWNvbnMnKTtcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID1cbiAgICAgICAgJzxwPjxpIGNsYXNzPVwiZmFzIGZhLWxldmVsLXVwLWFsdCBpY29uIHVwZ3JhZGVcIj48L2k+PC9wPjxwPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHJlY3ljbGVkLXRyYXNoXCI+PC9pPjwvcD4nO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGxvdy5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgaWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBkYWlseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IGRhaWx5TGlzdFtmb3VuZF07XG4gICAgICBkYWlseUZpbmlzaGVkLnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IGRhaWx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbERhaWx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGFpbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd0RhaWx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHVwZ3JhZGVJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXBncmFkZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB1cGdyYWRlSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBkYWlseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBkYWlseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGRhaWx5TGlzdC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCB1cGdyYWRlSXRlbSA9IGRhaWx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxEYWlseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoZGFpbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGRhaWx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dEYWlseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB0cmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB0cmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gZGFpbHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBkYWlseUxpc3RbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IGRhaWx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbERhaWx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGFpbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd0RhaWx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGxvd1RyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVkLXRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGxvd1RyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBkYWlseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBkYWlseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBkYWlseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShkYWlseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93RGFpbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vV2Vla2x5IGxpc3QgZnVuY3Rpb25cbmNvbnN0IHNob3dXZWVrbHlMaXN0ID0gKCkgPT4ge1xuICBoaWdoLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvdy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmICh3ZWVrbHlMaXN0KSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB3ZWVrbHlMaXN0KSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdhd2Vzb21lLWljb25zJyk7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9IGA8cD48aSBjbGFzcz1cImZhcyBmYS1yZWN5Y2xlIGljb24gcmVjeWNsZVwiPjwvaT48L3A+PHA+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gdHJhc2hcIj48L2k+PC9wPmA7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgaGlnaC5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgaWYgKHdlZWtseUZpbmlzaGVkKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB3ZWVrbHlGaW5pc2hlZCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYXdlc29tZS1pY29ucycpO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPVxuICAgICAgICAnPHA+PGkgY2xhc3M9XCJmYXMgZmEtbGV2ZWwtdXAtYWx0IGljb24gdXBncmFkZVwiPjwvaT48L3A+PHA+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gcmVjeWNsZWQtdHJhc2hcIj48L2k+PC9wPic7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgbG93LmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBpY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHdlZWtseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHdlZWtseUxpc3RbZm91bmRdO1xuICAgICAgd2Vla2x5RmluaXNoZWQucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gd2Vla2x5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkod2Vla2x5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dXZWVrbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdXBncmFkZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGdyYWRlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHVwZ3JhZGVJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHdlZWtseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB3ZWVrbHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICB3ZWVrbHlMaXN0LnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHVwZ3JhZGVJdGVtID0gd2Vla2x5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxXZWVrbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHdlZWtseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93V2Vla2x5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHRyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHRyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB3ZWVrbHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB3ZWVrbHlMaXN0W2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB3ZWVrbHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsV2Vla2x5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh3ZWVrbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1dlZWtseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBsb3dUcmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlZC10cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBsb3dUcmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gd2Vla2x5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHdlZWtseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB3ZWVrbHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkod2Vla2x5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dXZWVrbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vTW9udGhseSBsaXN0IGZ1bmN0aW9uXG5jb25zdCBzaG93TW9udGhseUxpc3QgPSAoKSA9PiB7XG4gIGhpZ2guaW5uZXJIVE1MID0gXCJcIjtcbiAgbG93LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKG1vbnRobHlMaXN0KSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBtb250aGx5TGlzdCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYXdlc29tZS1pY29ucycpO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPSBgPHA+PGkgY2xhc3M9XCJmYXMgZmEtcmVjeWNsZSBpY29uIHJlY3ljbGVcIj48L2k+PC9wPjxwPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHRyYXNoXCI+PC9pPjwvcD5gO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGhpZ2guYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGlmIChtb250aGx5RmluaXNoZWQpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIG1vbnRobHlGaW5pc2hlZCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYXdlc29tZS1pY29ucycpO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPVxuICAgICAgICAnPHA+PGkgY2xhc3M9XCJmYXMgZmEtbGV2ZWwtdXAtYWx0IGljb24gdXBncmFkZVwiPjwvaT48L3A+PHA+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gcmVjeWNsZWQtdHJhc2hcIj48L2k+PHA+JztcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBsb3cuYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gbW9udGhseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IG1vbnRobHlMaXN0W2ZvdW5kXTtcbiAgICAgIG1vbnRobHlGaW5pc2hlZC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBtb250aGx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE1vbnRobHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkobW9udGhseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93TW9udGhseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cGdyYWRlSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVwZ3JhZGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgdXBncmFkZUljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gbW9udGhseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBtb250aGx5RmluaXNoZWRbZm91bmRdO1xuICAgICAgbW9udGhseUxpc3QucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgdXBncmFkZUl0ZW0gPSBtb250aGx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG1vbnRobHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgdHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IG1vbnRobHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBtb250aGx5TGlzdFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gbW9udGhseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG1vbnRobHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgbG93VHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZWQtdHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgbG93VHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IG1vbnRobHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gbW9udGhseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBtb250aGx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG1vbnRobHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vWWVhcmx5IGxpc3QgZnVuY3Rpb25cbmNvbnN0IHNob3dZZWFybHlMaXN0ID0gKCkgPT4ge1xuICBoaWdoLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvdy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmICh5ZWFybHlMaXN0KSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB5ZWFybHlMaXN0KSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdhd2Vzb21lLWljb25zJyk7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9IGA8cD48aSBjbGFzcz1cImZhcyBmYS1yZWN5Y2xlIGljb24gcmVjeWNsZVwiPjwvaT48L3A+PHA+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gdHJhc2hcIj48L2k+PC9wPmA7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgaGlnaC5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgaWYgKHllYXJseUZpbmlzaGVkKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB5ZWFybHlGaW5pc2hlZCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYXdlc29tZS1pY29ucycpO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPVxuICAgICAgICAnPHA+PGkgY2xhc3M9XCJmYXMgZmEtbGV2ZWwtdXAtYWx0IGljb24gdXBncmFkZVwiPjwvaT48L3A+PHA+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gcmVjeWNsZWQtdHJhc2hcIj48L2k+PC9wPic7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgbG93LmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBpY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHllYXJseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHllYXJseUxpc3RbZm91bmRdO1xuICAgICAgeWVhcmx5RmluaXNoZWQucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0geWVhcmx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoeWVhcmx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeWVhcmx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dZZWFybHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdXBncmFkZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGdyYWRlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHVwZ3JhZGVJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHllYXJseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB5ZWFybHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICB5ZWFybHlMaXN0LnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHVwZ3JhZGVJdGVtID0geWVhcmx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxZZWFybHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHllYXJseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHllYXJseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93WWVhcmx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHRyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHRyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB5ZWFybHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB5ZWFybHlMaXN0W2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB5ZWFybHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsWWVhcmx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh5ZWFybHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh5ZWFybHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1llYXJseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBsb3dUcmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlZC10cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBsb3dUcmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0geWVhcmx5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHllYXJseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB5ZWFybHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoeWVhcmx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeWVhcmx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dZZWFybHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vRXhwb3J0c1xuZXhwb3J0IHsgc2hvd0RhaWx5TGlzdCwgc2hvd1dlZWtseUxpc3QsIHNob3dNb250aGx5TGlzdCwgc2hvd1llYXJseUxpc3QgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyIFNldHRpbmdzICovXFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mjc7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIE1haW4gQ29udGVudCBTZXR0aW5ncyAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZmZmM7XFxuICBjb2xvcjogI2ZmOWYxYztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjAlO1xcbiAgLyogZmxleC1ncm93OiAxOyAqL1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgY29sb3I6ICNmZGZmZmM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNldHRpbmdzIHAge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MgcDpob3ZlciB7XFxuICBjb2xvcjogIzAxMTYyNztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogIzAxMTYyNztcXG59XFxuXFxuLnF1ZXN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5saXN0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmOWYxYztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhpZ2gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmxvdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IC4ycmVtO1xcbiAgXFxufVxcblxcbi5sb3cgLm5ld0l0ZW0ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBGb290ZXIgU2V0dGluZ3MgKi9cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjI3O1xcbiAgY29sb3I6ICNmZGZmZmM7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uc29jaWFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zb2NpYWwgcCB7XFxuICBtYXJnaW46IC4ycmVtO1xcbiAgcGFkZGluZzogLjJyZW07XFxufVxcblxcbi8qIEV4dHJhIFN0eWxpbmcgU2V0dGluZ3MgKi9cXG5cXG4ubGlzdHMge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZmZmM7XFxuICBjb2xvcjogIzZiNzA1YztcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4ICNlNzFkMzY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDExNjI3O1xcbn1cXG5cXG4ubmV3SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjNmI3MDVjO1xcbiAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuLnBsdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyLjJyZW07XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogLjVyZW07XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGV4dEJveCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWluLXdpZHRoOiAxMnJlbTtcXG59XFxuXFxuLmJvcmRlckJvdDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDNyZW0gYXV0byAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAuMjtcXG59XFxuXFxuLmxpc3QtaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IC4zcmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcXG4gIC5saW5rLXRleHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLnNldHRpbmdzIHtcXG4gICAgd2lkdGg6IDE1JVxcbiAgfVxcbiAgLnNldHRpbmdzLXRpdGxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5hd2Vzb21lLWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5hd2Vzb21lLWljb25zIHAge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgU2V0dGluZ3MgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYyNztcXG4gIGNvbG9yOiAjZmRmZmZjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50IFNldHRpbmdzICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZmYztcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5zZXR0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMCU7XFxuICAvKiBmbGV4LWdyb3c6IDE7ICovXFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2V0dGluZ3MgcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZXR0aW5ncyBwOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDExNjI3O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDExNjI3O1xcbn1cXG5cXG4ucXVlc3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGlnaCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4ubG93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLjJyZW07XFxuICBcXG59XFxuXFxuLmxvdyAubmV3SXRlbSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEZvb3RlciBTZXR0aW5ncyAqL1xcblxcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mjc7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5zb2NpYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNvY2lhbCBwIHtcXG4gIG1hcmdpbjogLjJyZW07XFxuICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLyogRXh0cmEgU3R5bGluZyBTZXR0aW5ncyAqL1xcblxcbi5saXN0cyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZmYztcXG4gIGNvbG9yOiAjNmI3MDVjO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDVweCA1cHggI2U3MWQzNjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTE2Mjc7XFxufVxcblxcbi5uZXdJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM2YjcwNWM7XFxuICBtYXJnaW46IC41cmVtO1xcbn1cXG5cXG4ucGx1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIuMnJlbTtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50ZXh0Qm94IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBtaW4td2lkdGg6IDEycmVtO1xcbn1cXG5cXG4uYm9yZGVyQm90OjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogM3JlbSBhdXRvIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IC4yO1xcbn1cXG5cXG4ubGlzdC1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogLjNyZW07XFxufVxcblxcbi5pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe1xcbiAgLmxpbmstdGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuc2V0dGluZ3Mge1xcbiAgICB3aWR0aDogMTUlXFxuICB9XFxuICAuc2V0dGluZ3MtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmF3ZXNvbWUtaWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmF3ZXNvbWUtaWNvbnMgcCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHtzaG93RGFpbHlMaXN0fSBmcm9tIFwiLi9zaG93TGlzdHMuanNcIjtcbmltcG9ydCB7c2hvd1dlZWtseUxpc3R9IGZyb20gXCIuL3Nob3dMaXN0cy5qc1wiO1xuaW1wb3J0IHtzaG93TW9udGhseUxpc3R9IGZyb20gXCIuL3Nob3dMaXN0cy5qc1wiO1xuaW1wb3J0IHtzaG93WWVhcmx5TGlzdH0gZnJvbSBcIi4vc2hvd0xpc3RzLmpzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2hvd0RhaWx5TGlzdCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG4gICAgZGFpbHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn0pO1xuXG5jb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb25cIik7XG5cbi8vTGlzdHNcbmNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhaWx5Jyk7XG5kYWlseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgRGFpbHkgTGlzdCdcbn0pO1xuZGFpbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RGFpbHlMaXN0KTtcbmRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBkYWlseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIHdlZWtseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIG1vbnRobHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB5ZWFybHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbn0pO1xuXG5jb25zdCB3ZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2Vla2x5Jyk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9ICdZb3VyIFdlZWtseSBMaXN0J1xufSk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93V2Vla2x5TGlzdCk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGRhaWx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgd2Vla2x5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgbW9udGhseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIHllYXJseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxufSk7XG5cbmNvbnN0IG1vbnRobHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9udGhseScpO1xubW9udGhseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgTW9udGhseSBMaXN0J1xufSk7XG5tb250aGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vbnRobHlMaXN0KTtcbm1vbnRobHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGRhaWx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgd2Vla2x5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgbW9udGhseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIHllYXJseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxufSk7XG5cbmNvbnN0IHllYXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5ZWFybHknKTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgWWVhcmx5IExpc3QnXG59KTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dZZWFybHlMaXN0KTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgZGFpbHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB3ZWVrbHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICBtb250aGx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgeWVhcmx5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG59KTtcblxuXG5cblxuXG5cblxuXG4vLyAvL1Rlc3QgQnVpbGRcbi8vIGltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuLy8gY29uc29sZS5sb2coXCJJJ20gaGVyZSFcIik7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZChjb21wb25lbnQoKSlcbiJdLCJuYW1lcyI6WyJoaWdoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG93IiwibG9jYWxEYWlseVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZSIsImxvY2FsV2Vla2x5U3RvcmFnZSIsImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlIiwibG9jYWxNb250aGx5U3RvcmFnZSIsImxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZSIsImxvY2FsWWVhcmx5U3RvcmFnZSIsImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlIiwicXVlc3Rpb24iLCJpbnB1dCIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRPYmplY3QiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVyVGV4dCIsInZhbHVlIiwiaXRlbSIsIkl0ZW0iLCJhZGRUb0RhaWx5Iiwic2hvd0RhaWx5TGlzdCIsImFkZFRvV2Vla2x5Iiwic2hvd1dlZWtseUxpc3QiLCJhZGRUb01vbnRobHkiLCJzaG93TW9udGhseUxpc3QiLCJhZGRUb1llYXJseSIsInNob3dZZWFybHlMaXN0IiwicmVzZXQiLCJkYWlseUxpc3QiLCJKU09OIiwicGFyc2UiLCJkYWlseUZpbmlzaGVkIiwid2Vla2x5TGlzdCIsIndlZWtseUZpbmlzaGVkIiwibW9udGhseUxpc3QiLCJtb250aGx5RmluaXNoZWQiLCJ5ZWFybHlMaXN0IiwieWVhcmx5RmluaXNoZWQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImlubmVySFRNTCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJwIiwiaWNvbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwiZm91bmQiLCJmaW5kSW5kZXgiLCJlbCIsInRoaXNJdGVtIiwicmVjeWNsZWRJdGVtIiwic3BsaWNlIiwidXBncmFkZUljb25zIiwidXBncmFkZUl0ZW0iLCJ0cmFzaEljb25zIiwibG93VHJhc2hJY29ucyIsInN0eWxlcyIsIndpbmRvdyIsImRhaWx5Iiwid2Vla2x5IiwicmVtb3ZlIiwibW9udGhseSIsInllYXJseSJdLCJzb3VyY2VSb290IjoiIn0=