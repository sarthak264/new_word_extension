const word = document.querySelector(".word");
const meaning = document.querySelector(".meaning");

async function getWord() {
  const response = await fetch("https://random-words-api.vercel.app/word");
  const json = await response.json();
  const data = json[0];

  word.textContent = data.word;
  meaning.textContent = data.definition;
}
getWord();
