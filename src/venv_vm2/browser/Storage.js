var Storage = function Storage() {
    throw new TypeError("Illegal constructor");
};
env_vm.safefunction(Storage);
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
        value: "Storage",
        configurable: true
    }
})

////////////////////////
Storage.prototype.setItem = function setItem(keyName, value) {
    debugger;
    return env_vm.memory.storage[keyName] = value;
}
Storage.prototype.getItem = function getItem(keyName) {
    debugger;
    return env_vm.memory.storage[keyName];
}; env_vm.safefunction(Storage.prototype.getItem);
Storage.prototype.removeItem = function removeItem(keyName) {
    debugger;
    if (keyName in env_vm.memory.storage) {
        delete env_vm.memory.storage[keyName];
    }
}; env_vm.safefunction(Storage.prototype.removeItem);
////////////////////////


var sessionStorage = {
    "_tea_cache_duration": "{\"duration\":6626,\"page_title\":\"今日头条\"}",
    "tt_scid": "7qcvHX1DEf6j4iHP-BeiGXMZkwNDgUnHgFkpMwAbAvrxV1W1pbrr3lcTipf4Rh.841ce",
    "__ac_ns": "1691480491073",
    "/": "1",
    "__tea_session_id_24": "{\"sessionId\":\"e9232a96-dde4-4469-ad4b-854f56625e2a\",\"timestamp\":1691481998444}",
    "_byted_param_sw": "dHYgv2WqxrQHwo64L40=",
    "ttcid": "ff7a16bf208b4edcbab50a7010b3619130"
};
sessionStorage.__proto__ = Storage.prototype;
// sessionStorage.setItem = function setItem(keyName, value) {
//     return env_vm.memory.sessionStorage[keyName] = value;
// }; env_vm.safefunction(sessionStorage.setItem);
// sessionStorage.getItem = function getItem(keyName) {
//     return env_vm.memory.sessionStorage[keyName];
// }; env_vm.safefunction(sessionStorage.getItem);
// sessionStorage.removeItem = function removeItem(keyName) {
//     return delete env_vm.memory.sessionStorage[keyName]
// }; env_vm.safefunction(sessionStorage.removeItem);
Object.defineProperties(sessionStorage, {
    [Symbol.toStringTag]: {
        value: "sessionStorage",
        configurable: true
    }
})
sessionStorage = env_vm.proxy(sessionStorage);

for (let key in sessionStorage) {
    if (typeof sessionStorage[key] === 'string') {
        Storage.prototype.setItem(key, sessionStorage[key]);
    }
}




var localStorage = {
    "SLARDARtoutiao_web_pc": "JTdCJTIydXNlcklkJTIyOiUyMjcyNjQ4NTMzNzYwMjkwOTk1NzUlMjIsJTIyZGV2aWNlSWQlMjI6JTIyNzI2NDg1MzM3NjAyOTA5OTU3NSUyMiwlMjJleHBpcmVzJTIyOjE2OTkyNTc1MjgwNzMlN0Q=",
    "__tea_cache_tokens_24": "{\"web_id\":\"7264853376029099575\",\"user_unique_id\":\"7264853376029099575\",\"timestamp\":1691480816057,\"_type_\":\"default\"}",
    "__tea_cache_first_24": "1",
    "SLARDARweb_login_sdk": "{\"userId\":\"b1ebcfa5-c954-4c3d-0c4b-b71b0dca1c0b\",\"deviceId\":\"0aa87c82-21cf-4fe3-abd3-a0f43e9ee908\"}",
    "tt_scid": "7qcvHX1DEf6j4iHP-BeiGXMZkwNDgUnHgFkpMwAbAvrxV1W1pbrr3lcTipf4Rh.841ce",
    "SLARDARpassport_account_api": "{\"userId\":\"d5b24c2d-6a23-80af-4e7d-9bff75c0aae8\",\"deviceId\":\"18787468-4acc-4089-b7c6-fa9a7e53a6ac\"}",
    "aria": "{\"df8e29823e2f4c0822e3693ee653bfc5\":{\"runtime\":{\"appid\":\"df8e29823e2f4c0822e3693ee653bfc5\"},\"road\":\"https://lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/4.5.4/\"}}",
    "_byted_param_sw": "dHYgv2WqxrQHwo64L40=",
    "ttcid": "ff7a16bf208b4edcbab50a7010b3619130",
    "__is_visited_home": "1"
};
localStorage.__proto__ = Storage.prototype;
localStorage.__proto__ = Storage.prototype;
// localStorage.setItem = function setItem(keyName, value) {
//     return env_vm.memory.localStorage[keyName] = value;
// }; env_vm.safefunction(localStorage.setItem);
// localStorage.getItem = function getItem(keyName) {
//     return env_vm.memory.localStorage[keyName];
// }; env_vm.safefunction(localStorage.getItem);
// localStorage.removeItem = function removeItem(keyName) {
//     return delete env_vm.memory.localStorage[keyName]
// }; env_vm.safefunction(localStorage.removeItem);
Object.defineProperties(localStorage, {
    [Symbol.toStringTag]: {
        value: "localStorage",
        configurable: true
    }
})
localStorage = env_vm.proxy(localStorage);
for (let key in localStorage) {
    if (typeof localStorage[key] === 'string') {
        Storage.prototype.setItem(key, localStorage[key])
    };
}

