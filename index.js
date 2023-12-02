// Used https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces to find initial guidance on how to add table columns/rows

// sets max number of freelancers for later and creates a variable to display the average price
const maxFreelancers = 100
const avgPriceDisplay = document.querySelector('h2')

// array to keep track of the average prices of the freelancers
const avgPriceArr = []

// initial list of freelancers based off of the story provided
const freelancers = [{ 'Name': 'Alice', 'Occupation': 'Writer', 'Starting Price': '30' }, 
                     { 'Name': 'Bob', 'Occupation': 'Teacher', 'Starting Price': '50' }, 
                     { 'Name': 'Carol', 'Occupation': 'Programer', 'Starting Price': '70' }
]

// a somewhat large list of randomly generated names to iterate through
const names = ['Jeff', 'Susie', 'Larry', 'Timmy', 'Elisabeth', 'Karolina', 'Xiomara', 'Devon', 'Kendal', 'Shaila', 
               'Denis', 'Konrad', 'Jerry', 'Elam', 'Kollin', 'Averi', 'Shaila', 'Kenya', 'Zoya', 'Nathaly', 'Aryeh', 
               'Alonso', 'Cielo', 'Ramona', 'Jacques', 'Kassidy', 'Aleyah', 'Kacey', 'Kaila', 'Faigy', 'Karl', 'Zaida', 
               'Jenna', 'Shamar', 'Peighton']

// a list of jobs to randomly iterate through
const jobs = ['Teacher', 'Artist', 'Writer', 'Programer', 'Translator', 'Consultant', 'Copywriter', 'Designer', 'Captioner', 
              'Social Media Manager', 'Driver', 'Tutor', 'Photographer', '3D Artist', 'Legal Advisor', 'HR Manager']

// list of prices from 30-200 by 5s
const prices = []
for (let i = 30; i <= 200; i += 5) {
  prices.push(i)
}

// assigns the table to a variable so that rows and cells can be added
const table = document.querySelector('table')


function initialFreelancers() {

  // initial loop is to set up the first three rows from the story
  for (let i = 0; i < 3; i++) {
    // creates a table row
    const row = document.createElement("tr");

    // adds the starting price to the array uses Number() to avoid type errors later
    avgPriceArr.push(Number(freelancers[i]["Starting Price"]))

    for (let j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      let cellText

      // sets initial names, jobs, and prices in the correct cell
      if (j === 0) {
        cellText = document.createTextNode(freelancers[i]["Name"])
      } else if (j === 1) {
        cellText = document.createTextNode(freelancers[i]["Occupation"])
      } else {
        cellText = document.createTextNode("$" + freelancers[i]["Starting Price"])
      }

      cell.appendChild(cellText);
      row.appendChild(cell);
    } // add the row to the end of the table
    table.appendChild(row);
  }

  // adds together all values in the avgPriceArr
  const avgPriceSum = avgPriceArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  // takes the average and rounds to the nearest cent
  let avgPriceTotal = avgPriceSum / avgPriceArr.length
  avgPriceTotal = Math.round(avgPriceTotal * 100) / 100

  avgPriceDisplay.innerHTML = `The average starting price is $${avgPriceTotal}.`
}

initialFreelancers()

function addRandomFreelancers() {

// gets a random value from the arrays, adds the price to the price array
  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)]
  const randomPrice = prices[Math.floor(Math.random() * prices.length)]
  avgPriceArr.push(randomPrice)

  // updates the freelancers array
  freelancers.push({
    'Name': randomName,
    'Occupation': randomJob,
    'Starting Price': randomPrice
  })

  // two loops are not needed like earlier because I am only creating one row at a time
  const row = document.createElement("tr");

  for (let i = 0; i < 3; i++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    const cell = document.createElement("td");

    let cellText
    if (i === 0) {
      cellText = document.createTextNode(randomName)
    } else if (i === 1) {
      cellText = document.createTextNode(randomJob)
    } else {
      cellText = document.createTextNode("$" + randomPrice)
    }

    cell.appendChild(cellText);
    row.appendChild(cell);
  } // add the row to the end of the table body
  table.appendChild(row);

  const avgPriceSum = avgPriceArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let avgPriceTotal = avgPriceSum / avgPriceArr.length
  avgPriceTotal = Math.round(avgPriceTotal * 100) / 100

  avgPriceDisplay.innerHTML = `The average starting price is $${avgPriceTotal}.`

  // stops the function from continuing to run after 100 freelancers
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addRandomFreelancersInterval)
  }
}

// adds a new freelancer every 2.5sec
const addRandomFreelancersInterval = setInterval(addRandomFreelancers, 2500);


