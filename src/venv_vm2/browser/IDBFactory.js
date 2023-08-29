env_vm.memory.db = {};
var IDBFactory = function IDBFactory() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(IDBFactory)


Object.defineProperties(IDBFactory.prototype, {
    [Symbol.toStringTag]: {
        value: "IDBFactory",
        configurable: true
    }
});

/////////////////////////////////////////
IDBFactory.prototype.cmp = function cmp(x, y) {
    debugger;
    if (x > y) {
        return 1;
    } else {
        if (x == y) {
            return 0;
        } else {
            return -1;
        }
    }
}; env_vm.proxy(IDBFactory.prototype.cmp);

IDBFactory.prototype.databases = function databases() {
    debugger;

    for (var name in env_vm.memory.db) {

    }
}; env_vm.proxy(IDBFactory.prototype.databases);

IDBFactory.prototype.deleteDatabase = function deleteDatabase(name) {
    debugger;
    delete env_vm.memory.db.name;
}; env_vm.proxy(IDBFactory.prototype.deleteDatabase);


IDBFactory.prototype.open = function open(name, version) {
    debugger;
    env_vm.memory.db[name] = {
        'version': version
    };
    return env_vm.memory.db[name];
}; env_vm.proxy(IDBFactory.prototype.open);
/////////////////////////////////////////

indexedDB = {};
indexedDB.__proto__ = IDBFactory.prototype;