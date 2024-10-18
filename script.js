let appTitle = "Kodeloftet Gruppe 10 Recap";

// Finne elementet du ønsker å plasser nye elementer under
let bodyElement = document.querySelector("body");

// Lag det nye elementet
let mainTitleElement = document.createElement("h1");

// Og konfigurer det
mainTitleElement.textContent = appTitle;

// Sett det inn i dokumentet
bodyElement.append(mainTitleElement);

let image1 = {
  name: "Sommer i Bergen",
  artist: "Tor Fiskar",
  src: "images/summer-in-bergen.jpg",
};

let imageElementA = createImageCard(image1);
bodyElement.append(imageElementA);

let image2 = {
  name: "Høst til havs",
  artis: "Marita Berge",
  src: "images/fall-at-sea.jpg",
};

let imageElementB = createImageCard(image2);
bodyElement.append(imageElementB);

// Gjør det samme men med en liste
let imageList = [
  {
    name: "Sommer i Bergen",
    artist: "Tor Fiskar",
    src: "images/summer-in-bergen.jpg",
  },
  {
    name: "Høst til havs",
    artist: "Marita Berge",
    src: "images/fall-at-sea.jpg",
  },
];

for (let image of imageList) {
  let imageElement = createImageCard(image);
  bodyElement.append(imageElement);
}

function createImageCard(image) {
  // <img height="200" src="images/summer-in-bergen.jpg" />
  let imageShowcaseElement = document.createElement("img");
  // <img />
  imageShowcaseElement.src = image.src;
  // <img src="images/summer-in-bergen.jpg" />
  imageShowcaseElement.className = "image-card";
  // <img class="image-card" src="images/summer-in-bergen.jpg" />

  return imageShowcaseElement;
}
