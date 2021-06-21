function createHome() {
  const home = document.createElement("div");
  home.classList.add("main_content");

  const text = document.createElement("p");
  text.classList.add("restaurant_info");
  text.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet quidem ad suscipit nihil modi maiores tempore nulla laborum, autem nisi earum sapiente vitae doloribus aspernatur necessitatibus illo placeat debitis.";
  home.appendChild(text);
  console.log("test");
  return home;
}

export { createHome };
