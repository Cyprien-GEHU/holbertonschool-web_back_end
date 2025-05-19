// the function wiil demande th name of the user

const stand = require('process');

stand.stdout.write('Welcome to Holberton School, what is your name?\n');
stand.stdin.on('readable', () => {
  const user = stand.stdin.read();
  if (user) {
    stand.stdout.write(`Your name is: ${user}`);
  }
});

stand.stdin.on('end', () => {
  console.log('This important software is now closing');
});
