const word = document.querySelector(".word");
const meaning = document.querySelector(".meaning");

async function getWord() {
  const response = await fetch("https://random-words-api.vercel.app/word");
  const word = await response.json();
  const data = word[0];

  console.log(data);
}
getWord();
