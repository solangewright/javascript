// DOM elements
const button = document.getElementById('submit');
const para = document.getElementById('paragraph');

//Hex color variable
let hexaDecimal = [];
const arrangement = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Function that randomizes a character 0-F, and pushes that to the hexaDemical array
const setColor = () => {

    for (let i = 0; i < 6; i++){
        let randNum = Math.floor(Math.random() * 16);

        hexaDecimal.push(arrangement[randNum]);
    }
  
  hexaDecimal = hexaDecimal.join("");
  hexaDecimal = '#' + hexaDecimal;

  return hexaDecimal;
}

const submit = () => {
    let newColor = setColor(); 
    document.body.style.backgroundColor = newColor;
    para.innerText = newColor;
    button.removeEventListener('click', submit());
}

button.addEventListener('click', submit()); 