env_vm.memory.Plugin = {};
var Plugin = function Plugin() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(Plugin);

env_vm.memory.Plugin.iterator = function values() {
    debugger;
    return {
        next: function () {
            if (this.index_ == undefined) {
                this.index_ = 0;
            }
            var temp = this.self_[this.index_];
            this.index_++;
            if (temp != undefined) {
                return { done: false, value: temp };
            }
            else {
                return { done: true, value: temp };
            }

        },
        self_: this
    }
}; env_vm.safefunction(env_vm.memory.Plugin.iterator);



Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: "Plugin",
        configurable: true
    },
    [Symbol.iterator]: {
        value: env_vm.memory.Plugin.iterator,
        configurable: true
    }
});


///////////////////////
Plugin.prototype.description = "";
Plugin.prototype.filename = "";
Plugin.prototype.name = "";
Plugin.prototype.length = 0;

Plugin.prototype.item = function item(index) {
    debugger;
    return this[index];
}; env_vm.safefunction(Plugin.prototype.item);

Plugin.prototype.namedItem = function nameditem(key) {
    debugger;
    return this[key];
}; env_vm.safefunction(Plugin.prototype.namedItem);

for (var pr in Plugin.prototype) {
    if (typeof (Plugin.prototype[pr]) != "function") {
        Plugin.prototype.__defineGetter__(pr, function () {
            throw new TypeError("Illegal constructor");
        })
    }
}
///////////////////////

env_vm.memory.Plugin.new = function (data) {
    var plugin = {};
    if (data == undefined) {
        plugin.description = data.description;
        plugin.filename = data.filename;
        plugin.name = data.name;

        if (data.MimeTypes != undefined) {
            for (var mtindex = 0; mtindex < data.MimeTypes.length; mtindex++) {
                var mimeTypedata = data.MimeTypes[mtindex];
                var mimeType = env_vm.memory.MimeType.new(mimeTypedata, plugin);
                plugin[mtindex] = mimeType;
                // plugin[mimeType.type] = mimeType;
                Object.defineProperty(plugin, mimeType.type, {
                    value: mimeType
                })
                //////
            }
            plugin.length = data.MimeType.length;
        }

    }
    plugin.__proto__ = Plugin.prototype;
    return plugin;
}


