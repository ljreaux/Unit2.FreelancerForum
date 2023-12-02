// Used https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces to find initial guidance on how to add table columns/rows

const avgPriceDisplay = document.querySelector('h2')

const freelancers = [{ 'Name': 'Alice', 'Occupation': 'Writer', 'Starting Price': '30' }, { 'Name': 'Bob', 'Occupation': 'Teacher', 'Starting Price': '50' }, { 'Name': 'Carol', 'Occupation': 'Programer', 'Starting Price': '70' }
]

const names = ['Jeff', 'Susie', 'Larry', 'Timmy', 'Elisabeth']
const jobs = ['Teacher', 'Artist', 'Writer', 'Programer']
const prices = []
for (let i = 30; i <= 100; i += 5) {
  prices.push(i)
}

const avgPriceArr = []

const table = document.querySelector('table')


function initialFreelancers() {



  for (let i = 0; i < 3; i++) {
    // creates a table row
    const row = document.createElement("tr");

    avgPriceArr.push(Number(freelancers[i]["Starting Price"]))

    for (let j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      let cellText
      if (j === 0) {
        cellText = document.createTextNode(freelancers[i]["Name"])
      } else if (j === 1) {
        cellText = document.createTextNode(freelancers[i]["Occupation"])
      } else {
        cellText = document.createTextNode("$" + freelancers[i]["Starting Price"])
      }

      cell.appendChild(cellText);
      row.appendChild(cell);
    } // add the row to the end of the table body
    table.appendChild(row);
  }

  const avgPriceSum = avgPriceArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let avgPriceTotal = avgPriceSum / avgPriceArr.length
  avgPriceTotal = Math.round(avgPriceTotal * 100) / 100

  avgPriceDisplay.innerHTML = `The average starting price is $${avgPriceTotal}`
}

initialFreelancers()

function addRandomFreelancers() {


  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)]

  const randomPrice = prices[Math.floor(Math.random() * prices.length)]
  avgPriceArr.push(randomPrice)

  freelancers.push({
    'Name': randomName,
    'Occupation': randomJob,
    'Starting Price': randomPrice
  })
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

  avgPriceDisplay.innerHTML = `The average starting price is $${avgPriceTotal}`
}




const addRandomFreelancersInterval = setInterval(addRandomFreelancers, 3000);