var WindowProperties = function WindowProperties() { };
env_vm.safefunction(WindowProperties);
Object.defineProperties(WindowProperties.prototype, {
    [Symbol.toStringTag]: {
        value: "WindowProperties",
        configurable: true
    }
})


WindowProperties.prototype.__proto__ = EventTarget.prototype;