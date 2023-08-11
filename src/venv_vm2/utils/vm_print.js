env_vm.print = {};
env_vm.memory.print = [];
env_vm.print.log = function () {
    if (env_vm.memory.config.print) {
        console.table(env_vm.memory.print);
    }
}

env_vm.print.getall = function () {

}