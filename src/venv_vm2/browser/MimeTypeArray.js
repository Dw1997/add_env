env_vm.memory.MimeTypeArray = {};
var MimeTypeArray = function MimeTypeArray() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(MimeTypeArray);
``
env_vm.memory.MimeTypeArray.iterator = function values() {
    debugger;
}; env_vm.safefunction(env_vm.memory.MimeTypeArray.iterator);

Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeTypeArray ",
        configurable: true
    },
    [Symbol.iterator]: {
        value: env_vm.memory.MimeTypeArray.iterator,
        configurable: true
    }
});


//////////////////////////////////////
MimeTypeArray.prototype.item = function item(index) {
    debugger;
    return this[index];
}; env_vm.safefunction(MimeTypeArray.prototype.item);
MimeTypeArray.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key];
}; env_vm.safefunction(MimeTypeArray.prototype.namedItem);
MimeTypeArray.prototype.length = 0;

for (var pr in MimeTypeArray.prototype) {
    if (typeof (MimeTypeArray.prototype[pr]) != "function") {
        MimeTypeArray.prototype.__defineGetter__(pr, function () {
            throw new TypeError("Illegal constructor");
        })
    }
}

//////////////////////////////////////


navigator.mimeTypes = {}
navigator.mimeTypes.temp = 0;
for (let pindex = 0; pindex < navigator.plugins.length; pindex++) {
    var plugin_ = navigator.plugins[pindex]
    for (let mindex = 0; mindex < plugin_.length; mindex++) {
        var mimeType_ = plugin_.item(mindex);
        if (navigator.mimeTypes[mimeType_.type] == undefined) {
            navigator.mimeTypes[navigator.mimeTypes.temp] = mimeType_;
            Object.defineProperty(navigator.mimeTypes, mimeType_.type, {
                value: mimeType_
            })
            navigator.mimeTypes.temp++;
        }


    }
}
navigator.mimeTypes.length = navigator.mimeTypes.temp;
delete navigator.mimeTypes.temp;


navigator.mimeTypes.__proto__ = MimeTypeArray.prototype;
navigator.mimeTypes = env_vm.proxy(navigator.mimeTypes);