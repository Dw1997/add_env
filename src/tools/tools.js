function makecode(pr, fo, name_) {
    var code = "";
    switch (typeof (pr[fo])) {
        case "function":
            var temp = name_ + ".prototype." + fo;
            code = temp + "=" + "function " + fo + "(){debugger};env_vm.safefunction(" + temp + ");";
            break;
        case "object":
            var temp = name_ + ".prototype." + fo;
            code = temp + "=env_vm.proxy(class " + fo + "{});"
            break;
        default:
            code = name_ + ".prototype." + fo + "=" + pr[fo] + ";";
            break;

    }
    return code;

}

function getcode(pr, name_) {
    var code = "";
    for (var fo in pr.__proto__) {
        code += makecode(pr, fo, name_) + "\r\n";
    }
    console.log(code);
    return code;
}
