// Module that asks for a name, let's you input your name and ends afterwards

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);
  console.log('This important software is now closing');
  process.exit(1);
});

process.stdin.on('close', () => {
  console.log('This important software is now closing');
});
