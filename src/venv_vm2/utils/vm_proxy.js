env_vm.proxy = function (obj) {
    if (env_vm.memory.config.proxy == false) {
        return obj;
    };
    return new Proxy(obj, {
        set(target, prototype, value) {
            // console.table('set--->', target, prototype, value);
            // console.table([{ "方向": "set", "obj": target, "proto": prototype, "value": value }]);
            env_vm.memory.print.push({ "方向": "set", "obj": target, "proto": prototype, "value": value })
            return Reflect.set(...arguments);
        },
        get(target, prototype, receiver) {
            // console.table('get--->', target, prototype, target[prototype]);
            // console.table({ "方向": "get", "obj": target, "proto": prototype, "value": target[prototype] })
            env_vm.memory.print.push({ "方向": "get", "obj": target, "proto": prototype, "value": target[prototype] })
            return target[prototype];
        }
    })
}
