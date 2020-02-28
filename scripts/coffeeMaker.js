import { useCoffee } from "./coffeeDataProvider.js";
import cafe from "./cafe.js";

/**
 *  coffeeMaker which renders individual cafe objects as HTML
 */


const coffeeMaker = () => {
    const coffeeHouses = document.querySelector("#coffeeShop");
    const coffeeObjectArray = useCoffee();

    for (const coffeeObject of coffeeObjectArray) {
        coffeeHouses.innerHTML += cafe(coffeeObject);
    }
}

export default coffeeMaker;