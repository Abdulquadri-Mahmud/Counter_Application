const viewCounter = document.querySelector('#view');
const viewStatus = document.querySelector('#status');
const buttons = Array.from(document.querySelectorAll('.btn'))

let counter = 0;

buttons.map(button => {
     button.addEventListener('click',(event)=>{
          const targetButton = event.target.classList
          if (targetButton.contains('decrement')) {

               counter--
               viewCounter.innerText = counter;
               viewStatus.innerHTML = 'Decrement';

          }if (targetButton.contains('reset')) {

               viewCounter.innerText = counter = 0;
               viewStatus.innerHTML = 'Reset';
          }
          if (targetButton.contains('increment')) {
               
               counter++;
               viewCounter.innerText = counter;
               viewStatus.innerHTML = 'Increment'
          }
          
     })
})