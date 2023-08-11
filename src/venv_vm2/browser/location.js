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
location.host = "www.toutiao.com";
location.href = "https://www.toutiao.com/?wid=1691480493012"
location.protocol = "https:"
////////////////////////
location = env_vm.proxy(location);