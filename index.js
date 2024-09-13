import { argv } from 'node:process';
import fetch from 'node-fetch';

const API_ADDRESS = 'http://text-processing.com/api/sentiment/';

// Parse text from process arguments
const requestText = ['text=', ...argv.slice(2)].join(' ');

const response = await fetch(API_ADDRESS, {
  method: 'post',
  body: requestText,
});
const mood = await response.json();

console.log('Your text has the following sentiment:\n');
console.log(`- ${Math.round(mood.probability.pos * 100)}% positive`);
console.log(`- ${Math.round(mood.probability.neg * 100)}% negative`);
