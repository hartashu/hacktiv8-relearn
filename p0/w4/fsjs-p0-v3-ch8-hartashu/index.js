const foods = [
  'Nasi Goreng#20000',
  'Salmon Mentai',
  'Gado Gado#10000',
  'Kupat Tahu#41000',
  'Wagyu Steak',
  'Nasi Padang#25000',
  'Papeda#15000',
  'Ayam Rebus',
  'Tempe Goreng#5000',
  'Tahu Goreng#4000'
]

function convertMenu(foods) {
  // code here

  const result = [];

  for (const menu of foods) {
    tempMenu = [];
    tempStr = '';

    for (let i = 0; i < menu.length + 1; i++) {
      if (menu[i] === '#' || menu[i] === undefined) {
        tempMenu.push(tempStr);
        tempStr = '';
        continue;
      }
      tempStr += menu[i];
    }

    result.push(tempMenu);
  }

  return result;
}

function filterMenu(foods) {
  // code here

  const result = [];

  for (const food of foods) {
    if (food[1] === undefined) continue;

    food[1] = Number(food[1]);
    result.push(food);
  }

  return result;
}

function statusMenu(foods) {
  // code here

  const result = [];

  for (const food of foods) {
    const tempFood = [];

    tempFood.push(food[0]);
    tempFood.push(food[1]);

    if (tempFood[1] > 30_000) tempFood.push('expensive');
    else if (tempFood[1] >= 15_000 && food[1] <= 30_000) tempFood.push('standard');
    else if (tempFood[1] < 15_000) tempFood.push('cheap');

    result.push(tempFood);
  }

  return result;
}

function statisticMenu(foods) {
  // code here

  const result = {};

  for (const menu of foods) {
    if (result[menu[2]] === undefined) result[menu[2]] = 0;

    result[menu[2]]++;
  }

  return result;
}

function generateMenu(foods) {
  // code here

  const menuAfterSplit = convertMenu(foods);
  const menuAfterFilter = filterMenu(menuAfterSplit);

  const menuWithStatus = statusMenu(menuAfterFilter);
  const statistic = statisticMenu(menuWithStatus);

  const menu = [];

  for (const singleMenu of menuWithStatus) {
    const objMenu = {
      name: singleMenu[0],
      price: singleMenu[1],
      status: singleMenu[2]
    };

    menu.push(objMenu);
  }

  const obj = {
    statistic,
    menu
  };

  return obj;
}

console.log(generateMenu(foods));

// Silahkan tulis kode kamu untuk Manipulasi DOM disini

// const expensiveCountEl = document.getElementById('expensiveCount');
// const standardCountEl = document.getElementById('standardCount');
// const cheapCountEl = document.getElementById('cheapCount');

// expensiveCountEl.innerText = generateMenu(foods).statistic.expensive;
// standardCountEl.innerText = generateMenu(foods).statistic.standard;
// cheapCountEl.innerText = generateMenu(foods).statistic.cheap;



// RENDER DI BROWSER
// selectors
// const menuList = document.querySelector('.menu-list')

// ABAIKAN code dibawah ini
// function render() {
//   // get todo list
//   let menuObject = generateMenu(foods)
//   // put all task to html
//   for (let i = 0; i < menuObject.menu.length; i++) {
//     // create div
//     const menu = document.createElement('div')
//     menu.classList.add('menu')
//     // create list
//     const newMenu = document.createElement('li')
//     newMenu.innerText = `${menuObject.menu[i].name} -- ${new Intl.NumberFormat('id-ID', {
//       style: 'currency',
//       currency: 'IDR'
//     }).format(menuObject.menu[i].price)}`
//     newMenu.classList.add('menu-item')
//     menu.appendChild(newMenu)

//     // create completed button
//     const infoButton = document.createElement('button')
//     infoButton.innerHTML = menuObject.menu[i].status[0].toUpperCase() + menuObject.menu[i].status.substring(1)
//     if (infoButton.innerHTML === 'Cheap') {
//       infoButton.classList.add('cheap-btn')
//     } else if (infoButton.innerHTML === 'Standard') {
//       infoButton.classList.add('standard-btn')
//     } else {
//       infoButton.classList.add('expensive-btn')
//     }
//     menu.appendChild(infoButton)
//     // append to todoList
//     menuList.appendChild(menu)
//   }
// }
// render()

// Uncomment baris ini untuk melakukan testing
// Comment juga semua code yang berhubungan dengan DOM untuk menjalankan testing
module.exports = {
  convertMenu,
  filterMenu,
  statusMenu,
  statisticMenu,
  generateMenu
}
