var MimeType = function MimeType() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(MimeType);


Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeType"
    }
})
MimeType.prototype.description = "";
MimeType.prototype.enabledPlugin = false;
MimeType.prototype.suffixes = "";
MimeType.prototype.type = "";


var MimeType = {};
MimeType.__proto__ = MimeType.prototype;
