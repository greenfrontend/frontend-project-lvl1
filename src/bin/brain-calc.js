#!/usr/bin/env node

import sayHelloToUser from '..';
import makeGame, { description } from '../games/calc';
import game from '../gameEngine';

console.log('Welcome to the Brain Games!');
console.log(description);

const name = sayHelloToUser();
game(makeGame, name);
