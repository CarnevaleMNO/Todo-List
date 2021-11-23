//List innerHTML
const high = document.querySelector(".high");
const low = document.querySelector(".low");
let localDailyStorage = localStorage.getItem("localDailyStorage");
let localDailyFinishedStorage = localStorage.getItem(
  "localDailyFinishedStorage"
);
let localWeeklyStorage = localStorage.getItem("localWeeklyStorage");
let localWeeklyFinishedStorage = localStorage.getItem(
  "localWeeklyFinishedStorage"
);
let localMonthlyStorage = localStorage.getItem("localMonthlyStorage");
let localMonthlyFinishedStorage = localStorage.getItem(
  "localMonthlyFinishedStorage"
);
let localYearlyStorage = localStorage.getItem("localYearlyStorage");
let localYearlyFinishedStorage = localStorage.getItem(
  "localYearlyFinishedStorage"
);

//New items
const question = document.querySelector(".question");
const input = document.querySelector(".textBox");

//Form
const form = document.querySelector(".list-form");
form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
});
form.addEventListener("submit", function () {
  if (
    question.innerText === "What do you need to do today?" ||
    question.innerText === "Your Daily List"
  ) {
    if (input.value !== "") {
      let item = new Item(input.value);
      item.addToDaily();
      return showDailyList();
    } else {
      return;
    }
  } else if (question.innerText === "Your Weekly List") {
    if (input.value !== "") {
      let item = new Item(input.value);
      item.addToWeekly();
      return showWeeklyList();
    } else {
      return;
    }
  } else if (question.innerText === "Your Monthly List") {
    if (input.value !== "") {
      let item = new Item(input.value);
      item.addToMonthly();
      return showMonthlyList();
    } else {
      return;
    }
  } else if (question.innerText === "Your Yearly List") {
    if (input.value !== "") {
      let item = new Item(input.value);
      item.addToYearly();
      return showYearlyList();
    } else {
      return;
    }
  }
});

//Daily arrays
let dailyList = JSON.parse(localDailyStorage);
if (localDailyStorage == null) {
  dailyList = [];
}
let dailyFinished = JSON.parse(localDailyFinishedStorage);
if (localDailyFinishedStorage == null) {
  dailyFinished = [];
}

//Weekly arrays
let weeklyList = JSON.parse(localWeeklyStorage);
if (localWeeklyStorage == null) {
  weeklyList = [];
}
let weeklyFinished = JSON.parse(localWeeklyFinishedStorage);
if (localWeeklyFinishedStorage == null) {
  weeklyFinished = [];
}

//Monthly arrays
let monthlyList = JSON.parse(localMonthlyStorage);
if (localMonthlyStorage == null) {
  monthlyList = [];
}
let monthlyFinished = JSON.parse(localMonthlyFinishedStorage);
if (localMonthlyFinishedStorage == null) {
  monthlyFinished = [];
}

//Yearly arrays
let yearlyList = JSON.parse(localYearlyStorage);
if (localYearlyStorage == null) {
  yearlyList = [];
}
let yearlyFinished = JSON.parse(localYearlyFinishedStorage);
if (localYearlyFinishedStorage == null) {
  yearlyFinished = [];
}

//Classes
class Item {
  constructor(item) {
    this.item = item;
  }
  addToDaily() {
    dailyList.push(`${this.item}`);
    localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
  }
  addToWeekly() {
    weeklyList.push(`${this.item}`);
    localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
  }
  addToMonthly() {
    monthlyList.push(`${this.item}`);
    localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
  }
  addToYearly() {
    yearlyList.push(`${this.item}`);
    localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
  }
}

//Daily list function
const showDailyList = () => {
  high.innerHTML = "";
  low.innerHTML = "";

  if (dailyList) {
    for (let item of dailyList) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const icon = document.createElement("p");
      const input = document.createElement("div");
      input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
      p.innerText = item;
      icon.innerHTML = `<i class="fas fa-recycle icon recycle"></i><i class="far fa-trash-alt icon trash"></i>`;
      div.append(p, icon);
      div.classList.add("newItem");
      high.append(div);
    }
  }
  if (dailyFinished) {
    for (let item of dailyFinished) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const icon = document.createElement("p");
      const input = document.createElement("div");
      input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
      p.innerText = item;
      icon.innerHTML =
        '<i class="fas fa-level-up-alt icon upgrade"></i><i class="far fa-trash-alt icon recycled-trash"></i>';
      div.append(p, icon);
      div.classList.add("newItem");
      low.append(div);
    }
  }
  const icons = document.querySelectorAll(".recycle");
  for (let icon of icons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = dailyList.findIndex((el) => el === value);
      let thisItem = dailyList[found];
      dailyFinished.push(thisItem);
      let recycledItem = dailyList.splice(found, 1);
      localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
      localStorage.setItem(
        "localDailyFinishedStorage",
        JSON.stringify(dailyFinished)
      );
      return showDailyList();
    });
  }
  const upgradeIcons = document.querySelectorAll(".upgrade");
  for (let icon of upgradeIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = dailyFinished.findIndex((el) => el === value);
      let thisItem = dailyFinished[found];
      dailyList.push(thisItem);
      let upgradeItem = dailyFinished.splice(found, 1);
      localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
      localStorage.setItem(
        "localDailyFinishedStorage",
        JSON.stringify(dailyFinished)
      );
      return showDailyList();
    });
  }
  const trashIcons = document.querySelectorAll(".trash");
  for (let icon of trashIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = dailyList.findIndex((el) => el === value);
      let thisItem = dailyList[found];
      let recycledItem = dailyList.splice(found, 1);
      localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
      localStorage.setItem(
        "localDailyFinishedStorage",
        JSON.stringify(dailyFinished)
      );
      return showDailyList();
    });
  }
  const lowTrashIcons = document.querySelectorAll(".recycled-trash");
  for (let icon of lowTrashIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = dailyFinished.findIndex((el) => el === value);
      let thisItem = dailyFinished[found];
      let recycledItem = dailyFinished.splice(found, 1);
      localStorage.setItem("localDailyStorage", JSON.stringify(dailyList));
      localStorage.setItem(
        "localDailyFinishedStorage",
        JSON.stringify(dailyFinished)
      );
      return showDailyList();
    });
  }
};

