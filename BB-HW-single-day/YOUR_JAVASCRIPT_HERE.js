// Write your JS here


let hero = {
    name: "Ironman",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type: "", damage: 2}


}

function rest(hero) {
    hero.health = 10;
    return hero;

}

function equipWeapon() {

}

//image
let imageInn = document.querySelector('#inn');
let weaponDagger = document.querySelector('#dagger');
let containerBag = document.querySelector('#bag');

// event listeners

imageInn.addEventListener('click', function() {
    changeProperty();

})

weaponDagger.addEventListener('click', function() {

})

containerBag.addEventListener('click', function(){
    
})

// functions

function changeProperty() {
    hero.health = 10;
}

function pickUpItem () {
    hero.inventory.push(hero.weapon);
}

pickUpItem();

console.log(hero.inventory);
