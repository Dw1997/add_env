var fs = require("fs");

var vmtools = require('./utils/tools.node');
function GetCode() {
    var code = "";
    code += vmtools.GetCode() + "\r\n";

    code += fs.readFileSync(`${__dirname}/browser/eventTarget.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/windowProperties.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/window.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/location.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/browser/navigation.js`) + "\r\n";

    code += "debugger;\r\n";
    return code;
}

module.exports = { GetCode }