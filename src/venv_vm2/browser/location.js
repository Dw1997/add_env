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

location = {};
location.__proto__ = Location.prototype;
////////////////////////
location.host = "i.y.qq.com";
////////////////////////
location = env_vm.proxy(location);