/*
	이번 문법
*/
/*
require('./style.sass')
var hello = require('./hello');
var world = require('./world');
var name = require('./name');
document.write(hello + ',' + world + "," + name  + '!');
*/
/*
	es2015 문법
*/
import './style.sass';
import hello from './hello';
import world from './world';
import name from './name';
document.write(`${hello}, ${world},${name}!`);
