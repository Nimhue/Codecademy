let userName = 'Vasilica';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');

let userQuestion = 'Will I win the lottery?';
console.log(userName + ' has asked: ' + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    console.log(eigthBall);
    break;
    
  case 1:
    eightBall = 'It is decidedly so';
    console.log('The Universe says: ' + eightBall);
    break;
    
  case 2:
    eightBall = 'Reply hazy try again';
    console.log('The Universe says: ' +eightBall);
    break;
    
  case 3:
    eightBall = 'Cannot predict now';
    console.log('The Universe says: ' +eightBall);
    break;
    
  case 4:
    eightBall = 'Do not count on it';
    console.log('The Universe says: ' +eightBall);
    break;
    
  case 5: 
    eightBall = 'My sources say no';
    console.log('The Universe says: ' +eightBall);
    break;
    
  case 6:
    eightBall = 'Outlook not so good';
    console.log('The Universe says: ' +eightBall);
    break;
    
  case 7:
    eightBall = 'Signs point to yes';
    console.log('The Universe says: ' +eightBall);
    break;
    
  default:
    eightBall = 'Try again';
    console.log('The Universe says: ' +eightBall);
    break;
}

