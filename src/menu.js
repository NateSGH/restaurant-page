function menuItem(name, description, cost) {
  this.name = name;
  this.description = description;
  this.cost = cost;
}

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu-content");

  const menuInfo = document.createElement("div");
  menuInfo.classList.add("menu-info");

  const appetHeader = document.createElement("h2");
  appetHeader.classList.add("menu-section-h");
  appetHeader.innerText = "Appetizers";

  const appetOne = new menuItem(
    "Shrimp & Pesto Bruschetta",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "10.50"
  );

  const appetTwo = new menuItem(
    "Tomato Bruschetta",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "8.95"
  );

  const pastaHeader = document.createElement("h2");
  pastaHeader.classList.add("menu-section-h");
  pastaHeader.innerText = "Pasta Specialties";

  const pastaOne = new menuItem(
    "Fettuccine Alfredo",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "14.75"
  );

  const pastaTwo = new menuItem(
    "Linguine with Clams",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "16.50"
  );

  const pastaThree = new menuItem(
    "Shrimp Capellini",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "17.50"
  );

  const stPastaHeader = document.createElement("h2");
  stPastaHeader.classList.add("menu-section-h");
  stPastaHeader.innerText = "Stuffed Pasta";

  const stPastaOne = new menuItem(
    "Cheese Ravioli with meat sauce",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "16.50"
  );

  const stPastaTwo = new menuItem(
    "Deep Dish Lasagna",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "16.25"
  );

  menuInfo.appendChild(appetHeader);
  menuInfo.appendChild(createMenuItem(appetOne));
  menuInfo.appendChild(createMenuItem(appetTwo));

  menuInfo.appendChild(pastaHeader);
  menuInfo.appendChild(createMenuItem(pastaOne));
  menuInfo.appendChild(createMenuItem(pastaTwo));
  menuInfo.appendChild(createMenuItem(pastaThree));

  menuInfo.appendChild(stPastaHeader);
  menuInfo.appendChild(createMenuItem(stPastaOne));
  menuInfo.appendChild(createMenuItem(stPastaTwo));

  menu.appendChild(menuInfo);

  return menu;
}

function createMenuItem(object) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const name = document.createElement("p");
  name.classList.add("menu-item-name");
  name.innerText = object.name;

  const description = document.createElement("p");
  description.classList.add("menu-item-desc");
  description.innerText = object.description;

  const cost = document.createElement("p");
  cost.classList.add("menu-item-cost");
  cost.innerText = object.cost;

  menuItem.appendChild(name);
  menuItem.appendChild(description);
  menuItem.appendChild(cost);

  return menuItem;
}

function loadMenuToMain(params) {
  const main = document.getElementById("main");
  main.innerText = "";
  main.appendChild(createMenu());
}

export { loadMenuToMain };
