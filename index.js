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
