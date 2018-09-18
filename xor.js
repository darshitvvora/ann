const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
    {input: [0,0,0], output: [0]},
    {input: [0,0,1], output: [0]},
    {input: [0,1,1], output: [0]},
    {input: [1,0,1], output: [1]},
    {input: [1,1,1], output: [1]},
]);

const outputProb = network.run([1,0,1]);
const output = (outputProb>0.5) ? 1 : 0;

console.log(`Prob: ${output}`);
