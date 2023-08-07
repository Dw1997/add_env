var Document = function Document() {

};
env_vm.safefunction(Document);
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});


document = {};
document.__proto__ = Document.prototype;
////////////////////
document.getElementById = function getElementById(id) {
    debugger;
    // 用id匹配当前环境内存已有的
    return null;

}; env_vm.safefunction(document.getElementById);

document.createElement = function createElement(tagName) {
    var tagname = tagName.toLowercase() + "";
    if (env_vm.memory.htmlelements[tagname] == undefined) {
        debugger;
    }
    return env_vm.prototype(env_vm.memory.htmlelements[tagname]());
}; env_vm.safefunction(document.createElement);

////////////////////


document.env_vm.proxy(document);
