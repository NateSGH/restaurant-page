function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact-content");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const hoursHeader = document.createElement("h2");
  hoursHeader.classList.add("contact-h");
  hoursHeader.innerText = "Hours";

  const contHeader = document.createElement("h2");
  contHeader.classList.add("contact-h");
  contHeader.innerText = "Contact";

  contactInfo.appendChild(hoursHeader);
  contactInfo.appendChild(
    createParagraph("Monday - Friday: 08.00 - 22.30", "hour_info")
  );
  contactInfo.appendChild(
    createParagraph("Saturday - Sunday: 10.00 - 18.00", "hour_info")
  );

  contactInfo.appendChild(contHeader);
  contactInfo.appendChild(
    createParagraph(
      "81422 Paolo Rapids, Wildermanton, California",
      "contact_info"
    )
  );
  contactInfo.appendChild(createParagraph("123 456 789", "contact_info"));

  contact.appendChild(contactInfo);

  return contact;
}

function createParagraph(text, className) {
  const paragraph = document.createElement("p");
  paragraph.classList.add(className);
  paragraph.innerText = text;

  return paragraph;
}

function loadContactToMain(params) {
  const main = document.getElementById("main");
  main.innerText = "";
  main.appendChild(createContact());
}

export { loadContactToMain };
