function calculateBMI(){
    const weight=document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        alert("Please fill out both fields.");
        return;
    }

    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Determine the BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        advice = "You are underweight. Consider consulting a healthcare provider for advice on gaining weight in a healthy way.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        advice = "You have a healthy weight. Keep maintaining a balanced diet and regular exercise.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        advice = "You are overweight. Consider incorporating healthier eating habits and more physical activity into your lifestyle.";
    } else {
        category = "Obesity";
        advice = "You are in the obesity range. It is recommended to consult a healthcare provider for guidance on managing your weight.";
    }

    // Display the result and advice
    const resultText = `Your BMI is ${bmi} (${category}). ${advice}`;
    document.getElementById("result").textContent = resultText;
}

function resetFields() {
    // Clear input fields
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    // Clear result text
    document.getElementById("result").textContent = "";
}
