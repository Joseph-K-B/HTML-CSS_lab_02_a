const nameTag = document.getElementById('name-tag');
const nameSection = document.getElementById('name-section');
nameSection.innerText = 'Izzie';
//bugged revisit
// nameSection.addEventListener('click , ()=>{    
//     console.log('i am clicking a button')
//     console.log(Math.random())
// })
const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');
const greetingSection = document.getElementById('greeting');
bottomSection.style.backgroundColor= "green";
topSection.style.backgroundColor= "purple";

greetingSection.innerText = 'Goodbye';

const nameInput = document.getElementById('name-input');
//changes output while typing
// nameInput.addEventListener('input' , (e)=>{
//     console.log(e.target.value)
//     nameSection.innerText = e.target.value;
//});
//changes output after clicking button
const submitButton = document.getElementById ('submit')
    submitButton.addEventListener('click' , (e)=>{
        nameSection.innerText = nameInput.value
    });

    console.log(nameInput.value);

    const colorInput = document.getElementById('colors');

    const topBackground = document.getElementById ('top-background');
        topBackground.addEventListener('click' , (e)=>{
            topSection.style.backgroundColor = colorInput.value
        });

    const colorInput_2 = document.getElementById('colors2');

    const bottomBackground = document.getElementById('bottom-background'); 
        bottomBackground.addEventListener ('click' , (e)=>{
            bottomSection.style.backgroundColor = colorInput_2.value
        });
        

// function example   
// function shout(word){
//     console.log(word)
//     console.log(word.toUpperCase())
// }
// shout ('Joseph'); 

 