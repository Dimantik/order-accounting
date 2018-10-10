const mongoose = require('mongoose');
const app = require('express')();
const http = require('http').Server(app);
const db = require('../config').db;

module.exports = http;