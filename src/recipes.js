import Greeksalad from './images/greek salad.jpg';
import Bruchetta from './images/bruchetta.svg';
import Lemondesert from './images/lemon dessert.jpg';

const recipes = [
    {
        id:1,
        title: "Greek salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
        image: Greeksalad,
    },
    {
        id:2,
        title: "Bruchetta",
        price: 5.99,
        description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: Bruchetta,
    },
    {
        id:3,
        title: "Lemon Dessert",
        price: 4.78,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: Lemondesert,
    }
];
export default recipes;