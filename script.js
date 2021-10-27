const word = document.querySelector(".word");
const meaning = document.querySelector(".meaning");
const section = document.querySelector("section");
const checkbox = document.getElementById("theme_input");

async function getWord() {
  const response = await fetch("https://random-words-api.vercel.app/word");
  const json = await response.json();
  const data = json[0];

  word.textContent = data.word;
  meaning.textContent = data.definition;
}

function changeTheme() {
  if (checkbox.checked) {
    section.classList.add("dark");
  } else {
    section.classList.remove("dark");
  }
}

getWord();
checkbox.addEventListener("click", changeTheme);
