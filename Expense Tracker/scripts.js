let expenseData = {
  categories: {
    food: 0,
    clothing: 0,
    stationary: 0,
    // Add more categories as needed
  },
  dailyExpenses: [],
  monthlyBudget: 0,
  totalExpenses: 0,
  recurringExpenses: []
};

const expenseForm = document.getElementById('expense-form');
const budgetForm = document.getElementById('budget-form');
// const recurringForm = document.getElementById('recurring-form');
// const filterForm = document.getElementById('filter-form');
const expenseHistory = document.getElementById('expense-history');
const budgetStatus = document.getElementById('budget-status');
const recurringSection = document.querySelector('.recurring-section');
const budgetSection = document.querySelector('.budget-section');
const filterSection = document.querySelector('.filter-section');

// Initialize Pie Chart
// Initialize Pie Chart
const ctxPie = document.getElementById('pie-chart').getContext('2d');
const pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: Object.keys(expenseData.categories),
    datasets: [{
      data: Object.values(expenseData.categories),
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }]
  },
});


// Initialize Line Chart
const ctxLine = document.getElementById('line-chart').getContext('2d');
const lineChart = new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: [], // Dates will be added here dynamically
    datasets: [{
      label: 'Expenses Over Time',
      data: [], // Daily expenses will be added here dynamically
      borderColor: '#36a2eb',
      fill: false
    }]
  },
});

// Function to update charts
function updateCharts() {
  // Update Pie Chart
  pieChart.data.labels = Object.keys(expenseData.categories);
  pieChart.data.datasets[0].data = Object.values(expenseData.categories);
  pieChart.data.datasets[0].backgroundColor = getColors(Object.keys(expenseData.categories));
  pieChart.update();

  // Update Line Chart
  lineChart.data.labels = expenseData.dailyExpenses.map(entry => entry.date);
  lineChart.data.datasets[0].data = expenseData.dailyExpenses.map(entry => entry.amount);
  lineChart.update();

  // Update Budget Status
  const remainingBudget = expenseData.monthlyBudget - expenseData.totalExpenses;
  if (remainingBudget >= 0) {
    budgetStatus.textContent = `Total Expenses: $${expenseData.totalExpenses.toFixed(2)} / Monthly Budget: $${expenseData.monthlyBudget.toFixed(2)} (Remaining: $${remainingBudget.toFixed(2)})`;
    budgetStatus.style.color = ''; // Reset color
  } else {
    budgetStatus.textContent = `Total Expenses: $${expenseData.totalExpenses.toFixed(2)} / Monthly Budget: $${expenseData.monthlyBudget.toFixed(2)} (Over Budget by $${Math.abs(remainingBudget).toFixed(2)})`;
    budgetStatus.style.color = 'red'; // Set color to red
  }
}

// Function to generate random colors for pie chart segments
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to get colors for pie chart segments
function getColors(labels) {
  return labels.map(label => getRandomColor());
}

// Event listener for expense form submission
expenseForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const expenseName = document.getElementById('expense-name').value;
  const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
  const expenseDatetime = document.getElementById('expense-datetime').value;
  const expenseCategory = document.getElementById('expense-category').value;

  if (expenseName && expenseAmount && expenseDatetime && expenseCategory) {
    const expenseItem = document.createElement('li');
    expenseItem.textContent = `${expenseName} - $${expenseAmount.toFixed(2)} [${expenseCategory}] on ${expenseDatetime}`;
    expenseHistory.appendChild(expenseItem);

    // Update expense data
    expenseData.categories[expenseCategory] += expenseAmount;
    expenseData.totalExpenses += expenseAmount;

    // Update daily expenses
    const date = expenseDatetime.split('T')[0];
    const dailyExpense = expenseData.dailyExpenses.find(entry => entry.date === date);
    if (dailyExpense) {
      dailyExpense.amount += expenseAmount;
    } else {
      expenseData.dailyExpenses.push({ date, amount: expenseAmount });
    }

    // Update charts
    updateCharts();
  }

  // Clear form fields
  document.getElementById('expense-name').value = '';
  document.getElementById('expense-amount').value = '';
  document.getElementById('expense-datetime').value = '';
  document.getElementById('expense-category').value = '';
});

// Event listener for budget form submission
budgetForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const monthlyBudget = parseFloat(document.getElementById('monthly-budget').value);
  if (monthlyBudget) {
    expenseData.monthlyBudget = monthlyBudget;
    updateCharts();
  }

  // Clear form field
  document.getElementById('monthly-budget').value = '';
});

// // Event listener for recurring expense form submission
// recurringForm.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const recurringName = document.getElementById('recurring-name').value;
//   const recurringAmount = parseFloat(document.getElementById('recurring-amount').value);
//   const recurringCategory = document.getElementById('recurring-category').value;

//   if (recurringName && recurringAmount && recurringCategory) {
//     expenseData.recurringExpenses.push({
//       name: recurringName,
//       amount: recurringAmount,
//       category: recurringCategory
//     });

  //   // Add recurring expense category if not already present
  //   if (!expenseData.categories[recurringCategory]) {
  //     expenseData.categories[recurringCategory] = 0;
  //   }

  //   // Update charts with new colors for recurring expenses
  //   pieChart.data.labels = Object.keys(expenseData.categories);
  //   pieChart.data.datasets[0].data = Object.values(expenseData.categories);
  //   pieChart.data.datasets[0].backgroundColor = getColors(Object.keys(expenseData.categories));
  //   pieChart.update();
  // }

//   // Clear form fields
//   document.getElementById('recurring-name').value = '';
//   document.getElementById('recurring-amount').value = '';
//   document.getElementById('recurring-category').value = '';
// });

// Event listener for filter form submission
// filterForm.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const startDate = document.getElementById('filter-start-date').value;
//   const endDate = document.getElementById('filter-end-date').value;
//   const category = document.getElementById('filter-category').value;

//   let filteredExpenses = expenseData.dailyExpenses;
  
//   if (startDate) {
//     filteredExpenses = filteredExpenses.filter(entry => entry.date >= startDate);
//   }
  
//   if (endDate) {
//     filteredExpenses = filteredExpenses.filter(entry => entry.date <= endDate);
//   }
  
//   if (category) {
//     filteredExpenses = filteredExpenses.filter(entry => entry.category === category);
//   }

//   // Update line chart with filtered expenses
//   lineChart.data.labels = filteredExpenses.map(entry => entry.date);
//   lineChart.data.datasets[0].data = filteredExpenses.map(entry => entry.amount);
//   lineChart.update();
// });

// Event listeners for toggling sections
document.querySelectorAll('.toggle-section').forEach(section => {
  section.addEventListener('click', function() {
    const target = document.querySelector(`.${this.dataset.target}`);
    if (target) {
      target.classList.toggle('show');
    }
  });
});

// Initialize charts when there are no expenses
updateCharts();
