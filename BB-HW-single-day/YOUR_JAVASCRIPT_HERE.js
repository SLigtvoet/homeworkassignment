// Write your JS here


let hero = {
    name: "Ironman",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }


}



//image
let imageInn = document.querySelector('#inn');
let weaponDagger = document.querySelector('#dagger');
let containerBag = document.querySelector('#bag');

// resting

function rest(hero) {
    hero.health = 10;
    return hero;

}

imageInn.addEventListener('click', function () {
    rest(hero);
    displayStats();

})

// picking up items

function pickUpItem(hero , item) {
    hero.inventory.push(item);
    
}

weaponDagger.addEventListener('click', function () {
    pickUpItem(hero, {
        type: "dagger",
        damage: 2
    });
    displayStats();

})



// equip weapon

containerBag.addEventListener('click', function () {
    equipWeapon(hero);
    displayStats();


})


function equipWeapon(hero) {
    if (hero.inventory.length > 0 ) {
        hero.weapon = hero.inventory[0];    
    }

}





function displayStats() {
    document.getElementById("characteristics").innerHTML = hero.health + ' ' +  hero.name + hero.weapon.type + hero.weapon.damage;
    }

displayStats();



// form new name character
let submitButton = document.getElementById("submitButton")


submitButton.addEventListener('click', function() {
    let newName = document.getElementById("newName").value;
    setName(newName);

});

function setName (name) {
    hero.name = name;

}

console.log(hero.name);















