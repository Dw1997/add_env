var HTMLCanvasElement = function HTMLCanvasElement() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(HTMLCanvasElement);


Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
});


env_vm.memory.htmlelements['canvas'] = function () {
    var canvas = new (function () { });
    ////////////////
    ////////////////
    canvas.__proto__ = HTMLCanvasElement.prototype;
    return canvas;
}

HTMLCanvasElement.prototype.__proto__ = HTMLElement.prototype;