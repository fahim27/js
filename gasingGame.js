//A number gassing  game;

let duration=parseInt(prompt('how many time play this game:'))
let won=0;
let los=0;

for(let i=1;i<=duration;i++){
let number=parseInt(prompt('Enter number:'));
let randomNumber=parseInt(Math.random()*5+1);
if(number==randomNumber){
won++
console.log('great ! you are wine');
console.log('the random number was'+ randomNumber + 'and your giving number was' + number);

}
else{
console.log('sorry,you are faild');
console.log('the random number was'+ randomNumber + 'and your giving number was' + number);
los++

}
}

document.write('you are play ' + duration +' times','<br/>');

document.write('you are won ' + won +' times','<br/>');


document.write('you are loss ' + los +' times','<br/>');