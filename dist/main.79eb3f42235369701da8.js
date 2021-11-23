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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxHQUFHekUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQXdFLE1BQU0sQ0FBQ3pELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVU7QUFDdkNILEVBQUFBLFFBQVEsQ0FBQ00sU0FBVCxHQUFxQixrQkFBckI7QUFDSCxDQUZEO0FBR0FzRCxNQUFNLENBQUN6RCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ2MseURBQWpDO0FBQ0EyQyxNQUFNLENBQUN6RCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFVO0FBQ3ZDcUQsRUFBQUEsS0FBSyxDQUFDbEIsU0FBTixDQUFnQm9CLE1BQWhCLENBQXVCLFFBQXZCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ25CLFNBQVAsQ0FBaUJvQixNQUFqQixDQUF3QixRQUF4QjtBQUNBQyxFQUFBQSxPQUFPLENBQUNyQixTQUFSLENBQWtCb0IsTUFBbEIsQ0FBeUIsUUFBekI7QUFDQUUsRUFBQUEsTUFBTSxDQUFDdEIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckI7QUFDSCxDQUxELEdBY0E7QUFDQTtBQUNBO0FBQ0Esb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vc3JjL3NjcmlwdHMvc2hvd0xpc3RzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvY3NzL3N0eWxlcy5jc3M/OTlhMyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9MaXN0IGlubmVySFRNTFxuY29uc3QgaGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaFwiKTtcbmNvbnN0IGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG93XCIpO1xubGV0IGxvY2FsRGFpbHlTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbERhaWx5U3RvcmFnZVwiKTtcbmxldCBsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIFwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZVwiXG4pO1xubGV0IGxvY2FsV2Vla2x5U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxXZWVrbHlTdG9yYWdlXCIpO1xubGV0IGxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIFwibG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2VcIlxuKTtcbmxldCBsb2NhbE1vbnRobHlTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbE1vbnRobHlTdG9yYWdlXCIpO1xubGV0IGxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICBcImxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZVwiXG4pO1xubGV0IGxvY2FsWWVhcmx5U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxZZWFybHlTdG9yYWdlXCIpO1xubGV0IGxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIFwibG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2VcIlxuKTtcblxuLy9OZXcgaXRlbXNcbmNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvblwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0Qm94XCIpO1xuXG4vL0Zvcm1cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtZm9ybVwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnRPYmplY3QpIHtcbiAgZXZlbnRPYmplY3QucHJldmVudERlZmF1bHQoKTtcbn0pO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKFxuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9PT0gXCJXaGF0IGRvIHlvdSBuZWVkIHRvIGRvIHRvZGF5P1wiIHx8XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID09PSBcIllvdXIgRGFpbHkgTGlzdFwiXG4gICkge1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbShpbnB1dC52YWx1ZSk7XG4gICAgICBpdGVtLmFkZFRvRGFpbHkoKTtcbiAgICAgIHJldHVybiBzaG93RGFpbHlMaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAocXVlc3Rpb24uaW5uZXJUZXh0ID09PSBcIllvdXIgV2Vla2x5IExpc3RcIikge1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbShpbnB1dC52YWx1ZSk7XG4gICAgICBpdGVtLmFkZFRvV2Vla2x5KCk7XG4gICAgICByZXR1cm4gc2hvd1dlZWtseUxpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIGlmIChxdWVzdGlvbi5pbm5lclRleHQgPT09IFwiWW91ciBNb250aGx5IExpc3RcIikge1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbShpbnB1dC52YWx1ZSk7XG4gICAgICBpdGVtLmFkZFRvTW9udGhseSgpO1xuICAgICAgcmV0dXJuIHNob3dNb250aGx5TGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKHF1ZXN0aW9uLmlubmVyVGV4dCA9PT0gXCJZb3VyIFllYXJseSBMaXN0XCIpIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGxldCBpdGVtID0gbmV3IEl0ZW0oaW5wdXQudmFsdWUpO1xuICAgICAgaXRlbS5hZGRUb1llYXJseSgpO1xuICAgICAgcmV0dXJuIHNob3dZZWFybHlMaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn0pO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uICgpIHtcbiAgZm9ybS5yZXNldCgpO1xufSk7XG5cblxuLy9EYWlseSBhcnJheXNcbmxldCBkYWlseUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsRGFpbHlTdG9yYWdlKTtcbmlmIChsb2NhbERhaWx5U3RvcmFnZSA9PSBudWxsKSB7XG4gIGRhaWx5TGlzdCA9IFtdO1xufVxubGV0IGRhaWx5RmluaXNoZWQgPSBKU09OLnBhcnNlKGxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2UpO1xuaWYgKGxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2UgPT0gbnVsbCkge1xuICBkYWlseUZpbmlzaGVkID0gW107XG59XG5cbi8vV2Vla2x5IGFycmF5c1xubGV0IHdlZWtseUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsV2Vla2x5U3RvcmFnZSk7XG5pZiAobG9jYWxXZWVrbHlTdG9yYWdlID09IG51bGwpIHtcbiAgd2Vla2x5TGlzdCA9IFtdO1xufVxubGV0IHdlZWtseUZpbmlzaGVkID0gSlNPTi5wYXJzZShsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZSk7XG5pZiAobG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2UgPT0gbnVsbCkge1xuICB3ZWVrbHlGaW5pc2hlZCA9IFtdO1xufVxuXG4vL01vbnRobHkgYXJyYXlzXG5sZXQgbW9udGhseUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsTW9udGhseVN0b3JhZ2UpO1xuaWYgKGxvY2FsTW9udGhseVN0b3JhZ2UgPT0gbnVsbCkge1xuICBtb250aGx5TGlzdCA9IFtdO1xufVxubGV0IG1vbnRobHlGaW5pc2hlZCA9IEpTT04ucGFyc2UobG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlKTtcbmlmIChsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2UgPT0gbnVsbCkge1xuICBtb250aGx5RmluaXNoZWQgPSBbXTtcbn1cblxuLy9ZZWFybHkgYXJyYXlzXG5sZXQgeWVhcmx5TGlzdCA9IEpTT04ucGFyc2UobG9jYWxZZWFybHlTdG9yYWdlKTtcbmlmIChsb2NhbFllYXJseVN0b3JhZ2UgPT0gbnVsbCkge1xuICB5ZWFybHlMaXN0ID0gW107XG59XG5sZXQgeWVhcmx5RmluaXNoZWQgPSBKU09OLnBhcnNlKGxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlKTtcbmlmIChsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZSA9PSBudWxsKSB7XG4gIHllYXJseUZpbmlzaGVkID0gW107XG59XG5cbi8vQ2xhc3Nlc1xuY2xhc3MgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGl0ZW0pIHtcbiAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICB9XG4gIGFkZFRvRGFpbHkoKSB7XG4gICAgZGFpbHlMaXN0LnB1c2goYCR7dGhpcy5pdGVtfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxEYWlseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoZGFpbHlMaXN0KSk7XG4gIH1cbiAgYWRkVG9XZWVrbHkoKSB7XG4gICAgd2Vla2x5TGlzdC5wdXNoKGAke3RoaXMuaXRlbX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsV2Vla2x5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG4gIH1cbiAgYWRkVG9Nb250aGx5KCkge1xuICAgIG1vbnRobHlMaXN0LnB1c2goYCR7dGhpcy5pdGVtfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICB9XG4gIGFkZFRvWWVhcmx5KCkge1xuICAgIHllYXJseUxpc3QucHVzaChgJHt0aGlzLml0ZW19YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoeWVhcmx5TGlzdCkpO1xuICB9XG59XG5cbi8vRGFpbHkgbGlzdCBmdW5jdGlvblxuY29uc3Qgc2hvd0RhaWx5TGlzdCA9ICgpID0+IHtcbiAgaGlnaC5pbm5lckhUTUwgPSBcIlwiO1xuICBsb3cuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAoZGFpbHlMaXN0KSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBkYWlseUxpc3QpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbnB1dC5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NhbGVzXCIgbmFtZT1cImxpc3QtaXRlbVwiPic7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1yZWN5Y2xlIGljb24gcmVjeWNsZVwiPjwvaT48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgaWNvbiB0cmFzaFwiPjwvaT5gO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGhpZ2guYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGlmIChkYWlseUZpbmlzaGVkKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBkYWlseUZpbmlzaGVkKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjYWxlc1wiIG5hbWU9XCJsaXN0LWl0ZW1cIj4nO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPVxuICAgICAgICAnPGkgY2xhc3M9XCJmYXMgZmEtbGV2ZWwtdXAtYWx0IGljb24gdXBncmFkZVwiPjwvaT48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgaWNvbiByZWN5Y2xlZC10cmFzaFwiPjwvaT4nO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGxvdy5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgaWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBkYWlseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IGRhaWx5TGlzdFtmb3VuZF07XG4gICAgICBkYWlseUZpbmlzaGVkLnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IGRhaWx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbERhaWx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGFpbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd0RhaWx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHVwZ3JhZGVJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXBncmFkZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB1cGdyYWRlSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBkYWlseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBkYWlseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGRhaWx5TGlzdC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCB1cGdyYWRlSXRlbSA9IGRhaWx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxEYWlseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoZGFpbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGRhaWx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dEYWlseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB0cmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB0cmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gZGFpbHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBkYWlseUxpc3RbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IGRhaWx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbERhaWx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGFpbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd0RhaWx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGxvd1RyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVkLXRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGxvd1RyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBkYWlseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBkYWlseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBkYWlseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShkYWlseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93RGFpbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vV2Vla2x5IGxpc3QgZnVuY3Rpb25cbmNvbnN0IHNob3dXZWVrbHlMaXN0ID0gKCkgPT4ge1xuICBoaWdoLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvdy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmICh3ZWVrbHlMaXN0KSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB3ZWVrbHlMaXN0KSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjYWxlc1wiIG5hbWU9XCJsaXN0LWl0ZW1cIj4nO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtcmVjeWNsZSBpY29uIHJlY3ljbGVcIj48L2k+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gdHJhc2hcIj48L2k+YDtcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBoaWdoLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBpZiAod2Vla2x5RmluaXNoZWQpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHdlZWtseUZpbmlzaGVkKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjYWxlc1wiIG5hbWU9XCJsaXN0LWl0ZW1cIj4nO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPVxuICAgICAgICAnPGkgY2xhc3M9XCJmYXMgZmEtbGV2ZWwtdXAtYWx0IGljb24gdXBncmFkZVwiPjwvaT48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgaWNvbiByZWN5Y2xlZC10cmFzaFwiPjwvaT4nO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGxvdy5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgaWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB3ZWVrbHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB3ZWVrbHlMaXN0W2ZvdW5kXTtcbiAgICAgIHdlZWtseUZpbmlzaGVkLnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IHdlZWtseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxXZWVrbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHdlZWtseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93V2Vla2x5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHVwZ3JhZGVJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXBncmFkZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB1cGdyYWRlSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB3ZWVrbHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gd2Vla2x5RmluaXNoZWRbZm91bmRdO1xuICAgICAgd2Vla2x5TGlzdC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCB1cGdyYWRlSXRlbSA9IHdlZWtseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsV2Vla2x5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh3ZWVrbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1dlZWtseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB0cmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB0cmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gd2Vla2x5TGlzdC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gd2Vla2x5TGlzdFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gd2Vla2x5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkod2Vla2x5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dXZWVrbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgbG93VHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZWQtdHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgbG93VHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHdlZWtseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB3ZWVrbHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gd2Vla2x5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxXZWVrbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHdlZWtseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93V2Vla2x5TGlzdCgpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vL01vbnRobHkgbGlzdCBmdW5jdGlvblxuY29uc3Qgc2hvd01vbnRobHlMaXN0ID0gKCkgPT4ge1xuICBoaWdoLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvdy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChtb250aGx5TGlzdCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgbW9udGhseUxpc3QpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbnB1dC5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NhbGVzXCIgbmFtZT1cImxpc3QtaXRlbVwiPic7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1yZWN5Y2xlIGljb24gcmVjeWNsZVwiPjwvaT48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgaWNvbiB0cmFzaFwiPjwvaT5gO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGhpZ2guYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGlmIChtb250aGx5RmluaXNoZWQpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIG1vbnRobHlGaW5pc2hlZCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlucHV0LmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY2FsZXNcIiBuYW1lPVwibGlzdC1pdGVtXCI+JztcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID1cbiAgICAgICAgJzxpIGNsYXNzPVwiZmFzIGZhLWxldmVsLXVwLWFsdCBpY29uIHVwZ3JhZGVcIj48L2k+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gcmVjeWNsZWQtdHJhc2hcIj48L2k+JztcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBsb3cuYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIGljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gbW9udGhseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IG1vbnRobHlMaXN0W2ZvdW5kXTtcbiAgICAgIG1vbnRobHlGaW5pc2hlZC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBtb250aGx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE1vbnRobHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkobW9udGhseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93TW9udGhseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cGdyYWRlSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVwZ3JhZGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgdXBncmFkZUljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gbW9udGhseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBtb250aGx5RmluaXNoZWRbZm91bmRdO1xuICAgICAgbW9udGhseUxpc3QucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgdXBncmFkZUl0ZW0gPSBtb250aGx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG1vbnRobHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgdHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IG1vbnRobHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBtb250aGx5TGlzdFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gbW9udGhseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG1vbnRobHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgbG93VHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZWQtdHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgbG93VHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IG1vbnRobHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gbW9udGhseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBtb250aGx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxNb250aGx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG1vbnRobHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vWWVhcmx5IGxpc3QgZnVuY3Rpb25cbmNvbnN0IHNob3dZZWFybHlMaXN0ID0gKCkgPT4ge1xuICBoaWdoLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvdy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmICh5ZWFybHlMaXN0KSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB5ZWFybHlMaXN0KSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjYWxlc1wiIG5hbWU9XCJsaXN0LWl0ZW1cIj4nO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtcmVjeWNsZSBpY29uIHJlY3ljbGVcIj48L2k+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGljb24gdHJhc2hcIj48L2k+YDtcbiAgICAgIGRpdi5hcHBlbmQocCwgaWNvbik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ld0l0ZW1cIik7XG4gICAgICBoaWdoLmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBpZiAoeWVhcmx5RmluaXNoZWQpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHllYXJseUZpbmlzaGVkKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjYWxlc1wiIG5hbWU9XCJsaXN0LWl0ZW1cIj4nO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPVxuICAgICAgICAnPGkgY2xhc3M9XCJmYXMgZmEtbGV2ZWwtdXAtYWx0IGljb24gdXBncmFkZVwiPjwvaT48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgaWNvbiByZWN5Y2xlZC10cmFzaFwiPjwvaT4nO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGxvdy5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgaWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB5ZWFybHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB5ZWFybHlMaXN0W2ZvdW5kXTtcbiAgICAgIHllYXJseUZpbmlzaGVkLnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IHllYXJseUxpc3Quc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxZZWFybHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHllYXJseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHllYXJseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93WWVhcmx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHVwZ3JhZGVJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXBncmFkZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB1cGdyYWRlSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB5ZWFybHlGaW5pc2hlZC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0geWVhcmx5RmluaXNoZWRbZm91bmRdO1xuICAgICAgeWVhcmx5TGlzdC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCB1cGdyYWRlSXRlbSA9IHllYXJseUZpbmlzaGVkLnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsWWVhcmx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh5ZWFybHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh5ZWFybHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1llYXJseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB0cmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB0cmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0geWVhcmx5TGlzdC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0geWVhcmx5TGlzdFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0geWVhcmx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoeWVhcmx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeWVhcmx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dZZWFybHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgbG93VHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZWQtdHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgbG93VHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHllYXJseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB5ZWFybHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0geWVhcmx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxZZWFybHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHllYXJseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHllYXJseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93WWVhcmx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vL0V4cG9ydHNcbmV4cG9ydCB7IHNob3dEYWlseUxpc3QsIHNob3dXZWVrbHlMaXN0LCBzaG93TW9udGhseUxpc3QsIHNob3dZZWFybHlMaXN0IH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciBTZXR0aW5ncyAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjI3O1xcbiAgY29sb3I6ICNmZGZmZmM7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgU2V0dGluZ3MgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmZjO1xcbiAgY29sb3I6ICNmZjlmMWM7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnNldHRpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIwJTtcXG4gIC8qIGZsZXgtZ3JvdzogMTsgKi9cXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gIGNvbG9yOiAjZmRmZmZjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZXR0aW5ncyBwIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzIHA6aG92ZXIge1xcbiAgY29sb3I6ICNmZjlmMWM7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgY29sb3I6ICMwMTE2Mjc7XFxufVxcblxcbi5xdWVzdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ubGlzdCB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZjlmMWM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5oaWdoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbi5sb3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAuMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogRm9vdGVyIFNldHRpbmdzICovXFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYyNztcXG4gIGNvbG9yOiAjZmRmZmZjO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLnNvY2lhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc29jaWFsIHAge1xcbiAgbWFyZ2luOiAuMnJlbTtcXG4gIHBhZGRpbmc6IC4ycmVtO1xcbn1cXG5cXG4vKiBFeHRyYSBTdHlsaW5nIFNldHRpbmdzICovXFxuXFxuLmxpc3RzIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA3MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmZjO1xcbiAgY29sb3I6ICM2YjcwNWM7XFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggNXB4IDVweCAjZTcxZDM2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxMTYyNztcXG59XFxuXFxuLm5ld0l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzZiNzA1YztcXG4gIG1hcmdpbjogLjVyZW07XFxufVxcblxcbi5wbHVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogLjVyZW07XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGV4dEJveCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uYm9yZGVyQm90OjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogM3JlbSBhdXRvIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IC4yO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBLDBCQUEwQjs7QUFFMUI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgU2V0dGluZ3MgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYyNztcXG4gIGNvbG9yOiAjZmRmZmZjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50IFNldHRpbmdzICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZmYztcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5zZXR0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMCU7XFxuICAvKiBmbGV4LWdyb3c6IDE7ICovXFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2V0dGluZ3MgcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZXR0aW5ncyBwOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDExNjI3O1xcbn1cXG5cXG4ucXVlc3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGlnaCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4ubG93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLjJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEZvb3RlciBTZXR0aW5ncyAqL1xcblxcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mjc7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5zb2NpYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNvY2lhbCBwIHtcXG4gIG1hcmdpbjogLjJyZW07XFxuICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLyogRXh0cmEgU3R5bGluZyBTZXR0aW5ncyAqL1xcblxcbi5saXN0cyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZmYztcXG4gIGNvbG9yOiAjNmI3MDVjO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDVweCA1cHggI2U3MWQzNjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTE2Mjc7XFxufVxcblxcbi5uZXdJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM2YjcwNWM7XFxuICBtYXJnaW46IC41cmVtO1xcbn1cXG5cXG4ucGx1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRleHRCb3gge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmJvcmRlckJvdDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDNyZW0gYXV0byAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAuMjtcXG59XFxuXFxuLmljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY3NzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7c2hvd0RhaWx5TGlzdH0gZnJvbSBcIi4vc2hvd0xpc3RzLmpzXCI7XG5pbXBvcnQge3Nob3dXZWVrbHlMaXN0fSBmcm9tIFwiLi9zaG93TGlzdHMuanNcIjtcbmltcG9ydCB7c2hvd01vbnRobHlMaXN0fSBmcm9tIFwiLi9zaG93TGlzdHMuanNcIjtcbmltcG9ydCB7c2hvd1llYXJseUxpc3R9IGZyb20gXCIuL3Nob3dMaXN0cy5qc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNob3dEYWlseUxpc3QpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuICAgIGRhaWx5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG59KTtcblxuY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uXCIpO1xuXG4vL0xpc3RzXG5jb25zdCBkYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseScpO1xuZGFpbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9ICdZb3VyIERhaWx5IExpc3QnXG59KTtcbmRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0RhaWx5TGlzdCk7XG5kYWlseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgZGFpbHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB3ZWVrbHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICBtb250aGx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgeWVhcmx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG59KTtcblxuY29uc3Qgd2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWtseScpO1xud2Vla2x5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBxdWVzdGlvbi5pbm5lclRleHQgPSAnWW91ciBXZWVrbHkgTGlzdCdcbn0pO1xud2Vla2x5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1dlZWtseUxpc3QpO1xud2Vla2x5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBkYWlseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIHdlZWtseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIG1vbnRobHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB5ZWFybHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbn0pO1xuXG5jb25zdCBtb250aGx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbnRobHknKTtcbm1vbnRobHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9ICdZb3VyIE1vbnRobHkgTGlzdCdcbn0pO1xubW9udGhseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb250aGx5TGlzdCk7XG5tb250aGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBkYWlseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIHdlZWtseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIG1vbnRobHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB5ZWFybHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbn0pO1xuXG5jb25zdCB5ZWFybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeWVhcmx5Jyk7XG55ZWFybHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9ICdZb3VyIFllYXJseSBMaXN0J1xufSk7XG55ZWFybHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93WWVhcmx5TGlzdCk7XG55ZWFybHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGRhaWx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgd2Vla2x5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgbW9udGhseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIHllYXJseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxufSk7XG5cblxuXG5cblxuXG5cblxuLy8gLy9UZXN0IEJ1aWxkXG4vLyBpbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbi8vIGNvbnNvbGUubG9nKFwiSSdtIGhlcmUhXCIpO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmQoY29tcG9uZW50KCkpXG4iXSwibmFtZXMiOlsiaGlnaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvdyIsImxvY2FsRGFpbHlTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2UiLCJsb2NhbFdlZWtseVN0b3JhZ2UiLCJsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZSIsImxvY2FsTW9udGhseVN0b3JhZ2UiLCJsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2UiLCJsb2NhbFllYXJseVN0b3JhZ2UiLCJsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZSIsInF1ZXN0aW9uIiwiaW5wdXQiLCJmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50T2JqZWN0IiwicHJldmVudERlZmF1bHQiLCJpbm5lclRleHQiLCJ2YWx1ZSIsIml0ZW0iLCJJdGVtIiwiYWRkVG9EYWlseSIsInNob3dEYWlseUxpc3QiLCJhZGRUb1dlZWtseSIsInNob3dXZWVrbHlMaXN0IiwiYWRkVG9Nb250aGx5Iiwic2hvd01vbnRobHlMaXN0IiwiYWRkVG9ZZWFybHkiLCJzaG93WWVhcmx5TGlzdCIsInJlc2V0IiwiZGFpbHlMaXN0IiwiSlNPTiIsInBhcnNlIiwiZGFpbHlGaW5pc2hlZCIsIndlZWtseUxpc3QiLCJ3ZWVrbHlGaW5pc2hlZCIsIm1vbnRobHlMaXN0IiwibW9udGhseUZpbmlzaGVkIiwieWVhcmx5TGlzdCIsInllYXJseUZpbmlzaGVkIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpbm5lckhUTUwiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwicCIsImljb24iLCJhcHBlbmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsImZvdW5kIiwiZmluZEluZGV4IiwiZWwiLCJ0aGlzSXRlbSIsInJlY3ljbGVkSXRlbSIsInNwbGljZSIsInVwZ3JhZGVJY29ucyIsInVwZ3JhZGVJdGVtIiwidHJhc2hJY29ucyIsImxvd1RyYXNoSWNvbnMiLCJzdHlsZXMiLCJ3aW5kb3ciLCJkYWlseSIsIndlZWtseSIsInJlbW92ZSIsIm1vbnRobHkiLCJ5ZWFybHkiXSwic291cmNlUm9vdCI6IiJ9