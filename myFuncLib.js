'use strict';
function play(){
let x = Math.random();
x = Math.floor(x*2+1);
return x;
count++;


}

let tails = 0;
let heads = 0;
let flip;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

flip =play();
if (flip === 1)
    tails++;
else
    heads++;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

flip = play();
if (flip === 1)
    tails++;
else
    heads++;

console.log('heads: ' + heads);
console.log('tails: ' + tails);
