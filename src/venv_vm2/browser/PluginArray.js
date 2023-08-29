env_vm.memory.PluginArray = {};
var PluginArray = function MimeType() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(PluginArray);

env_vm.memory.PluginArray.iterator = function values() {
    debugger;
}; env_vm.safefunction(env_vm.memory.PluginArray.iterator);

Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {
        value: "PluginArray",
        configurable: true
    },
    [Symbol.iterator]: {
        value: env_vm.memory.PluginArray.iterator,
        configurable: true
    }
});
//////////////////////////////////////
PluginArray.prototype.item = function item(index) {
    debugger;
    return this[index];
}; env_vm.safefunction(PluginArray.prototype.item);
PluginArray.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key];
}; env_vm.safefunction(PluginArray.prototype.namedItem);
PluginArray.prototype.refresh = function refresh() {
    debugger;
}; env_vm.safefunction(PluginArray.prototype.refresh);
PluginArray.prototype.length = 0;

for (var pr in PluginArray.prototype) {
    if (typeof (PluginArray.prototype[pr]) != "function") {
        PluginArray.prototype.__defineGetter__(pr, function () {
            throw new TypeError("Illegal constructor");
        })
    }
}

//////////////////////////////////////

env_vm.memory.PluginArray._ = {};
if (env_vm.memory.PluginArray.temp != undefined) {
    for (var index = 0; index < env_vm.memory.PluginArray.temp.length; index++) {
        var plugintetmp = env_vm.memory.Plugin.new(env_vm.memory.PluginArray.temp[index])
        env_vm.memory.PluginArray._[index] = plugintetmp;
        Object.defineProperty(env_vm.memory.PluginArray._, plugintetmp.name, {
            value: plugintetmp
        })
    }
    env_vm.memory.PluginArray._.length = env_vm.memory.PluginArray.temp.length;
}


env_vm.memory.PluginArray._.__proto__ = PluginArray.prototype;
env_vm.memory.PluginArray._ = env_vm.proxy(env_vm.memory.PluginArray._);

// 依赖注入
navigator.plugins = env_vm.memory.PluginArray._;


