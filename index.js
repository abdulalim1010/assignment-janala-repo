
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
                console.log(data); // Log all the fetched data for inspection
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

        // Call the getAlllesson function to fetch and display the data
        getAlllesson();
 
