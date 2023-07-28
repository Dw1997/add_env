var fs = require('fs');
var envm2_tool_getcode = require('./venv_vm2/dwvenv.node');
const { VM, VMScript } = require('vm2');

var envcode = envm2_tool_getcode.GetCode();
const codefile = `${__dirname}/qqmusic.js`;
const vm = new VM();
const script = new VMScript(envcode + fs.readFileSync(codefile), `${__dirname}/debuging.js`);
debugger;
var res = vm.run(script);
console.log(res);
debugger;