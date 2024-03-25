const fs = require('fs');

// Create a readable stream to read from input.txt
const readableStream = fs.createReadStream('text.txt');

// Create a writable stream to write to output.txt
const writableStream = fs.createWriteStream('output.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Log a message when the process completes
readableStream.on('end', () => {
  console.log('Data has been copied from input.txt to output.txt');
});

// Log an error if any occurs
readableStream.on('error', (err) => {
  console.error('Error reading input.txt:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing to output.txt:', err);
});
