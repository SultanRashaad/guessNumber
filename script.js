'use strict';

var secretNumber = Math.trunc(Math.random() * 20) + 1;  
var score = 20;
var highscore = 0;
document.querySelector('.close-modal').addEventListener('click',closeModal)
function check(){
    const guess = Number(document.querySelector('#num').value);
    console.log("guessed number is : ", guess)
    if(guess==secretNumber){
        console.log("Correct Number");
        document.querySelector('.msg').textContent='🎉🎉 Correct Number';
        document.querySelector('.questionMark').textContent=secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
        document.querySelector('.btn').disabled = true;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('body').style.backgroundImage = 'URL(https://media4.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif?cid=ecf05e47171de1294f0fc26f1efc0bf505faca58c70fdfad&rid=giphy.gif&ct=s)';
        //document.querySelector('.check').addEventListener('click', alert('Congrats!!🎉Click again to try again'));
    }
    else if(guess>secretNumber){
        console.log("input is higher than required value")
        document.querySelector('.msg').textContent='📈 Too High';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess<secretNumber){
        console.log("input is lower than required value");
        document.querySelector('.msg').textContent='📉 Too low';
        score--;
        document.querySelector('.score').textContent=score;
    }
    if(!guess){
        console.log("No number")
        document.querySelector('.msg').textContent='No Input number';
    }
    if (score==0) {
        gameover();
    }
    
}

function again() {
    document.querySelector('.msg').textContent="start guessing...";
    document.querySelector('.questionMark').textContent='?';
    document.querySelector('#num').value='';
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundImage='none';
    document.querySelector('body').style.backgroundColor='black';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
}

function gameover(){
    document.querySelector('.open-modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.modal-Bottomright').textContent="👻👻Game Over...";
    const para = document.createElement('p')
    const node = document.createTextNode(`HighScore: ${highscore}`);
    para.appendChild(node)
    document.querySelector('.modal-Bottomright').appendChild(para);
   
}
 function closeModal() {
    document.querySelector('.open-modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  };

function Reload(){
    document.location.reload();
}

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click',again);
document.querySelector('.play-again').addEventListener('click',Reload);
document.addEventListener('keydown',function(e){
    if(document.querySelector('#num').value!=null & e.key==='Enter'){
        check();
    }
})
 
 



