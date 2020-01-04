#!/usr/bin/env node

import sayHelloToUser from '..';
import isEven, { description } from '../isEven';
import game from '../gameEngine';

console.log('Welcome to the Brain Games!');
console.log(description);

const name = sayHelloToUser();
game(isEven, name);
