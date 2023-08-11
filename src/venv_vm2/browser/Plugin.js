env_vm.memory.Plugin = {};

var Plugin = function Plugin() {
    throw new TypeError("Illegal constructor");
};
env_vm.safefunction(Plugin);

env_vm.memory.Plugin.iterator = function values() {
    debugger;
};
env_vm.safefunction(env_vm.memory.Plugin.iterator);

Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: "Plugin",
        configurable: true
    },
    [Symbol.iterator]: {
        values: env_vm.memory.Plugin.iterator

    }
});

/////////////////////////////////

/////////////////////////////////


