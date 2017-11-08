#!/usr/bin/env node

var fs = require('fs');
var treeCount = 0;
var walkSync = function walkSync(dir, levelCount) {
  if(levelCount >= 2) {
    return
  }
  var files = fs.readdirSync(dir);
  var tabs = "", i = 0;
  for(i; i < treeCount; i++) {
    tabs += "\t";
  }
  files.forEach(function(file) {
    var fileStat = fs.statSync(dir + '/' + file);
    console.log(tabs + " - " + file + "-------------------------------" + fileStat.size + "bytes");
    if (fileStat.isDirectory()) {
      treeCount++;
      walkSync(dir + '/' + file, levelCount++);
      treeCount--;
    }
  });
};

walkSync(process.cwd(), 1);

