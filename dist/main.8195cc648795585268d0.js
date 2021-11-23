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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n}\n\n/* Header Settings */\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 4rem;\n  background-color: #011627;\n  color: #fdfffc;\n  font-weight: bolder;\n}\n\n/* Main Content Settings */\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  width: 100%;\n  background-color: #fdfffc;\n  color: #ff9f1c;\n}\n\n.container {\n  display: flex;\n  flex-grow: 1;\n}\n\n.settings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 20%;\n  /* flex-grow: 1; */\n  font-size: 1.2rem;\n  background-color: #2ec4b6;\n  color: #fdfffc;\n  font-weight: bold;\n}\n\n.settings p {\n  cursor: pointer;\n}\n\n.settings p:hover {\n  color: #011627;\n}\n\n.active {\n  color: #011627;\n}\n\n.question {\n  margin-bottom: 3rem;\n}\n\n.list {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #ff9f1c;\n  text-align: center;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\n.high {\n  width: 100%;\n  height: auto;\n  margin-top: .5rem;\n}\n\n.low {\n  width: 100%;\n  height: auto;\n  margin-top: .2rem;\n  text-decoration: line-through;\n}\n\n.input {\n  display: flex;\n}\n\n/* Footer Settings */\n\nfooter {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #011627;\n  color: #fdfffc;\n  margin-top: auto;\n}\n\n.social {\n  display: flex;\n}\n\n.social p {\n  margin: .2rem;\n  padding: .2rem;\n}\n\n/* Extra Styling Settings */\n\n.lists {\n  margin: auto;\n  width: 70%;\n  background-color: #fdfffc;\n  color: #6b705c;\n  min-height: 50vh;\n  border-radius: 10px;\n  box-shadow: 10px 5px 5px #e71d36;\n  border: 1px solid #011627;\n}\n\n.newItem {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #6b705c;\n  margin: .5rem;\n}\n\n.plus {\n  background-color: #2ec4b6;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  cursor: pointer;\n  margin-right: .5rem;\n  margin-left: .5rem;\n  margin-bottom: 1rem;\n}\n\n.textBox {\n  border-radius: 5px;\n  margin-bottom: 1rem;\n}\n\n.borderBot::after {\n  content: '';\n  display: block;\n  width: 4rem;\n  height: 1px;\n  margin: 3rem auto 1rem;\n  background-color: black;\n  opacity: .2;\n}\n\n.icon {\n  margin-left: 2rem;\n  margin-right: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,iCAAiC;EACjC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;AACnB;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,mBAAmB;AACrB;;AAEA,0BAA0B;;AAE1B;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA,oBAAoB;;AAEpB;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA,2BAA2B;;AAE3B;EACE,YAAY;EACZ,UAAU;EACV,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB","sourcesContent":["body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n}\n\n/* Header Settings */\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 4rem;\n  background-color: #011627;\n  color: #fdfffc;\n  font-weight: bolder;\n}\n\n/* Main Content Settings */\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  width: 100%;\n  background-color: #fdfffc;\n  color: #ff9f1c;\n}\n\n.container {\n  display: flex;\n  flex-grow: 1;\n}\n\n.settings {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 20%;\n  /* flex-grow: 1; */\n  font-size: 1.2rem;\n  background-color: #2ec4b6;\n  color: #fdfffc;\n  font-weight: bold;\n}\n\n.settings p {\n  cursor: pointer;\n}\n\n.settings p:hover {\n  color: #011627;\n}\n\n.active {\n  color: #011627;\n}\n\n.question {\n  margin-bottom: 3rem;\n}\n\n.list {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #ff9f1c;\n  text-align: center;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\n.high {\n  width: 100%;\n  height: auto;\n  margin-top: .5rem;\n}\n\n.low {\n  width: 100%;\n  height: auto;\n  margin-top: .2rem;\n  text-decoration: line-through;\n}\n\n.input {\n  display: flex;\n}\n\n/* Footer Settings */\n\nfooter {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 100%;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #011627;\n  color: #fdfffc;\n  margin-top: auto;\n}\n\n.social {\n  display: flex;\n}\n\n.social p {\n  margin: .2rem;\n  padding: .2rem;\n}\n\n/* Extra Styling Settings */\n\n.lists {\n  margin: auto;\n  width: 70%;\n  background-color: #fdfffc;\n  color: #6b705c;\n  min-height: 50vh;\n  border-radius: 10px;\n  box-shadow: 10px 5px 5px #e71d36;\n  border: 1px solid #011627;\n}\n\n.newItem {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #6b705c;\n  margin: .5rem;\n}\n\n.plus {\n  background-color: #2ec4b6;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  cursor: pointer;\n  margin-right: .5rem;\n  margin-left: .5rem;\n  margin-bottom: 1rem;\n}\n\n.textBox {\n  border-radius: 5px;\n  margin-bottom: 1rem;\n}\n\n.borderBot::after {\n  content: '';\n  display: block;\n  width: 4rem;\n  height: 1px;\n  margin: 3rem auto 1rem;\n  background-color: black;\n  opacity: .2;\n}\n\n.icon {\n  margin-left: 2rem;\n  margin-right: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUF3QixRQUF4QjtBQUNILENBTEQ7QUFPQSxJQUFNRSxNQUFNLEdBQUd6RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBd0UsTUFBTSxDQUFDekQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVTtBQUN2Q0gsRUFBQUEsUUFBUSxDQUFDTSxTQUFULEdBQXFCLGtCQUFyQjtBQUNILENBRkQ7QUFHQXNELE1BQU0sQ0FBQ3pELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDYyx5REFBakM7QUFDQTJDLE1BQU0sQ0FBQ3pELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVU7QUFDdkNxRCxFQUFBQSxLQUFLLENBQUNsQixTQUFOLENBQWdCb0IsTUFBaEIsQ0FBdUIsUUFBdkI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDbkIsU0FBUCxDQUFpQm9CLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ3JCLFNBQVIsQ0FBa0JvQixNQUFsQixDQUF5QixRQUF6QjtBQUNBRSxFQUFBQSxNQUFNLENBQUN0QixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNILENBTEQsR0FjQTtBQUNBO0FBQ0E7QUFDQSxvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2staW50cm8vLi9zcmMvc2NyaXB0cy9zaG93TGlzdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2staW50cm8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWludHJvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1pbnRyby8uL3NyYy9zY3JpcHRzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0xpc3QgaW5uZXJIVE1MXG5jb25zdCBoaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdoXCIpO1xuY29uc3QgbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb3dcIik7XG5sZXQgbG9jYWxEYWlseVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIpO1xubGV0IGxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgXCJsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlXCJcbik7XG5sZXQgbG9jYWxXZWVrbHlTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIik7XG5sZXQgbG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgXCJsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZVwiXG4pO1xubGV0IGxvY2FsTW9udGhseVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsTW9udGhseVN0b3JhZ2VcIik7XG5sZXQgbG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXG4gIFwibG9jYWxNb250aGx5RmluaXNoZWRTdG9yYWdlXCJcbik7XG5sZXQgbG9jYWxZZWFybHlTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIik7XG5sZXQgbG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgXCJsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZVwiXG4pO1xuXG4vL05ldyBpdGVtc1xuY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHRCb3hcIik7XG5cbi8vRm9ybVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1mb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudE9iamVjdCkge1xuICBldmVudE9iamVjdC5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAoXG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID09PSBcIldoYXQgZG8geW91IG5lZWQgdG8gZG8gdG9kYXk/XCIgfHxcbiAgICBxdWVzdGlvbi5pbm5lclRleHQgPT09IFwiWW91ciBEYWlseSBMaXN0XCJcbiAgKSB7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgIGl0ZW0uYWRkVG9EYWlseSgpO1xuICAgICAgcmV0dXJuIHNob3dEYWlseUxpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIGlmIChxdWVzdGlvbi5pbm5lclRleHQgPT09IFwiWW91ciBXZWVrbHkgTGlzdFwiKSB7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgIGl0ZW0uYWRkVG9XZWVrbHkoKTtcbiAgICAgIHJldHVybiBzaG93V2Vla2x5TGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKHF1ZXN0aW9uLmlubmVyVGV4dCA9PT0gXCJZb3VyIE1vbnRobHkgTGlzdFwiKSB7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgIGl0ZW0uYWRkVG9Nb250aGx5KCk7XG4gICAgICByZXR1cm4gc2hvd01vbnRobHlMaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAocXVlc3Rpb24uaW5uZXJUZXh0ID09PSBcIllvdXIgWWVhcmx5IExpc3RcIikge1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbShpbnB1dC52YWx1ZSk7XG4gICAgICBpdGVtLmFkZFRvWWVhcmx5KCk7XG4gICAgICByZXR1cm4gc2hvd1llYXJseUxpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufSk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKCkge1xuICBmb3JtLnJlc2V0KCk7XG59KTtcblxuXG4vL0RhaWx5IGFycmF5c1xubGV0IGRhaWx5TGlzdCA9IEpTT04ucGFyc2UobG9jYWxEYWlseVN0b3JhZ2UpO1xuaWYgKGxvY2FsRGFpbHlTdG9yYWdlID09IG51bGwpIHtcbiAgZGFpbHlMaXN0ID0gW107XG59XG5sZXQgZGFpbHlGaW5pc2hlZCA9IEpTT04ucGFyc2UobG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZSk7XG5pZiAobG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZSA9PSBudWxsKSB7XG4gIGRhaWx5RmluaXNoZWQgPSBbXTtcbn1cblxuLy9XZWVrbHkgYXJyYXlzXG5sZXQgd2Vla2x5TGlzdCA9IEpTT04ucGFyc2UobG9jYWxXZWVrbHlTdG9yYWdlKTtcbmlmIChsb2NhbFdlZWtseVN0b3JhZ2UgPT0gbnVsbCkge1xuICB3ZWVrbHlMaXN0ID0gW107XG59XG5sZXQgd2Vla2x5RmluaXNoZWQgPSBKU09OLnBhcnNlKGxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlKTtcbmlmIChsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZSA9PSBudWxsKSB7XG4gIHdlZWtseUZpbmlzaGVkID0gW107XG59XG5cbi8vTW9udGhseSBhcnJheXNcbmxldCBtb250aGx5TGlzdCA9IEpTT04ucGFyc2UobG9jYWxNb250aGx5U3RvcmFnZSk7XG5pZiAobG9jYWxNb250aGx5U3RvcmFnZSA9PSBudWxsKSB7XG4gIG1vbnRobHlMaXN0ID0gW107XG59XG5sZXQgbW9udGhseUZpbmlzaGVkID0gSlNPTi5wYXJzZShsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2UpO1xuaWYgKGxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZSA9PSBudWxsKSB7XG4gIG1vbnRobHlGaW5pc2hlZCA9IFtdO1xufVxuXG4vL1llYXJseSBhcnJheXNcbmxldCB5ZWFybHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFllYXJseVN0b3JhZ2UpO1xuaWYgKGxvY2FsWWVhcmx5U3RvcmFnZSA9PSBudWxsKSB7XG4gIHllYXJseUxpc3QgPSBbXTtcbn1cbmxldCB5ZWFybHlGaW5pc2hlZCA9IEpTT04ucGFyc2UobG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2UpO1xuaWYgKGxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlID09IG51bGwpIHtcbiAgeWVhcmx5RmluaXNoZWQgPSBbXTtcbn1cblxuLy9DbGFzc2VzXG5jbGFzcyBJdGVtIHtcbiAgY29uc3RydWN0b3IoaXRlbSkge1xuICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gIH1cbiAgYWRkVG9EYWlseSgpIHtcbiAgICBkYWlseUxpc3QucHVzaChgJHt0aGlzLml0ZW19YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbERhaWx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgfVxuICBhZGRUb1dlZWtseSgpIHtcbiAgICB3ZWVrbHlMaXN0LnB1c2goYCR7dGhpcy5pdGVtfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxXZWVrbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbiAgfVxuICBhZGRUb01vbnRobHkoKSB7XG4gICAgbW9udGhseUxpc3QucHVzaChgJHt0aGlzLml0ZW19YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE1vbnRobHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG4gIH1cbiAgYWRkVG9ZZWFybHkoKSB7XG4gICAgeWVhcmx5TGlzdC5wdXNoKGAke3RoaXMuaXRlbX1gKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsWWVhcmx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh5ZWFybHlMaXN0KSk7XG4gIH1cbn1cblxuLy9EYWlseSBsaXN0IGZ1bmN0aW9uXG5jb25zdCBzaG93RGFpbHlMaXN0ID0gKCkgPT4ge1xuICBoaWdoLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvdy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChkYWlseUxpc3QpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGRhaWx5TGlzdCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlucHV0LmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY2FsZXNcIiBuYW1lPVwibGlzdC1pdGVtXCI+JztcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXJlY3ljbGUgaWNvbiByZWN5Y2xlXCI+PC9pPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHRyYXNoXCI+PC9pPmA7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgaGlnaC5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhaWx5RmluaXNoZWQpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGRhaWx5RmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbnB1dC5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NhbGVzXCIgbmFtZT1cImxpc3QtaXRlbVwiPic7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9XG4gICAgICAgICc8aSBjbGFzcz1cImZhcyBmYS1sZXZlbC11cC1hbHQgaWNvbiB1cGdyYWRlXCI+PC9pPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHJlY3ljbGVkLXRyYXNoXCI+PC9pPic7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgbG93LmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBpY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IGRhaWx5TGlzdC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gZGFpbHlMaXN0W2ZvdW5kXTtcbiAgICAgIGRhaWx5RmluaXNoZWQucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gZGFpbHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShkYWlseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93RGFpbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdXBncmFkZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGdyYWRlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHVwZ3JhZGVJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IGRhaWx5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IGRhaWx5RmluaXNoZWRbZm91bmRdO1xuICAgICAgZGFpbHlMaXN0LnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHVwZ3JhZGVJdGVtID0gZGFpbHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbERhaWx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsRGFpbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGFpbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd0RhaWx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHRyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHRyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBkYWlseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IGRhaWx5TGlzdFtmb3VuZF07XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gZGFpbHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsRGFpbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShkYWlseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93RGFpbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgbG93VHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZWQtdHJhc2hcIik7XG4gIGZvciAobGV0IGljb24gb2YgbG93VHJhc2hJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IGRhaWx5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IGRhaWx5RmluaXNoZWRbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IGRhaWx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxEYWlseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoZGFpbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbERhaWx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGRhaWx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dEYWlseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy9XZWVrbHkgbGlzdCBmdW5jdGlvblxuY29uc3Qgc2hvd1dlZWtseUxpc3QgPSAoKSA9PiB7XG4gIGhpZ2guaW5uZXJIVE1MID0gXCJcIjtcbiAgbG93LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKHdlZWtseUxpc3QpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHdlZWtseUxpc3QpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbnB1dC5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NhbGVzXCIgbmFtZT1cImxpc3QtaXRlbVwiPic7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1yZWN5Y2xlIGljb24gcmVjeWNsZVwiPjwvaT48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgaWNvbiB0cmFzaFwiPjwvaT5gO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGhpZ2guYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGlmICh3ZWVrbHlGaW5pc2hlZCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2Ygd2Vla2x5RmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbnB1dC5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NhbGVzXCIgbmFtZT1cImxpc3QtaXRlbVwiPic7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9XG4gICAgICAgICc8aSBjbGFzcz1cImZhcyBmYS1sZXZlbC11cC1hbHQgaWNvbiB1cGdyYWRlXCI+PC9pPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHJlY3ljbGVkLXRyYXNoXCI+PC9pPic7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgbG93LmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBpY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHdlZWtseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHdlZWtseUxpc3RbZm91bmRdO1xuICAgICAgd2Vla2x5RmluaXNoZWQucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0gd2Vla2x5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkod2Vla2x5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dXZWVrbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdXBncmFkZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGdyYWRlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHVwZ3JhZGVJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHdlZWtseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB3ZWVrbHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICB3ZWVrbHlMaXN0LnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHVwZ3JhZGVJdGVtID0gd2Vla2x5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxXZWVrbHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHdlZWtseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93V2Vla2x5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHRyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHRyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB3ZWVrbHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB3ZWVrbHlMaXN0W2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB3ZWVrbHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsV2Vla2x5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFdlZWtseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh3ZWVrbHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1dlZWtseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBsb3dUcmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlZC10cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBsb3dUcmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gd2Vla2x5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHdlZWtseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB3ZWVrbHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFdlZWtseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxXZWVrbHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkod2Vla2x5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dXZWVrbHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vTW9udGhseSBsaXN0IGZ1bmN0aW9uXG5jb25zdCBzaG93TW9udGhseUxpc3QgPSAoKSA9PiB7XG4gIGhpZ2guaW5uZXJIVE1MID0gXCJcIjtcbiAgbG93LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKG1vbnRobHlMaXN0KSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBtb250aGx5TGlzdCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlucHV0LmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJzY2FsZXNcIiBuYW1lPVwibGlzdC1pdGVtXCI+JztcbiAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgIGljb24uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXJlY3ljbGUgaWNvbiByZWN5Y2xlXCI+PC9pPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHRyYXNoXCI+PC9pPmA7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgaGlnaC5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgaWYgKG1vbnRobHlGaW5pc2hlZCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgbW9udGhseUZpbmlzaGVkKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaW5wdXQuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNjYWxlc1wiIG5hbWU9XCJsaXN0LWl0ZW1cIj4nO1xuICAgICAgcC5pbm5lclRleHQgPSBpdGVtO1xuICAgICAgaWNvbi5pbm5lckhUTUwgPVxuICAgICAgICAnPGkgY2xhc3M9XCJmYXMgZmEtbGV2ZWwtdXAtYWx0IGljb24gdXBncmFkZVwiPjwvaT48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgaWNvbiByZWN5Y2xlZC10cmFzaFwiPjwvaT4nO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGxvdy5hcHBlbmQoZGl2KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlY3ljbGVcIik7XG4gIGZvciAobGV0IGljb24gb2YgaWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBtb250aGx5TGlzdC5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gdmFsdWUpO1xuICAgICAgbGV0IHRoaXNJdGVtID0gbW9udGhseUxpc3RbZm91bmRdO1xuICAgICAgbW9udGhseUZpbmlzaGVkLnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IG1vbnRobHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsTW9udGhseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShtb250aGx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dNb250aGx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHVwZ3JhZGVJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXBncmFkZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB1cGdyYWRlSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSBtb250aGx5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IG1vbnRobHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICBtb250aGx5TGlzdC5wdXNoKHRoaXNJdGVtKTtcbiAgICAgIGxldCB1cGdyYWRlSXRlbSA9IG1vbnRobHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE1vbnRobHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkobW9udGhseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93TW9udGhseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB0cmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiB0cmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gbW9udGhseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IG1vbnRobHlMaXN0W2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSBtb250aGx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE1vbnRobHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkobW9udGhseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93TW9udGhseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBsb3dUcmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlZC10cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBsb3dUcmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0gbW9udGhseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSBtb250aGx5RmluaXNoZWRbZm91bmRdO1xuICAgICAgbGV0IHJlY3ljbGVkSXRlbSA9IG1vbnRobHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE1vbnRobHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbE1vbnRobHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkobW9udGhseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93TW9udGhseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy9ZZWFybHkgbGlzdCBmdW5jdGlvblxuY29uc3Qgc2hvd1llYXJseUxpc3QgPSAoKSA9PiB7XG4gIGhpZ2guaW5uZXJIVE1MID0gXCJcIjtcbiAgbG93LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKHllYXJseUxpc3QpIHtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHllYXJseUxpc3QpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbnB1dC5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NhbGVzXCIgbmFtZT1cImxpc3QtaXRlbVwiPic7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1yZWN5Y2xlIGljb24gcmVjeWNsZVwiPjwvaT48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgaWNvbiB0cmFzaFwiPjwvaT5gO1xuICAgICAgZGl2LmFwcGVuZChwLCBpY29uKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3SXRlbVwiKTtcbiAgICAgIGhpZ2guYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGlmICh5ZWFybHlGaW5pc2hlZCkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgeWVhcmx5RmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbnB1dC5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic2NhbGVzXCIgbmFtZT1cImxpc3QtaXRlbVwiPic7XG4gICAgICBwLmlubmVyVGV4dCA9IGl0ZW07XG4gICAgICBpY29uLmlubmVySFRNTCA9XG4gICAgICAgICc8aSBjbGFzcz1cImZhcyBmYS1sZXZlbC11cC1hbHQgaWNvbiB1cGdyYWRlXCI+PC9pPjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBpY29uIHJlY3ljbGVkLXRyYXNoXCI+PC9pPic7XG4gICAgICBkaXYuYXBwZW5kKHAsIGljb24pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdJdGVtXCIpO1xuICAgICAgbG93LmFwcGVuZChkaXYpO1xuICAgIH1cbiAgfVxuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjeWNsZVwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBpY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHllYXJseUxpc3QuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHllYXJseUxpc3RbZm91bmRdO1xuICAgICAgeWVhcmx5RmluaXNoZWQucHVzaCh0aGlzSXRlbSk7XG4gICAgICBsZXQgcmVjeWNsZWRJdGVtID0geWVhcmx5TGlzdC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoeWVhcmx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeWVhcmx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dZZWFybHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdXBncmFkZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGdyYWRlXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHVwZ3JhZGVJY29ucykge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXYgPSBpY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGxldCB2YWx1ZSA9IGRpdi5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIGxldCBmb3VuZCA9IHllYXJseUZpbmlzaGVkLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB5ZWFybHlGaW5pc2hlZFtmb3VuZF07XG4gICAgICB5ZWFybHlMaXN0LnB1c2godGhpc0l0ZW0pO1xuICAgICAgbGV0IHVwZ3JhZGVJdGVtID0geWVhcmx5RmluaXNoZWQuc3BsaWNlKGZvdW5kLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxZZWFybHlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHllYXJseUxpc3QpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlXCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHllYXJseUZpbmlzaGVkKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzaG93WWVhcmx5TGlzdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHRyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoXCIpO1xuICBmb3IgKGxldCBpY29uIG9mIHRyYXNoSWNvbnMpIHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGl2ID0gaWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBsZXQgdmFsdWUgPSBkaXYuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICBsZXQgZm91bmQgPSB5ZWFybHlMaXN0LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSB2YWx1ZSk7XG4gICAgICBsZXQgdGhpc0l0ZW0gPSB5ZWFybHlMaXN0W2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB5ZWFybHlMaXN0LnNwbGljZShmb3VuZCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsWWVhcmx5U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh5ZWFybHlMaXN0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgXCJsb2NhbFllYXJseUZpbmlzaGVkU3RvcmFnZVwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh5ZWFybHlGaW5pc2hlZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gc2hvd1llYXJseUxpc3QoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBsb3dUcmFzaEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWN5Y2xlZC10cmFzaFwiKTtcbiAgZm9yIChsZXQgaWNvbiBvZiBsb3dUcmFzaEljb25zKSB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpdiA9IGljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbGV0IHZhbHVlID0gZGl2LmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgbGV0IGZvdW5kID0geWVhcmx5RmluaXNoZWQuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IHZhbHVlKTtcbiAgICAgIGxldCB0aGlzSXRlbSA9IHllYXJseUZpbmlzaGVkW2ZvdW5kXTtcbiAgICAgIGxldCByZWN5Y2xlZEl0ZW0gPSB5ZWFybHlGaW5pc2hlZC5zcGxpY2UoZm91bmQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFllYXJseVN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkoeWVhcmx5TGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwibG9jYWxZZWFybHlGaW5pc2hlZFN0b3JhZ2VcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeWVhcmx5RmluaXNoZWQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHNob3dZZWFybHlMaXN0KCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vRXhwb3J0c1xuZXhwb3J0IHsgc2hvd0RhaWx5TGlzdCwgc2hvd1dlZWtseUxpc3QsIHNob3dNb250aGx5TGlzdCwgc2hvd1llYXJseUxpc3QgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyIFNldHRpbmdzICovXFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mjc7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIE1haW4gQ29udGVudCBTZXR0aW5ncyAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZmZmM7XFxuICBjb2xvcjogI2ZmOWYxYztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc2V0dGluZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjAlO1xcbiAgLyogZmxleC1ncm93OiAxOyAqL1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgY29sb3I6ICNmZGZmZmM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNldHRpbmdzIHAge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MgcDpob3ZlciB7XFxuICBjb2xvcjogIzAxMTYyNztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogIzAxMTYyNztcXG59XFxuXFxuLnF1ZXN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5saXN0IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmOWYxYztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhpZ2gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmxvdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IC4ycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBGb290ZXIgU2V0dGluZ3MgKi9cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjI3O1xcbiAgY29sb3I6ICNmZGZmZmM7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uc29jaWFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zb2NpYWwgcCB7XFxuICBtYXJnaW46IC4ycmVtO1xcbiAgcGFkZGluZzogLjJyZW07XFxufVxcblxcbi8qIEV4dHJhIFN0eWxpbmcgU2V0dGluZ3MgKi9cXG5cXG4ubGlzdHMge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZmZmM7XFxuICBjb2xvcjogIzZiNzA1YztcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4ICNlNzFkMzY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDExNjI3O1xcbn1cXG5cXG4ubmV3SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjNmI3MDVjO1xcbiAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuLnBsdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlYzRiNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50ZXh0Qm94IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5ib3JkZXJCb3Q6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAzcmVtIGF1dG8gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogLjI7XFxufVxcblxcbi5pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIZWFkZXIgU2V0dGluZ3MgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYyNztcXG4gIGNvbG9yOiAjZmRmZmZjO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50IFNldHRpbmdzICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZmYztcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5zZXR0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMCU7XFxuICAvKiBmbGV4LWdyb3c6IDE7ICovXFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWM0YjY7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2V0dGluZ3MgcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZXR0aW5ncyBwOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDExNjI3O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDExNjI3O1xcbn1cXG5cXG4ucXVlc3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmY5ZjFjO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGlnaCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4ubG93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLjJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEZvb3RlciBTZXR0aW5ncyAqL1xcblxcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mjc7XFxuICBjb2xvcjogI2ZkZmZmYztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5zb2NpYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNvY2lhbCBwIHtcXG4gIG1hcmdpbjogLjJyZW07XFxuICBwYWRkaW5nOiAuMnJlbTtcXG59XFxuXFxuLyogRXh0cmEgU3R5bGluZyBTZXR0aW5ncyAqL1xcblxcbi5saXN0cyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZmYztcXG4gIGNvbG9yOiAjNmI3MDVjO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDVweCA1cHggI2U3MWQzNjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTE2Mjc7XFxufVxcblxcbi5uZXdJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICM2YjcwNWM7XFxuICBtYXJnaW46IC41cmVtO1xcbn1cXG5cXG4ucGx1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRleHRCb3gge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmJvcmRlckJvdDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDNyZW0gYXV0byAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAuMjtcXG59XFxuXFxuLmljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHtzaG93RGFpbHlMaXN0fSBmcm9tIFwiLi9zaG93TGlzdHMuanNcIjtcbmltcG9ydCB7c2hvd1dlZWtseUxpc3R9IGZyb20gXCIuL3Nob3dMaXN0cy5qc1wiO1xuaW1wb3J0IHtzaG93TW9udGhseUxpc3R9IGZyb20gXCIuL3Nob3dMaXN0cy5qc1wiO1xuaW1wb3J0IHtzaG93WWVhcmx5TGlzdH0gZnJvbSBcIi4vc2hvd0xpc3RzLmpzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2hvd0RhaWx5TGlzdCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG4gICAgZGFpbHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn0pO1xuXG5jb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb25cIik7XG5cbi8vTGlzdHNcbmNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhaWx5Jyk7XG5kYWlseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgRGFpbHkgTGlzdCdcbn0pO1xuZGFpbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RGFpbHlMaXN0KTtcbmRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBkYWlseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIHdlZWtseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIG1vbnRobHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB5ZWFybHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbn0pO1xuXG5jb25zdCB3ZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2Vla2x5Jyk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHF1ZXN0aW9uLmlubmVyVGV4dCA9ICdZb3VyIFdlZWtseSBMaXN0J1xufSk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93V2Vla2x5TGlzdCk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGRhaWx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgd2Vla2x5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgbW9udGhseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIHllYXJseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxufSk7XG5cbmNvbnN0IG1vbnRobHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9udGhseScpO1xubW9udGhseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgTW9udGhseSBMaXN0J1xufSk7XG5tb250aGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vbnRobHlMaXN0KTtcbm1vbnRobHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGRhaWx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgd2Vla2x5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgbW9udGhseS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIHllYXJseS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxufSk7XG5cbmNvbnN0IHllYXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5ZWFybHknKTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgcXVlc3Rpb24uaW5uZXJUZXh0ID0gJ1lvdXIgWWVhcmx5IExpc3QnXG59KTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dZZWFybHlMaXN0KTtcbnllYXJseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgZGFpbHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB3ZWVrbHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICBtb250aGx5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgeWVhcmx5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG59KTtcblxuXG5cblxuXG5cblxuXG4vLyAvL1Rlc3QgQnVpbGRcbi8vIGltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuLy8gY29uc29sZS5sb2coXCJJJ20gaGVyZSFcIik7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZChjb21wb25lbnQoKSlcbiJdLCJuYW1lcyI6WyJoaWdoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG93IiwibG9jYWxEYWlseVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxEYWlseUZpbmlzaGVkU3RvcmFnZSIsImxvY2FsV2Vla2x5U3RvcmFnZSIsImxvY2FsV2Vla2x5RmluaXNoZWRTdG9yYWdlIiwibG9jYWxNb250aGx5U3RvcmFnZSIsImxvY2FsTW9udGhseUZpbmlzaGVkU3RvcmFnZSIsImxvY2FsWWVhcmx5U3RvcmFnZSIsImxvY2FsWWVhcmx5RmluaXNoZWRTdG9yYWdlIiwicXVlc3Rpb24iLCJpbnB1dCIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRPYmplY3QiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVyVGV4dCIsInZhbHVlIiwiaXRlbSIsIkl0ZW0iLCJhZGRUb0RhaWx5Iiwic2hvd0RhaWx5TGlzdCIsImFkZFRvV2Vla2x5Iiwic2hvd1dlZWtseUxpc3QiLCJhZGRUb01vbnRobHkiLCJzaG93TW9udGhseUxpc3QiLCJhZGRUb1llYXJseSIsInNob3dZZWFybHlMaXN0IiwicmVzZXQiLCJkYWlseUxpc3QiLCJKU09OIiwicGFyc2UiLCJkYWlseUZpbmlzaGVkIiwid2Vla2x5TGlzdCIsIndlZWtseUZpbmlzaGVkIiwibW9udGhseUxpc3QiLCJtb250aGx5RmluaXNoZWQiLCJ5ZWFybHlMaXN0IiwieWVhcmx5RmluaXNoZWQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImlubmVySFRNTCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJwIiwiaWNvbiIsImFwcGVuZCIsImNsYXNzTGlzdCIsImFkZCIsImljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwiZm91bmQiLCJmaW5kSW5kZXgiLCJlbCIsInRoaXNJdGVtIiwicmVjeWNsZWRJdGVtIiwic3BsaWNlIiwidXBncmFkZUljb25zIiwidXBncmFkZUl0ZW0iLCJ0cmFzaEljb25zIiwibG93VHJhc2hJY29ucyIsInN0eWxlcyIsIndpbmRvdyIsImRhaWx5Iiwid2Vla2x5IiwicmVtb3ZlIiwibW9udGhseSIsInllYXJseSJdLCJzb3VyY2VSb290IjoiIn0=