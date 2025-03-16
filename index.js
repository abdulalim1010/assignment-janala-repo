

// Handle login validation
document.getElementById('getstar').addEventListener('click', function () {
const name = document.getElementById('name').value;
const password = document.getElementById('password').value;

if (!name) {
alert('Please enter your name.');
return;
}

if (password !== "123456") {
alert('Wrong password, please contact the client.');
return;
}

alert('Welcome, ' + name + '! Your password is valid.');
});

// Fetch all lessons from the API
const getAlllesson = async () => {
try {
const response = await fetch('https://openapi.programming-hero.com/api/levels/all');
if (!response.ok) {
throw new Error('Network response was not ok ' + response.statusText);
}
const data = await response.json();
// Log all the fetched data for inspection
if (data.status) {
showlesson(data.data); // Pass fetched data to showlesson function
} else {
alert('Failed to fetch lesson data');
}
} catch (error) {
console.error('Error fetching data:', error);
}
}

// Function to display lessons dynamically
const showlesson = (lessons) => {
const lessonContainer = document.getElementById('lesson-container');



// Loop through the fetched lessons and display them in the container
lessons.forEach(lesson => {
const lessonItem = document.createElement('div');
lessonItem.classList.add('lesson-item');
lessonItem.innerHTML = `
<button class=" btn border-[#00BCFF] text-[#00BCFF] hover:bg-[#00BCFF] hover:text-white"> ${lesson.lessonName}</button>

`;

lessonContainer.appendChild(lessonItem);
});
};

const getWord = async () => {
try {
const response = await fetch('https://openapi.programming-hero.com/api/level/3');
const showWord = await response.json();

// Log the entire response to inspect the structure
console.log(showWord);

if (showWord.status) {
// If the response has a "data" field containing the words
if (showWord.data && Array.isArray(showWord.data)) {
// Call showWord to display the words
displayWords(showWord.data);
} else {
console.log('No words found in data.');
}
} else {
console.log('Error fetching data or no words available.');
}
} catch (error) {
console.error('Error fetching data:', error);
}
};

// Function to display the words
const displayWords = (words) => {
const wordContainer = document.getElementById('word-container');
wordContainer.innerHTML = ''; // Clear previous content

// Loop through the fetched words and display them in the container
words.forEach(word => {
const wordItem = document.createElement('div');
wordItem.classList.add('word-item');
wordItem.innerHTML = `


<div class="card  bg-base-100  card-body items-center p-3 rounded-xl  shadow-sm">


  <p class="text-xl font-bold"><strong class="text-2xl">Word:</strong> ${word.word}</p>

  <p class="text-xl font-bold"><strong>Meaning:</strong> ${word.meaning ? word.meaning : 'No meaning available'}</p>


  <p class="text-xl><strong class=" text-xl font-bold">Pronunciation:</strong> ${word.pronunciation}</p>

  <div class="flex justify-between gap-14 p-5">
    <img class="w-9 h-8" src="assets/speaker (1).png" alt="">
    <img class="w-9 h-8" src="assets/volume.png" alt="">

  </div>
</div>
`;
wordContainer.appendChild(wordItem);
});
};

// Call the function to fetch and display the words
getWord();

getAlllesson();