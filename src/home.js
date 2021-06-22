function createHome() {
  const home = document.createElement("div");
  home.classList.add("home-content");

  const homeInfo = document.createElement("div");
  homeInfo.classList.add("restaurant_info");

  const text = document.createElement("h2");
  text.innerText = "A true taste of Italia";

  const info = document.createElement("p");
  info.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  homeInfo.appendChild(text);
  homeInfo.appendChild(info);
  home.appendChild(homeInfo);
  return home;
}

function loadHomeToMain(params) {
  const main = document.getElementById("main");
  main.innerText = "";
  main.appendChild(createHome());
}

export { loadHomeToMain };
