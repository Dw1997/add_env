var HTMLDivElement = function HTMLDivElement() {
    throw new TypeError("Illegal constructor");

};
env_vm.safefunction(HTMLDivElement);
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
});


HTMLDivElement.prototype.__proto__ = HTMLElement.prototype;





env_vm.memory.htmlelements['div'] = function () {
    var div = new (function () { });
    //////////////////
    div.align = "";
    //////////////////
    div.__proto__ = HTMLDivElement.prototype;
    return div;
};