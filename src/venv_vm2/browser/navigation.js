var Navigation = function Navigation() {
    throw new TypeError("Illegal constructor");
};
env_vm.safefunction(Navigation);

Object.defineProperties(Navigation.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigation",
        configurable: true
    }
});
////////////////////////
Navigation.prototype.userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/115.0.0.0";
////////////////////////

navigator = {};
navigator.__proto__ = Navigation.prototype;
navigator = env_vm.proxy(navigator);