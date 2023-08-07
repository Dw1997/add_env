window = this;
var Window = function Window() {
    // 容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(Window);

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
})

Window.prototype.__proto__ = WindowProperties.prototype;

window.__proto__ = Window.prototype;
/////////////////////////////////////////
window.setTimeout = function setTimeout(x, d) {
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    // 正确的 生成uuid并保存到内存
    return 0;
}; env_vm.safefunction(window.setTimeout)


Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;
window.open = function open() { debugger; }; env_vm.safefunction(window.open);
window.chrome = env_vm.proxy(class chrome { });
window.DeviceOrientationEvent = function DeviceOrientationEvent() { debugger }; env_vm.safefunction(window.DeviceOrientationEvent);
window.DeviceMotionEvent = function DeviceMotionEvent() { debugger }; env_vm.safefunction(window.DeviceMotionEvent);
/////////////////////////////////////////


Window = env_vm.proxy(Window);
window = env_vm.proxy(window);