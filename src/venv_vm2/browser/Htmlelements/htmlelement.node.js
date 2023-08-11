var fs = require("fs");

function GetCode() {
    var code = "";
    code += fs.readFileSync(`${__dirname}/HTMLElement.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/HTMLDivElement.js`) + "\r\n";
    code += fs.readFileSync(`${__dirname}/HTMLCanvasElement.js`) + "\r\n";
    return code;
}

module.exports = {
    GetCode
}