//Weekly list function
const showWeeklyList = () => {
  high.innerHTML = "";
  low.innerHTML = "";

  if (weeklyList) {
    for (let item of weeklyList) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const icon = document.createElement("p");
      const input = document.createElement("div");
      input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
      p.innerText = item;
      icon.innerHTML = `<i class="fas fa-recycle icon recycle"></i><i class="far fa-trash-alt icon trash"></i>`;
      div.append(p, icon);
      div.classList.add("newItem");
      high.append(div);
    }
  }
  if (weeklyFinished) {
    for (let item of weeklyFinished) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const icon = document.createElement("p");
      const input = document.createElement("div");
      input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
      p.innerText = item;
      icon.innerHTML =
        '<i class="fas fa-level-up-alt icon upgrade"></i><i class="far fa-trash-alt icon recycled-trash"></i>';
      div.append(p, icon);
      div.classList.add("newItem");
      low.append(div);
    }
  }
  const icons = document.querySelectorAll(".recycle");
  for (let icon of icons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = weeklyList.findIndex((el) => el === value);
      let thisItem = weeklyList[found];
      weeklyFinished.push(thisItem);
      let recycledItem = weeklyList.splice(found, 1);
      localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
      localStorage.setItem(
        "localWeeklyFinishedStorage",
        JSON.stringify(weeklyFinished)
      );
      return showWeeklyList();
    });
  }
  const upgradeIcons = document.querySelectorAll(".upgrade");
  for (let icon of upgradeIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = weeklyFinished.findIndex((el) => el === value);
      let thisItem = weeklyFinished[found];
      weeklyList.push(thisItem);
      let upgradeItem = weeklyFinished.splice(found, 1);
      localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
      localStorage.setItem(
        "localWeeklyFinishedStorage",
        JSON.stringify(weeklyFinished)
      );
      return showWeeklyList();
    });
  }
  const trashIcons = document.querySelectorAll(".trash");
  for (let icon of trashIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = weeklyList.findIndex((el) => el === value);
      let thisItem = weeklyList[found];
      let recycledItem = weeklyList.splice(found, 1);
      localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
      localStorage.setItem(
        "localWeeklyFinishedStorage",
        JSON.stringify(weeklyFinished)
      );
      return showWeeklyList();
    });
  }
  const lowTrashIcons = document.querySelectorAll(".recycled-trash");
  for (let icon of lowTrashIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = weeklyFinished.findIndex((el) => el === value);
      let thisItem = weeklyFinished[found];
      let recycledItem = weeklyFinished.splice(found, 1);
      localStorage.setItem("localWeeklyStorage", JSON.stringify(weeklyList));
      localStorage.setItem(
        "localWeeklyFinishedStorage",
        JSON.stringify(weeklyFinished)
      );
      return showWeeklyList();
    });
  }
};

