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

        var _input = document.createElement("div");

        _input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
        p.innerText = item;
        icon.innerHTML = "<i class=\"fas fa-recycle icon recycle\"></i><i class=\"far fa-trash-alt icon trash\"></i>";
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

        var _input2 = document.createElement("div");

        _input2.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
        _p.innerText = _item4;
        _icon.innerHTML = '<i class="fas fa-level-up-alt icon upgrade"></i><i class="far fa-trash-alt icon recycled-trash"></i>';

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

        var _input3 = document.createElement("div");

        _input3.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
        p.innerText = item;
        icon.innerHTML = "<i class=\"fas fa-recycle icon recycle\"></i><i class=\"far fa-trash-alt icon trash\"></i>";
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

        var _input4 = document.createElement("div");

        _input4.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
        _p2.innerText = _item5;
        _icon2.innerHTML = '<i class="fas fa-level-up-alt icon upgrade"></i><i class="far fa-trash-alt icon recycled-trash"></i>';

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

        var _input5 = document.createElement("div");

        _input5.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
        p.innerText = item;
        icon.innerHTML = "<i class=\"fas fa-recycle icon recycle\"></i><i class=\"far fa-trash-alt icon trash\"></i>";
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

        var _input6 = document.createElement("div");

        _input6.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
        _p3.innerText = _item6;
        _icon3.innerHTML = '<i class="fas fa-level-up-alt icon upgrade"></i><i class="far fa-trash-alt icon recycled-trash"></i>';

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

        var _input7 = document.createElement("div");

        _input7.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
        p.innerText = item;
        icon.innerHTML = "<i class=\"fas fa-recycle icon recycle\"></i><i class=\"far fa-trash-alt icon trash\"></i>";
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

        var _input8 = document.createElement("div");

        _input8.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
        _p4.innerText = _item7;
        _icon4.innerHTML = '<i class="fas fa-level-up-alt icon upgrade"></i><i class="far fa-trash-alt icon recycled-trash"></i>';

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n}\n\n/* Header Settings */\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 4rem;\n  background-color: #011627;\n  color: #fdfffc;\n  font-weight: bolder;\n}\n\n/* Main Content Settings */\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  width: 100%;\n  background-color: #fdfffc;\n  color: #ff9f1c;\n}\n\n.container {\n  display: flex;\n  flex-grow: 1;\n}\n\n.settings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 20%;\n  /* flex-grow: 1; */\n  font-size: 1.2rem;\n  background-color: #2ec4b6;\n  color: #fdfffc;\n  font-weight: bold;\n}\n\n.settings p {\n  cursor: pointer;\n}\n\n.settings p:hover {\n  color: #ff9f1c;\n}\n\n.active {\n  color: #011627;\n}\n\n.question {\n  margin-bottom: 3rem;\n}\n\n.list {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #ff9f1c;\n  text-align: center;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\n.high {\n  width: 100%;\n  height: auto;\n  margin-top: .5rem;\n}\n\n.low {\n  width: 100%;\n  height: auto;\n  margin-top: .2rem;\n  text-decoration: line-through;\n}\n\n.input {\n  display: flex;\n}\n\n/* Footer Settings */\n\nfooter {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #011627;\n  color: #fdfffc;\n  margin-top: auto;\n}\n\n.social {\n  display: flex;\n}\n\n.social p {\n  margin: .2rem;\n  padding: .2rem;\n}\n\n/* Extra Styling Settings */\n\n.lists {\n  margin: auto;\n  width: 70%;\n  background-color: #fdfffc;\n  color: #6b705c;\n  min-height: 50vh;\n  border-radius: 10px;\n  box-shadow: 10px 5px 5px #e71d36;\n  border: 1px solid #011627;\n}\n\n.newItem {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #6b705c;\n  margin: .5rem;\n}\n\n.plus {\n  background-color: #2ec4b6;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  cursor: pointer;\n  margin-right: .5rem;\n  margin-left: .5rem;\n  margin-bottom: 1rem;\n}\n\n.textBox {\n  border-radius: 5px;\n  margin-bottom: 1rem;\n}\n\n.borderBot::after {\n  content: '';\n  display: block;\n  width: 4rem;\n  height: 1px;\n  margin: 3rem auto 1rem;\n  background-color: black;\n  opacity: .2;\n}\n\n.icon {\n  margin-left: 2rem;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,iCAAiC;EACjC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;AACnB;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,mBAAmB;AACrB;;AAEA,0BAA0B;;AAE1B;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA,oBAAoB;;AAEpB;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA,2BAA2B;;AAE3B;EACE,YAAY;EACZ,UAAU;EACV,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n}\n\n/* Header Settings */\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 4rem;\n  background-color: #011627;\n  color: #fdfffc;\n  font-weight: bolder;\n}\n\n/* Main Content Settings */\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  width: 100%;\n  background-color: #fdfffc;\n  color: #ff9f1c;\n}\n\n.container {\n  display: flex;\n  flex-grow: 1;\n}\n\n.settings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 20%;\n  /* flex-grow: 1; */\n  font-size: 1.2rem;\n  background-color: #2ec4b6;\n  color: #fdfffc;\n  font-weight: bold;\n}\n\n.settings p {\n  cursor: pointer;\n}\n\n.settings p:hover {\n  color: #ff9f1c;\n}\n\n.active {\n  color: #011627;\n}\n\n.question {\n  margin-bottom: 3rem;\n}\n\n.list {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #ff9f1c;\n  text-align: center;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\n.high {\n  width: 100%;\n  height: auto;\n  margin-top: .5rem;\n}\n\n.low {\n  width: 100%;\n  height: auto;\n  margin-top: .2rem;\n  text-decoration: line-through;\n}\n\n.input {\n  display: flex;\n}\n\n/* Footer Settings */\n\nfooter {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #011627;\n  color: #fdfffc;\n  margin-top: auto;\n}\n\n.social {\n  display: flex;\n}\n\n.social p {\n  margin: .2rem;\n  padding: .2rem;\n}\n\n/* Extra Styling Settings */\n\n.lists {\n  margin: auto;\n  width: 70%;\n  background-color: #fdfffc;\n  color: #6b705c;\n  min-height: 50vh;\n  border-radius: 10px;\n  box-shadow: 10px 5px 5px #e71d36;\n  border: 1px solid #011627;\n}\n\n.newItem {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #6b705c;\n  margin: .5rem;\n}\n\n.plus {\n  background-color: #2ec4b6;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  cursor: pointer;\n  margin-right: .5rem;\n  margin-left: .5rem;\n  margin-bottom: 1rem;\n}\n\n.textBox {\n  border-radius: 5px;\n  margin-bottom: 1rem;\n}\n\n.borderBot::after {\n  content: '';\n  display: block;\n  width: 4rem;\n  height: 1px;\n  margin: 3rem auto 1rem;\n  background-color: black;\n  opacity: .2;\n}\n\n.icon {\n  margin-left: 2rem;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
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
}); //Lists

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41Nzc2YWMyY2U1ODE0M2QxYzBlZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLElBQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQSxJQUFJRSxpQkFBaUIsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLG1CQUFyQixDQUF4QjtBQUNBLElBQUlDLHlCQUF5QixHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FDOUIsMkJBRDhCLENBQWhDO0FBR0EsSUFBSUUsa0JBQWtCLEdBQUdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixvQkFBckIsQ0FBekI7QUFDQSxJQUFJRywwQkFBMEIsR0FBR0osWUFBWSxDQUFDQyxPQUFiLENBQy9CLDRCQUQrQixDQUFqQztBQUdBLElBQUlJLG1CQUFtQixHQUFHTCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIscUJBQXJCLENBQTFCO0FBQ0EsSUFBSUssMkJBQTJCLEdBQUdOLFlBQVksQ0FBQ0MsT0FBYixDQUNoQyw2QkFEZ0MsQ0FBbEM7QUFHQSxJQUFJTSxrQkFBa0IsR0FBR1AsWUFBWSxDQUFDQyxPQUFiLENBQXFCLG9CQUFyQixDQUF6QjtBQUNBLElBQUlPLDBCQUEwQixHQUFHUixZQUFZLENBQUNDLE9BQWIsQ0FDL0IsNEJBRCtCLENBQWpDLEVBSUE7O0FBQ0EsSUFBTVEsUUFBUSxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7QUFDQSxJQUFNYSxLQUFLLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkLEVBRUE7O0FBQ0EsSUFBTWMsSUFBSSxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtBQUNBYyxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQVVDLFdBQVYsRUFBdUI7QUFDckRBLEVBQUFBLFdBQVcsQ0FBQ0MsY0FBWjtBQUNELENBRkQ7QUFHQUgsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxZQUFZO0FBQzFDLE1BQ0VILFFBQVEsQ0FBQ00sU0FBVCxLQUF1QiwrQkFBdkIsSUFDQU4sUUFBUSxDQUFDTSxTQUFULEtBQXVCLGlCQUZ6QixFQUdFO0FBQ0EsUUFBSUwsS0FBSyxDQUFDTSxLQUFOLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNSLEtBQUssQ0FBQ00sS0FBZixDQUFYO0FBQ0FDLE1BQUFBLElBQUksQ0FBQ0UsVUFBTDtBQUNBLGFBQU9DLGFBQWEsRUFBcEI7QUFDRCxLQUpELE1BSU87QUFDTDtBQUNEO0FBQ0YsR0FYRCxNQVdPLElBQUlYLFFBQVEsQ0FBQ00sU0FBVCxLQUF1QixrQkFBM0IsRUFBK0M7QUFDcEQsUUFBSUwsS0FBSyxDQUFDTSxLQUFOLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQUlDLEtBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNSLEtBQUssQ0FBQ00sS0FBZixDQUFYOztBQUNBQyxNQUFBQSxLQUFJLENBQUNJLFdBQUw7O0FBQ0EsYUFBT0MsY0FBYyxFQUFyQjtBQUNELEtBSkQsTUFJTztBQUNMO0FBQ0Q7QUFDRixHQVJNLE1BUUEsSUFBSWIsUUFBUSxDQUFDTSxTQUFULEtBQXVCLG1CQUEzQixFQUFnRDtBQUNyRCxRQUFJTCxLQUFLLENBQUNNLEtBQU4sS0FBZ0IsRUFBcEIsRUFBd0I7QUFDdEIsVUFBSUMsTUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU1IsS0FBSyxDQUFDTSxLQUFmLENBQVg7O0FBQ0FDLE1BQUFBLE1BQUksQ0FBQ00sWUFBTDs7QUFDQSxhQUFPQyxlQUFlLEVBQXRCO0FBQ0QsS0FKRCxNQUlPO0FBQ0w7QUFDRDtBQUNGLEdBUk0sTUFRQSxJQUFJZixRQUFRLENBQUNNLFNBQVQsS0FBdUIsa0JBQTNCLEVBQStDO0FBQ3BELFFBQUlMLEtBQUssQ0FBQ00sS0FBTixLQUFnQixFQUFwQixFQUF3QjtBQUN0QixVQUFJQyxNQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTUixLQUFLLENBQUNNLEtBQWYsQ0FBWDs7QUFDQUMsTUFBQUEsTUFBSSxDQUFDUSxXQUFMOztBQUNBLGFBQU9DLGNBQWMsRUFBckI7QUFDRCxLQUpELE1BSU87QUFDTDtBQUNEO0FBQ0Y7QUFDRixDQXJDRCxHQXVDQTs7QUFDQSxJQUFJQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXOUIsaUJBQVgsQ0FBaEI7O0FBQ0EsSUFBSUEsaUJBQWlCLElBQUksSUFBekIsRUFBK0I7QUFDN0I0QixFQUFBQSxTQUFTLEdBQUcsRUFBWjtBQUNEOztBQUNELElBQUlHLGFBQWEsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVczQix5QkFBWCxDQUFwQjs7QUFDQSxJQUFJQSx5QkFBeUIsSUFBSSxJQUFqQyxFQUF1QztBQUNyQzRCLEVBQUFBLGFBQWEsR0FBRyxFQUFoQjtBQUNELEVBRUQ7OztBQUNBLElBQUlDLFVBQVUsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVcxQixrQkFBWCxDQUFqQjs7QUFDQSxJQUFJQSxrQkFBa0IsSUFBSSxJQUExQixFQUFnQztBQUM5QjRCLEVBQUFBLFVBQVUsR0FBRyxFQUFiO0FBQ0Q7O0FBQ0QsSUFBSUMsY0FBYyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV3pCLDBCQUFYLENBQXJCOztBQUNBLElBQUlBLDBCQUEwQixJQUFJLElBQWxDLEVBQXdDO0FBQ3RDNEIsRUFBQUEsY0FBYyxHQUFHLEVBQWpCO0FBQ0QsRUFFRDs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHTCxJQUFJLENBQUNDLEtBQUwsQ0FBV3hCLG1CQUFYLENBQWxCOztBQUNBLElBQUlBLG1CQUFtQixJQUFJLElBQTNCLEVBQWlDO0FBQy9CNEIsRUFBQUEsV0FBVyxHQUFHLEVBQWQ7QUFDRDs7QUFDRCxJQUFJQyxlQUFlLEdBQUdOLElBQUksQ0FBQ0MsS0FBTCxDQUFXdkIsMkJBQVgsQ0FBdEI7O0FBQ0EsSUFBSUEsMkJBQTJCLElBQUksSUFBbkMsRUFBeUM7QUFDdkM0QixFQUFBQSxlQUFlLEdBQUcsRUFBbEI7QUFDRCxFQUVEOzs7QUFDQSxJQUFJQyxVQUFVLEdBQUdQLElBQUksQ0FBQ0MsS0FBTCxDQUFXdEIsa0JBQVgsQ0FBakI7O0FBQ0EsSUFBSUEsa0JBQWtCLElBQUksSUFBMUIsRUFBZ0M7QUFDOUI0QixFQUFBQSxVQUFVLEdBQUcsRUFBYjtBQUNEOztBQUNELElBQUlDLGNBQWMsR0FBR1IsSUFBSSxDQUFDQyxLQUFMLENBQVdyQiwwQkFBWCxDQUFyQjs7QUFDQSxJQUFJQSwwQkFBMEIsSUFBSSxJQUFsQyxFQUF3QztBQUN0QzRCLEVBQUFBLGNBQWMsR0FBRyxFQUFqQjtBQUNELEVBRUQ7OztJQUNNbEI7QUFDSixnQkFBWUQsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztXQUNELHNCQUFhO0FBQ1hVLE1BQUFBLFNBQVMsQ0FBQ1UsSUFBVixXQUFrQixLQUFLcEIsSUFBdkI7QUFDQWpCLE1BQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIsbUJBQXJCLEVBQTBDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVosU0FBZixDQUExQztBQUNEOzs7V0FDRCx1QkFBYztBQUNaSSxNQUFBQSxVQUFVLENBQUNNLElBQVgsV0FBbUIsS0FBS3BCLElBQXhCO0FBQ0FqQixNQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVSLFVBQWYsQ0FBM0M7QUFDRDs7O1dBQ0Qsd0JBQWU7QUFDYkUsTUFBQUEsV0FBVyxDQUFDSSxJQUFaLFdBQW9CLEtBQUtwQixJQUF6QjtBQUNBakIsTUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUFxQixxQkFBckIsRUFBNENWLElBQUksQ0FBQ1csU0FBTCxDQUFlTixXQUFmLENBQTVDO0FBQ0Q7OztXQUNELHVCQUFjO0FBQ1pFLE1BQUFBLFVBQVUsQ0FBQ0UsSUFBWCxXQUFtQixLQUFLcEIsSUFBeEI7QUFDQWpCLE1BQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDVixJQUFJLENBQUNXLFNBQUwsQ0FBZUosVUFBZixDQUEzQztBQUNEOzs7O0tBR0g7OztBQUNBLElBQU1mLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQnpCLEVBQUFBLElBQUksQ0FBQzZDLFNBQUwsR0FBaUIsRUFBakI7QUFDQTFDLEVBQUFBLEdBQUcsQ0FBQzBDLFNBQUosR0FBZ0IsRUFBaEI7O0FBRUEsTUFBSWIsU0FBSixFQUFlO0FBQUEsK0NBQ0lBLFNBREo7QUFBQTs7QUFBQTtBQUNiLDBEQUE0QjtBQUFBLFlBQW5CVixJQUFtQjtBQUMxQixZQUFNd0IsR0FBRyxHQUFHN0MsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHL0MsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixHQUF2QixDQUFWO0FBQ0EsWUFBTUUsSUFBSSxHQUFHaEQsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixHQUF2QixDQUFiOztBQUNBLFlBQU1oQyxNQUFLLEdBQUdkLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDs7QUFDQWhDLFFBQUFBLE1BQUssQ0FBQzhCLFNBQU4sR0FBa0Isc0RBQWxCO0FBQ0FHLFFBQUFBLENBQUMsQ0FBQzVCLFNBQUYsR0FBY0UsSUFBZDtBQUNBMkIsUUFBQUEsSUFBSSxDQUFDSixTQUFMO0FBQ0FDLFFBQUFBLEdBQUcsQ0FBQ0ksTUFBSixDQUFXRixDQUFYLEVBQWNDLElBQWQ7QUFDQUgsUUFBQUEsR0FBRyxDQUFDSyxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsU0FBbEI7QUFDQXBELFFBQUFBLElBQUksQ0FBQ2tELE1BQUwsQ0FBWUosR0FBWjtBQUNEO0FBWlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFkOztBQUNELE1BQUlYLGFBQUosRUFBbUI7QUFBQSxnREFDQUEsYUFEQTtBQUFBOztBQUFBO0FBQ2pCLDZEQUFnQztBQUFBLFlBQXZCYixNQUF1Qjs7QUFDOUIsWUFBTXdCLElBQUcsR0FBRzdDLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQSxZQUFNQyxFQUFDLEdBQUcvQyxRQUFRLENBQUM4QyxhQUFULENBQXVCLEdBQXZCLENBQVY7O0FBQ0EsWUFBTUUsS0FBSSxHQUFHaEQsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixHQUF2QixDQUFiOztBQUNBLFlBQU1oQyxPQUFLLEdBQUdkLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDs7QUFDQWhDLFFBQUFBLE9BQUssQ0FBQzhCLFNBQU4sR0FBa0Isc0RBQWxCO0FBQ0FHLFFBQUFBLEVBQUMsQ0FBQzVCLFNBQUYsR0FBY0UsTUFBZDtBQUNBMkIsUUFBQUEsS0FBSSxDQUFDSixTQUFMLEdBQ0Usc0dBREY7O0FBRUFDLFFBQUFBLElBQUcsQ0FBQ0ksTUFBSixDQUFXRixFQUFYLEVBQWNDLEtBQWQ7O0FBQ0FILFFBQUFBLElBQUcsQ0FBQ0ssU0FBSixDQUFjQyxHQUFkLENBQWtCLFNBQWxCOztBQUNBakQsUUFBQUEsR0FBRyxDQUFDK0MsTUFBSixDQUFXSixJQUFYO0FBQ0Q7QUFiZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNsQjs7QUFDRCxNQUFNTyxLQUFLLEdBQUdwRCxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixVQUExQixDQUFkOztBQWpDMEIsOENBa0NURCxLQWxDUztBQUFBOztBQUFBO0FBQUE7QUFBQSxVQWtDakJKLElBbENpQjtBQW1DeEJBLE1BQUFBLElBQUksQ0FBQ2hDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSTZCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUlsQyxLQUFLLEdBQUd5QixHQUFHLENBQUNVLFVBQUosQ0FBZXBDLFNBQTNCO0FBQ0EsWUFBSXFDLEtBQUssR0FBR3pCLFNBQVMsQ0FBQzBCLFNBQVYsQ0FBb0IsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt0QyxLQUFmO0FBQUEsU0FBcEIsQ0FBWjtBQUNBLFlBQUl1QyxRQUFRLEdBQUc1QixTQUFTLENBQUN5QixLQUFELENBQXhCO0FBQ0F0QixRQUFBQSxhQUFhLENBQUNPLElBQWQsQ0FBbUJrQixRQUFuQjtBQUNBLFlBQUlDLFlBQVksR0FBRzdCLFNBQVMsQ0FBQzhCLE1BQVYsQ0FBaUJMLEtBQWpCLEVBQXdCLENBQXhCLENBQW5CO0FBQ0FwRCxRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQXFCLG1CQUFyQixFQUEwQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVaLFNBQWYsQ0FBMUM7QUFDQTNCLFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FDRSwyQkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZVQsYUFBZixDQUZGO0FBSUEsZUFBT1YsYUFBYSxFQUFwQjtBQUNELE9BYkQ7QUFuQ3dCOztBQWtDMUIsMkRBQXdCO0FBQUE7QUFldkI7QUFqRHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0QxQixNQUFNc0MsWUFBWSxHQUFHOUQsUUFBUSxDQUFDcUQsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBckI7O0FBbEQwQiw4Q0FtRFRTLFlBbkRTO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBbURqQmQsSUFuRGlCO0FBb0R4QkEsTUFBQUEsSUFBSSxDQUFDaEMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJNkIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSWxDLEtBQUssR0FBR3lCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlcEMsU0FBM0I7QUFDQSxZQUFJcUMsS0FBSyxHQUFHdEIsYUFBYSxDQUFDdUIsU0FBZCxDQUF3QixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3RDLEtBQWY7QUFBQSxTQUF4QixDQUFaO0FBQ0EsWUFBSXVDLFFBQVEsR0FBR3pCLGFBQWEsQ0FBQ3NCLEtBQUQsQ0FBNUI7QUFDQXpCLFFBQUFBLFNBQVMsQ0FBQ1UsSUFBVixDQUFla0IsUUFBZjtBQUNBLFlBQUlJLFdBQVcsR0FBRzdCLGFBQWEsQ0FBQzJCLE1BQWQsQ0FBcUJMLEtBQXJCLEVBQTRCLENBQTVCLENBQWxCO0FBQ0FwRCxRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQXFCLG1CQUFyQixFQUEwQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVaLFNBQWYsQ0FBMUM7QUFDQTNCLFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FDRSwyQkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZVQsYUFBZixDQUZGO0FBSUEsZUFBT1YsYUFBYSxFQUFwQjtBQUNELE9BYkQ7QUFwRHdCOztBQW1EMUIsMkRBQStCO0FBQUE7QUFlOUI7QUFsRXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUUxQixNQUFNd0MsVUFBVSxHQUFHaEUsUUFBUSxDQUFDcUQsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBbkI7O0FBbkUwQiw4Q0FvRVRXLFVBcEVTO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBb0VqQmhCLElBcEVpQjtBQXFFeEJBLE1BQUFBLElBQUksQ0FBQ2hDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSTZCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUlsQyxLQUFLLEdBQUd5QixHQUFHLENBQUNVLFVBQUosQ0FBZXBDLFNBQTNCO0FBQ0EsWUFBSXFDLEtBQUssR0FBR3pCLFNBQVMsQ0FBQzBCLFNBQVYsQ0FBb0IsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt0QyxLQUFmO0FBQUEsU0FBcEIsQ0FBWjtBQUNBLFlBQUl1QyxRQUFRLEdBQUc1QixTQUFTLENBQUN5QixLQUFELENBQXhCO0FBQ0EsWUFBSUksWUFBWSxHQUFHN0IsU0FBUyxDQUFDOEIsTUFBVixDQUFpQkwsS0FBakIsRUFBd0IsQ0FBeEIsQ0FBbkI7QUFDQXBELFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIsbUJBQXJCLEVBQTBDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVosU0FBZixDQUExQztBQUNBM0IsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUNFLDJCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlVCxhQUFmLENBRkY7QUFJQSxlQUFPVixhQUFhLEVBQXBCO0FBQ0QsT0FaRDtBQXJFd0I7O0FBb0UxQiwyREFBNkI7QUFBQTtBQWM1QjtBQWxGeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtRjFCLE1BQU15QyxhQUFhLEdBQUdqRSxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBdEI7O0FBbkYwQiw4Q0FvRlRZLGFBcEZTO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBb0ZqQmpCLElBcEZpQjtBQXFGeEJBLE1BQUFBLElBQUksQ0FBQ2hDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSTZCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUlsQyxLQUFLLEdBQUd5QixHQUFHLENBQUNVLFVBQUosQ0FBZXBDLFNBQTNCO0FBQ0EsWUFBSXFDLEtBQUssR0FBR3RCLGFBQWEsQ0FBQ3VCLFNBQWQsQ0FBd0IsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt0QyxLQUFmO0FBQUEsU0FBeEIsQ0FBWjtBQUNBLFlBQUl1QyxRQUFRLEdBQUd6QixhQUFhLENBQUNzQixLQUFELENBQTVCO0FBQ0EsWUFBSUksWUFBWSxHQUFHMUIsYUFBYSxDQUFDMkIsTUFBZCxDQUFxQkwsS0FBckIsRUFBNEIsQ0FBNUIsQ0FBbkI7QUFDQXBELFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIsbUJBQXJCLEVBQTBDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVosU0FBZixDQUExQztBQUNBM0IsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUNFLDJCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlVCxhQUFmLENBRkY7QUFJQSxlQUFPVixhQUFhLEVBQXBCO0FBQ0QsT0FaRDtBQXJGd0I7O0FBb0YxQiwyREFBZ0M7QUFBQTtBQWMvQjtBQWxHeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1HM0IsQ0FuR0QsRUFxR0E7OztBQUNBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQjNCLEVBQUFBLElBQUksQ0FBQzZDLFNBQUwsR0FBaUIsRUFBakI7QUFDQTFDLEVBQUFBLEdBQUcsQ0FBQzBDLFNBQUosR0FBZ0IsRUFBaEI7O0FBRUEsTUFBSVQsVUFBSixFQUFnQjtBQUFBLGdEQUNHQSxVQURIO0FBQUE7O0FBQUE7QUFDZCw2REFBNkI7QUFBQSxZQUFwQmQsSUFBb0I7QUFDM0IsWUFBTXdCLEdBQUcsR0FBRzdDLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFlBQU1DLENBQUMsR0FBRy9DLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBLFlBQU1FLElBQUksR0FBR2hELFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjs7QUFDQSxZQUFNaEMsT0FBSyxHQUFHZCxRQUFRLENBQUM4QyxhQUFULENBQXVCLEtBQXZCLENBQWQ7O0FBQ0FoQyxRQUFBQSxPQUFLLENBQUM4QixTQUFOLEdBQWtCLHNEQUFsQjtBQUNBRyxRQUFBQSxDQUFDLENBQUM1QixTQUFGLEdBQWNFLElBQWQ7QUFDQTJCLFFBQUFBLElBQUksQ0FBQ0osU0FBTDtBQUNBQyxRQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBV0YsQ0FBWCxFQUFjQyxJQUFkO0FBQ0FILFFBQUFBLEdBQUcsQ0FBQ0ssU0FBSixDQUFjQyxHQUFkLENBQWtCLFNBQWxCO0FBQ0FwRCxRQUFBQSxJQUFJLENBQUNrRCxNQUFMLENBQVlKLEdBQVo7QUFDRDtBQVphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhZjs7QUFDRCxNQUFJVCxjQUFKLEVBQW9CO0FBQUEsZ0RBQ0RBLGNBREM7QUFBQTs7QUFBQTtBQUNsQiw2REFBaUM7QUFBQSxZQUF4QmYsTUFBd0I7O0FBQy9CLFlBQU13QixLQUFHLEdBQUc3QyxRQUFRLENBQUM4QyxhQUFULENBQXVCLEtBQXZCLENBQVo7O0FBQ0EsWUFBTUMsR0FBQyxHQUFHL0MsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixHQUF2QixDQUFWOztBQUNBLFlBQU1FLE1BQUksR0FBR2hELFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjs7QUFDQSxZQUFNaEMsT0FBSyxHQUFHZCxRQUFRLENBQUM4QyxhQUFULENBQXVCLEtBQXZCLENBQWQ7O0FBQ0FoQyxRQUFBQSxPQUFLLENBQUM4QixTQUFOLEdBQWtCLHNEQUFsQjtBQUNBRyxRQUFBQSxHQUFDLENBQUM1QixTQUFGLEdBQWNFLE1BQWQ7QUFDQTJCLFFBQUFBLE1BQUksQ0FBQ0osU0FBTCxHQUNFLHNHQURGOztBQUVBQyxRQUFBQSxLQUFHLENBQUNJLE1BQUosQ0FBV0YsR0FBWCxFQUFjQyxNQUFkOztBQUNBSCxRQUFBQSxLQUFHLENBQUNLLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjs7QUFDQWpELFFBQUFBLEdBQUcsQ0FBQytDLE1BQUosQ0FBV0osS0FBWDtBQUNEO0FBYmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjbkI7O0FBQ0QsTUFBTU8sS0FBSyxHQUFHcEQsUUFBUSxDQUFDcUQsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBZDs7QUFqQzJCLDhDQWtDVkQsS0FsQ1U7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFrQ2xCSixJQWxDa0I7QUFtQ3pCQSxNQUFBQSxJQUFJLENBQUNoQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk2QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbEMsS0FBSyxHQUFHeUIsR0FBRyxDQUFDVSxVQUFKLENBQWVwQyxTQUEzQjtBQUNBLFlBQUlxQyxLQUFLLEdBQUdyQixVQUFVLENBQUNzQixTQUFYLENBQXFCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdEMsS0FBZjtBQUFBLFNBQXJCLENBQVo7QUFDQSxZQUFJdUMsUUFBUSxHQUFHeEIsVUFBVSxDQUFDcUIsS0FBRCxDQUF6QjtBQUNBcEIsUUFBQUEsY0FBYyxDQUFDSyxJQUFmLENBQW9Ca0IsUUFBcEI7QUFDQSxZQUFJQyxZQUFZLEdBQUd6QixVQUFVLENBQUMwQixNQUFYLENBQWtCTCxLQUFsQixFQUF5QixDQUF6QixDQUFuQjtBQUNBcEQsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUFxQixvQkFBckIsRUFBMkNWLElBQUksQ0FBQ1csU0FBTCxDQUFlUixVQUFmLENBQTNDO0FBQ0EvQixRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQ0UsNEJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVQLGNBQWYsQ0FGRjtBQUlBLGVBQU9WLGNBQWMsRUFBckI7QUFDRCxPQWJEO0FBbkN5Qjs7QUFrQzNCLDJEQUF3QjtBQUFBO0FBZXZCO0FBakQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtEM0IsTUFBTW9DLFlBQVksR0FBRzlELFFBQVEsQ0FBQ3FELGdCQUFULENBQTBCLFVBQTFCLENBQXJCOztBQWxEMkIsK0NBbURWUyxZQW5EVTtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQW1EbEJkLElBbkRrQjtBQW9EekJBLE1BQUFBLElBQUksQ0FBQ2hDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSTZCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUlsQyxLQUFLLEdBQUd5QixHQUFHLENBQUNVLFVBQUosQ0FBZXBDLFNBQTNCO0FBQ0EsWUFBSXFDLEtBQUssR0FBR3BCLGNBQWMsQ0FBQ3FCLFNBQWYsQ0FBeUIsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt0QyxLQUFmO0FBQUEsU0FBekIsQ0FBWjtBQUNBLFlBQUl1QyxRQUFRLEdBQUd2QixjQUFjLENBQUNvQixLQUFELENBQTdCO0FBQ0FyQixRQUFBQSxVQUFVLENBQUNNLElBQVgsQ0FBZ0JrQixRQUFoQjtBQUNBLFlBQUlJLFdBQVcsR0FBRzNCLGNBQWMsQ0FBQ3lCLE1BQWYsQ0FBc0JMLEtBQXRCLEVBQTZCLENBQTdCLENBQWxCO0FBQ0FwRCxRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVSLFVBQWYsQ0FBM0M7QUFDQS9CLFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FDRSw0QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZVAsY0FBZixDQUZGO0FBSUEsZUFBT1YsY0FBYyxFQUFyQjtBQUNELE9BYkQ7QUFwRHlCOztBQW1EM0IsOERBQStCO0FBQUE7QUFlOUI7QUFsRTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUUzQixNQUFNc0MsVUFBVSxHQUFHaEUsUUFBUSxDQUFDcUQsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBbkI7O0FBbkUyQiwrQ0FvRVZXLFVBcEVVO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBb0VsQmhCLElBcEVrQjtBQXFFekJBLE1BQUFBLElBQUksQ0FBQ2hDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSTZCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUlsQyxLQUFLLEdBQUd5QixHQUFHLENBQUNVLFVBQUosQ0FBZXBDLFNBQTNCO0FBQ0EsWUFBSXFDLEtBQUssR0FBR3JCLFVBQVUsQ0FBQ3NCLFNBQVgsQ0FBcUIsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt0QyxLQUFmO0FBQUEsU0FBckIsQ0FBWjtBQUNBLFlBQUl1QyxRQUFRLEdBQUd4QixVQUFVLENBQUNxQixLQUFELENBQXpCO0FBQ0EsWUFBSUksWUFBWSxHQUFHekIsVUFBVSxDQUFDMEIsTUFBWCxDQUFrQkwsS0FBbEIsRUFBeUIsQ0FBekIsQ0FBbkI7QUFDQXBELFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVIsVUFBZixDQUEzQztBQUNBL0IsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUNFLDRCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlUCxjQUFmLENBRkY7QUFJQSxlQUFPVixjQUFjLEVBQXJCO0FBQ0QsT0FaRDtBQXJFeUI7O0FBb0UzQiw4REFBNkI7QUFBQTtBQWM1QjtBQWxGMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtRjNCLE1BQU11QyxhQUFhLEdBQUdqRSxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBdEI7O0FBbkYyQiwrQ0FvRlZZLGFBcEZVO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBb0ZsQmpCLElBcEZrQjtBQXFGekJBLE1BQUFBLElBQUksQ0FBQ2hDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSTZCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUlsQyxLQUFLLEdBQUd5QixHQUFHLENBQUNVLFVBQUosQ0FBZXBDLFNBQTNCO0FBQ0EsWUFBSXFDLEtBQUssR0FBR3BCLGNBQWMsQ0FBQ3FCLFNBQWYsQ0FBeUIsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt0QyxLQUFmO0FBQUEsU0FBekIsQ0FBWjtBQUNBLFlBQUl1QyxRQUFRLEdBQUd2QixjQUFjLENBQUNvQixLQUFELENBQTdCO0FBQ0EsWUFBSUksWUFBWSxHQUFHeEIsY0FBYyxDQUFDeUIsTUFBZixDQUFzQkwsS0FBdEIsRUFBNkIsQ0FBN0IsQ0FBbkI7QUFDQXBELFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVIsVUFBZixDQUEzQztBQUNBL0IsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUNFLDRCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlUCxjQUFmLENBRkY7QUFJQSxlQUFPVixjQUFjLEVBQXJCO0FBQ0QsT0FaRDtBQXJGeUI7O0FBb0YzQiw4REFBZ0M7QUFBQTtBQWMvQjtBQWxHMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1HNUIsQ0FuR0QsRUFxR0E7OztBQUNBLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QjdCLEVBQUFBLElBQUksQ0FBQzZDLFNBQUwsR0FBaUIsRUFBakI7QUFDQTFDLEVBQUFBLEdBQUcsQ0FBQzBDLFNBQUosR0FBZ0IsRUFBaEI7O0FBRUEsTUFBSVAsV0FBSixFQUFpQjtBQUFBLGlEQUNFQSxXQURGO0FBQUE7O0FBQUE7QUFDZixnRUFBOEI7QUFBQSxZQUFyQmhCLElBQXFCO0FBQzVCLFlBQU13QixHQUFHLEdBQUc3QyxRQUFRLENBQUM4QyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQSxZQUFNQyxDQUFDLEdBQUcvQyxRQUFRLENBQUM4QyxhQUFULENBQXVCLEdBQXZCLENBQVY7QUFDQSxZQUFNRSxJQUFJLEdBQUdoRCxRQUFRLENBQUM4QyxhQUFULENBQXVCLEdBQXZCLENBQWI7O0FBQ0EsWUFBTWhDLE9BQUssR0FBR2QsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixLQUF2QixDQUFkOztBQUNBaEMsUUFBQUEsT0FBSyxDQUFDOEIsU0FBTixHQUFrQixzREFBbEI7QUFDQUcsUUFBQUEsQ0FBQyxDQUFDNUIsU0FBRixHQUFjRSxJQUFkO0FBQ0EyQixRQUFBQSxJQUFJLENBQUNKLFNBQUw7QUFDQUMsUUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVdGLENBQVgsRUFBY0MsSUFBZDtBQUNBSCxRQUFBQSxHQUFHLENBQUNLLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjtBQUNBcEQsUUFBQUEsSUFBSSxDQUFDa0QsTUFBTCxDQUFZSixHQUFaO0FBQ0Q7QUFaYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYWhCOztBQUNELE1BQUlQLGVBQUosRUFBcUI7QUFBQSxpREFDRkEsZUFERTtBQUFBOztBQUFBO0FBQ25CLGdFQUFrQztBQUFBLFlBQXpCakIsTUFBeUI7O0FBQ2hDLFlBQU13QixLQUFHLEdBQUc3QyxRQUFRLENBQUM4QyxhQUFULENBQXVCLEtBQXZCLENBQVo7O0FBQ0EsWUFBTUMsR0FBQyxHQUFHL0MsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixHQUF2QixDQUFWOztBQUNBLFlBQU1FLE1BQUksR0FBR2hELFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjs7QUFDQSxZQUFNaEMsT0FBSyxHQUFHZCxRQUFRLENBQUM4QyxhQUFULENBQXVCLEtBQXZCLENBQWQ7O0FBQ0FoQyxRQUFBQSxPQUFLLENBQUM4QixTQUFOLEdBQWtCLHNEQUFsQjtBQUNBRyxRQUFBQSxHQUFDLENBQUM1QixTQUFGLEdBQWNFLE1BQWQ7QUFDQTJCLFFBQUFBLE1BQUksQ0FBQ0osU0FBTCxHQUNFLHNHQURGOztBQUVBQyxRQUFBQSxLQUFHLENBQUNJLE1BQUosQ0FBV0YsR0FBWCxFQUFjQyxNQUFkOztBQUNBSCxRQUFBQSxLQUFHLENBQUNLLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjs7QUFDQWpELFFBQUFBLEdBQUcsQ0FBQytDLE1BQUosQ0FBV0osS0FBWDtBQUNEO0FBYmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjcEI7O0FBQ0QsTUFBTU8sS0FBSyxHQUFHcEQsUUFBUSxDQUFDcUQsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBZDs7QUFqQzRCLCtDQWtDWEQsS0FsQ1c7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFrQ25CSixJQWxDbUI7QUFtQzFCQSxNQUFBQSxJQUFJLENBQUNoQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk2QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbEMsS0FBSyxHQUFHeUIsR0FBRyxDQUFDVSxVQUFKLENBQWVwQyxTQUEzQjtBQUNBLFlBQUlxQyxLQUFLLEdBQUduQixXQUFXLENBQUNvQixTQUFaLENBQXNCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdEMsS0FBZjtBQUFBLFNBQXRCLENBQVo7QUFDQSxZQUFJdUMsUUFBUSxHQUFHdEIsV0FBVyxDQUFDbUIsS0FBRCxDQUExQjtBQUNBbEIsUUFBQUEsZUFBZSxDQUFDRyxJQUFoQixDQUFxQmtCLFFBQXJCO0FBQ0EsWUFBSUMsWUFBWSxHQUFHdkIsV0FBVyxDQUFDd0IsTUFBWixDQUFtQkwsS0FBbkIsRUFBMEIsQ0FBMUIsQ0FBbkI7QUFDQXBELFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIscUJBQXJCLEVBQTRDVixJQUFJLENBQUNXLFNBQUwsQ0FBZU4sV0FBZixDQUE1QztBQUNBakMsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUNFLDZCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlTCxlQUFmLENBRkY7QUFJQSxlQUFPVixlQUFlLEVBQXRCO0FBQ0QsT0FiRDtBQW5DMEI7O0FBa0M1Qiw4REFBd0I7QUFBQTtBQWV2QjtBQWpEMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrRDVCLE1BQU1rQyxZQUFZLEdBQUc5RCxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixVQUExQixDQUFyQjs7QUFsRDRCLCtDQW1EWFMsWUFuRFc7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFtRG5CZCxJQW5EbUI7QUFvRDFCQSxNQUFBQSxJQUFJLENBQUNoQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk2QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbEMsS0FBSyxHQUFHeUIsR0FBRyxDQUFDVSxVQUFKLENBQWVwQyxTQUEzQjtBQUNBLFlBQUlxQyxLQUFLLEdBQUdsQixlQUFlLENBQUNtQixTQUFoQixDQUEwQixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3RDLEtBQWY7QUFBQSxTQUExQixDQUFaO0FBQ0EsWUFBSXVDLFFBQVEsR0FBR3JCLGVBQWUsQ0FBQ2tCLEtBQUQsQ0FBOUI7QUFDQW5CLFFBQUFBLFdBQVcsQ0FBQ0ksSUFBWixDQUFpQmtCLFFBQWpCO0FBQ0EsWUFBSUksV0FBVyxHQUFHekIsZUFBZSxDQUFDdUIsTUFBaEIsQ0FBdUJMLEtBQXZCLEVBQThCLENBQTlCLENBQWxCO0FBQ0FwRCxRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQXFCLHFCQUFyQixFQUE0Q1YsSUFBSSxDQUFDVyxTQUFMLENBQWVOLFdBQWYsQ0FBNUM7QUFDQWpDLFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FDRSw2QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZUwsZUFBZixDQUZGO0FBSUEsZUFBT1YsZUFBZSxFQUF0QjtBQUNELE9BYkQ7QUFwRDBCOztBQW1ENUIsOERBQStCO0FBQUE7QUFlOUI7QUFsRTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUU1QixNQUFNb0MsVUFBVSxHQUFHaEUsUUFBUSxDQUFDcUQsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBbkI7O0FBbkU0QiwrQ0FvRVhXLFVBcEVXO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBb0VuQmhCLElBcEVtQjtBQXFFMUJBLE1BQUFBLElBQUksQ0FBQ2hDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSTZCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUlsQyxLQUFLLEdBQUd5QixHQUFHLENBQUNVLFVBQUosQ0FBZXBDLFNBQTNCO0FBQ0EsWUFBSXFDLEtBQUssR0FBR25CLFdBQVcsQ0FBQ29CLFNBQVosQ0FBc0IsVUFBQ0MsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUt0QyxLQUFmO0FBQUEsU0FBdEIsQ0FBWjtBQUNBLFlBQUl1QyxRQUFRLEdBQUd0QixXQUFXLENBQUNtQixLQUFELENBQTFCO0FBQ0EsWUFBSUksWUFBWSxHQUFHdkIsV0FBVyxDQUFDd0IsTUFBWixDQUFtQkwsS0FBbkIsRUFBMEIsQ0FBMUIsQ0FBbkI7QUFDQXBELFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIscUJBQXJCLEVBQTRDVixJQUFJLENBQUNXLFNBQUwsQ0FBZU4sV0FBZixDQUE1QztBQUNBakMsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUNFLDZCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlTCxlQUFmLENBRkY7QUFJQSxlQUFPVixlQUFlLEVBQXRCO0FBQ0QsT0FaRDtBQXJFMEI7O0FBb0U1Qiw4REFBNkI7QUFBQTtBQWM1QjtBQWxGMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtRjVCLE1BQU1xQyxhQUFhLEdBQUdqRSxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBdEI7O0FBbkY0QiwrQ0FvRlhZLGFBcEZXO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBb0ZuQmpCLElBcEZtQjtBQXFGMUJBLE1BQUFBLElBQUksQ0FBQ2hDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsWUFBSTZCLEdBQUcsR0FBR0csSUFBSSxDQUFDTSxVQUFMLENBQWdCQSxVQUExQjtBQUNBLFlBQUlsQyxLQUFLLEdBQUd5QixHQUFHLENBQUNVLFVBQUosQ0FBZXBDLFNBQTNCO0FBQ0EsWUFBSXFDLEtBQUssR0FBR2xCLGVBQWUsQ0FBQ21CLFNBQWhCLENBQTBCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdEMsS0FBZjtBQUFBLFNBQTFCLENBQVo7QUFDQSxZQUFJdUMsUUFBUSxHQUFHckIsZUFBZSxDQUFDa0IsS0FBRCxDQUE5QjtBQUNBLFlBQUlJLFlBQVksR0FBR3RCLGVBQWUsQ0FBQ3VCLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QixDQUFuQjtBQUNBcEQsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUFxQixxQkFBckIsRUFBNENWLElBQUksQ0FBQ1csU0FBTCxDQUFlTixXQUFmLENBQTVDO0FBQ0FqQyxRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQ0UsNkJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVMLGVBQWYsQ0FGRjtBQUlBLGVBQU9WLGVBQWUsRUFBdEI7QUFDRCxPQVpEO0FBckYwQjs7QUFvRjVCLDhEQUFnQztBQUFBO0FBYy9CO0FBbEcyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUc3QixDQW5HRCxFQXFHQTs7O0FBQ0EsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCL0IsRUFBQUEsSUFBSSxDQUFDNkMsU0FBTCxHQUFpQixFQUFqQjtBQUNBMUMsRUFBQUEsR0FBRyxDQUFDMEMsU0FBSixHQUFnQixFQUFoQjs7QUFFQSxNQUFJTCxVQUFKLEVBQWdCO0FBQUEsaURBQ0dBLFVBREg7QUFBQTs7QUFBQTtBQUNkLGdFQUE2QjtBQUFBLFlBQXBCbEIsSUFBb0I7QUFDM0IsWUFBTXdCLEdBQUcsR0FBRzdDLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFlBQU1DLENBQUMsR0FBRy9DLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBLFlBQU1FLElBQUksR0FBR2hELFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjs7QUFDQSxZQUFNaEMsT0FBSyxHQUFHZCxRQUFRLENBQUM4QyxhQUFULENBQXVCLEtBQXZCLENBQWQ7O0FBQ0FoQyxRQUFBQSxPQUFLLENBQUM4QixTQUFOLEdBQWtCLHNEQUFsQjtBQUNBRyxRQUFBQSxDQUFDLENBQUM1QixTQUFGLEdBQWNFLElBQWQ7QUFDQTJCLFFBQUFBLElBQUksQ0FBQ0osU0FBTDtBQUNBQyxRQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBV0YsQ0FBWCxFQUFjQyxJQUFkO0FBQ0FILFFBQUFBLEdBQUcsQ0FBQ0ssU0FBSixDQUFjQyxHQUFkLENBQWtCLFNBQWxCO0FBQ0FwRCxRQUFBQSxJQUFJLENBQUNrRCxNQUFMLENBQVlKLEdBQVo7QUFDRDtBQVphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhZjs7QUFDRCxNQUFJTCxjQUFKLEVBQW9CO0FBQUEsaURBQ0RBLGNBREM7QUFBQTs7QUFBQTtBQUNsQixnRUFBaUM7QUFBQSxZQUF4Qm5CLE1BQXdCOztBQUMvQixZQUFNd0IsS0FBRyxHQUFHN0MsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixLQUF2QixDQUFaOztBQUNBLFlBQU1DLEdBQUMsR0FBRy9DLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjs7QUFDQSxZQUFNRSxNQUFJLEdBQUdoRCxRQUFRLENBQUM4QyxhQUFULENBQXVCLEdBQXZCLENBQWI7O0FBQ0EsWUFBTWhDLE9BQUssR0FBR2QsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixLQUF2QixDQUFkOztBQUNBaEMsUUFBQUEsT0FBSyxDQUFDOEIsU0FBTixHQUFrQixzREFBbEI7QUFDQUcsUUFBQUEsR0FBQyxDQUFDNUIsU0FBRixHQUFjRSxNQUFkO0FBQ0EyQixRQUFBQSxNQUFJLENBQUNKLFNBQUwsR0FDRSxzR0FERjs7QUFFQUMsUUFBQUEsS0FBRyxDQUFDSSxNQUFKLENBQVdGLEdBQVgsRUFBY0MsTUFBZDs7QUFDQUgsUUFBQUEsS0FBRyxDQUFDSyxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsU0FBbEI7O0FBQ0FqRCxRQUFBQSxHQUFHLENBQUMrQyxNQUFKLENBQVdKLEtBQVg7QUFDRDtBQWJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY25COztBQUNELE1BQU1PLEtBQUssR0FBR3BELFFBQVEsQ0FBQ3FELGdCQUFULENBQTBCLFVBQTFCLENBQWQ7O0FBakMyQiwrQ0FrQ1ZELEtBbENVO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBa0NsQkosSUFsQ2tCO0FBbUN6QkEsTUFBQUEsSUFBSSxDQUFDaEMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxZQUFJNkIsR0FBRyxHQUFHRyxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JBLFVBQTFCO0FBQ0EsWUFBSWxDLEtBQUssR0FBR3lCLEdBQUcsQ0FBQ1UsVUFBSixDQUFlcEMsU0FBM0I7QUFDQSxZQUFJcUMsS0FBSyxHQUFHakIsVUFBVSxDQUFDa0IsU0FBWCxDQUFxQixVQUFDQyxFQUFEO0FBQUEsaUJBQVFBLEVBQUUsS0FBS3RDLEtBQWY7QUFBQSxTQUFyQixDQUFaO0FBQ0EsWUFBSXVDLFFBQVEsR0FBR3BCLFVBQVUsQ0FBQ2lCLEtBQUQsQ0FBekI7QUFDQWhCLFFBQUFBLGNBQWMsQ0FBQ0MsSUFBZixDQUFvQmtCLFFBQXBCO0FBQ0EsWUFBSUMsWUFBWSxHQUFHckIsVUFBVSxDQUFDc0IsTUFBWCxDQUFrQkwsS0FBbEIsRUFBeUIsQ0FBekIsQ0FBbkI7QUFDQXBELFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDVixJQUFJLENBQUNXLFNBQUwsQ0FBZUosVUFBZixDQUEzQztBQUNBbkMsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUNFLDRCQURGLEVBRUVWLElBQUksQ0FBQ1csU0FBTCxDQUFlSCxjQUFmLENBRkY7QUFJQSxlQUFPVixjQUFjLEVBQXJCO0FBQ0QsT0FiRDtBQW5DeUI7O0FBa0MzQiw4REFBd0I7QUFBQTtBQWV2QjtBQWpEMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrRDNCLE1BQU1nQyxZQUFZLEdBQUc5RCxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixVQUExQixDQUFyQjs7QUFsRDJCLCtDQW1EVlMsWUFuRFU7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFtRGxCZCxJQW5Ea0I7QUFvRHpCQSxNQUFBQSxJQUFJLENBQUNoQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk2QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbEMsS0FBSyxHQUFHeUIsR0FBRyxDQUFDVSxVQUFKLENBQWVwQyxTQUEzQjtBQUNBLFlBQUlxQyxLQUFLLEdBQUdoQixjQUFjLENBQUNpQixTQUFmLENBQXlCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdEMsS0FBZjtBQUFBLFNBQXpCLENBQVo7QUFDQSxZQUFJdUMsUUFBUSxHQUFHbkIsY0FBYyxDQUFDZ0IsS0FBRCxDQUE3QjtBQUNBakIsUUFBQUEsVUFBVSxDQUFDRSxJQUFYLENBQWdCa0IsUUFBaEI7QUFDQSxZQUFJSSxXQUFXLEdBQUd2QixjQUFjLENBQUNxQixNQUFmLENBQXNCTCxLQUF0QixFQUE2QixDQUE3QixDQUFsQjtBQUNBcEQsUUFBQUEsWUFBWSxDQUFDc0MsT0FBYixDQUFxQixvQkFBckIsRUFBMkNWLElBQUksQ0FBQ1csU0FBTCxDQUFlSixVQUFmLENBQTNDO0FBQ0FuQyxRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQ0UsNEJBREYsRUFFRVYsSUFBSSxDQUFDVyxTQUFMLENBQWVILGNBQWYsQ0FGRjtBQUlBLGVBQU9WLGNBQWMsRUFBckI7QUFDRCxPQWJEO0FBcER5Qjs7QUFtRDNCLDhEQUErQjtBQUFBO0FBZTlCO0FBbEUwQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1FM0IsTUFBTWtDLFVBQVUsR0FBR2hFLFFBQVEsQ0FBQ3FELGdCQUFULENBQTBCLFFBQTFCLENBQW5COztBQW5FMkIsK0NBb0VWVyxVQXBFVTtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQW9FbEJoQixJQXBFa0I7QUFxRXpCQSxNQUFBQSxJQUFJLENBQUNoQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk2QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbEMsS0FBSyxHQUFHeUIsR0FBRyxDQUFDVSxVQUFKLENBQWVwQyxTQUEzQjtBQUNBLFlBQUlxQyxLQUFLLEdBQUdqQixVQUFVLENBQUNrQixTQUFYLENBQXFCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdEMsS0FBZjtBQUFBLFNBQXJCLENBQVo7QUFDQSxZQUFJdUMsUUFBUSxHQUFHcEIsVUFBVSxDQUFDaUIsS0FBRCxDQUF6QjtBQUNBLFlBQUlJLFlBQVksR0FBR3JCLFVBQVUsQ0FBQ3NCLE1BQVgsQ0FBa0JMLEtBQWxCLEVBQXlCLENBQXpCLENBQW5CO0FBQ0FwRCxRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVKLFVBQWYsQ0FBM0M7QUFDQW5DLFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FDRSw0QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZUgsY0FBZixDQUZGO0FBSUEsZUFBT1YsY0FBYyxFQUFyQjtBQUNELE9BWkQ7QUFyRXlCOztBQW9FM0IsOERBQTZCO0FBQUE7QUFjNUI7QUFsRjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUYzQixNQUFNbUMsYUFBYSxHQUFHakUsUUFBUSxDQUFDcUQsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQXRCOztBQW5GMkIsK0NBb0ZWWSxhQXBGVTtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQW9GbEJqQixJQXBGa0I7QUFxRnpCQSxNQUFBQSxJQUFJLENBQUNoQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFlBQUk2QixHQUFHLEdBQUdHLElBQUksQ0FBQ00sVUFBTCxDQUFnQkEsVUFBMUI7QUFDQSxZQUFJbEMsS0FBSyxHQUFHeUIsR0FBRyxDQUFDVSxVQUFKLENBQWVwQyxTQUEzQjtBQUNBLFlBQUlxQyxLQUFLLEdBQUdoQixjQUFjLENBQUNpQixTQUFmLENBQXlCLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdEMsS0FBZjtBQUFBLFNBQXpCLENBQVo7QUFDQSxZQUFJdUMsUUFBUSxHQUFHbkIsY0FBYyxDQUFDZ0IsS0FBRCxDQUE3QjtBQUNBLFlBQUlJLFlBQVksR0FBR3BCLGNBQWMsQ0FBQ3FCLE1BQWYsQ0FBc0JMLEtBQXRCLEVBQTZCLENBQTdCLENBQW5CO0FBQ0FwRCxRQUFBQSxZQUFZLENBQUNzQyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVKLFVBQWYsQ0FBM0M7QUFDQW5DLFFBQUFBLFlBQVksQ0FBQ3NDLE9BQWIsQ0FDRSw0QkFERixFQUVFVixJQUFJLENBQUNXLFNBQUwsQ0FBZUgsY0FBZixDQUZGO0FBSUEsZUFBT1YsY0FBYyxFQUFyQjtBQUNELE9BWkQ7QUFyRnlCOztBQW9GM0IsOERBQWdDO0FBQUE7QUFjL0I7QUFsRzBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtRzVCLENBbkdELEVBcUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzaEJBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsY0FBYyxzQ0FBc0Msc0JBQXNCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLHNCQUFzQixHQUFHLHFDQUFxQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLDhCQUE4QixtQkFBbUIsd0JBQXdCLEdBQUcseUNBQXlDLGtCQUFrQixpQkFBaUIsMkJBQTJCLGdCQUFnQiw4QkFBOEIsbUJBQW1CLEdBQUcsZ0JBQWdCLGtCQUFrQixpQkFBaUIsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixlQUFlLHFCQUFxQix3QkFBd0IsOEJBQThCLG1CQUFtQixzQkFBc0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLGFBQWEsbUJBQW1CLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxXQUFXLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0IsbUJBQW1CLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQixzQkFBc0Isa0NBQWtDLEdBQUcsWUFBWSxrQkFBa0IsR0FBRyxxQ0FBcUMsb0JBQW9CLHNCQUFzQixnQkFBZ0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDhCQUE4QixtQkFBbUIscUJBQXFCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxlQUFlLGtCQUFrQixtQkFBbUIsR0FBRyw0Q0FBNEMsaUJBQWlCLGVBQWUsOEJBQThCLG1CQUFtQixxQkFBcUIsd0JBQXdCLHFDQUFxQyw4QkFBOEIsR0FBRyxjQUFjLGtCQUFrQixtQ0FBbUMsd0JBQXdCLG1CQUFtQixrQkFBa0IsR0FBRyxXQUFXLDhCQUE4Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQixvQkFBb0Isd0JBQXdCLHVCQUF1Qix3QkFBd0IsR0FBRyxjQUFjLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsZ0JBQWdCLG1CQUFtQixnQkFBZ0IsZ0JBQWdCLDJCQUEyQiw0QkFBNEIsZ0JBQWdCLEdBQUcsV0FBVyxzQkFBc0IsdUJBQXVCLG9CQUFvQixHQUFHLFdBQVcscUZBQXFGLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsZ0NBQWdDLGNBQWMsc0NBQXNDLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdCQUFnQixzQkFBc0IsR0FBRyxxQ0FBcUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsbUJBQW1CLHdCQUF3QixHQUFHLHlDQUF5QyxrQkFBa0IsaUJBQWlCLDJCQUEyQixnQkFBZ0IsOEJBQThCLG1CQUFtQixHQUFHLGdCQUFnQixrQkFBa0IsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLGtDQUFrQyx3QkFBd0IsZUFBZSxxQkFBcUIsd0JBQXdCLDhCQUE4QixtQkFBbUIsc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxhQUFhLG1CQUFtQixHQUFHLGVBQWUsd0JBQXdCLEdBQUcsV0FBVyxlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLG1CQUFtQix1QkFBdUIsd0JBQXdCLHNCQUFzQixHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsc0JBQXNCLGtDQUFrQyxHQUFHLFlBQVksa0JBQWtCLEdBQUcscUNBQXFDLG9CQUFvQixzQkFBc0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3Qiw4QkFBOEIsbUJBQW1CLHFCQUFxQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsZUFBZSxrQkFBa0IsbUJBQW1CLEdBQUcsNENBQTRDLGlCQUFpQixlQUFlLDhCQUE4QixtQkFBbUIscUJBQXFCLHdCQUF3QixxQ0FBcUMsOEJBQThCLEdBQUcsY0FBYyxrQkFBa0IsbUNBQW1DLHdCQUF3QixtQkFBbUIsa0JBQWtCLEdBQUcsV0FBVyw4QkFBOEIsdUJBQXVCLGdCQUFnQixpQkFBaUIsb0JBQW9CLHdCQUF3Qix1QkFBdUIsd0JBQXdCLEdBQUcsY0FBYyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLGdCQUFnQixtQkFBbUIsZ0JBQWdCLGdCQUFnQiwyQkFBMkIsNEJBQTRCLGdCQUFnQixHQUFHLFdBQVcsc0JBQXNCLHVCQUF1QixvQkFBb0IsR0FBRyx1QkFBdUI7QUFDaHROO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBcUMsTUFBTSxDQUFDbkQsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDUSx3REFBNUM7QUFDQTJDLE1BQU0sQ0FBQ25ELGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFVO0FBQ2xEb0QsRUFBQUEsS0FBSyxDQUFDbEIsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEI7QUFDSCxDQUZELEdBSUE7O0FBQ0EsSUFBTWlCLEtBQUssR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0FtRSxLQUFLLENBQUNwRCxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFVO0FBQ3RDSCxFQUFBQSxRQUFRLENBQUNNLFNBQVQsR0FBcUIsaUJBQXJCO0FBQ0gsQ0FGRDtBQUdBaUQsS0FBSyxDQUFDcEQsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NRLHdEQUFoQztBQUNBNEMsS0FBSyxDQUFDcEQsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBVTtBQUN0Q29ELEVBQUFBLEtBQUssQ0FBQ2xCLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFFBQXBCO0FBQ0FrQixFQUFBQSxNQUFNLENBQUNuQixTQUFQLENBQWlCb0IsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDckIsU0FBUixDQUFrQm9CLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FFLEVBQUFBLE1BQU0sQ0FBQ3RCLFNBQVAsQ0FBaUJvQixNQUFqQixDQUF3QixRQUF4QjtBQUNILENBTEQ7QUFPQSxJQUFNRCxNQUFNLEdBQUdyRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBb0UsTUFBTSxDQUFDckQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVTtBQUN2Q0gsRUFBQUEsUUFBUSxDQUFDTSxTQUFULEdBQXFCLGtCQUFyQjtBQUNILENBRkQ7QUFHQWtELE1BQU0sQ0FBQ3JELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDVSx5REFBakM7QUFDQTJDLE1BQU0sQ0FBQ3JELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVU7QUFDdkNvRCxFQUFBQSxLQUFLLENBQUNsQixTQUFOLENBQWdCb0IsTUFBaEIsQ0FBdUIsUUFBdkI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDbkIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckI7QUFDQW9CLEVBQUFBLE9BQU8sQ0FBQ3JCLFNBQVIsQ0FBa0JvQixNQUFsQixDQUF5QixRQUF6QjtBQUNBRSxFQUFBQSxNQUFNLENBQUN0QixTQUFQLENBQWlCb0IsTUFBakIsQ0FBd0IsUUFBeEI7QUFDSCxDQUxEO0FBT0EsSUFBTUMsT0FBTyxHQUFHdkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0FzRSxPQUFPLENBQUN2RCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQ3hDSCxFQUFBQSxRQUFRLENBQUNNLFNBQVQsR0FBcUIsbUJBQXJCO0FBQ0gsQ0FGRDtBQUdBb0QsT0FBTyxDQUFDdkQsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NZLDBEQUFsQztBQUNBMkMsT0FBTyxDQUFDdkQsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUN4Q29ELEVBQUFBLEtBQUssQ0FBQ2xCLFNBQU4sQ0FBZ0JvQixNQUFoQixDQUF1QixRQUF2QjtBQUNBRCxFQUFBQSxNQUFNLENBQUNuQixTQUFQLENBQWlCb0IsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDckIsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQXFCLEVBQUFBLE1BQU0sQ0FBQ3RCLFNBQVAsQ0FBaUJvQixNQUFqQixDQUF3QixRQUF4QjtBQUNILENBTEQ7QUFPQSxJQUFNRSxNQUFNLEdBQUd4RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBdUUsTUFBTSxDQUFDeEQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVTtBQUN2Q0gsRUFBQUEsUUFBUSxDQUFDTSxTQUFULEdBQXFCLGtCQUFyQjtBQUNILENBRkQ7QUFHQXFELE1BQU0sQ0FBQ3hELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDYyx5REFBakM7QUFDQTBDLE1BQU0sQ0FBQ3hELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVU7QUFDdkNvRCxFQUFBQSxLQUFLLENBQUNsQixTQUFOLENBQWdCb0IsTUFBaEIsQ0FBdUIsUUFBdkI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDbkIsU0FBUCxDQUFpQm9CLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ3JCLFNBQVIsQ0FBa0JvQixNQUFsQixDQUF5QixRQUF6QjtBQUNBRSxFQUFBQSxNQUFNLENBQUN0QixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNILENBTEQsR0FjQTtBQUNBO0FBQ0E7QUFDQSxvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvc2NyaXB0cy9zaG93TGlzdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9zY3JpcHRzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0xpc3QgaW5uZXJIVE1MXG5jb25zdCBoaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdoXCIpO1xuY29uc3QgbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb3dcIik7XG5sZXQgbG9jYWxEYWlseVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIpO1xubGV0IGxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgXCJsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlXCJcbik7XG5sZXQgbG9jYWxXZWVrbHlTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIik7XG5sZXQgbG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgXCJsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZVwiXG4pO1xubGV0IGxvY2FsTW9udGhseVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsTW9udGhseVN0b3JhZ2VcIik7XG5sZXQgbG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCJcbik7XG5sZXQgbG9jYWxZZWFybHlTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIik7XG5sZXQgbG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgXCJsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZVwiXG4pO1xuXG4vL05ldyBpdGVtc1xuY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHRCb3hcIik7XG5cbi8vRm9ybVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1mb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudE9iamVjdCkge1xuICBldmVudE9iamVjdC5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAoXG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID09PSBcIldoYXQgZG8geW91IG5lZWQgdG8gZG8gdG9kYXk/XCIgfHxcbiAgICBxdWVzdGlvbi5pbm5lclRleHQgPT09IFwiWW91ciBEYWlseSBMaXN0XCJcbiAgKSB7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgIGl0ZW0uYWRkVG9EYWlseSgpO1xuICAgICAgcmV0dXJuIHNob3dEYWlseUxpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIGlmIChxdWVzdGlvbi5pbm5lclRleHQgPT09IFwiWW91ciBXZWVrbHkgTGlzdFwiKSB7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgIGl0ZW0uYWRkVG9XZWVrbHkoKTtcbiAgICAgIHJldHVybiBzaG93V2Vla2x5TGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKHF1ZXN0aW9uLmlubmVyVGV4dCA9PT0gXCJZb3VyIE1vbnRobHkgTGlzdFwiKSB7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgIGl0ZW0uYWRkVG9Nb250aGx5KCk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAocXVlc3Rpb24uaW5uZXJUZXh0ID09PSBcIllvdXIgWWVhcmx5IExpc3RcIikge1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbShpbnB1dC52YWx1ZSk7XG4gICAgICBpdGVtLmFkZFRvWWVhcmx5KCk7XG4gICAgICByZXR1cm4gc2hvd1llYXJseUxpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vRGFpbHkgYXJyYXlzXG5sZXQgZGFpbHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbERhaWx5U3RvcmFnZSk7XG5pZiAobG9jYWxEYWlseVN0b3JhZ2UgPT0gbnVsbCkge1xuICBkYWlseUxpc3QgPSBbXTtcbn1cbmxldCBkYWlseUZpbmlzaGVkID0gSlNPTi5wYXJzZShsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlKTtcbmlmIChsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlID09IG51bGwpIHtcbiAgZGFpbHlGaW5pc2hlZCA9IFtdO1xufVxuXG4vL1dlZWtseSBhcnJheXNcbmxldCB3ZWVrbHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFdlZWtseVN0b3JhZ2UpO1xuaWYgKGxvY2FsV2Vla2x5U3RvcmFnZSA9PSBudWxsKSB7XG4gIHdlZWtseUxpc3QgPSBbXTtcbn1cbmxldCB3ZWVrbHlGaW5pc2hlZCA9IEpTT04ucGFyc2UobG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2UpO1xuaWYgKGxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlID09IG51bGwpIHtcbiAgd2Vla2x5RmluaXNoZWQgPSBbXTtcbn1cblxuLy9Nb250aGx5IGFycmF5c1xubGV0IG1vbnRobHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbE1vbnRobHlTdG9yYWdlKTtcbmlmIChsb2NhbE1vbnRobHlTdG9yYWdlID09IG51bGwpIHtcbiAgbW9udGhseUxpc3QgPSBbXTtcbn1cbmxldCBtb250aGx5RmluaXNoZWQgPSBKU09OLnBhcnNlKGxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZSk7XG5pZiAobG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlID09IG51bGwpIHtcbiAgbW9udGhseUZpbmlzaGVkID0gW107XG59XG5cbi8vWWVhcmx5IGFycmF5c1xubGV0IHllYXJseUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsWWVhcmx5U3RvcmFnZSk7XG5pZiAobG9jYWxZZWFybHlTdG9yYWdlID09IG51bGwpIHtcbiAgeWVhcmx5TGlzdCA9IFtdO1xufVxubGV0IHllYXJseUZpbmlzaGVkID0gSlNPTi5wYXJzZShsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZSk7XG5pZiAobG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2UgPT0gbnVsbCkge1xuICB5ZWFybHlGaW5pc2hlZCA9IFtdO1xufVxuXG4vL0NsYXNzZXNcbmNsYXNzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgfVxuICBhZGRUb0RhaWx5KCkge1xuICAgIGRhaWx5TGlzdC5wdXNoKGAke3RoaXMuaXRlbX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICB9XG4gIGFkZFRvV2Vla2x5KCkge1xuICAgIHdlZWtseUxpc3QucHVzaChgJHt0aGlzLml0ZW19YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICB9XG4gIGFkZFRvTW9udGhseSgpIHtcbiAgICBtb250aGx5TGlzdC5wdXNoKGAke3RoaXMuaXRlbX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsTW9udGhseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcbiAgfVxuICBhZGRUb1llYXJseSgpIHtcbiAgICB5ZWFybHlMaXN0LnB1c2goYCR7dGhpcy5pdGVtfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxZZWFybHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHllYXJseUxpc3QpKTtcbiAgfVxufVxuXG4vL0RhaWx5IGxpc3QgZnVuY3Rpb25cbmNvbnN0IHNob3dEYWlseUxpc3QgPSAoKSA9PiB7XG4gIGhpZ2guaW5uZXJIVE1MID0gXCJcIjtcbiAgbG93LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKGRhaWx5TGlzdCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgZGFpbHlMaXN0KSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjYWxlc1wiIG5hbWU9XCJsaXN0LWl0ZW1cIj4nO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtcmVjeWNsZSBpY29uIHJlY3ljbGVcIj48L2k+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gdHJhc2hcIj48L2k+YDtcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBoaWdoLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBpZiAoZGFpbHlGaW5pc2hlZCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgZGFpbHlGaW5pc2hlZCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlucHV0LmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY2FsZXNcIiBuYW1lPVwibGlzdC1pdGVtXCI+JztcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID1cbiAgICAgICAgJzxpIGNsYXNzPVwiZmFzIGZhLWxldmVsLXVwLWFsdCBpY29uIHVwZ3JhZGVcIj48L2k+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gcmVjeWNsZWQtdHJhc2hcIj48L2k+JztcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBsb3cuYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gZGFpbHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBkYWlseUxpc3RbZm91bmRdO1xuICAgICAgZGFpbHlGaW5pc2hlZC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBkYWlseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxEYWlseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoZGFpbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGRhaWx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dEYWlseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cGdyYWRlSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVwZ3JhZGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgdXBncmFkZUljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gZGFpbHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gZGFpbHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICBkYWlseUxpc3QucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgdXBncmFkZUl0ZW0gPSBkYWlseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShkYWlseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93RGFpbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgdHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IGRhaWx5TGlzdC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gZGFpbHlMaXN0W2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBkYWlseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxEYWlseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoZGFpbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGRhaWx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dEYWlseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBsb3dUcmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlZC10cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBsb3dUcmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gZGFpbHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gZGFpbHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gZGFpbHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbERhaWx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGFpbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd0RhaWx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vL1dlZWtseSBsaXN0IGZ1bmN0aW9uXG5jb25zdCBzaG93V2Vla2x5TGlzdCA9ICgpID0+IHtcbiAgaGlnaC5pbm5lckhUTUwgPSBcIlwiO1xuICBsb3cuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAod2Vla2x5TGlzdCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2Ygd2Vla2x5TGlzdCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlucHV0LmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY2FsZXNcIiBuYW1lPVwibGlzdC1pdGVtXCI+JztcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXJlY3ljbGUgaWNvbiByZWN5Y2xlXCI+PC9pPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHRyYXNoXCI+PC9pPmA7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgaGlnaC5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgaWYgKHdlZWtseUZpbmlzaGVkKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB3ZWVrbHlGaW5pc2hlZCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlucHV0LmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY2FsZXNcIiBuYW1lPVwibGlzdC1pdGVtXCI+JztcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID1cbiAgICAgICAgJzxpIGNsYXNzPVwiZmFzIGZhLWxldmVsLXVwLWFsdCBpY29uIHVwZ3JhZGVcIj48L2k+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gcmVjeWNsZWQtdHJhc2hcIj48L2k+JztcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBsb3cuYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gd2Vla2x5TGlzdC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gd2Vla2x5TGlzdFtmb3VuZF07XG4gICAgICB3ZWVrbHlGaW5pc2hlZC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB3ZWVrbHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsV2Vla2x5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh3ZWVrbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1dlZWtseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cGdyYWRlSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVwZ3JhZGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgdXBncmFkZUljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gd2Vla2x5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHdlZWtseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIHdlZWtseUxpc3QucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgdXBncmFkZUl0ZW0gPSB3ZWVrbHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkod2Vla2x5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dXZWVrbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgdHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHdlZWtseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHdlZWtseUxpc3RbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IHdlZWtseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxXZWVrbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHdlZWtseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93V2Vla2x5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGxvd1RyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVkLXRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGxvd1RyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB3ZWVrbHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gd2Vla2x5RmluaXNoZWRbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IHdlZWtseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsV2Vla2x5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh3ZWVrbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1dlZWtseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy9Nb250aGx5IGxpc3QgZnVuY3Rpb25cbmNvbnN0IHNob3dNb250aGx5TGlzdCA9ICgpID0+IHtcbiAgaGlnaC5pbm5lckhUTUwgPSBcIlwiO1xuICBsb3cuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAobW9udGhseUxpc3QpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIG1vbnRobHlMaXN0KSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjYWxlc1wiIG5hbWU9XCJsaXN0LWl0ZW1cIj4nO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtcmVjeWNsZSBpY29uIHJlY3ljbGVcIj48L2k+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gdHJhc2hcIj48L2k+YDtcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBoaWdoLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBpZiAobW9udGhseUZpbmlzaGVkKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBtb250aGx5RmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbnB1dC5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NhbGVzXCIgbmFtZT1cImxpc3QtaXRlbVwiPic7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9XG4gICAgICAgICc8aSBjbGFzcz1cImZhcyBmYS1sZXZlbC11cC1hbHQgaWNvbiB1cGdyYWRlXCI+PC9pPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHJlY3ljbGVkLXRyYXNoXCI+PC9pPic7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgbG93LmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBpY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IG1vbnRobHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBtb250aGx5TGlzdFtmb3VuZF07XG4gICAgICBtb250aGx5RmluaXNoZWQucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gbW9udGhseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG1vbnRobHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdXBncmFkZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGdyYWRlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHVwZ3JhZGVJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IG1vbnRobHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gbW9udGhseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIG1vbnRobHlMaXN0LnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHVwZ3JhZGVJdGVtID0gbW9udGhseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsTW9udGhseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShtb250aGx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dNb250aGx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHRyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHRyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBtb250aGx5TGlzdC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gbW9udGhseUxpc3RbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IG1vbnRobHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsTW9udGhseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShtb250aGx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dNb250aGx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGxvd1RyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVkLXRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGxvd1RyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBtb250aGx5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IG1vbnRobHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gbW9udGhseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsTW9udGhseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShtb250aGx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dNb250aGx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vL1llYXJseSBsaXN0IGZ1bmN0aW9uXG5jb25zdCBzaG93WWVhcmx5TGlzdCA9ICgpID0+IHtcbiAgaGlnaC5pbm5lckhUTUwgPSBcIlwiO1xuICBsb3cuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAoeWVhcmx5TGlzdCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgeWVhcmx5TGlzdCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlucHV0LmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY2FsZXNcIiBuYW1lPVwibGlzdC1pdGVtXCI+JztcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXJlY3ljbGUgaWNvbiByZWN5Y2xlXCI+PC9pPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHRyYXNoXCI+PC9pPmA7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgaGlnaC5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgaWYgKHllYXJseUZpbmlzaGVkKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB5ZWFybHlGaW5pc2hlZCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlucHV0LmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY2FsZXNcIiBuYW1lPVwibGlzdC1pdGVtXCI+JztcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID1cbiAgICAgICAgJzxpIGNsYXNzPVwiZmFzIGZhLWxldmVsLXVwLWFsdCBpY29uIHVwZ3JhZGVcIj48L2k+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gcmVjeWNsZWQtdHJhc2hcIj48L2k+JztcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBsb3cuYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0geWVhcmx5TGlzdC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0geWVhcmx5TGlzdFtmb3VuZF07XG4gICAgICB5ZWFybHlGaW5pc2hlZC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB5ZWFybHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsWWVhcmx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh5ZWFybHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh5ZWFybHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1llYXJseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cGdyYWRlSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVwZ3JhZGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgdXBncmFkZUljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0geWVhcmx5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHllYXJseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIHllYXJseUxpc3QucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgdXBncmFkZUl0ZW0gPSB5ZWFybHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoeWVhcmx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeWVhcmx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dZZWFybHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgdHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHllYXJseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHllYXJseUxpc3RbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IHllYXJseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxZZWFybHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHllYXJseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHllYXJseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93WWVhcmx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGxvd1RyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVkLXRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGxvd1RyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB5ZWFybHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0geWVhcmx5RmluaXNoZWRbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IHllYXJseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsWWVhcmx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh5ZWFybHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh5ZWFybHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1llYXJseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy9FeHBvcnRzXG5leHBvcnQgeyBzaG93RGFpbHlMaXN0LCBzaG93V2Vla2x5TGlzdCwgc2hvd01vbnRobHlMaXN0LCBzaG93WWVhcmx5TGlzdCB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgU2V0dGluZ3MgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYyNztcXG4gIGNvbG9yOiAjZmRmZmZjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50IFNldHRpbmdzICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZmYztcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5zZXR0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMCU7XFxuICAvKiBmbGV4LWdyb3c6IDE7ICovXFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2V0dGluZ3MgcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZXR0aW5ncyBwOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDExNjI3O1xcbn1cXG5cXG4ucXVlc3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGlnaCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4ubG93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLjJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEZvb3RlciBTZXR0aW5ncyAqL1xcblxcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mjc7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5zb2NpYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNvY2lhbCBwIHtcXG4gIG1hcmdpbjogLjJyZW07XFxuICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLyogRXh0cmEgU3R5bGluZyBTZXR0aW5ncyAqL1xcblxcbi5saXN0cyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZmYztcXG4gIGNvbG9yOiAjNmI3MDVjO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDVweCA1cHggI2U3MWQzNjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTE2Mjc7XFxufVxcblxcbi5uZXdJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM2YjcwNWM7XFxuICBtYXJnaW46IC41cmVtO1xcbn1cXG5cXG4ucGx1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRleHRCb3gge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmJvcmRlckJvdDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDNyZW0gYXV0byAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAuMjtcXG59XFxuXFxuLmljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyIFNldHRpbmdzICovXFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mjc7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIE1haW4gQ29udGVudCBTZXR0aW5ncyAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZmZmM7XFxuICBjb2xvcjogI2ZmOWYxYztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjAlO1xcbiAgLyogZmxleC1ncm93OiAxOyAqL1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgY29sb3I6ICNmZGZmZmM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNldHRpbmdzIHAge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MgcDpob3ZlciB7XFxuICBjb2xvcjogI2ZmOWYxYztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogIzAxMTYyNztcXG59XFxuXFxuLnF1ZXN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5saXN0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmOWYxYztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhpZ2gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmxvdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IC4ycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBGb290ZXIgU2V0dGluZ3MgKi9cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjI3O1xcbiAgY29sb3I6ICNmZGZmZmM7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uc29jaWFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zb2NpYWwgcCB7XFxuICBtYXJnaW46IC4ycmVtO1xcbiAgcGFkZGluZzogLjJyZW07XFxufVxcblxcbi8qIEV4dHJhIFN0eWxpbmcgU2V0dGluZ3MgKi9cXG5cXG4ubGlzdHMge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZmZmM7XFxuICBjb2xvcjogIzZiNzA1YztcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4ICNlNzFkMzY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDExNjI3O1xcbn1cXG5cXG4ubmV3SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjNmI3MDVjO1xcbiAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuLnBsdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50ZXh0Qm94IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5ib3JkZXJCb3Q6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAzcmVtIGF1dG8gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogLjI7XFxufVxcblxcbi5pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQge3Nob3dEYWlseUxpc3R9IGZyb20gXCIuL3Nob3dMaXN0cy5qc1wiO1xuaW1wb3J0IHtzaG93V2Vla2x5TGlzdH0gZnJvbSBcIi4vc2hvd0xpc3RzLmpzXCI7XG5pbXBvcnQge3Nob3dNb250aGx5TGlzdH0gZnJvbSBcIi4vc2hvd0xpc3RzLmpzXCI7XG5pbXBvcnQge3Nob3dZZWFybHlMaXN0fSBmcm9tIFwiLi9zaG93TGlzdHMuanNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzaG93RGFpbHlMaXN0KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcbiAgICBkYWlseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxufSk7XG5cbi8vTGlzdHNcbmNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhaWx5Jyk7XG5kYWlseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgRGFpbHkgTGlzdCdcbn0pO1xuZGFpbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RGFpbHlMaXN0KTtcbmRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBkYWlseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIHdlZWtseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIG1vbnRobHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB5ZWFybHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbn0pO1xuXG5jb25zdCB3ZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2Vla2x5Jyk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9ICdZb3VyIFdlZWtseSBMaXN0J1xufSk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93V2Vla2x5TGlzdCk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGRhaWx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgd2Vla2x5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgbW9udGhseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIHllYXJseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxufSk7XG5cbmNvbnN0IG1vbnRobHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9udGhseScpO1xubW9udGhseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgTW9udGhseSBMaXN0J1xufSk7XG5tb250aGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vbnRobHlMaXN0KTtcbm1vbnRobHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGRhaWx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgd2Vla2x5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgbW9udGhseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIHllYXJseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxufSk7XG5cbmNvbnN0IHllYXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5ZWFybHknKTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgWWVhcmx5IExpc3QnXG59KTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dZZWFybHlMaXN0KTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgZGFpbHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB3ZWVrbHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICBtb250aGx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgeWVhcmx5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG59KTtcblxuXG5cblxuXG5cblxuXG4vLyAvL1Rlc3QgQnVpbGRcbi8vIGltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuLy8gY29uc29sZS5sb2coXCJJJ20gaGVyZSFcIik7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZChjb21wb25lbnQoKSlcbiJdLCJuYW1lcyI6WyJoaWdoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG93IiwibG9jYWxEYWlseVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZSIsImxvY2FsV2Vla2x5U3RvcmFnZSIsImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlIiwibG9jYWxNb250aGx5U3RvcmFnZSIsImxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZSIsImxvY2FsWWVhcmx5U3RvcmFnZSIsImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlIiwicXVlc3Rpb24iLCJpbnB1dCIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRPYmplY3QiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVyVGV4dCIsInZhbHVlIiwiaXRlbSIsIkl0ZW0iLCJhZGRUb0RhaWx5Iiwic2hvd0RhaWx5TGlzdCIsImFkZFRvV2Vla2x5Iiwic2hvd1dlZWtseUxpc3QiLCJhZGRUb01vbnRobHkiLCJzaG93TW9udGhseUxpc3QiLCJhZGRUb1llYXJseSIsInNob3dZZWFybHlMaXN0IiwiZGFpbHlMaXN0IiwiSlNPTiIsInBhcnNlIiwiZGFpbHlGaW5pc2hlZCIsIndlZWtseUxpc3QiLCJ3ZWVrbHlGaW5pc2hlZCIsIm1vbnRobHlMaXN0IiwibW9udGhseUZpbmlzaGVkIiwieWVhcmx5TGlzdCIsInllYXJseUZpbmlzaGVkIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpbm5lckhUTUwiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwicCIsImljb24iLCJhcHBlbmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsImZvdW5kIiwiZmluZEluZGV4IiwiZWwiLCJ0aGlzSXRlbSIsInJlY3ljbGVkSXRlbSIsInNwbGljZSIsInVwZ3JhZGVJY29ucyIsInVwZ3JhZGVJdGVtIiwidHJhc2hJY29ucyIsImxvd1RyYXNoSWNvbnMiLCJzdHlsZXMiLCJ3aW5kb3ciLCJkYWlseSIsIndlZWtseSIsInJlbW92ZSIsIm1vbnRobHkiLCJ5ZWFybHkiXSwic291cmNlUm9vdCI6IiJ9