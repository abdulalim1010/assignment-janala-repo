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
  .then((data)=>displayWord(data.data))
}

const loadcategoryword = (id) => {
  const url = (`https://openapi.programming-hero.com/api/level/${id}`)

  fetch(url)
    .then((res) => res.json())
  .then((data)=>console.log(data))
}





function displayCategory(data) {

  const categoryCantainer = document.getElementById("lesson-container")
  for (let dat of data) {
    
    const categoryDiv = document.createElement("div")
    categoryDiv.innerHTML = `

          <button onclick="loadcategoryword (${dat.id})" class="btn btn-sm hover:bg-[#422AD5] hover:text-white border-[#422AD5]"> <img src="assets/fa-book-open.png" alt="">
${dat.lessonName}

</button>

    `
    categoryCantainer.append(categoryDiv)
  }

}
const displayWord = (data) => {
  const wordContainer = document.getElementById("word-container")
  
  data.forEach((dat) => {
    console.log(data)

    const wordCard = document.createElement("div")
    wordCard.innerHTML = `
  
 <div class="card p-6 items-center justify-center  bg-base-100 card-md shadow-sm">
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold">${dat.word}</h2>
    <p> Pronouncination ${dat.pronunciation}</p>
    <h2 class="text-xl"> meaning ${dat.meaning}</h2>
    <div class="flex mt-3 justify-between">
    
  <img class="h-8 w-8" src="assets/speaker (1).png" alt="">
<img class="h-8 w-8" src="assets/volume.png" alt="">
    </div>
  </div>
</div>
  
  
    `
    wordContainer.append(wordCard)

  });
};
  
  

loadLesson()