//Monthly list function
const showMonthlyList = () => {
  high.innerHTML = "";
  low.innerHTML = "";

  if (monthlyList) {
    for (let item of monthlyList) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const icon = document.createElement("p");
      const input = document.createElement("div");
      input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
      p.innerText = item;
      icon.innerHTML = `<i class="fas fa-recycle icon recycle"></i><i class="far fa-trash-alt icon trash"></i>`;
      div.append(p, icon);
      div.classList.add("newItem");
      high.append(div);
    }
  }
  if (monthlyFinished) {
    for (let item of monthlyFinished) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const icon = document.createElement("p");
      const input = document.createElement("div");
      input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
      p.innerText = item;
      icon.innerHTML =
        '<i class="fas fa-level-up-alt icon upgrade"></i><i class="far fa-trash-alt icon recycled-trash"></i>';
      div.append(p, icon);
      div.classList.add("newItem");
      low.append(div);
    }
  }
  const icons = document.querySelectorAll(".recycle");
  for (let icon of icons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = monthlyList.findIndex((el) => el === value);
      let thisItem = monthlyList[found];
      monthlyFinished.push(thisItem);
      let recycledItem = monthlyList.splice(found, 1);
      localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
      localStorage.setItem(
        "localMonthlyFinishedStorage",
        JSON.stringify(monthlyFinished)
      );
      return showMonthlyList();
    });
  }
  const upgradeIcons = document.querySelectorAll(".upgrade");
  for (let icon of upgradeIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = monthlyFinished.findIndex((el) => el === value);
      let thisItem = monthlyFinished[found];
      monthlyList.push(thisItem);
      let upgradeItem = monthlyFinished.splice(found, 1);
      localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
      localStorage.setItem(
        "localMonthlyFinishedStorage",
        JSON.stringify(monthlyFinished)
      );
      return showMonthlyList();
    });
  }
  const trashIcons = document.querySelectorAll(".trash");
  for (let icon of trashIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = monthlyList.findIndex((el) => el === value);
      let thisItem = monthlyList[found];
      let recycledItem = monthlyList.splice(found, 1);
      localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
      localStorage.setItem(
        "localMonthlyFinishedStorage",
        JSON.stringify(monthlyFinished)
      );
      return showMonthlyList();
    });
  }
  const lowTrashIcons = document.querySelectorAll(".recycled-trash");
  for (let icon of lowTrashIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = monthlyFinished.findIndex((el) => el === value);
      let thisItem = monthlyFinished[found];
      let recycledItem = monthlyFinished.splice(found, 1);
      localStorage.setItem("localMonthlyStorage", JSON.stringify(monthlyList));
      localStorage.setItem(
        "localMonthlyFinishedStorage",
        JSON.stringify(monthlyFinished)
      );
      return showMonthlyList();
    });
  }
};

//Yearly list function
const showYearlyList = () => {
  high.innerHTML = "";
  low.innerHTML = "";

  if (yearlyList) {
    for (let item of yearlyList) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const icon = document.createElement("p");
      const input = document.createElement("div");
      input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
      p.innerText = item;
      icon.innerHTML = `<i class="fas fa-recycle icon recycle"></i><i class="far fa-trash-alt icon trash"></i>`;
      div.append(p, icon);
      div.classList.add("newItem");
      high.append(div);
    }
  }
  if (yearlyFinished) {
    for (let item of yearlyFinished) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const icon = document.createElement("p");
      const input = document.createElement("div");
      input.innerHTML = '<input type="checkbox" id="scales" name="list-item">';
      p.innerText = item;
      icon.innerHTML =
        '<i class="fas fa-level-up-alt icon upgrade"></i><i class="far fa-trash-alt icon recycled-trash"></i>';
      div.append(p, icon);
      div.classList.add("newItem");
      low.append(div);
    }
  }
  const icons = document.querySelectorAll(".recycle");
  for (let icon of icons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = yearlyList.findIndex((el) => el === value);
      let thisItem = yearlyList[found];
      yearlyFinished.push(thisItem);
      let recycledItem = yearlyList.splice(found, 1);
      localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
      localStorage.setItem(
        "localYearlyFinishedStorage",
        JSON.stringify(yearlyFinished)
      );
      return showYearlyList();
    });
  }
  const upgradeIcons = document.querySelectorAll(".upgrade");
  for (let icon of upgradeIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = yearlyFinished.findIndex((el) => el === value);
      let thisItem = yearlyFinished[found];
      yearlyList.push(thisItem);
      let upgradeItem = yearlyFinished.splice(found, 1);
      localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
      localStorage.setItem(
        "localYearlyFinishedStorage",
        JSON.stringify(yearlyFinished)
      );
      return showYearlyList();
    });
  }
  const trashIcons = document.querySelectorAll(".trash");
  for (let icon of trashIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = yearlyList.findIndex((el) => el === value);
      let thisItem = yearlyList[found];
      let recycledItem = yearlyList.splice(found, 1);
      localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
      localStorage.setItem(
        "localYearlyFinishedStorage",
        JSON.stringify(yearlyFinished)
      );
      return showYearlyList();
    });
  }
  const lowTrashIcons = document.querySelectorAll(".recycled-trash");
  for (let icon of lowTrashIcons) {
    icon.addEventListener("click", function () {
      let div = icon.parentNode.parentNode;
      let value = div.firstChild.innerText;
      let found = yearlyFinished.findIndex((el) => el === value);
      let thisItem = yearlyFinished[found];
      let recycledItem = yearlyFinished.splice(found, 1);
      localStorage.setItem("localYearlyStorage", JSON.stringify(yearlyList));
      localStorage.setItem(
        "localYearlyFinishedStorage",
        JSON.stringify(yearlyFinished)
      );
      return showYearlyList();
    });
  }
};

//Exports
export { showDailyList, showWeeklyList, showMonthlyList, showYearlyList };
