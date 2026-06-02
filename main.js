


/*Let's toggle the darm mode on the body class*/ 

let darkBody = document.querySelector('body')
let darkMode = document.querySelector('.card');
let orderBox = document.querySelector('.order-box');
let darkModeButton = document.getElementById('dark-btn'); 
let h2Element = document.querySelector('h2');
let pElement = document.getElementById('order-text');
let title = document.getElementById('title');
let description = document.getElementById('description');



function checkstatus(){
    if (darkMode.style.backgroundColor === 'white'){
        darkBody.classList.toggle('dark-mode')
        darkMode.style.backgroundColor = '#666699';
        orderBox.classList.toggle('dark-mode');
        h2Element.style.color = 'white';
        pElement.style.color = 'white';
        title.style.color = 'white';
        description.style.color = 'white';
    } else {
        darkMode.style.backgroundColor = 'white';
        /*orderBox.style.backgroundColor = '#f7f1ec';*/
        darkBody.classList.remove('dark-mode')
        orderBox.classList.remove('dark-mode');
        h2Element.style.color = 'black';
        pElement.style.color = 'black';
        title.style.color = 'black';
        description.style.color = 'black';
    }
}

darkModeButton.addEventListener('click',checkstatus);


/*Now let's change the color of the title to a random color*/

let changeColorButton = document.getElementById('color-btn');

function randomColor(){
    title.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

changeColorButton.addEventListener('click',randomColor);



/*Now let's change the menu that selects a coffee 
and indicates the user the selected coffee*/


/*First we call the elements and we store them into variables*/ 
let coffeeButton = document.querySelectorAll('.coffee-option');
let textElement = document.getElementById('order-text');
let imageCoffee = document.getElementById('coffee-img');

/*Here come variables for the are you sure you want to confirm your order*/
let orderModal = document.getElementById('order-modal');
let yesOrder = document.getElementById('yes-order');
let noOrder = document.getElementById('no-order'); 

/*Now variables that will handle your order has been sent*/
let confirmQuestion = document.getElementById('confirm-question');
let sentMessage = document.getElementById('sent-message');
let goBack = document.getElementById('go-back'); 


let confirmOrder = document.getElementById('confirm-order');

/*This function takes the text element and add text inside it whenever
the event is fired through an action, and also changes the picture displayed 
in the html */
function addSelection(event){
    let selectedCoffee = event.target.innerHTML; 
    textElement.innerHTML = `You have selected ${event.target.innerHTML}`;

    confirmOrder.classList.remove('hidden');

    if(selectedCoffee === 'Latte'){
        imageCoffee.src = 'latte.jpg';
        confirmOrder.classList.remove('.confirm-order')
    } else if (selectedCoffee === 'Cappuccino'){
        imageCoffee.src = 'capuccino.jpg'
    } else if (selectedCoffee === 'Espresso'){
        imageCoffee.src = 'expresso.avif'
    }
}


/*The next function is a loop that iterates through all buttons 
and listens for an event, which means when one of the coffeebuttons linked
through the variable coffeeButton, is clicked, it applies the function 
addSelection to change its text and indicate whicch coffe has been selected */ 
function coffeeButtons(){
    coffeeButton.forEach(function(button){
        button.addEventListener('click',addSelection);
    })
}

/*Now here the function that removes the hiding modal*/
function showModal(){
    orderModal.classList.remove('hidden');
} 


/*And here is the function that toggles the hidden to hide the confirm order
menu once we click "no".*/
function hideModal(){
    orderModal.classList.add('hidden');
}

/*And this function will hide tue question and yes/no and show the 
order confirmation and go back button*/

function sendOrder(){
    confirmQuestion.classList.add('hidden');

    yesOrder.classList.add('hidden');
    noOrder.classList.add('hidden');

    sentMessage.classList.remove('hidden');
    goBack.classList.remove('hidden');

}

/*Now the following function will reset the page once we click go back
when the order has been sent confirmation appears*/ 
function resetOrder(){
    orderModal.classList.add('hidden');
    confirmQuestion.classList.remove('hidden');

    yesOrder.classList.remove('hidden');
    noOrder.classList.remove('hidden');

    sentMessage.classList.add('hidden');
    goBack.classList.add('hidden');

    textElement.innerHTML = 'No coffee selected yet';
    confirmOrder.classList.add('hidden');
    imageCoffee.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500";
}







coffeeButtons();

confirmOrder.addEventListener('click', showModal);   /*This makes sure the confirm order menu appears when we click*/
noOrder.addEventListener('click', hideModal);        /*This hides the confirm order menu once we click on the no button*/ 
yesOrder.addEventListener('click', sendOrder);
goBack.addEventListener('click', resetOrder);        /*This makes all the your confirmation has been sent elements to dissapear once you click it */


/* Now let's toggle a menu that says, are you sure you want this selection
and two buttons, confirm order or not yet, and if you say not yet the buttons 
dissapear and goes back to the order, if you say confirm order 
a p element sayin your oder has been confirmed appears*/











