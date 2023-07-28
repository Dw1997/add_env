var EventTarget = function EventTarget() { };
env_vm.safefunction(EventTarget);
Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
})