var fs = require('fs');
var envm2_tool_getcode = require('./venv_vm2/dwvenv.node');
const { VM, VMScript } = require('vm2');

var envcode = envm2_tool_getcode.run(
    {
        proxy: true
    },
    ""
); ``
const codefile = `${__dirname}/rcd.js`;
const vm = new VM();
const script = new VMScript('try{' + envcode + fs.readFileSync(codefile) + '}catch(error){console.error("An error occurred:", error);env_vm.print.log()}env_vm.print.log()', `${__dirname}/debuging.js`);
debugger;
var res = vm.run(script);
console.log(res);
debugger;