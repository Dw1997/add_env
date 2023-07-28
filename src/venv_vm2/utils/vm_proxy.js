env_vm.proxy = function (obj) {
    if (env_vm.memory.config.proxy == false) {
        return obj;
    };
    return new Proxy(obj, {
        set(target, prototype, value) {
            console.log('set--->', target, prototype, value);
            return Reflect.set(...arguments);
        },
        get(target, prototype, receiver) {
            console.log('get--->', target, prototype, receiver);
            return target[prototype];
        }
    })
}
