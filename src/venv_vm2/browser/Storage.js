var Storage = function Storage() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(Storage);
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
        value: "Storage",
        configurable: true,
    }
})

////////////////////////
Storage.prototype.length = 1;
Storage.prototype.clear = function clear() {
    // debugger;
    var temp = Object.keys(this);
    for (var i = 0; i < temp.length; i++) {
        delete this[temp[i]];
    }
}; env_vm.safefunction(Storage.prototype.clear);
Storage.prototype.getItem = function getItem(k) {
    // debugger;
    return this[k];
}; env_vm.safefunction(Storage.prototype.getItem);
Storage.prototype.key = function key(index) {
    // debugger;
    return Object.keys(this)[index];
}; env_vm.safefunction(Storage.prototype.key);
Storage.prototype.removeItem = function removeItem(k) {
    // debugger;
    delete this[k];
}; env_vm.safefunction(Storage.prototype.removeItem);
Storage.prototype.setItem = function setItem(k, v) {
    // debugger;
    this[k] = v;
}; env_vm.safefunction(Storage.prototype.setItem);


Storage.prototype.__defineGetter__("length", function length() {
    return Object.keys(this).length;
})
////////////////////////


var sessionStorage1 = {
    // "_tea_cache_duration": "{\"duration\":6626,\"page_title\":\"今日头条\"}",
    // "tt_scid": "7qcvHX1DEf6j4iHP-BeiGXMZkwNDgUnHgFkpMwAbAvrxV1W1pbrr3lcTipf4Rh.841ce",
    // "__ac_ns": "1691480491073",
    // "/": "1",
    // "__tea_session_id_24": "{\"sessionId\":\"e9232a96-dde4-4469-ad4b-854f56625e2a\",\"timestamp\":1691481998444}",
    // "_byted_param_sw": "dHYgv2WqxrQHwo64L40=",
    // "ttcid": "ff7a16bf208b4edcbab50a7010b3619130"
};
sessionStorage = {};
sessionStorage.__proto__ = Storage.prototype;
sessionStorage = env_vm.proxy(sessionStorage);

// for (let key in sessionStorage1) {
//     if (typeof sessionStorage1[key] === 'string') {
//         sessionStorage.setItem(key, sessionStorage1[key]);
//     }
// }




var localStorage1 = {
    // "SLARDARtoutiao_web_pc": "JTdCJTIydXNlcklkJTIyOiUyMjcyNjQ4NTMzNzYwMjkwOTk1NzUlMjIsJTIyZGV2aWNlSWQlMjI6JTIyNzI2NDg1MzM3NjAyOTA5OTU3NSUyMiwlMjJleHBpcmVzJTIyOjE2OTkyNTc1MjgwNzMlN0Q=",
    // "__tea_cache_tokens_24": "{\"web_id\":\"7264853376029099575\",\"user_unique_id\":\"7264853376029099575\",\"timestamp\":1691480816057,\"_type_\":\"default\"}",
    // "__tea_cache_first_24": "1",
    // "SLARDARweb_login_sdk": "{\"userId\":\"b1ebcfa5-c954-4c3d-0c4b-b71b0dca1c0b\",\"deviceId\":\"0aa87c82-21cf-4fe3-abd3-a0f43e9ee908\"}",
    // "tt_scid": "7qcvHX1DEf6j4iHP-BeiGXMZkwNDgUnHgFkpMwAbAvrxV1W1pbrr3lcTipf4Rh.841ce",
    // "SLARDARpassport_account_api": "{\"userId\":\"d5b24c2d-6a23-80af-4e7d-9bff75c0aae8\",\"deviceId\":\"18787468-4acc-4089-b7c6-fa9a7e53a6ac\"}",
    // "aria": "{\"df8e29823e2f4c0822e3693ee653bfc5\":{\"runtime\":{\"appid\":\"df8e29823e2f4c0822e3693ee653bfc5\"},\"road\":\"https://lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/4.5.4/\"}}",
    // "_byted_param_sw": "dHYgv2WqxrQHwo64L40=",
    // "ttcid": "ff7a16bf208b4edcbab50a7010b3619130",
    // "__is_visited_home": "1"
};
var localStorage = {};
localStorage.__proto__ = Storage.prototype;
localStorage = env_vm.proxy(localStorage);
// for (let key in localStorage1) {
//     if (typeof localStorage1[key] === 'string') {
//         localStorage.setItem(key, localStorage1[key])
//     };
// }


var indexedDB = {};
indexedDB.__proto__ = Storage.prototype;
