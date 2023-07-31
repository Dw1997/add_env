var Location = function Location() {
    throw new TypeError("Illegal constructor");
};
env_vm.safefunction(Location);


Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});
////////////////////////
Location.prototype.host = "y.qq.com";
////////////////////////


location = {};
location.__proto__ = Location.prototype;
location = env_vm.proxy(location);