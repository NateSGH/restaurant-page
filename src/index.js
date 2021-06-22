import "./style.css";
import { loadHomeToMain } from "./home.js";
import { loadMenuToMain } from "./menu.js";
import { loadContactToMain } from "./contact.js";

const content = document.getElementById("content");

function createHeader() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.innerText = "Flickering Light";

  const nav = document.createElement("div");
  nav.classList.add("nav");

  const homeBtn = document.createElement("button");
  homeBtn.innerText = "Home";
  homeBtn.addEventListener("click", () => {
    loadHomeToMain();
  });

  const menuBtn = document.createElement("button");
  menuBtn.innerText = "Menu";
  menuBtn.addEventListener("click", () => {
    loadMenuToMain();
  });

  const contactBtn = document.createElement("button");
  contactBtn.innerText = "Contact";
  contactBtn.addEventListener("click", () => {
    loadContactToMain();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  header.appendChild(h1);
  header.appendChild(nav);

  return header;
}

function createMainSection() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");

  const socialLinks = document.createElement("div");
  socialLinks.classList.add("social-links");

  const instLink = document.createElement("a");
  instLink.href = "#";
  instLink.classList.add("fab");
  instLink.classList.add("fa-instagram");

  const facebookLink = document.createElement("a");
  facebookLink.href = "#";
  facebookLink.classList.add("fab");
  facebookLink.classList.add("fa-facebook");

  const twitterLink = document.createElement("a");
  twitterLink.href = "#";
  twitterLink.classList.add("fab");
  twitterLink.classList.add("fa-twitter");

  const text = document.createElement("p");
  text.innerHTML =
    'Photo by <a href="https://unsplash.com/@mggbox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mgg Vitchakorn</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

  socialLinks.appendChild(instLink);
  socialLinks.appendChild(facebookLink);
  socialLinks.appendChild(twitterLink);

  footer.appendChild(socialLinks);
  footer.appendChild(text);

  return footer;
}

content.appendChild(createHeader());
content.appendChild(createMainSection());
content.appendChild(createFooter());

loadHomeToMain();

// loadMenuToMain();
