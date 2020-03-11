// Hero object
const hero = {
  name: 'Haruki',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: 'Sword', damage: 2 }
}

// Game logic functions

function rest(person){
  if (person.health === 10) {
    alert('Health is already full!')
  } else { person.health = 10
    return person
  }
}

// inn event listener
document.getElementById('inn').addEventListener('click', function(){
  rest(hero)
})

// pick up weapon function
function pickUpItem(person, weapon){
  person.inventory.length === 0? null : person.inventory.push(weapon);
}

// weapon event listener
document.getElementById('dagger').addEventListener('click', function(){
  let weapon = {
    type: 'dagger',
    damage: 2
  }
  hero.inventory.push(weapon)
})

// add weapon to inventory function
function equipWeapon(person){
  person.inventory.length === 0 ? null : person.weapon = person.inventory[0]
}

// displayStats function
function displayStats(){
document.getElementById('myHero').addEventListener('click', displayStats)
    alert(`
      Name: ${hero.name}
      Heroic: ${hero.heroic},
      Inventory: ${hero.inventory},
      Health stat: ${hero.health},
      Weapon: ${hero.weapon.type},
      Damage: ${hero.weapon.damage}`)
  }
