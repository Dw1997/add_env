var EventTarget = function EventTarget() { };
env_vm.safefunction(EventTarget);
Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
});

///////////////////
EventTarget.prototype.addEventListener = function addEventListener() {
    debugger;
}; env_vm.proxy(EventTarget.prototype.addEventListener);

EventTarget.prototype.dispatchEvent = function dispatchEvent() {
    debugger;
}; env_vm.proxy(EventTarget.prototype.dispatchEvent);

EventTarget.prototype.removeEventListener = function removeEventListener() {
    debugger;
}; env_vm.proxy(EventTarget.prototype.removeEventListener);
///////////////////
