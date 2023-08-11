var HTMLElement = function HTMLElement() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(HTMLElement);

Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLElement",
        configurable: true
    }
});