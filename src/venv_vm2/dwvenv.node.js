var fs = require("fs");

var vmtools = require('./utils/tools.node');
var htmlelement = require('./browser/Htmlelements/htmlelement.node');

function GetCode() {
    var code = "";
    code += vmtools.GetCode() + "\r\n";

    code += fs.readFileSync(`${__dirname}/browser/EventTarget.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/WindowProperties.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Window.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Location.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Navigation.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Histroy.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Screen.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Storage.js`) + "\r\n";


    // 把所有element加载
    code += htmlelement.GetCode() + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Document.js`) + "\r\n";


    code += "debugger;\r\n";
    return code;
}

module.exports = { GetCode }