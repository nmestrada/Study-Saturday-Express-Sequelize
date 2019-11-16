'use strict';

const Sequelize = require('sequelize');
const db = require('../db');
 
console.log('hello')
const Student = db.define();

module.exports = Student;
