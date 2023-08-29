// 更改浏览器的某些参数 常用的

env_vm.AddPlugin = function (data) {

    if (env_vm.memory.PluginArray.temp == undefined) {
        env_vm.memory.PluginArray.temp = [];
    }
    env_vm.memory.PluginArray.temp.push(data);
}