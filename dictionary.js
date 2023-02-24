const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const sound = document.getElementById("sound");
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;

  fetch(`${url} ${inpWord}`)
    .then((resp) => resp.json())

    .then((data) => {
      console.log(data);

      result.innerHTML = `<div class="word">
        <h3>${inpWord}</h3>
        <button onClick ="playSound()">
            <i class="fa-solid fa-volume-high"></i>
        </button>
        </div>
        <div class ="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetics[1].text}</p>
    </div>
    <p class="word-meaning">
    ${data[0].meanings[0].definitions[0].definition}
</p>`;
      sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3>Could not find the word </h3>`;
    });
});
function playSound() {
  sound.play();
}
