document.addEventListener('DOMContentLoaded', function() {
    const foodForm = document.getElementById('food-form');
    const totalCaloriesDisplay = document.getElementById('total-calories');
    let totalCalories = 0; // Initialize total calories counter

    function handleFormSubmit(event) {
        event.preventDefault(); 

        const foodName = document.getElementById('food-name').value.trim();
        const waterMass = parseFloat(document.getElementById('water-mass').value);
        const startingTemp = parseFloat(document.getElementById('starting-temp').value);
        const finalTemp = parseFloat(document.getElementById('final-temp').value);
        const initialMass = parseFloat(document.getElementById('initial-mass').value);

        const finalMass = calculateFinalMass(waterMass, startingTemp, finalTemp, initialMass);
        const roundedFinalMass = finalMass.toFixed(2);
        document.getElementById('final-mass').value = roundedFinalMass;

        const Q = 2 * 1 * waterMass * (finalTemp - startingTemp);
        const totalEnergy = Q;

        const E100 = (totalEnergy * 100) / finalMass;
        const roundedE100 = E100.toFixed(2);

        totalCalories = parseFloat(roundedE100); // Reset total calories to current value
        totalCaloriesDisplay.textContent = totalCalories.toFixed(2); // Round to 2 decimal places

        foodForm.reset();
    }

    function calculateFinalMass(waterMass, startingTemp, finalTemp, initialMass) {
        return waterMass * (finalTemp - startingTemp) / initialMass;
    }

    foodForm.addEventListener('submit', handleFormSubmit);
});
