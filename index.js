let wilderInfo = require('./information');
c
var cowsay = require("cowsay");


console.log(cowsay.say({
    text : 
    `Hello I am ${wilderInfo['userName']} from ${wilderInfo['userCampus']} !`,
    e : "xx",
    T : "/ "
}));