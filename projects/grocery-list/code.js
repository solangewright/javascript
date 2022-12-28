//Buttons for event listeners
const addBtn = document.getElementById("button-addon1");
const clearBtn = document.getElementById("clear");

//input.value will be used
let input = document.getElementById("text");

//Grocery list array
let groceryList = ["Grapes", "Juice", "Apples", "Mangoes", "Kale"];

//Div where output will be placed
const para = document.getElementById('para');

//Creation of ul
let unorderedList = document.createElement('ul');
unorderedList.className = "grocery-list";
unorderedList.className = "list-group";
unorderedList.className = "list-group-flush";


const createList = () => {
    groceryList.forEach((grocery) => {
        let li = document.createElement('li');
        li.innerText = grocery; // For instance, just to give us something to see
        li.className = "grocery-item";
        li.className = "list-group-item";

        return unorderedList.appendChild(li);
    });

    return para.appendChild(unorderedList);
}

//Creation of established list
createList();

//Updates list
const update = (item, list) => {
    if(para.hasChildNodes){
        if(item) {
            let li = document.createElement('li');
              groceryList.forEach((grocery) => {
                  if(item !== grocery) {
                   li.innerText = item; // For instance, just to give us something to see
                   li.className = "grocery-item";
                   li.className = "list-group-item";
                    //Adds list item to ul
                  }
                  else {
                   return grocery;
                  }
               });
      
            return unorderedList.appendChild(li);
          }
        else {
            alert("Text required.");
        }
    }
    else {
        //Create a new child node
        list = document.createElement("ul");
        para.appendChild(list);
    }
}

//Event listener for add button
addBtn.addEventListener("click", update(input.value, unorderedList));







