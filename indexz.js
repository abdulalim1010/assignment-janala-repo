


document.getElementById('getstar').addEventListener('click', function () {
const name = document.getElementById('name').value;
const password = document.getElementById('password').value;

if (!name) {
alert('Please enter your name.');
return;
}

if (password !== "123456") {
alert('wrong password please contact to the client.');
return;
}

alert('Welcome, ' + name + '! Your password is valid.');
});












function loadLesson() {
  
fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
  .then((data)=>displayCategory(data.data))

}
function loadWord() {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((res) => res.json())  
  .then((data)=>displayWor(data.data))
}

const loadcategoryword = (id) => {
  const url = (`https://openapi.programming-hero.com/api/level/${id}`)

  fetch(url)
    
    .then((res) => res.json())
    .then((data) => displayWord(data.data))
   document.getElementById("start-time").style.display = "none";
 
}

const loadComent = (details) => {
  console.log(details)
}









function displayCategory(data) {

  const categoryCantainer = document.getElementById("lesson-container")
   
  for (let dat of data) {
    
    const categoryDiv = document.createElement("div")
    categoryDiv.innerHTML = `

          <button  onclick="loadcategoryword (${dat.level_no}) " class="btn btn-sm hover:bg-[#422AD5] hover:text-white border-[#422AD5]"> <img src="assets/fa-book-open.png" alt="">
${dat.lessonName}

</button>

    `
    categoryCantainer.append(categoryDiv)
  }

}

const displayWord = (data) => {
  const wordContainer = document.getElementById("word-container");
  const noWordMessage = document.getElementById("no-word");

  // Clear previous words
  wordContainer.innerHTML = "";

  if (!data || data.length === 0) {
    // If no words available, show the "no-word" message
    noWordMessage.style.display = "block";
    return;
  } else {
    // Hide "no-word" message if words are available
    noWordMessage.style.display = "none";
  }

  data.forEach((dat) => {
    const wordCard = document.createElement("div");
    wordCard.innerHTML = `
      <div class="card p-6 items-center justify-center bg-base-100 card-md shadow-sm">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold">${dat.word}</h2>
          <p>Pronunciation: ${dat.pronunciation}</p>
          <h2 class="text-xl">Meaning: ${dat.meaning}</h2>
          <div class="flex mt-3 justify-between">
            <img class="h-8 w-8" src="assets/speaker (1).png" alt="">
            <img class="h-8 w-8" src="assets/volume.png" alt="">
          </div>
        </div>
      </div>
    `;
    wordContainer.append(wordCard);
  });
};



const displayWor = (data) => {
  const wordContainer = document.getElementById("word-container")
  
  for(let word of data) {
  

    const wordCard = document.createElement("div")
    wordCard.innerHTML = `
  
 <div class="card p-6 items-center justify-center  bg-base-100 card-md shadow-sm">
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold">${word.word}}</h2>
    <p> Pronouncination ${word.pronunciation}</p>
    <h2 class="text-xl"> meaning ${word.meaning}</h2>
    <div class="flex mt-3 justify-between">
    <button onclick=loadComent(z)  class="btn btn-soft">Default</button>
  <img class="h-8 w-8" src="assets/speaker (1).png" alt="">
<img class="h-8 w-8" src="assets/volume.png" alt="">
    </div>
    
  </div>
</div>
  
  
    `;
    wordContainer.append(wordCard)

  };
};
  

loadWord()
loadLesson()

 
  