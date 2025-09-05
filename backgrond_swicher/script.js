// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body');
// buttons.forEach(function(button){
//     buttons.addEventListner('click',function(e){
//     let ID = e.target.id ;
//     if (ID=='grey') {
//         body.style.backgoundColor = e.target.id;
        
//     }if (ID=='blue') {
//         body.style.backgoundColor = e.target.id;
        
//     }
//     if (ID=='white') {
//         body.style.backgoundColor = e.target.id;
        
//     }
//     if (ID=='yellow') {
//         body.style.backgoundColor = e.target.id;
        
//     }
// });
// });



const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    let ID = e.target.id;

    if (ID === 'grey') {
      body.style.backgroundColor = 'grey';
    } else if (ID === 'blue') {
      body.style.backgroundColor = 'blue';
    } else if (ID === 'white') {
      body.style.backgroundColor = 'white';
    } else if (ID === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});
