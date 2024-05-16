let randomfacts = async () => {
  let response = await fetch("https://dog-api.kinduff.com/api/facts");
  let data = await response.json();

  return data.facts;
};

async function displayFacts() {
  let path = document.getElementById("facts");
  path.innerHTML = await randomfacts();
}

let randomimg = async () => {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();

  return data.message;
};

async function displayDogImage() {
  let path = document.getElementById("dogimg");
  path.src = await randomimg();
}
let react = true;
function finalFunction() {
  if (react) {
    displayFacts();
    displayDogImage();
    react = false;
    document.getElementById("button").innerText = "Please choose emoji";
  }
}

// let emojiButton1 = document.getElementById("emoji1");
// let emojiButton2 = document.getElementById("emoji2");
// let emojiButton3 = document.getElementById("emoji3");
// let emojiButton4 = document.getElementById("emoji4");
// let emojiButton5 = document.getElementById("emoji5");
function reacted() {
  react = true;
  document.getElementById("button").innerText = "Next";
}

async function translator() {
  const res = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    body: JSON.stringify({
      q: "Hello!",
      source: "en",
      target: "es",
    }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(await res.json());
}
translator();
