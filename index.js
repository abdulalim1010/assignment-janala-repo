document.getElementById('getstar').addEventListener('click', function () {
const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  if (!name) {
    alert('Please enter your name.');
    return;
  }

  if (password !== "12345") {
        alert('wrong password please contact to the client.');
        return;
      }

  alert('Welcome, ' + name + '! Your password is valid.');
});


onst getAllLesson = async () => {
      try {
        const response = await fetch("https://openapi.programming-hero.com/api/levels/all");
        const data = await response.json();

        // Display the lessons after fetching data
        sowlwLesson(data.levels);
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
    };

    // Function to display lessons
    const sowlwLesson = (lessonName) => {
      const lessondata = document.getElementById("all-lesson");

      // Show the lesson section after fetching
      lessondata.classList.remove("hidden");

      lessonName.forEach((lesson) => {
        console.log(lesson);
        const div = document.createElement("div");

        div.innerHTML = `
          <button class="btn btn-primary">${lesson.levelName}</button>
        `;
        lessondata.appendChild(div);
      });
    };