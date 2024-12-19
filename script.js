


// script.js
const bmiForm = document.getElementById('bmi-form');
const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const themeToggle = document.getElementById('theme-toggle');
const historyList = document.getElementById('history');
let isDarkTheme = false;

calculateBtn.addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  if (weight > 0 && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    const category = getBMICategory(bmi);

    document.getElementById('result').textContent = `Your BMI is ${bmi} (${category.category}).`;
    document.getElementById('tips').textContent = `Tips: ${category.tips}`;
    addToHistory(weight, height, bmi, category.category);
  } else {
    document.getElementById('result').textContent = 'Please enter valid inputs!';
    document.getElementById('tips').textContent = '';
  }
});

resetBtn.addEventListener('click', function () {
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  document.getElementById('result').textContent = '';
  document.getElementById('tips').textContent = '';
});

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  isDarkTheme = !isDarkTheme;
  themeToggle.textContent = isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return { category: 'Underweight', tips: 'Increase calorie intake and consult a dietitian.' };
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return { category: 'Normal weight', tips: 'Maintain a balanced diet and exercise regularly.' };
  } else if (bmi >= 25 && bmi < 29.9) {
    return { category: 'Overweight', tips: 'Adopt a healthy diet and exercise routine.' };
  } else {
    return { category: 'Obesity', tips: 'Consult a healthcare provider for guidance.' };
  }
}

function addToHistory(weight, height, bmi, category) {
  const li = document.createElement('li');
  li.textContent = `Weight: ${weight} kg, Height: ${height * 100} cm, BMI: ${bmi} (${category})`;
  historyList.appendChild(li);
}