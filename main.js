//Make a videogame class that holds 4 properties and 3 methods

class Genshin {
    constructor (name, vision, weapon, height){
        this.name = name;
        this.vision = vision;
        this.weapon = weapon;
        this.height = height;
    }

    chargeAttack(){
        console.log("Hyah!")
    }

    idle()
    
    interact()



}

let zhongli = new Genshin ("Zhongli","geo", "polearm", "tall")
let mona = new Genshin ("Mona","hydro", "catalyst", "medium")
let bennett = new Genshin ("Bennett","pyro", "sword", "medium")
let diona = new Genshin ("Diona","cryo", "bow", "medium")