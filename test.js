const prompt = require( "prompt-sync" )()
let n = Number(prompt( "Enter a number : " ))

for ( let i = 1; i <= n ; i++) {
    let res = ""
    for (let k = 1; k <= i;k++) {        
        res += k + " "
    }
    console.log(res);   
}


function getInput() {
    console.log(inputText.value);
    return inputText.value
}

function lower() {
    let text = getInput()
    text = text.toLowerCase()
    result.innerText = text
}

class Vehicule {
    constructor(marque, model, price) {
        this.marque = marque
        this.model = model
        this.price = price
    }

    affiche () {
        return `${this.marque}, ${this.model}, ${this.price}` 
    }
}

class Car extends Vehicule {
    constructor ( marque, model, price, nbrDoor ) {
        super(marque, model, price)
        this.nbrDoor = nbrDoor
    }

    affiche () {
        return `${super.affiche()}, ${this.nbrDoor} `         
    }
}

let car = new Car( "BMW", "2030", "200,000$", 4 )
console.log(car.affiche())
