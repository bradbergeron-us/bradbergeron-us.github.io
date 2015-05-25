var webdriver = require('selenium-webdriver');
var client = new webdriver.Builder().withCapabilities({'browserName': 'chrome'}).build();
var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');
var screenshotDirectory = __dirname + '/screenshots/';
var sys = require('sys')
var exec = require('child_process').exec;
require('colors');

function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(screenshotDirectory + filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

function puts(error, stdout, stderr) {
  sys.puts(stdout);
  sys.puts(stderr);
