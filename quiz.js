// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        document.getElementById('feedback').style.color = "red";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        document.getElementById('feedback').style.color = "red";
    }
}

// Add click event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
